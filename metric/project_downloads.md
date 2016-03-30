# Downloads

> Keeping track of versions and downloads is a potentially large feature. What is the MVP approach to downloads?

 - Input download link + pattern for parsing version number.
 - Download binary.
 - Compute and verify checksum.

:[](/schema/measurement/meta/project/download)

The metric could be:

/:id/downloads
-> [ { URI , md5, version } ] 

/:id/downloads/:vers/url
-> URL

/:id/downloads/:vers/md5
-> md5