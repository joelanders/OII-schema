#!/bin/bash

set -euv

HERCULE=/usr/bin/hercule
DRAFTER=/usr/local/bin/drafter
REFRACT_FILTER=/usr/local/bin/refract-filter

# input (filename) -> hercule -> drafter -> refract-filter -> output (stdout)
mson-to-json-schema() {
    $HERCULE $1 \
        | $DRAFTER --format json \
        | $REFRACT_FILTER -j --content_type="application/schema+json";
}

for schema_file in `find entries -type f -name "*.md"`; do
    echo $schema_file
    mson-to-json-schema $schema_file > ${schema_file%.*}.json
done

find entries
