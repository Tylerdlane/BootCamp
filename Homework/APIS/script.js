fetch('https://dog-api.kinduff.com/api/facts')
.then(response => response.json())
.then(data => {
  // Process and display the retrieved data
  console.log(data);
  })
  .catch(error => {
  // Handle errors
  console.error('Error:', error);
});