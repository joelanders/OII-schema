# DocumentClaimEvent

> DocumentClaimEvent

## Properties

 - `entity`(idDocument,required) - Document Idenfier
 - `attribute`: project/term (string,fixed,required) - project/term
 - `value` (DocumentClaim,required) - Term
 - `context` (Context,required) - Metadata

# DocumentClaim (Claim)

 - `claim`: You agree never to publish reputation-damaging opinions about Skype (string) - A human readable summary of a Term/Claim
 - `tosdr` (object)
   - `topic`: governance - a category in Tosdr.
   - `binding` (boolean) - Whether the term is binding or not
   - `case`: you may not express negative opinions about them (string)
   - `point` (enum)
     - bad
     - good
   - `score` (number)
 - `type` (enum)
   - `privacy_policy`
   - `terms_of_service`

# Claim (object)

- `claim` (string,required) - Claim being made.
- `assert` (boolean,required) - Assertion (true) or Rejection (false)
- `evidence` (Evidence)
