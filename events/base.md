# Entity (Resource)

 - `idEntity` (string) - Entity Identifier

# idEntity (string)

# Attribute (Resource)

 - `attribute`: `:namespace/attribute` (string) - Attribute identifier in the datomic style

# Value (Resource)

> Should use OneOf but the

## Properties

 - OneOf
   - `any`(object, array, enum) - Arbitrary data structures can be put into Value in which case the store is more of a document store.
   - `entity` (idEntity) - Relational data.
   - `primitive` (number,string,boolean) - Primitive type

# Context (Resource)

 - `timestamp_update`: `datetime`

# Resource (object)

## Properties

 - `id` (string) - Resource Id (Probably a URI)

# datetime

 -
