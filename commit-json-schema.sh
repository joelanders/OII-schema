#!/bin/bash
set -euv
find entries

cd $CI_PROJECT_DIR
# bail out if this script made last commit
author=$(git log -1 |grep "^Author: ")
if [[ $author =~ "mson" ]]; then
    exit 0
fi

SSH_KEYFILE="$CI_PROJECT_DIR/.ssh_key"
SSH_WRAPPER="$CI_PROJECT_DIR/.ssh_wrapper"

echo "$joeGHtest" > $SSH_KEYFILE
chmod 0600 $SSH_KEYFILE

# maddening. GIT_SSH_COMMAND only in 2.3.0
cat > $SSH_WRAPPER<<EOF
#!/bin/bash
ssh -i $SSH_KEYFILE \$@
EOF
chmod +x $SSH_WRAPPER

export GIT_SSH=$SSH_WRAPPER

git config --global user.email mson-bot
git config --global user.name mson-bot

git remote add github git@github.com:joelanders/OII-schema.git || true
mkdir ~/.ssh || true
ssh-keyscan -H github.com >> ~/.ssh/known_hosts
git fetch github
#git reset github/gh-pages
#touch .nojekyll
git add entries/*.json
git commit -m "building JSON from MSON" --allow-empty
git push github HEAD:master --force
