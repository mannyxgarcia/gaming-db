import moment from 'moment'

const getDates = (date) => {
  let currentDate = moment(date).format('YYYY-MM-DD')
  let threeMonthsFromDate = moment(date).subtract(3, 'months').format('YYYY-MM-DD')

  return `${threeMonthsFromDate}%2C${currentDate}`
}

export default { getDates }
