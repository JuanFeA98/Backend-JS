const express = require('express');

const routerApi = require('./routes')

const app = express();
const port = 5000;

app.use(express.json());

// Endpoint base GET
app.get('/', (req, res)=>{
  res.send('Hello, express!')
});

routerApi(app)

app.listen(port, ()=>{
  console.log(`Server run in the port ${port}`)
})
