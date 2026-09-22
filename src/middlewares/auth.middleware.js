import jwt from "jsonwebtoken";
import _config from "../config/config.js";

const authenticate = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized. Please login to continue."
        });
    }

    try {
        const decodedToken = jwt.verify(token, _config.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            success: false,
            message: "Invalid token."
        });
    }
}

export default authenticate;