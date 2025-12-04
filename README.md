# Car Inventory Module JavaScript Drill
---

## Project Overview

- This project recreates commonly used JavaScript array methods from scratch without using their built-in equivalents.
You will find custom implementations of:

- each

- map

- reduce

- find

- filter

- flatten 

Each method has a corresponding test file to verify its behavior.
---

## Key features implemented include:

- Iterates over a list of elements, yielding each in turn to the `cb` function,
- Produces a new array of values by mapping each value in list through a transformation function (iteratee),
- A reduce function combines all elements into a single value going from left to right.
- Look through each value in `elements` and pass each element to `cb`.
    - Return `undefined` if no elements pass the truth test.
- The scripts use only native JavaScript — no external libraries,
- All logic code is placed inside main-functions folder, and results are printed through test files.

---

## How to Run

- Run any test file from the project root:
    - Example:
        - node testEach.js
- Replace `testEach.js` with any other test script such as `testFilter.js`.

---

## Notes & Best Practices

- `.gitignore` prevents tracking of node_modules, build files, and OS-generated files.
