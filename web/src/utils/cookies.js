import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const set_cookie = (name, value, config) => {
    cookies.set(name, value, config)
}

export const get_cookie = (name) => {
    return cookies.get(name) ?? ''
}

export const remove_cookie = (name) => {
    cookies.remove(name)
}

export const remove_cookies = () => {
    const all_cookies = cookies.getAll()
    return all_cookies
}