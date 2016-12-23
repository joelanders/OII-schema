graph TB
  Project --- Instance
  Project --- Owner
  Instance --- Package
  Instance -- OneOf --- Configuration
  Instance --- License
  Configuration -- Is a set of many --- Specifications
  Specifications --- Features
  Package -- Static Dependency --- Package
  Package --- Issue
  Audit --- Issue
  Project --- TermsOfService
  Package --- Audit
  Document --- Pages
  Owner --- TransparencyReport
  Owner --- PrivacyPolicy
  Audit -.- Document
  License -.- Document
  Specifications -.- Document
  TransparencyReport -.- Document
  PrivacyPolicy -.- Document
  TermsOfService -.- Document
  style Document fill:#99f
