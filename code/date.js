(function (global, factory){
  typeof exports === 'object' && typeof module !== 'undefined' ? 
    module.exports = factory() :
    typeof define === 'function' && define.amd ? 
      define(factory) :
	    (global.farmatDate = factory());
}(window, (function() {
  //默认时间格式
  const DEFAULT_RFARMAT = 'yyyy-mm-dd HH:MM:SS';

  const FORMAT_REGEX = /y{2,4}|m{1,2}|d{1,2}|H{1,2}|M{1,2}|S{1,2}|w/g;

  const WEEK = '日一二三四五六'.split('');

  //补0占位
  const fillIn = value => `0${value}`.slice(-2);

  //返回字符时间对象
  const resolve = date => ({
    year: `${date.getFullYear()}`,
    month: `${date.getMonth() + 1}`,
    dat: `${date.getDate()}`,
    hours: `${date.getHours()}`,
    minutes: `${date.getMinutes()}`,
    seconds: `${date.getSeconds()}`,
    day: WEEK[date.getDay()]
  });

  //返回字符格式对象
  const farmatJson = date => {
    const {
      year,
      month,
      dat,
      hours,
      minutes,
      seconds,
      day
    } = resolve(date);
    return {
      yyyy: year,
      yy: year.slice(Math.max(year.length - 2, 0)),
      mm: fillIn(month),
      m: month,
      dd: fillIn(dat),
      d: dat,
      HH: fillIn(hours),
      H: hours,
      MM: fillIn(minutes),
      M: minutes,
      SS: fillIn(seconds),
      S: seconds,
      w: day
    };
  };

  const farmatDate = (date, format = DEFAULT_RFARMAT) => {
    const opt = farmatJson(date);
    return format.replace(FORMAT_REGEX, $0 => $0 in opt ? opt[$0] : $0);
  };
  
  return farmatDate;
})));