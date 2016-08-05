> Description of Open Integrity data from the top down with the aim of progressively transcluding and publishing for discussion and evolution.

# Project

>

- instances (array[Instance]) - Instance of the project for a particular OS, Audience

> e.g.
> - TOM Skype is an `Instance` of Skype (`Project`).
> - Signal Android is an `Instance` of Signal (`Project`).

## Instances

> [doap:Project]

- packages (array[Packages]) - related software files delivered as a single functional component [subclass of inverse of spdx:relationshipType_packageOf](relationshipType_packageOf)
- os
- infrastructure

- `release` (Version) - A project release.
- `repository` (Repository) - Source code repository.
- `platform` (string) - Indicator of software platform (non-OS specific), e.g. Java, Firefox, ECMA CLR
- `operating system` (string) - Système d'exploitation auquel est limité le projet. Omettez cette propriété si le projet n'est pas limité à un système d'exploitation.

## Package

> A `Package` represents a collection of software files that are delivered as a single functional component. A package can contain sub-packages, but the information in this class is a reference to the entire contents of the package listed.

- `archives` (array[File]) - [subclass of spdx:relationship]
- `binary` (array[File]) - [subclass of spdx:relationship]
- `code` (array[File]) - [subclass of spdx:relationship]
- `other` (array[File]) - [subclass of spdx:relationship]

## Version

> [doap:Version]

>


## Repository

>      doap:repository

> Source code repository

# Aggregate
> The result of the aggregation of multiple `Event`s.
