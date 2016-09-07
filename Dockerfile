FROM alpine:latest
MAINTAINER iilab <iilab.org>

RUN apk --update --no-progress add nodejs unrar bash git python alpine-sdk openssh

RUN npm install -g hercule ajv-cli

RUN wget "https://github.com/apiaryio/drafter/releases/download/v3.1.1/drafter-v3.1.1.tar.gz" && \
    tar -xzf drafter-v3.1.1.tar.gz && \
    cd drafter-v3.1.1 && \
    ./configure && make -j4 drafter && sudo make install

RUN wget "https://raw.githubusercontent.com/joelanders/drafter/96a0615edbf96379a3034ff8da2397f94f58d917/tools/refract-filter.py" \
    -O /usr/local/bin/refract-filter && chmod +x /usr/local/bin/refract-filter

WORKDIR /root
