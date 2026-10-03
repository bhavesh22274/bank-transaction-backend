const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

/**
 * - User register controller
 * - POST /api/auth/register
 */
async function userRegisterController(req, res) {
    const { email, name, password } = req.body;

    const isExist = await userModel.findOne({ email });

    if (isExist) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    const user = await userModel.create({
        email,
        name,
        password
    });

    // 1. Generate JWT
    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    );

    // 2. Put JWT in cookie
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000
    });

    // 3. Send response ONCE
    return res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    });
}
/**
 * - User login controller
 * - POST /api/auth/login
 */
async function userLoginController(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password"); //select the password field explicitly since it is set to select:false in the schema

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    // 1. Generate JWT
    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    );

    // 2. Put JWT in cookie
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000
    });

    // 3. Send response ONCE
    return res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    });
}







module.exports = { userRegisterController, userLoginController };