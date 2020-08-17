const checkRole = (role) => {
  return function (req, res, next) {
    const assignedRoles = req.user["http://localhost:3000/roles"];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
      return next();
    } else {
      return res
        .status(401)
        .send("Neturite teisių pasiekti šią tinklapio vietą");
    }
  };
};

module.exports = checkRole;
