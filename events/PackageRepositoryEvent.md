# PackageRepositoryEvent

> Should inherit from (Event)
>
> [Relation]: `Package.hasRepository` (Repository)
>
> Should we allow multiple repos? Should we keep this as the main repo and allow repos to have a `hasMirror` dependency? Does this covers most cases?

## Properties

 - `entity` (idPackage) - Package Identifier
 - `attribute` (hasRepository) - hasRepository
 - `value` (idRepository) - Dependent Package Identifier

## Sample

:[](samples/PackageRepositoryEvent.md)

# hasRepository (object)

> Should inherit from (Property)

## Properties

- `property`: Repository (string, fixed) - Repository
- `type` (enum):
  - propertyCreated (string, fixed)
  - propertyUpdated (string, fixed)
  - propertyRemoved (string, fixed)

:[](events.md)
