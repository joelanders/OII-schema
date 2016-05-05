We transcribe document schemas in a markdown-compatible shorthand called MSON which gets turned into JSON Schema.
The MSON goes in an API Blueprint Data Structures section as described [here](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md#def-data-structures).
`Drafter` is Apiary's tool for parsing API Blueprint files, and they include a python script in the repo to parse the JSON Schema from the output.
For example:
```
landers@tp2:~/OII/drafter$ ./bin/drafter -f json signal-android.md | ./tools/refract-filter.py -j

OK.
{
  "id": "app-1",
  "name": "Signal Android",
  "type": "source-repository",
  "vcs-url": "https://github.com/WhisperSystems/Signal-Android.git",
  "manifests": [
    "`manifest-type`: maven",
    "deps: lib1 lib2",
    "`manifest-type`: gradle",
    "deps: libx liby"
  ],
  "build-artifacts": [
    "name: `signal-android-phone`",
    "type: native"
  ],
  "os-families": "android",
  "os-versions": "android-kitkat",
  "infra-deps": [
    "internet-infra",
    "signal-backend-servers"
  ]
}
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "vcs-url": {
      "type": "string"
    },
    "manifests": {
      "type": "array"
    },
    "build-artifacts": {
      "type": "array"
    },
    "os-families": {
      "type": "string"
    },
    "os-versions": {
      "type": "string"
    },
    "infra-deps": {
      "type": "array"
    }
  },
  "required": [
    "id",
    "name",
    "type"
  ]
}
```

So that we can make use of this output, I've adjusted the aforementioned python script (source here: https://github.com/joelanders/drafter) so that we can pull out JSON *or* the JSON Schema.
The hercule -> drafter -> python-script pipeline is still a bit cumbersome to install, so our .gitlab-ci.yml file runs two scripts in the conext of a Docker container
(https://hub.docker.com/r/joeoi/mson-to-json-schema/): `mson-to-json-schema.sh` builds the JSON Schema and `commit-json-schema.sh` commits the results back onto the current branch.
