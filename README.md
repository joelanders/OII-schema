# Schema

The model should help describe the structure of all the measurements collected, it should also help propose evolution in partner data structures that will help broader interoperability. 

## Layers

  - Measurement Layer:
      + How are different types of measurement points described including:
          * Numerical - i.e. 
          * Categorical
          * Claims -> User claims have a vote button. Maybe good/bad/blocker.
      + The different was in which they are collected: See [measurement types](https://code.iilab.org/openintegrity/metrics/blob/master/0_metadata/measurements.md)

  - Metric Layer
      + How are metrics created out of measurements and other metrics.
          * Measurement Sources
          * Computations (How the metrics are calculated from measurements)
      + Metrics are Composable (at least as Monoids) but not necessarily Comparable across projects (i.e. they might be tied to specific project types).

  - Score (or Indicator) Layer
      + [Comparable]( "This doesn't necessarily mean numerical. Although EFF scorecard could be reduced to number of columns.") assembly of metrics. Which might be available for a subset of Projects.

![](sketch.png)

Groupings:
  - [Topics](https://code.iilab.org/openintegrity/framework/blob/master/topics.md) - The overall frame of the research question which in our case is what are security and privacy developer practices for specific tools that impact end users?
  - [Aspects](https://code.iilab.org/openintegrity/framework/blob/master/aspects.md) - A grouping of the skills or type of expertise related to the metric or measurement. It can be used to help assign relevant metrics to reviewers with the relevant skills.

## Related Specs

### Data Cube

Our Measurements would be equivalent to DataCube Observations.

 - https://www.w3.org/TR/vocab-data-cube/#outline

![](https://www.w3.org/TR/vocab-data-cube/images/qb-fig1.png)