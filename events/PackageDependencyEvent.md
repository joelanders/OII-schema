# PackageDependencyEvent

> Should inherit from (Event)
>
> [Graph]: `Package.hasDependency` (Package)
>
> Not sure if this should be specialised to `Package`s or if it would make sense to reuse for `Project`s as well (e.g. Zom > ChatSecure > Conversations the latter not having PackageDependencies and only Project)

## Properties

 - `entity` (idPackage) - Package Identifier
 - `attribute` (hasDependency) - hasDependency
 - `value` (idPackage) - Dependent Package Identifier

## Sample

 - `entity`: `signal-android`
 - `attribute`:
   - `property`: Dependency
   - `type`: nodeCreated
 - `value`: `openssl`

## Sample

:[](samples/PackageDependencyEvent.md)

# hasDependency (object)

> Should inherit from (Graph)
> [spdx:relationshipType_packageOf]

## Properties

- `property`: Dependency (string, fixed) - Dependency
- `type` (enum)
  - nodeCreated (string)
  - nodeDeleted (string)


:[](events.md)
