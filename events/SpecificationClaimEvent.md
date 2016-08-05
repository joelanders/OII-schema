# SpecificationClaimEvent
> [DOAP]

A specification that a project implements.
Could be a standard, API or legally defined level of conformance.

## Properties

  - `entity` (idSpecification,required) - Specification Idenfier
  - `attribute`: specification/claim (string,fixed,required) - specification/claim
  - `value` (SpecificationClaim,required) - Specification
  - `context` (Context,required) - Metadata

# SpecificationClaim (Claim)

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

# Claim (object)

  - `claim` (string,required) - Claim being made.
  - `assert` (boolean,required) - Assertion (true) or Rejection (false)
  - `evidence` (Evidence)
