module.exports = (app) => {

  app.get('/', (req, res) => res.render('home', { title: 'Home'}));
  app.get('/register', (req, res) => res.render('register', { title: 'Register' }));
  app.get('/login', (req, res) => res.render('login', { title: 'Login'}));

}