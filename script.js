// Онлайн компилятор функциясы
function runCode() {
  var code = document.getElementById("codeInput").value;
  var output = document.getElementById("output");

  try {
    output.textContent = eval(code);  // Кодты орындау
  } catch (error) {
    output.textContent = "Қате: " + error.message;  // Қате туралы хабарлама
  }
}

// Қарапайым нейрон желісін жаттықтыру
async function trainNeuralNetwork() {
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
  const ys = tf.tensor2d([1, 2, 3, 4], [4, 1]);

  await model.fit(xs, ys, {epochs: 100});
  const output = model.predict(tf.tensor2d([5], [1, 1]));
  document.getElementById("neuralOutput").textContent = `5 мәні үшін болжам: ${output.dataSync()}`;
}

// Шифрлау және дешифрлау функциялары
function encryptText() {
  var text = document.getElementById("textInput").value;
  var encrypted = CryptoJS.AES.encrypt(text, 'secret key').toString();
  document.getElementById("cipherOutput").textContent = `Шифрланған мәтін: ${encrypted}`;
}

function decryptText() {
  var encryptedText = document.getElementById("cipherOutput").textContent.split(': ')[1];
  var bytes = CryptoJS.AES.decrypt(encryptedText, 'secret key');
  var decrypted = bytes.toString(CryptoJS.enc.Utf8);
  document.getElementById("cipherOutput").textContent = `Дешифрланған мәтін: ${decrypted}`;
}

