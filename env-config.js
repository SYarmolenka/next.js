const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://syarmolenka.github.io/next_js_example/' : ''
}