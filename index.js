let express = require('express');
let app = express();
// import routes from './src/routes/crmRoutes';
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
// const app = express();


//mongoose connection 
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb')


//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({extended:true}));

const PORT = 3000;

//point to routes file:
let routes_setter = require('./src/routes/crmRoutes');
routes_setter(app);

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);