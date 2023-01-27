# YASet
Yet Another Set implementation which is meant to be different from other implementation that may have been seen out there.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
This project was created as part of a series of projects implemented the usual data structures. The intention is that the object implements a mathematical Set including the usual Set operations of element of, intersection, union, set difference, and may be others.

## Technologies Used
I'm only using plain, vanilla JavaScript with no libraries or other packages.

## Features
* Check whether an element is contained in the object.
* Get a listing of the values of the object.
* Add or remove elements from the object.
* Get the size of the object

## Setup
Just import the YASet object into your project.

## Usage
Instantiate the object.
```
let thisSet = new YASet();
```
Add some elements to the object. Only unique elements will be sucessfully added to the object.
```
thisSet.add('turtle');
thisSet.add(1);
thisSet.add(1);
thisSet.add('turtle');
```
Check whether an element is contained in the object.
```
thisSet.has('turtle');    // Should return true, since 'turtle' was added above.
```
Get a listing of the elements contained in the object.
```
thisSet.values();
```
Get the number of elements contained in the object.
```
thisSet.size();
```
Remove an element from the object.
```
thisSet.remove('turtle');
```
This last expression will leave us with the object [1].

## Project Status
This project is still in progress until the usual Set operations are implemented and will be until that code is implemented. 

## Room for Improvement
The only significant area where the code could be improved is the remove() function. While JavaScript does implement garbage collection on its own, being used to C and assembly, just pointing the reference from one object to another object seems to be a bad practice. So, a better look into that concerns needs to be had.

## Contact
Feel free to contact me @micrjamesjr on twitter or on github @micrjames
