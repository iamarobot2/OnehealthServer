const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    console.log("User request invalid")
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      {
        console.log("User request Forbidden")
        return res.status(403).json({ message: "Forbidden" });
      }
    req.user = decoded.userId;
    req.role = decoded.role;
    next();
  });
}

module.exports = verifyJWT
