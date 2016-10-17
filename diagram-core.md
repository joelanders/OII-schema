graph TB
  Project --- Project
  Project --- Instance
  Project --- Owner
  Instance --- Package
  Project -- TermsOfService / Documentation --- Document
  Package --- Package
  Document --- Pages
  Owner -- TransparencyReport --- Document
  Owner -- PrivacyPolicy --- Document
  Instance -- OneOf --- Configuration
  Configuration -- Is a set of many --- Specifications
  Specifications --- Features
  Instance -- License --- Document
