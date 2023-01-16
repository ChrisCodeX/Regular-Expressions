function validate(str) {
  if(str.match(/^[^@_]{2,}@[\w\.]{2,}\.[\w]{2,5}$/i)) {
    document.getElementById('in').style.backgroundColor = 'skyblue'
    document.getElementById('button').disabled = false;
  } else {
    document.getElementById('in').style.backgroundColor = 'red'
  }
  console.log(str)
}
