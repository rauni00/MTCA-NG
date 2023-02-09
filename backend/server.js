const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const users = require('./routes/api/users');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const passport = require('passport');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// DB Config
const db = require('./config/keys').mongoUri;

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => res.send('<h1>HELLO WORLD</h1> '));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // DB Config
// const db = require('./config/keys').mongoUri;
// // Connect to MongoDB
// mongoose
// 	.connect(db)
// 	.then(() => console.log('MongoDB Connected'))
// 	.catch((err) => console.log(err));

// app.get('/', (req, res) => res.send('Hello World'));

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));
