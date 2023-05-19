import { checkDateSmallerNow } from "../utils/date.js"
import { decode_jwt } from "../utils/jwt.js"

class ValidarUsuario {

    async validarToken(token) {
        const decoded = decode_jwt(token)
        if (!decoded.success) return {
            message: "Token invalido",
            success: false
        }
        const expiredDate = checkDateSmallerNow(decoded.data.expira)
        if (expiredDate) return {
            message: "Token expirado",
            success: false
        }
        return {
            message: 'Token valido',
            success: true,
        }
    }

}

export { ValidarUsuario }