// Nodejs encryption with CTR
var crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  password = "5a6b9c8d0";

var encryption = {
  encrypt: decryptedStr => {
    console.log("decrypted text is: ", decryptedStr);
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(decryptedStr, "utf8", "hex");
    crypted += cipher.final("hex");

    return crypted;
  },
  decrypt: encryptedStr => {
    console.log("encrypted text is: ", encryptedStr);
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(encryptedStr, "hex", "utf8");
    dec += decipher.final("utf8");

    return dec;
  }
};

module.exports = encryption;
