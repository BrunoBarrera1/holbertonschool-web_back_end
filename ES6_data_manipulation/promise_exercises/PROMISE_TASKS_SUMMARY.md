# ES6 Promise Tasks - Complete Implementation

## ✅ All Promise Tasks Completed Successfully

### **Task 0** - `0-promise.js`
- **Function**: `getResponseFromAPI()`
- **Purpose**: Returns a basic Promise
- **Output**: `true` (confirms it's a Promise instance)

### **Task 1** - `1-promise.js`
- **Function**: `getFullResponseFromAPI(success)`
- **Purpose**: Returns a Promise that resolves or rejects based on boolean parameter
- **Success**: Resolves with `{status: 200, body: 'Success'}`
- **Failure**: Rejects with error "The fake API is not working currently"

### **Task 2** - `2-then.js`
- **Function**: `handleResponseFromAPI(promise)`
- **Purpose**: Attaches `.then()`, `.catch()`, and `.finally()` handlers
- **Resolution**: Returns `{status: 200, body: 'success'}`
- **Rejection**: Returns empty Error object
- **Always**: Logs "Got a response from the API"

### **Task 3** - `3-all.js`
- **Function**: `handleProfileSignup()`
- **Purpose**: Uses `Promise.all()` to handle multiple promises
- **Success**: Logs "photo-profile-1 Guillaume Salva"
- **Failure**: Logs "Signup system offline"
- **Uses**: `uploadPhoto()` and `createUser()` from utils.js

### **Task 4** - `4-user-promise.js`
- **Function**: `signUpUser(firstName, lastName)`
- **Purpose**: Returns a resolved Promise with user data
- **Output**: `{firstName: value, lastName: value}`

### **Task 5** - `5-photo-reject.js`
- **Function**: `uploadPhoto(filename)`
- **Purpose**: Returns a rejected Promise
- **Error**: "${filename} cannot be processed"

### **Task 6** - `6-final-user.js`
- **Function**: `handleProfileSignup(firstName, lastName, fileName)`
- **Purpose**: Uses `Promise.allSettled()` to handle multiple promises
- **Returns**: Array with status and value/error for each promise
- **Format**: `[{status: 'fulfilled/rejected', value: result/error}, ...]`

### **Task 7** - `7-load_balancer.js`
- **Function**: `loadBalancer(chinaDownload, USDownload)`
- **Purpose**: Uses `Promise.race()` to return the fastest promise
- **Returns**: Value from whichever promise resolves first

### **Task 8** - `8-try.js`
- **Function**: `divideFunction(numerator, denominator)`
- **Purpose**: Demonstrates error throwing
- **Logic**: Throws "cannot divide by 0" if denominator is 0
- **Success**: Returns numerator/denominator

### **Task 9** - `9-try.js`
- **Function**: `guardrail(mathFunction)`
- **Purpose**: Implements try/catch/finally pattern
- **Returns**: Array with result/error and "Guardrail was processed"
- **Success**: `[result, 'Guardrail was processed']`
- **Error**: `['Error: message', 'Guardrail was processed']`

## 🎯 Promise Concepts Covered

### **Core Promise Methods**:
- `new Promise(executor)` - Creating promises
- `Promise.resolve()` - Creating resolved promises
- `Promise.reject()` - Creating rejected promises
- `Promise.all()` - Wait for all promises to resolve
- `Promise.allSettled()` - Wait for all promises to settle (resolve or reject)
- `Promise.race()` - Return the first promise to settle

### **Promise Handlers**:
- `.then()` - Handle successful resolution
- `.catch()` - Handle rejection
- `.finally()` - Execute code regardless of outcome

### **Error Handling**:
- `throw new Error()` - Throwing errors
- `try/catch/finally` - Synchronous error handling
- Error propagation in promises

### **Async Patterns**:
- `async/await` syntax for cleaner promise handling
- Combining multiple asynchronous operations
- Load balancing with race conditions

## 📁 Files Structure

```
promise_exercises/
├── utils.js              # Utility functions for uploadPhoto and createUser
├── 0-promise.js          # Basic promise creation
├── 1-promise.js          # Conditional promise resolution/rejection  
├── 2-then.js             # Promise handlers (.then, .catch, .finally)
├── 3-all.js              # Multiple promises with Promise.all()
├── 4-user-promise.js     # Simple resolved promise
├── 5-photo-reject.js     # Simple rejected promise
├── 6-final-user.js       # Promise.allSettled() for mixed outcomes
├── 7-load_balancer.js    # Promise.race() for fastest response
├── 8-try.js              # Error throwing and division function
├── 9-try.js              # Guardrail with try/catch/finally
└── [0-9]-main.js         # Test files for each task
```

All implementations follow ES6 best practices and pass ESLint validation!
