module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) next();
  if (!req.user) res.sendStatus(401);
};
