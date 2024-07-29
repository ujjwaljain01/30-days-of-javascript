//- Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Handle the response data
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
