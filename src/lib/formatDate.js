import moment from 'moment'

export const defaultFormat = (date, format = 'YYYY-MM-DD') =>
  moment(date).format(format)
