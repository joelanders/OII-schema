# RepositoryMetricEvent

A repository

## Properties

  - `entity` (idRepository,required) - Repository URL
  - `attribute`: repository/metric (string,fixed,required)   - `value` (SpecificationClaim,required) - Specification
  - `context` (Context,required) - Metadata

# RepositoryMetric (Metric)

  - type (enum)
    - git
    - svn
    - cvs
    - darcs
    - mercurial
    - other
  - `public` (boolean)
  - `active_repository_contributors_last_quarter` (integer)

# Messaging (enum)

  - asynchronous
  - multi device

# MessagingEncryption (enum)

  - forward secret
  - end to end
  - authenticated
