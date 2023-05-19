import { format, addDays, subDays } from 'date-fns'

export const now = () => {
    return format(new Date(), `yyyy-MM-dd HH:mm:ss`)
}

export const date_now = () => {
    return format(new Date(), `yyyy-MM-dd`)
}

export const now_increase_interval = (interval) => {
    return format(addDays(new Date(), interval), `yyyy-MM-dd HH:mm:ss`)
}

export const now_decrease_interval = (interval) => {
    return format(subDays(new Date(), interval), `yyyy-MM-dd HH:mm:ss`)
}

export const checkDateSmallerNow = (date_smaller) => {
    const dateIsGreater = new Date(date_smaller).getTime() < new Date().getTime()
    return dateIsGreater
}

export const formatBr = (data) => {
    return format(new Date(data), `dd/MM/yyyy HH:mm:ss`)
}


