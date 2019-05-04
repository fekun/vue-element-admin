export default function (html) {
  let reg = /<(.*?)>/g
  return html.replace(reg, (matched, $1) => {
    return `$lt${$1}&gt;`
  })
}
