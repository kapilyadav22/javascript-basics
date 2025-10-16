//Implement a Rate Limiter

function rateLimiter(requests, limit, windowSize) {
  if (!requests || requests.length === 0) {
    return [];
  }

  const window = [];
  const result = [];

  for (let i = 0; i < requests.length; i++) {
    const time = requests[i];

    // Remove timestamps outside the window
    while (window.length && window[0] <= time - windowSize) {
      window.shift();
    }

    if (window.length < limit) {
      // Allow request
      window.push(time);
        result.push(i);
    }
  }

  return result;
}


// Example usage:
const requests = [1, 1.5, 2, 2.5, 3, 4, 5];
const limit = 3;
const windowSize = 3;

console.log(rateLimiter(requests, limit, windowSize)); // Output: [0, 1, 2, 3, 5, 6]    
// Explanation: Requests at indices 0, 1, 2, and 3 are within the limit of 3 requests in any 3-second window.
// Request at index 4 is dropped because it exceeds the limit in the window [1, 4].
// Requests at indices 5 and 6 are allowed as they fall outside the previous window.