# Thoughts

## Emerging Aggregate Wiki Style

Maybe events should be allowed to be submitted as long as they validate. This might mean that new Properties could be added to Aggregates dynamically depending on what potentially new agents submit. There could then be a type of post-hoc moderation where the new property would appear on a `wiki` view but would only appear in the `reviewed` view if their context is included.

This would mean that the aggregate schemas are in fact contructed dynamically from the event schemas, or even the event themselves (since there will be generalised event schemas that can be used). A progressive enrichment of the data would consist of specialising the schema of these new events (which can be part of the open consultation process) and then marking their context as `reviewed`.

## Narrative exercising the Model

A project's dependency (openssl for signal Android) can live in Open Integrity without being seen as a Project. There might be feedback on the client to help "promote" this `Package` to a `Project`. It would for instance mean adding an Owner.
   - i.e. adding an event in the `meta` store which would contain something like: `{ entity: openssl, attribute: owner, value: "OpenSSL Software Foundation", context: { origin: package, ...context } }`?
> We could have the entity be `package/openssl` but it feels that we're coupling too much. Adding this as a quad feels more representative of what really happened (a user saw a package and added an owner to it) and we can choose to interpret that event as we like later.
   - an intermediary singleton `Implementation` aggregate could be created as a Projection.

## Higher Order Modeling

It seems that what I'm trying to do is to compose the event models into the aggregate model in the way that algebraic data types are built from primitive types.

In that sense the event models are components that have:
 - an api endpoint.
 - a validation schema
 - a schema that generates the UI
 - an aggregate that is a composition of the underlying event models.



## Meta Modeling Activism!

Data modeling is an exercise of power. When it's made by experts and proposed as constrained choices for users the power relationship abides and promotes asymetries. The model can be inflicted on others and limit their agency or their consciousness.

If Data modeling is part of an ongoing debate, allowing anyone to enrich

In order to make this process manageable various types of validators could be used from
 - simple syntactic ones,
 - to others than help give feedback on the magnitude of the changes that some changes would require,
 - or maybe others that help map vocabulary or sophisticated gradation in choices to existing cultural patterns.
