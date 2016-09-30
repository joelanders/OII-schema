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
  Instance -- OneOf --- Configuration
  Instance -- Is a set of many --- Feature
  Instance --- IssueTracker
  Instance --- Repository
  Instance --- DistributionChannel
  Instance -- License --- Document
  Package --- Issue
  IssueTracker --- Issue
