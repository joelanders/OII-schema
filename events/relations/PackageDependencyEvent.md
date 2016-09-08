# PackageDependencyEvent

> Should inherit from (Event)
>
> [Graph]: `Package.hasDependency` (Package)
>
> Not sure if this should be specialised to `Package`s or if it would make sense to reuse for `Project`s as well (e.g. Zom > ChatSecure > Conversations the latter not having PackageDependencies and only Project)

## Properties

 - `entity` (idPackage) - Package Identifier
 - `attribute` (enum,required)
   - dependency/static - static dependency
   - dependency/dynamic - dynamic dependency
   - dependency/system - system dependency (i.e. MySQL,...)
   - dependency/os - OS dependency (Should be between Application packages and OS packages)
   - dependency/hardware - Hardware dependency (should be between OS packages and Hardware packages)
   - dependency/infra - Infrastructure dependency (should be between Hardware packages and Infra packages)
 - `value` (idPackage) - Dependent Package Identifier

## Sample

 - `entity`: `signal-android`
 - `attribute`:
 - `value`: `openssl`
 - `context`:
   - `t`
 - `added`: true

## Sample

:[](samples/PackageDependencyEvent.md)

# hasDependency (object)

> Should inherit from (Graph)
> [spdx:relationshipType_packageOf]

## Properties

- `property`: Dependency (string, fixed) - Dependency
- `type` (array)
  - nodeCreated (string)
  - nodeDeleted (string)


:[](events.md)
