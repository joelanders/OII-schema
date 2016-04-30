# Schema

The model should help describe the structure of all the measurements collected, it should also help propose evolution in partner data structures that will help broader interoperability. 

## Layers

  - Measurement Layer:
      + How are different types of measurement points described including:
          * Numerical
          * Categorical
          * Claims -> User claims have a vote button. Maybe good/bad/blocker.

  - Metric Layer
      + How are metrics created out of measurements and other metrics.
          * Measurement Sources
          * Computations
  - Score Layer
      + [Comparable]( "This doesn't necessarily mean numerical. Although EFF scorecard could be reduced to number of columns.") assembly of metrics.

Groupings:
  - Topics
  - Aspects
      + Metrics
  - Scores

| Topics \ Aspects | Technical | Experience | Developer |
|------------------|-----------|------------|-----------|
| Security         |           |            |           |
| Privacy          |           |            |           |


## Related Specs

### Data Cube

 - https://www.w3.org/TR/vocab-data-cube/#outline

![](https://www.w3.org/TR/vocab-data-cube/images/qb-fig1.png)