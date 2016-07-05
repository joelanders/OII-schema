FROM alpine:latest
MAINTAINER iilab <iilab.org>

RUN apk --update --no-progress add nodejs unrar bash git python alpine-sdk openssh

RUN npm install -g hercule ajv-cli

RUN wget "https://github.com/apiaryio/drafter/releases/download/v2.3.0/drafter-v2.3.0.tar.gz" && \
    tar -xzf drafter-v2.3.0.tar.gz && \
    cd drafter-v2.3.0 && \
    ./configure && make -j4 && chmod +x bin/drafter && cp bin/drafter /usr/local/bin/

RUN wget "https://raw.githubusercontent.com/joelanders/drafter/96a0615edbf96379a3034ff8da2397f94f58d917/tools/refract-filter.py" \
    -O /usr/local/bin/refract-filter && chmod +x /usr/local/bin/refract-filter

WORKDIR /root
