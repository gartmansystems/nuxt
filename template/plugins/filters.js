import Vue from 'vue'
Vue.filter('Title', function (string) {
  if (string == null) {
    return ''
  }
  const newStr = string + ''
  const ary = newStr.split(' ')
  let newary = []
  for (let i = 0; i < ary.length; i += 1) {
    let temp = ary[i].slice(1)
    const regexNum = /\d/g
    if (temp.length === 1 || temp.includes('-') || regexNum.test(temp)) {
      temp = temp.toUpperCase()
    } else {
      temp = temp.toLowerCase()
    }
    newary.push(ary[i].charAt(0).toUpperCase() + temp)
  }
  return newary.join(' ')
})

Vue.filter('SKU', function (string) {
  if (string) {
    return string.toUpperCase()
  } else {
    return string
  }
})
Vue.filter('Empty', function (string) {
  if (string === '' || string === null || string === undefined) {
    return 'n/a'
  } else {
    return string
  }
})

Vue.filter('Phone', function (string) {
  var s2 = ('' + string).replace(/\D/g, '')
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/)
  return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3]
})