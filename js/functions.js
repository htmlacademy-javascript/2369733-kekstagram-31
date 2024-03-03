const checkStringLength = (string = '', maxSymbols = 1) => string.length <= maxSymbols;
checkStringLength('проверяемая строка', 20);

const testPolyndrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversal = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversal += string[1];
  }
  return string === reversal;
};
testPolyndrome('Лёша на полке клопа нашёл ');

const extractNumber = (string) => {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.length; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};
extractNumber('извлекает содержащиеся в ней цифры от 0 до 9');

const checkMeetingTime = (startDayTime, endDayTime, startmeetingTime, duration) => {

  function countMinutes(time) {
    const [hours, minutes] = time.split(':');
    return hours * 60 + parseInt(minutes, 10);
  }

  const startDayminutes = countMinutes(startDayTime);
  const endDayMinutes = countMinutes(endDayTime);
  const startMeetingminutes = countMinutes(startmeetingTime);
  const endMeetingMinutes = startMeetingminutes + duration;

  return startDayminutes <= startMeetingminutes && endMeetingMinutes <= endDayMinutes;
};

checkMeetingTime('08:00', '17:30', '14:00', 90);
checkMeetingTime('8:0', '10:0', '8:0', 120);
checkMeetingTime('08:00', '14:30', '14:00', 90);
checkMeetingTime('14:00', '17:30', '08:0', 90);
checkMeetingTime('8:00', '17:30', '08:00', 900);
