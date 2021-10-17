const express = require('express');
const routerApi = require('./routes')

const { logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 5000;

app.use(express.json());

// Endpoint base GET
app.get('/', (req, res)=>{
  res.send('Hello, express!')
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Server run in the port ${port}`)
})
