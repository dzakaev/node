function add (str) {
 if (str === "") {
    return ""
  }
 if (typeof str !== 'string') {
    return undefined;
  }
 if (str === undefined) {
    return undefined;
  }
  return str.split("").reverse().join("");

}



module.exports = add;
