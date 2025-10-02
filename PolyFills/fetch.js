if (!window.fetch) {
  window.fetch = function(url, options) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options?.method || 'GET', url);
      xhr.onload = () => resolve({ text: () => Promise.resolve(xhr.responseText) });
      xhr.onerror = () => reject(new TypeError('Network request failed'));
      xhr.send(options?.body || null);
    });
  };
}

// Example usage:
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));  

// Note: This is a very basic polyfill and does not cover all features of the Fetch API.