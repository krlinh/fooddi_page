const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3500;

app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.send('Fooddi_page')
})
app.listen(port, () => {
  console.log(`Fooddi_page listening on port http://localhost:${port}`)
})