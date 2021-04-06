const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport');
const config = require('./config/app_config.json');

//Load Config
dotenv.config({path: './config/config.env'});

const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const options = {
    identityMetadata: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}/${config.metadata.discovery}`,
    issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
    clientID: config.credentials.clientID,
    audience: config.credentials.audience,
    validateIssuer: config.settings.validateIssuer,
    passReqToCallback: config.settings.passReqToCallback,
    loggingLevel: config.settings.loggingLevel,
    scope: config.resource.scope
};

const bearerStrategy = new BearerStrategy(options, (token, done) => {
        // Send user info using the second argument
        done(null, {}, token);
    }
);

const app = express();
const PORT = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true })
        .then(() => console.log('Connected to DB successfully.....'))
        .catch((err) => console.log(err)); 

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/** Adding Passport middleware */
app.use(passport.initialize());
passport.use(bearerStrategy);


//Import routes 
const itemRoutes = require('./Routes/items');


app.use('/items', itemRoutes);

//Routes
app.get('/', (req, res) => {
    res.send({message: `Welcome to ToDoList Api`});
});

app.get("/user", passport.authenticate('oauth-bearer', {session: false}), (req, res) => {
        console.log('Validated claims: ', req.authInfo);

        // Service relies on the name claim.  
        res.status(200).json({
            'name': req.authInfo['name'],
            'issued-by': req.authInfo['iss'],
            'issued-for': req.authInfo['aud'],
            'scope': req.authInfo['scp']
        });
    }
);


//Listening to the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});