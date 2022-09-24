const express = require('express');
const loginRoute = require('./routes/login.routes');
const userRoute = require('./routes/user.routes');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
