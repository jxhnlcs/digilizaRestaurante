import { connection } from "./db_connect.js";

class UserDao {

    async SelectUserByUsernameAndPass(username, password) {
        {
            const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
            const data = await connection.query(query, [username, password]).catch(err => {
                return err
            })
            return data[0]
        };
    }

    async SelectUserByUsername(username) {
        {
            const query = 'SELECT * FROM users WHERE username = ?';
            const data = await connection.query(query, [username]).catch(err => {
                return err
            })
            console.log(data[0])
            return data[0] ?? []
        };
    }

    async RegisterUser(name, username, password) {
        const query = 'INSERT INTO users (name, username, password) VALUES (?, ?, ?)';
        await connection.query(query, [name, username, password]).catch(err => {
            return err
        })
        return true
    }


}

export { UserDao }