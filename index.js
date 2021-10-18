const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const whitelist = ['http://localhost:5000', 'myapp.com']
const options = {
  origin: (origin, callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null, true)
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options));

// Endpoint base GET
app.get('/', (req, res)=>{
  res.send('Hello, express!')
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Server run in the port ${port}`)
})
