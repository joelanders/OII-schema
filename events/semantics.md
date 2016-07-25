# Property

 - `property` (string) - Name of property on aggregate. e.g. if the value is `TermsOfService` and the `entity` is `Project`, then there is a `Project.TermsOfService` property.
 - `type` : hasProperty (string, fixed)

# Graph

> Should inherit from (Property)

## Properties

 - `property` (string) - Name of graph property
 - `type` (enum, fixed)
   - nodeCreated (string)
   - nodeDeleted (string)

# Relation

> Should inherit from (List)

## Properties

 - `property` (string) - Name of relation property.
 - `type` : hasRelation (string, fixed)

# List

> Should inherit from (Property)

## Properties

 - `type` (enum, fixed)
   - itemCreated (string)
   - itemDeleted (string)
