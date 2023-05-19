import { UserDao } from "../db/UserDao.js";
import { now_increase_interval } from "../utils/date.js";
import { encode_jwt } from "../utils/jwt.js";

class UserController {

    async Auth(request, response) {
        {
            const { username, password } = request.body;
            const userDAO = new UserDao
            const user = await userDAO.SelectUserByUsernameAndPass(username, password) ?? []
            if (user.length == 0) {
                return response.status(401).json({ error: 'Email ou senha inválidos.' });
            }
            const payload = {
                expira: now_increase_interval(1),
                nome: user[0].name,
                username: user[0].username
            }
            return response.json(
                {
                    message: 'Login bem-sucedido.',
                    token: encode_jwt(payload)
                }
            );
        };
    }

    async Register(request, response) {
        {
            const { name, username, password } = request.body;
            const userDAO = new UserDao
            const checkUser = await userDAO.SelectUserByUsername(username) ?? []
            if (checkUser.length != 0) {
                return response.status(500).json({ message: 'Usuário já cadastrado.' })
            }
            const register = await userDAO.RegisterUser(name, username, password)
            if (register) {
                return response.json({ message: 'Cadastro realizado com sucesso.' })
            }
            return response.json({
                message: "Erro para realizar o cadastro",
                "erro": register
            })
        };
    }
   
}

export { UserController }