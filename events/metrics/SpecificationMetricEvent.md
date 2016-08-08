# SpecificationMetricEvent
> [DOAP]

A specification that a project implements.
Could be a standard, API or legally defined level of conformance.

## Properties

  - `entity` (idSpecification,required) - Specification Idenfier
  - `attribute`: specification/metric (string,fixed,required)
  - `value` (SpecificationClaim,required) - Specification
  - `context` (Context,required) - Metadata

# SpecificationMetric (Metric)

  - standard (object)
  - protocol (object)
    - `messaging`
      - `features` (Messaging)
      - `encryption` (MessagingEncryption)
  - algorithm (object)
    - `data`
      - `data_encryption` (MessagingEncryption)

# Messaging (enum)

  - asynchronous
  - multi device

# MessagingEncryption (enum)

  - forward secret
  - end to end
  - authenticated
