function weather () {
  let a = '987345678911211';
  let b = 'PSda97fbnVG768VHbnv567VB';
  let c = "P7OGd4tvgtDoPX6l0";
  let d = "Ssvd3d4TuYT8Dl8Zw";
  let API = "https://api.seniverse.com/v3/weather/now.json";
  let LOCATION = "ip";
  let ts = Math.floor((new Date()).getTime() / 1000);
  let str = "ts=" + ts + "&uid=" + c;
  let sig = CryptoJS.HmacSHA1(str, d).toString(CryptoJS.enc.Base64);
  sig = encodeURIComponent(sig);
  str = str + "&sig=" + sig + "&appkey=" + b + "&appid=" + a;
  let url = API + "?location=" + LOCATION + "&" + str + "&callback=showWeather";
  return url;
}