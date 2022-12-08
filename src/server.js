const express = require('express');

const routes = require('./routes/main')

const app = express();
const PORT = process.env.PORT || 5300

app.use('',routes);


// (template engine)
app.set('view engine', 'hbs')
app.set('views', 'views')



app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});

