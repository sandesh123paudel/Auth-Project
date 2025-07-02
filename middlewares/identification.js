const jwt = require("jsonwebtoken");

exports.identifier = (req, res, next) => {
  let token;

  // Check token source
  if (req.headers.client === "not-browser") {
    token = req.headers.authorization;
  } else {
    token = req.cookies["Authorization"];
  }

  if (!token) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }

  try {
    // Support both 'Bearer <token>' and raw token
    const userToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

    // ✅ Verify token and extract payload
    const decoded = jwt.verify(userToken, process.env.TOKEN_SECRET);

    // ✅ Attach decoded payload to req.user
    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
