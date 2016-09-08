graph TB
  Project --- Instance
  Project --- Owner
  Instance --- Package
  Project -- TermsOfService --- Document
  Document --- Page
  Package --- Package
  Feature --- Specification
  Package -- OneOf --- Configuration
  Configuration -- Is a set of many --- Feature
  Owner -- TransparencyReport --- Document
  Owner -- PrivacyPolicy --- Document
  Instance --- IssueTracker
  Instance --- Repository
  Instance --- DistributionChannel
  Instance -- License --- Document
  Package --- Issue
  IssueTracker --- Issue
