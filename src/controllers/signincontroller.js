import { pool } from "../config/db.js";

export async function signinhandler(req, res) {

    const { name, password } = req.body

    const response = await pool.query("SELECT EXISTS (SELECT 1 FROM users WHERE name = $1 AND PASSWORD = $2)", [name, password])

    console.log(response.rows[0])

    if (response.rows[0].exists) {
        res.json({
            message: "Login successful",
            token: "dgjhcbdbc"
        })
    } else {
        res.json({
            message: "Invalid username/password"
        })
    }
}