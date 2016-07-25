# PageContentEvent

> Should inherit from (Event)

## Properties

 - `entity` (idPage) - Page URL
 - `attribute` (hasPageContent) - has Page Content
 - `value` (Content) - Page Content (in Markdown)
 - `context` (Context) - Metadata

## Sample

:[](samples/PageContentEvent.md)

# hasPageContent (object)

> Should inherit from (Property)

## Properties

- `property`: PageContent (string, fixed) - Name of property.
- `type` : propertyCreated (string, fixed) - Type of property

# Content (object)

- `hash` (string) - Checksum of the page
- `content` (string) - Content of the page

:[](events.md)
