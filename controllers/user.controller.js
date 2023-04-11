const db = require('../db')

class UserController{
    async registration(req, res){
        const {username, password} = req.body
        const newUser = await db.query(`INSERT INTO user_auth (username, password) values ($1, $2) RETURNING *`, [username, password]);
        res.json(newUser.rows[0]);
    }
    async login(req, res){
        res.body("hi");
    }
}

module.exports = new UserController();