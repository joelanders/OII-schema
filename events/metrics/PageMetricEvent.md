# PageMetricEvent

## Properties

 - `entity` (idPage,required) - Page URL
 - `attribute`: page/metric (string,fixed,required)
 - `value` (Content,required) - Page Content (in Markdown)
 - `context` (PageContext,required) - Metadata

# Content (object)

- `content` (string) - Content of the page
- `header` (Header) - Header of page
- `sha256_md` (string) - Checksum of markdown
- `sha256_html` (string) - Checksum of HTML

# Header (object)

- `etag` (string) - etag value of page
- `last_modified` (string) - last_modified value of page

# PageContext (Context)

- `entity` (string) - The page id. i.e. `skype-privacypolicy-en-http-...`
- `parent_entity`: `microsoft` (string)
