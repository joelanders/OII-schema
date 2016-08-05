# ProjectTermsOfServiceEvent

> Should inherit from (Event)

> [Property]: `Project.hasTermsOfService` (Page)

## Properties

 - `entity` (idProject) - Project Identifier
 - `attribute` (project/termsofservice) - has Terms of Service
 - `value` (idPage) - Page URL

## Sample

:[](samples/ProjectTermsOfServiceEvent.md)

# hasTermsOfService (object)

> Should inherit from (Property)

## Properties

- `property`: TermsOfService (string, fixed) - Name of property.
- `type` (enum):
  - propertyCreated (string, fixed)
  - propertyUpdated (string, fixed)
  - propertyRemoved (string, fixed)


:[](events.md)
