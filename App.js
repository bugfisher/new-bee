const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const session = require('express-session');
const flash = require('req-flash');

const { getLogin, getLoginData, login_msg } = require('./routes/login');
const { getindex } = require('./routes/index');
const { getRegister, getRegisterData } = require('./routes/register');
const { getCategory } = require('./routes/category');
const { addgroup, addgroup_post } = require('./routes/addgroup');
const { admin, admin2, admin3, AcceptGroup, DeclineGroup, RemoveGroup, RemoveUser } = require('./routes/admin');
const { notification } = require('./routes/notification');
const { join_group } = require('./routes/join_group');
const { getUserProfile } = require('./routes/userprofile');
const { group_event, group_event_post } = require('./routes/group_event');
const { event } = require('./routes/event');
const { addeventuser, removeeventuser } = require('./routes/addeventuser');
const { create_event, create_post_event } = require('./routes/create_event');

const port = 5000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'newbiee',
    multipleStatements: true
});


// connect to database
/*db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;*/


// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload
app.use(session({ secret: 'ssshhhhh', resave: true, saveUninitialized: true }));
app.use(flash());


// routes for the app
app.get('/', getLogin);
app.post('/', getLoginData);
app.get('/login_msg', login_msg);

app.get('/index', getindex);
app.get('/register', getRegister);
app.post('/register', getRegisterData);
app.get('/CategoryDisplay/:Cat_Id', getCategory);
app.get('/userprofile', getUserProfile);

app.get('/addgroup/:Cat_Id', addgroup);
app.post('/addgroup/:Cat_Id', addgroup_post);

app.get('/admin', admin);
app.get('/admin2', admin2);
app.get('/admin3', admin3);
app.get('/AcceptGroup/:G_Id', AcceptGroup);
app.get('/DeclineGroup/:G_Id', DeclineGroup);
app.get('/RemoveGroup/:G_Id', RemoveGroup);
app.get('/RemoveUser/:U_Id', RemoveUser);

app.get('/notification', notification);

app.get('/group_event/:G_Id', group_event);
app.post('/group_event/:G_Id', group_event_post);
app.get('/join_group/:G_Id', join_group);
app.get('/event/:E_Id', event);
app.get('/addeventuser/:E_Id', addeventuser);
app.get('/removeeventuser/:E_Id', removeeventuser);
app.post('/create_event/:G_Id', create_post_event);
app.get('/create_event/:G_Id', create_event);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
