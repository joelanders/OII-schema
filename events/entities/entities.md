# Project

> Should inherit from Entity but inheritance seems broken https://github.com/apiaryio/drafter/issues/366

A top level placeholder for a number of software projects that accomplish similar functions and are owned by the same person/organisation.

## Properties

 - `id` (idProject) - Project Identifier
 - `instances` (Instance) - Instance

# idProject (enum)

 - signal
 - telegram
 - conversations
 - chat-secure
 - android-messenger
 - whatsapp
 - wechat

# Owner

## Properties

- `id` (idOwner) - Owner Identifier

# idOwner (string)


# Instance

> Should inherit from (Entity)

Instance of the project for a particular OS, Audience

## Properties

 - `id` (idInstance) - Instance Identifier

## Sample

 - `id`:`signal-android`

# idInstance (string)

# Package

> Should inherit from (Entity)

[spdx:Package] A Package represents a collection of software files that are delivered as a single functional component.

## Properties

- `id` (idPackage) - Package Identifier

## Sample

 - `id`: `signal-android-3.9.0`

## Sample

 - `id`: `signal-ios-3.2.0`

# idPackage (string)

# Repository

> Should inherit from (Entity)

## Properties

- `id` (idRepository) - Repository URI

# idRepository (string)

> Should inherit from (Resource)

# Page (Entity)

A collected web page.

# idPage (string)

# Document (Entity)

A Document helps refer to the meaning of a particular legal or policy document.

## Properties

 - `id` (idDocument) - Document identifier

# idDocument (string)

# Specification (object)

A specification that a project implements. Could be a standard, API or legally defined level of conformance.

## Properties

- `id` (idSpecification) - Specification identifier (like `axolotl`, or `OpenPGP`)

# idSpecification (string)

# IssueTracker (object)

## Properties

- `id` (idIssueTracker) - Issue Tracker URL

# idDistributionChannel (string)

# DistributionChannel (object)

## Properties

- `id` (idDistributionChannel) - Distribution identifier (like `apple-store`, or `google-playstore`)

# idDistributionChannel (string)
