function encrypt() {
  var input = document.getElementById("input").value;
  var key = document.getElementById("key").value;

  var encryptedText = CryptoJS.AES.encrypt(input, key).toString();
  document.getElementById("output").value = encryptedText;
}

function decrypt() {
  var input = document.getElementById("input").value;
  var key = document.getElementById("key").value;

  var decryptedText = CryptoJS.AES.decrypt(input, key).toString(CryptoJS.enc.Utf8);
  document.getElementById("output").value = decryptedText;
}