# Thoughts

## Emerging Aggregate Wiki Style

Maybe events should be allowed to be submitted as long as they validate. This might mean that new Properties could be added to Aggregates dynamically depending on what potentially new agents submit. There could then be a type of post-hoc moderation where the new property would appear on a `wiki` view but would only appear in the `reviewed` view if their context is included.

This would mean that the aggregate schemas are in fact contructed dynamically from the event schemas, or even the event themselves (since there will be generalised event schemas that can be used). A progressive enrichment of the data would consist of specialising the schema of these new events (which can be part of the open consultation process) and then marking their context as `reviewed`.

## Narrative exercising the Model

A project's dependency (openssl for signal Android) can live in Open Integrity without being seen as a Project. There might be feedback on the client to help "promote" this `Package` to a `Project`. It would for instance mean adding an Owner.
   - i.e. adding an event in the `meta` store which would contain something like: `{ entity: openssl, attribute: owner, value: "OpenSSL Software Foundation", context: { origin: package, ...context } }`?
> We could have the entity be `package/openssl` but it feels that we're coupling too much. Adding this as a quad feels more representative of what really happened (a user saw a package and added an owner to it) and we can choose to interpret that event as we like later.
   - an intermediary singleton `Implementation` aggregate could be created as a Projection.


## Metrics Cataloguing

Streams of claims and measurements are reduced and presented in a structured fashion within a Project page/aggregate.

What is the language that described which claims are displayed under particular projects.
  - Project type defines relevant claims.
  - Claim lifecycle (proposal, experimental, testing, production)
  -

What's the relationship between an event schema and a metric?
  - Is every data point on the Project page a metric. Probably yes.
    - Load aggregate displays only shallow metadata
    - Click on a field, fetches the schema for this data point.


## Higher Order Modeling

It seems that what I'm trying to do is to compose the event models into the aggregate model in the way that algebraic data types are built from primitive types.

In that sense the event models are components that have:
 - an api endpoint.
 - a validation schema
 - a schema that generates the UI
 - an aggregate that is a composition of the underlying event models.


## Layers

 - Measurement Layer:
     + How are different types of measurement points described including:
         * Numerical - i.e.
         * Categorical
         * Claims -> User claims have a vote button. Maybe good/bad/blocker.
     + Different ways in which they are collected matters too: See [measurement types](https://code.iilab.org/openintegrity/metrics/blob/master/0_metadata/measurements.md)

 - Metric Layer
     + How are metrics created out of measurements and other metrics.
         * Measurement Sources
         * Computations (How the metrics are calculated from measurements)
     + Metrics are Composable (at least as Monoids) but not necessarily Comparable across projects (i.e. they might be tied to specific project types).

 - Score (or Indicator) Layer
     + [Comparable](# "This doesn't necessarily mean numerical. Although EFF scorecard could be reduced to number of columns.") assembly of metrics. Which might be available for a subset of Projects.

![](../images/sketch.png)

Groupings:
 - [Topics](https://code.iilab.org/openintegrity/framework/blob/master/topics.md) - The overall frame of the research question which in our case is what are security and privacy developer practices for specific tools that impact end users?
 - [Aspects](https://code.iilab.org/openintegrity/framework/blob/master/aspects.md) - A grouping of the skills or type of expertise related to the metric or measurement. It can be used to help assign relevant metrics to reviewers with the relevant skills.

## Related Specs

### Data Cube

Our Measurements would be equivalent to DataCube Observations.

- https://www.w3.org/TR/vocab-data-cube/#outline

![](https://www.w3.org/TR/vocab-data-cube/images/qb-fig1.png)

## Meta Modeling Activism!

Data modeling is an exercise of power. When it's made by experts and proposed as constrained choices for users the power relationship abides and promotes asymetries. The model can be inflicted on others and limit their agency or their awareness.

If Data modeling is part of an ongoing debate, allowing anyone to enrich then it can represent a more inclusive and diverse set of world views and help translate between these world views.

In order to make this process manageable various types of validators could be used from
 - simple syntactic ones,
 - to others than help give feedback on the magnitude of the changes that some changes would require,
 - or maybe others that help map vocabulary or sophisticated gradation in choices to existing cultural patterns.
