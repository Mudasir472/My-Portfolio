const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { connectdb } = require("./config/MongoDB")
require('dotenv').config();

// Routers 
const contactRouter = require('./routes/Contact.router')
// Middleware setup
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Allow credentials (cookies)
}));
// Mongo connection
connectdb(process.env.MONGO_URI);

// Session setup
const session = require("express-session");
const MongoStore = require("connect-mongo");

const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    crypto: {
        secret: process.env.SESSION_SECRET,
    },
    touchAfter: 24 * 3600 // In seconds
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: false,
        signed: false
    }
}));
// Routes
app.use('/', contactRouter)
//Middleware for custom Errors
app.use((err, req, res, next) => {
    // console.log("------ERROR------");
    let { status = 500, message, success } = err;
    res.status(status).json({ message, success })
});
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});