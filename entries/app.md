# GET /
+ Response 200 (application/json)
    + Attributes (Signal)

# Data Structures

# Signal

- id (required) - unique identifier
- name (required) - app name
- license - license
- type (required) - app/os/hw/infra (XXX: should be fixed "app" in this doc?)
- source - URL to source repo
- tracker - URL to issue tracker
- manifest (object)
    - kind (required) - eg. gradle/gemfile/package.json (XXX: should be enum?)
    - `_meta` (Metadata)
- dependencies (array[Dependency], fixed)
- builds (array[Build], fixed)
- os (required)
- oses (array[OS], fixed)
- infra (array[Infra], fixed)

:[](../_meta/dependency.md)
:[](../_meta/build.md)
:[](../_meta/os.md)
:[](../_meta/infra.md)
:[](../_meta/metadata.md)
