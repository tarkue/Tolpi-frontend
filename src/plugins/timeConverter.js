const months = [
    'Янв.','Фев.','Мар.',
    'Апр.','Май','Июнь',
    'Июль','Авг.','Сен.',
    'Окт.','Ноя.','Дек.'
];

export default function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp*1000);
    
    let year = a.getFullYear()
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();

    if (String(hour).length == 1) {
        hour = '0' + hour
    } 
    if (String(min).length == 1) {
        min = '0' + min
    } 
    let b = new Date(Date.now())
    if (date ==  b.getDate() && a.getMonth() == b.getMonth() && year == b.getFullYear()) {
        return hour + ':' + min
    } 
    return month + ' ' + date + ', ' + hour + ':' + min;
  }

