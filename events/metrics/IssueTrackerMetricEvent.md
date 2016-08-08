# IssueTrackerMetricEvent


## Properties

  - `entity` (idRepository,required) - Repository URL
  - `attribute`: repository/metric (string,fixed,required)   - `value` (SpecificationClaim,required) - Specification
  - `context` (Context,required) - Metadata

# IssueTrackerMetric (Metric)

  - type (enum)
    - github
    - gitlab
    - trac
    - redmine
    - jira
    - other
  - `url` (string)
