const express = require('express');
const { loginRouter } = require('./routers');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use((err, req, res, _next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
