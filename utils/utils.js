module.exports = {

  createUserSession(req, res, user) {
    const cleanUser = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    };

    req.session.user = cleanUser;
  }

}