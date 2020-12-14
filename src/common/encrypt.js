import sha512 from 'js-sha512'

export const encrypt = ({ domain, salt, length }) => {
  if (!domain || !salt || length <= 2) {
    return ''
  }
  const ret = Array.apply(null, { length: 3 })
    .reduce((value) => sha512(value + salt), domain)
    .substr(0, length)
    .split('')
  ret[0] = isNaN(ret[0]) ? ret[0].toUpperCase() : String.fromCharCode(65 + parseInt(ret[0], 10))
  ret[1] = isNaN(ret[1]) ? ret[1].toLowerCase() : String.fromCharCode(97 + parseInt(ret[1], 10))
  ret[2] = isNaN(ret[2]) ? ret[2].charCodeAt(0) % 10 : ret[2]
  ret[3] = ['~', '!', '@', '#', '$', '%', '&'][ret[4].charCodeAt(0) % 7]
  return ret.join('')
}
