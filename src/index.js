const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
// connect to db
db.connect();
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//app.use(morgan('combined'))

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
