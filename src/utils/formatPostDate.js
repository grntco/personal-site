import { format } from 'date-fns'

const formatPostDate = (date) => {
    if (date instanceof Date) {
        return format(date, 'MM.dd.yy')
    }

    const [year, month, day] = date.split('-')
    const localDate = new Date(year, month - 1, day)
    return format(localDate, 'MM.dd.yy')
}

export default formatPostDate
