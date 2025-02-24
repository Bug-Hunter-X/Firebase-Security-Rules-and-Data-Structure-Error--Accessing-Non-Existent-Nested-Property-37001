# Firebase Security Rules and Data Structure Error

This repository demonstrates an uncommon error in Firebase related to security rules and data structure. The error occurs when attempting to access a nested property within a document that does not exist, resulting in unexpected behavior or silent failures. This can be especially tricky to debug because Firebase doesn't always throw explicit errors in these situations.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version that handles potential missing data gracefully.

## How to Reproduce

1.  Set up a Firebase project.
2.  Create a Firestore collection named `users`.
3.  Add a document to the `users` collection, but ensure the `profile.address.street` path is either missing or null.
4.  Run `bug.js`. You might not see an error, but the `nestedValue` will likely be undefined.

## Solution

The `bugSolution.js` file shows the solution, which involves using optional chaining and nullish coalescing to handle the situation where the nested property is missing.