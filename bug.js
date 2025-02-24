The following code snippet demonstrates an uncommon Firebase error related to security rules and data structure.  It attempts to access a nested property within a document that doesn't exist, leading to unexpected behavior or silent failures. 

```javascript
db.collection('users').doc(userId).get().then(doc => {
  const nestedValue = doc.data().profile.address.street; // Potential error here
  console.log(nestedValue);
});
```