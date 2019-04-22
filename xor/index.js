//* XOR (EXCLUSIVE OR) NEURAL NETWORK *//

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

//* TRAIN *//
// Displays the error at each iteration (multiples of 100)
net.train(trainingData, {
  log: (error) => console.log(error),
  logPeriod: 100
});

//* TEST *//
console.log(net.run(trainingData[0].input));
