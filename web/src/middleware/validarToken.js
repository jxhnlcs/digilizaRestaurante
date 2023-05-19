import { get_cookie, remove_cookie } from "../utils/cookies";

export default async function (to, from, next) {

    const token = get_cookie('token')
    const response = await fetch(`${import.meta.env.VITE_API_URL}api/vr/validar_usuario`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    const data = await response.json()
    if (data.message != 'Usuário valido' && response.status != 200) {
        remove_cookie('token')
        location.href = "/";
        return
    }
    next()
}