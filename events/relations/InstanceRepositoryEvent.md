# InstanceRepositoryEvent

> Should inherit from (Event)
>
> [Relation]: `Package.hasRepository` (Repository)
>
> Should we allow multiple repos? Should we keep this as the main repo and allow repos to have a `hasMirror` dependency? Does this covers most cases?

## Properties

 - `entity` (idInstance) - Instance Identifier
 - `attribute`: instance/repository (string,fixed,required)
 - `value` (idRepository) - Repository URL
 - `context` (Context,required) - Metadata

## Sample

:[](samples/PackageRepositoryEvent.md)
