function weather () {
  var qazwsxrfv = '987345678911211';
  var rfvtgbyhn = 'PSda97fbnVG768VHbnv567VB';
  var qwertyuiop = "P7OGd4tvgtDoPX6l0";
  var asdfghjkl = "Ssvd3d4TuYT8Dl8Zw";
  var API = "https://api.seniverse.com/v3/weather/now.json";
  var LOCATION = "ip";
  var ts = Math.floor((new Date()).getTime() / 1000);
  var str = "ts=" + ts + "&uid=" + qwertyuiop;
  var sig = CryptoJS.HmacSHA1(str, asdfghjkl).toString(CryptoJS.enc.Base64);
  sig = encodeURIComponent(sig);
  str = str + "&sig=" + sig + "&appkey=" + rfvtgbyhn + "&appid=" + qazwsxrfv;
  var url = API + "?location=" + LOCATION + "&" + str + "&callback=showWeather";
  return url;
}