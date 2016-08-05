# DocumentTermEvent

> DocumentTermEvent

## Properties

 - `entity`(idDocument,required) - Document Idenfier
 - `attribute`: project/term (string,fixed,required) - project/term
 - `value` (Term,required) - Term
 - `context` (Context,required) - Metadata

# Term (object)

 - `title`: You agree never to publish reputation-damaging opinions about Skype (string) - A human readable summary of a Term
 - `topic`: governance - a category in Tosdr.
 - `tosdr` (object)
   - `binding` (boolean) - Whether the term is binding or not
   - `case`: you may not express negative opinions about them (string)
   - `point` (enum)
     - bad
     - good
   - `score` (number)
