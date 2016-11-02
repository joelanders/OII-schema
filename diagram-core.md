graph TB
  Project --- Project
  Project --- Instance
  Project --- Owner
  Instance -- OneOf --- Configuration
  Configuration -- Is a set of many --- Specifications
  Specifications --- Features
  Instance --- Package
  Instance -- License --- Document
  Package --- Package
  Package --- Issue
  Document --- Issue
  Project -- TermsOfService / Documentation --- Document
  Package -- Audit --- Document
  Document --- Pages
  Owner -- TransparencyReport --- Document
  Owner -- PrivacyPolicy --- Document
