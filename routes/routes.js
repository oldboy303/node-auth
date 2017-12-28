const userController = require('../controllers/user_controller');
const utils = require('../utils/utils');

module.exports = (app) => {
  // Main Routes
  app.get('/', (req, res) => res.render('home', { title: 'Home'}));

  app.get('/register', (req, res) => {
    res.render('register', { title: 'Register', csrfToken: req.csrfToken() });
  });

  app.get('/login', (req, res) => {
    res.render('login', { title: 'Login', csrfToken: req.csrfToken() });
  });

  // Auth Routes
  app.get('/dashboard', utils.requireLogin, (req, res) => {
    res.render('dashboard', { title: 'Dashboard', user: req.session.user });
  });

  app.get('/logout', userController.logout);

  app.post('/register', userController.create);

  app.post('/login', userController.read);

};