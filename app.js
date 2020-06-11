const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const TWO_HOURS = 1000 * 60 * 60 * 2;

const {
    PORT = 3050,
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!quiet,it\'asecret!',
    SESS_LIFETIME = TWO_HOURS
} = process.env

const IN_PROD = NODE_ENV === 'production'

const users = [
    { id: 1, name: 'Alex', email: 'alex@gmail.com', password: 'secret'},
    { id: 2, name: 'Max', email: 'max@gmail.com', password: 'secret'},
    { id: 3, name: 'Alexis', email: 'alexis@gmail.com', password: 'secret'},
]

const app = express()

app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

// app.use(bodyParser.urlencoded({
//     extended: true
// }))

// Heroku

var FileStore = require('session-file-store')(session);
 
var fileStoreOptions = {};
 
app.set('trust proxy', 1);

// React views https://github.com/reactjs/express-react-views

app.use('/public',express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(session({
    name: SESS_NAME,
    store: new FileStore(fileStoreOptions),
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}))

const redirectLogin = (req, res, next) => {
    if(!req.session.userId) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectHome = (req, res, next) => {
    if(req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}

app.get('/', (req, res) => {
    // const userId = 1
    const { userId } = req.session
    // console.log(req.session)
    // console.log(userId)

res.render("index", {userId : userId })

})

app.use((req, res, next) => {
    const {userId} = req.session
    if (userId) {
        res.locals.user = users.find(user => user.id === userId)
    }
    next()
})

app.get('/home', redirectLogin, (req, res) => {
const { user } = res.locals
console.log(req.sessionID)

res.render("pages/home", {user : user })

})

// app.get('/profile', redirectLogin, (req, res) => {
//     const user = users.find(user => user.id === req.session.userId)

//     res.render("pages/profile", {user : user })
// })

app.get('/login', redirectHome, (req, res) => {

    // req.session.userId =

    res.render("pages/login")

})

app.get('/register', redirectHome, (req, res) => {

    res.render("pages/register")

})

app.post('/login', redirectHome, (req, res) => {
    const { email, password } = req.body 

    if (email && password) { 
        const user = users.find(user => user.email === email && user.password === password)

        if (user) {
            req.session.userId = user.id
            return res.redirect('/home')
        }
    }

    res.redirect('/login')

})

app.post('/register', redirectHome, (req, res) => {
    const { name, email, password } = req.body

    if (name && email && password ) { 
        const exists = users.some(
            user => user.email === email
        )

        if (!exists) {
            const user = {
                id: users.length + 1,
                name,
                email,
                password
            }
            users.push(user)

            req.session.userId = user.id

            return res.redirect('/home')
        }
    }

    res.redirect('/register') 
})

app.post('/logout', redirectLogin, (req, res) => {
    req.session.destroy(err => {
        if(err) {
            return res.redirect('/home')
        }
        res.clearCookie(SESS_NAME)
        res.redirect('/')
    })
})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}`
))