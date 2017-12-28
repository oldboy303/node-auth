const userController = require('../controllers/user_controller');

module.exports = (app) => {
  // Main Routes
  app.get('/', (req, res) => res.render('home', { title: 'Home'}));

  app.get('/register', (req, res) => res.render('register', { title: 'Register' }));

  app.get('/login', (req, res) => res.render('login', { title: 'Login'}));

  // Auth Routes
  app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard', user: req.session.user });
  });

  app.post('/register', userController.create);

  app.post('/login', userController.read);

}