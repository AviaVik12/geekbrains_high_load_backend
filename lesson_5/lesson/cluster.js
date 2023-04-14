const express = require("express");
const os = require("os");
const cluster = require("cluster");

const app = express();
const host = "127.0.0.1";
const port = "3000";

app.get("/", (request, response) => {
  response.send("Hello from cluster.js!");
});

if (cluster.isPrimary) {
  const cpus = os.cpus().length;

  for (let i = 0; i < cpus; i++) {
    const worker = cluster.fork();
    worker.send({ message: "something" });
  }
} else {
  app.listen(porjt, host, () => {
    console.log(`Worker ${cluster.worker.id} started...`);
  });
}
