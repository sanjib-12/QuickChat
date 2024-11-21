/* eslint-disable no-undef */
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const dbConfig = require('./config/dbConfig');

const app = require('./app');

const port = process.env.PORT_NUMBER || 3000;

app.listen(port, () => {
   console.log('Listening to request on Port:' + port);
});
