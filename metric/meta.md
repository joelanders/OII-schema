# Meta

## Project



### Project name

 - String

### Project owner

 - { URI , OwnerType := company | group | individual }

### Project website

Type
 - [ { URI, Country, Language } ]

### Project code repositories

 - [ { URI, [ Platforms ] }]

### Project download / entry

 - [ { URI, [ Platforms ], EntryType := Download | DownloadPage | APIEntryPoint } ]

 - Project download link / service end-point
 - Project issue tracker
 - Project current release version
     + 

### Project Dependencies

> This might require a graph data structure. This is important but can have significant [scale sensitivity](../architecture/scale.md) consequences. In the big picture dependencies need to be typed (code, runtime, remote, os, device, protocols,...). Code is a low hanging fruit for open source. OS, Device can be simple properties for now. 

## Platforms

> Do we need all compilation targets?? For now start with top level platforms, go more detailed when needed.

 - Windows
 - OSX
 - Linux
 - Android
 - iOS

## 


