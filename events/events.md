# Events

> This aims to define the events schemas for the top level elements of Open Integrity. While the Aggregate's schema might evolve regularly, the aim is that the Events schema stays very stable with new versions of schemas being added while older versions might remain.

> This means that top level events are:
> - **granular**, measurement events can be less granular and more coupled with the agents' specificities
> - **precise**, events have precise semantics, and aggregates can always merge several related attributes if needed (but it would be harder to introduce more distinctions after the fact).
> -

Specialise the schema from the more general `Event` / `Attribute` / `Value`.

## Event
 - `entity` (Entity, required) - Entity
 - `attribute` (Attribute, required) - Attribute
 - `value` (Value, required) - Value
 - `context` (Context, required) - Context

:[](eavc.md)

:[](semantics.md)

:[](../entities/entities.md)
