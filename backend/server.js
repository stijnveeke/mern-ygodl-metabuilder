const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Router = require('./router');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = new Router(app);
router.init();


const port = process.env.port || 5000;
const db = require("./models/index");

const connector = new Promise(async (resolve, reject) => {
    try{
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.')
        resolve();
    }catch(error) {
        console.error('Unable to connect to the database:', error);
        reject();
    }
})

connector.then(async (value) => {

    app.use(cors());
    app.use(express.json());

    app.listen(port,  () => {
        console.log(`Example app listening at http://localhost:${port}`);
    }); 
})