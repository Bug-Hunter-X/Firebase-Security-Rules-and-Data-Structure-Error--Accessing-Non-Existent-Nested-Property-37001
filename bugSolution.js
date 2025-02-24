The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to gracefully handle cases where the nested property doesn't exist.

```javascript
db.collection('users').doc(userId).get().then(doc => {
  const nestedValue = doc.data()?.profile?.address?.street ?? 'N/A'; //Corrected code
  console.log(nestedValue); //Will log 'N/A' if the path is missing
});
```

This code first checks if `doc.data()` exists, then `profile`, then `address`, and finally `street`. If any part of this chain is null or undefined, the expression short-circuits and returns `undefined`. The `?? 'N/A'` ensures that if the nested value is not found, a default value ('N/A' in this case) is assigned, preventing errors and providing a more predictable result.