#!/bin/bash

set -eu

path-to-obj-name() {
    file=$(basename $1) # strips the path part
    name=${file%.*} # strips the extension
}

# takes an argument that's the object name like App or Signal
print_header() { cat <<-EOF
# GET /
+ Response 200 (application/json)
    + Attributes (dummy)

# Data Structures

# dummy
EOF
}

# we include all the header files in every document
print_footer() {
    for f in $( find _meta -name "*.md" ); do
        printf "\n:[]($f)\n"
    done
}

# input (filename) -> hercule -> drafter -> refract-filter -> output (stdout)
mson-to-json-schema() {
    ( print_header $(path-to-obj-name $1) && cat $1 && print_footer ) \
        | hercule \
        | drafter --format json \
        | refract-filter -j --content_type="application/schema+json";
}

for schema_file in `find entries -type f -name "*.md"`; do
    echo $schema_file
    mson-to-json-schema $schema_file > ${schema_file%.*}.json
done



