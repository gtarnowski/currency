import moment from 'moment'

export const defaultFormat = (date, format = 'YYYY-MM-DD') => {
  if (moment(date).isValid()) {
    return moment(date).format(format)
  }
}
