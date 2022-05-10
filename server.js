const express = require ('express');
const routes = require ('./controllers')
const sequelize = require ('./config/connection.js')
const path = require ('path');

const exphbs = require ('express-handlebars');
const helpers = require ('./utils/helpers');
const hbs = exphbs.create({ helpers });

const session = require ('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'secret',
    cookie: {},
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});