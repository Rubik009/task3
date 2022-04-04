let express = require('express');
let app = express();
const routes = require('./routes/index');
require('dotenv').config();

app.use("/api", routes);


app.listen(process.env.PORT, () => console.log('Server started'));


