import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import _config from "../config/config.js";
import jwt from "jsonwebtoken";


// Creating User
const register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    try {
        // Checking if user already exists
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating new user
        const newUser = await userModel.create({
            email,
            password: hashedPassword
        });

        // Generating JWT token
        const token = jwt.sign(
            {
                id: newUser._id,
                email: newUser.email
            },
            _config.JWT_SECRET,
            { expiresIn: _config.JWT_EXPIRES_IN }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: _config.JWT_EXPIRES_IN
        });

        if (!newUser) {
            return res.status(400).json({
                success: false,
                message: "User not created."
            });
        }

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            token: token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
};

// Login User
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    try {
        // Checking if user exists
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found."
            });
        }

        // Checking password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid password."
            });
        }

        return res.status(200).json({ success: true, message: "User logged in successfully." });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
};

export { register, login };