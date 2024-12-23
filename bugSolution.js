function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
    //Alternatively, you could provide default values:
    // a = a || 0; // Assign 0 if a is null or undefined
    // b = b || ''; // Assign an empty string if b is null or undefined
  }
  // ... rest of the function
} 