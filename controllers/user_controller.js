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
      .catch(next)
  }

}