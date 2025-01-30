const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query)
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    console.error(err);
    res.status(500).send('Internal Server Error'); // Proper error handling
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));