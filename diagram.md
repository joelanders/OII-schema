graph TB
  Project --- Project
  Project --- Instance
  Project --- Owner
  Project --- Commitments
  Instance --- Package
  Project -- TermsOfService / Documentation --- Document
  Package --- Package
  Document --- Pages
  Document --- Commitments
  Owner -- TransparencyReport --- Document
  Owner -- PrivacyPolicy --- Document
  Owner --- Commitments
  Instance -- OneOf --- Configuration
  Configuration -- Is a set of many --- Specifications
  Specifications --- Features
  Instance --- IssueTracker
  Instance --- Repository
  Instance --- DistributionChannel
  Instance -- License --- Document
  Instance --- Issue
  IssueTracker --- Issue
