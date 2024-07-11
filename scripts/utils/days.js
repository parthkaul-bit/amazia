import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function isWeekend(day) {
    if(day.format('dddd') === 'Saturday' || day.format('dddd') === 'Sunday'){
      return true
    }
    else{
      return false
    }
  }

export function calculateDeliveryDate(date) {
  const newdate =  dayjs(date);  
  return newdate.format('dddd, MMMM D')
}