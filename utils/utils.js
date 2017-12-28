module.exports = {

  createUserSession(req, res, user) {
    const cleanUser = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };

    req.session.user = cleanUser;
  },

  requireLogin(req, res, next) {
    if (!req.session.user) {
      res.redirect('/login');
    } else {
      next();
    }
  }

}