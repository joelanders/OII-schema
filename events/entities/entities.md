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

# Instance

> Should inherit from (Entity)

Instance of the project for a particular OS, Audience

## Properties

 - `id` (idInstance) - Instance Identifier

# idInstance (string)

# Package

> Should inherit from (Entity)

[spdx:Package] A Package represents a collection of software files that are delivered as a single functional component.

## Properties

- `id` (idPackage) - Package Identifier

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
