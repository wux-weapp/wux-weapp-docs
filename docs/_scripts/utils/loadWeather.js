export function loadWeather() {
  const a = '987345678911211'
  const b = 'PSda97fbnVG768VHbnv567VB'
  const c = 'P7OGd4tvgtDoPX6l0'
  const d = 'Ssvd3d4TuYT8Dl8Zw'
  const API = 'https://api.seniverse.com/v3/weather/now.json'
  const LOCATION = 'ip'
  const ts = Math.floor(new Date().getTime() / 1000)
  let str = 'ts=' + ts + '&uid=' + c
  let sig = CryptoJS.HmacSHA1(str, d).toString(CryptoJS.enc.Base64)
  sig = encodeURIComponent(sig)
  str = str + '&sig=' + sig + '&appkey=' + b + '&appid=' + a
  const url =
    API + '?location=' + LOCATION + '&' + str + '&callback=showWeather'
  return url
}
