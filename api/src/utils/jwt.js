import jwt from "jsonwebtoken"

export const encode_jwt = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    return token
}

export const decode_jwt = (token) => {
    token = (token ?? '').replace('bearer', '').replace('Bearer', '').replace(' ', '')
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        return {
            success: true,
            data: decode
        }
    } catch (error) {
        return {
            success: false,
            message: error
        }
    }
}