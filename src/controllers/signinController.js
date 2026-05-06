import { pool } from "../config/db.js";


export async function signupHandler(req, res) {
    const { name, email, password } = req.body;
    try {
        const response = await pool.query("INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING id", [name, email, password])
        console.log(response)

        const userID = response.rows[0].id

        res.json({
            message: "added user successfully",
            "data": {
                userID
            }
        })
    } catch (e) {

        res.json({
            message: "some error occured",
            error: e
        })

    }
}