# YASet
Yet Another Set implementation which is meant to be different from other implementations that may have been seen out there.

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
I'm only using plain, vanilla JavaScript with no libraries or other packages, but rewritten to use Typescript class structure.

## Features
* Check whether an element is contained in the object.
* Get a listing of the elements of the object.
* Add or remove elements from the object.
* Get the size of the object
* Clear all the elements from the object.

## Setup
Just import the YASet class into your project. Also required is the Collection class. The YASet class inherits from the Collection class, since A set is a type of a collection.

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
thisSet.get();
```
Get the number of elements contained in the object.
```
thisSet.size();
```
Remove an element from the object.
```
thisSet.delete('turtle');
```
This last expression will leave us with the object [1].

Clear all the elements from the object.
```
thisSet.clear();
```

## Project Status
This project is still in progress until the usual Set operations are implemented and will be until that code is implemented. 

## Room for Improvement
The best way to improve this class would be to add functionality to make it more like a mathematical set.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
