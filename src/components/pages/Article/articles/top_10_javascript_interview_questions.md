# Top 10 JavaScript Interview Questions with Solutions

![AltText {1268x600} {priority}](/icons/blogs/js_interview_10_questions.jpg)

Are you gearing up for a JavaScript interview? Here are some common interview questions along with concise solutions to help you prepare and solidify your understanding of JavaScript concepts.



## 1. Implement the functionality behaviour of `Promise.any()`

```javascript
const promiseAny = (promises) => {
  return new Promise((resolve, reject) => {
    let errors = [];
    promises.forEach(promise => {
      promise.then(resolve).catch(error => {
        errors.push(error);
        if (errors.length === promises.length) {
          reject(errors);
        }
      });
    });
  });
};

```

## 2. Deep Copy with Circular Reference Handling
```javascript
const deepCopy = (value) => {
  const cache = new WeakMap();
  const clone = (val) => {
    if (typeof val !== 'object' || val === null) return val;
    if (cache.has(val)) return cache.get(val);
    const copy = Array.isArray(val) ? [] : {};
    cache.set(val, copy);
    Object.keys(val).forEach(key => copy[key] = clone(val[key]));
    return copy;
  };
  return clone(value);
};
```

## 3. Implement the functionality behavior of `Promise.allSettled()`:
```javascript
const promiseAllSettled = (promises) => {
  return Promise.all(promises.map(promise => {
    return promise
      .then(value => ({ status: 'fulfilled', value }))
      .catch(reason => ({ status: 'rejected', reason }));
  }));
};
```

## 4. Function that returns a memoized version of a function which accepts a single argument
```javascript
const memoizeSingleArg = (func) => {
  const cache = {};
  return (arg) => {
    if (cache[arg] === undefined) {
      cache[arg] = func(arg);
    }
    return cache[arg];
  };
};
```

## 5. Function to execute N async tasks in series:
```javascript
const executeAsyncTasksInSeries = async (tasks) => {
  let results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
};
```

## 6. Class that can subscribe to and emit events that trigger attached callback functions:
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
  }
}
```

## 7. Debounce function that comes with a cancel method to cancel delayed invocations:
```javascript
const debounce = (func, delay) => {
  let timeoutId;
  const debounced = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
  debounced.cancel = () => {
    clearTimeout(timeoutId);
  };
  return debounced;
};
```

## 8. Function to merge rows of data from the same user:
```javascript
const mergeRowsByUser = (rows) => {
  const merged = {};
  rows.forEach(row => {
    if (!merged[row.user]) {
      merged[row.user] = [];
    }
    merged[row.user].push(row);
  });
  return merged;
};
```

## 9. Promisify function that allows the original function to override the return value
```javascript
const promisifyWithOverride = (func) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
};
```

## 10. Function to convert all the keys in an object to camel case:
```javascript
const convertKeysToCamelCase = (obj) => {
  const camelCaseObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
      camelCaseObj[camelCaseKey] = obj[key];
    }
  }
  return camelCaseObj;
};
```

### Follow me on [LinkedIn](https://www.linkedin.com/in/himachallad/) to get latest updates!
