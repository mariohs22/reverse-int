module.exports = function reverse (n) {
  let a = (n+'').split('');
  return parseInt(a.reverse().join(''));
}
