# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahsolo/lotide`

**Require it:**

`const _ = require('@ahsolo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: takes an array and returns the first element of the array.
* `tail(arr)`: takes an array and returns a new array where the first element has been removed.
* `middle(arr)`: takes an array and returns the middle element of the array. If the array has an even number of elements, the two middle-most elements are returned.
* `eqArrays(arr1, arr2)`: takes two arrays and returns true if their length and contents are equal.
* `eqObjects(obj1, obj2)`: takes two objects and returns true if their keys and values are equal.
* `findKey(obj, callback)`: takes an object and a callback function. The callback function is called on each value of the object and the key associated with that particular value is returned.
* `findKeyByValue(obj, value)`: takes an object and a primitive value. If such a value exists, the key associated with it will be returned.
* `flatten`: takes an array and flattens it by one level (if the array elements contain an array, the sub-array will be replaced by the contents of the sub-array, with the length of the original array increased accordingly).
* `letterPositions`: takes a sentence (string) and returns the positions of each of the letters within the sentence
* `countLetters(str)`: takes an string and returns a count of each of the letters in the string.
* `countOnly(arr, itemsToCount)`: takes an array of strings and an object specifying what to count, returns a count of the specified items.
* `map(arr, callback)`: takes an array and a callback function and returns a transformed array created by applying the callback to each element of the original array.
* `takeUntil(arr, callback)`: takes an array and a callback function and returns a slice of the array with elements taken from the beginning and until the element where the callback function evaluates to a truty value.
* `without(arr, extractArr)`: takes an array and a second array of "extract" values and returns a new array with contents equal to the original array except with the extract values taken out.