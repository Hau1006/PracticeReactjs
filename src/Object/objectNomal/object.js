// Query string to object
// Generates an object from the given query string or URL.
const queryStringToObject = (url) => {
  [...new URLSearchParams(url.split("?")[1])].reduce(
    (a, [k, v]) => ((a[k] = v), a),
    {}
  );
};
// console.log(queryStringToObject('https://google.com?page=1&count=10'))
