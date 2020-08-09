const checkRole = (role) => {
  return function (req, res, next) {
    console.log(req.user);
    const assignedRoles = req.user["http://localhost:3000/roles"];
    console.log(assignedRoles);
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
