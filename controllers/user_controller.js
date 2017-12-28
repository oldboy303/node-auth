const User = require('../models/user');
const bcrypt = require('bcryptjs');
const utils = require('../utils/utils');

module.exports = {

  create(req, res, next) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash
    });

    User.create(user)
      .then((user) => {
        utils.createUserSession(req, res, user);
        res.redirect('/dashboard');
      })
      .catch(next);
  },

  read(req, res, next) {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          utils.createUserSession(req, res, user);
          res.redirect('/dashboard');
        } else {
          throw new Error('Incorrect password')
        }
      })
      .catch(next);
  },

  logout(req, res, next) {
    if (req.session) {
      req.session.reset();
    }
    res.redirect('/');
  }

}