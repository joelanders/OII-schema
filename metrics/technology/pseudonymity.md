# Identity requirement measurement (Measurement)

The possibility to let the user control the disclosure of their identity.

Samples below reflect that:
 - Many Jabber servers don't require an email to create an account
 - Reddit account creation has email as an optional field

    NOTE: One Of isn't represented in the Form.

    This should probably have a frontmatter with
      practices:
         - design#14
         - technology#1

## Sample

- Identity requirement (Measurement)
  - category: Pseudonymity (Category)
  - project: Jabber (Project)
  - identity: Account no email (Identity requirement)
  - evidence (Evidence)
     - url: https://www.jabber.de/register/
     - comment: Email is not required.
  - metadata (Metadata)
     - author: Leif
     - datetime: 20160627

## Sample

- Identity requirement (Measurement)
  - category: Pseudonymity (Category)
  - project: Reddit (Project)
  - identity: Account no email (Identity requirement)
  - evidence (Evidence)
    - url: https://reddit.com
    - comment: Try to signup without entering an email address and it works
  - metadata (Metadata)
     - author: Leif

## Properties

- identity (Identity requirement) - Identity Requirement

# Identity requirement (enum)
- no identity - No sign up required
- no email - New account without an email (like many jabber server and reddit does)
- email - New account with email
- email from provider - New account with email from specific provider
- phone number - New account with phone number
- facebook - New account with Facebook
- twitter - New account with Twitter
- google - New account with Google
- legal id - New account with legal id

# Measurement
- category (Category) - Category
- project (string) - Project identifier
- evidence (Evidence) - Evidence
- One Of
   - evidence (Evidence)
   - evidencemedium (Evidence Medium)
   - evidencestrong (Evidence Strong)
- metadata (Metadata) - Metadata

# Category (enum)
- Pseudonymity

# Project
- name (string)

# Evidence
- url (string) - URL
- comment (string) - Comment

# Evidence Medium
- url (string)
- comment (string)
- screenshot (Attachment)

# Evidence Strong
- url (string)
- url_2 (string)
- url_3 (string)
- comment (string)
- digital (Attachment) - Screenshot or capture.

# Evidence Very Strong
- url (string)
- url_2 (string)
- url_3 (string)
- comment (string)
- cryptographically_verified_evidence (Attachment) - Somehow verified or provable digital evidence.

# Attachment
- URI (string)

# Metadata

- author (string)
- datetime (string)
