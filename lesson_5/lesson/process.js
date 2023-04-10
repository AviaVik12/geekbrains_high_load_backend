const { exec, execFile, spawn, fork } = require("child_process");

//! exec

// exec("node -v", (error, stdout, stderr) => {
//   if (error) {
//     console.log(stderr);
//   } else {
//     console.log(stdout);
//   }
// });

//*----------------------------------------------------------------

// exec("cat *.js | wc -l", (error, stdout, stderr) => {
//   if (error) {
//     return console.error(`exec error: ${stderr}`);
//   }

//   console.log(`exec stdout: ${stdout}`);
// });

//*----------------------------------------------------------------

// const someProcess = exec('"/path/test_file/some.sh" arg1 arg2');
// someProcess.kill();

//! execFile

// execFile("node", ["-v"], (error, stdout, stderr) => {
//   if (error) {
//     console.log(stderr);
//   } else {
//     console.log(stdout);
//   }
// });

//*----------------------------------------------------------------

// execFile("node", ["some.js"], (error, stdout, stderr) => {
//   if (error) {
//     console.log(stderr);
//   } else {
//     console.log(stdout);
//   }
// });

//! spawn

// const ls = spawn("ls", ["-lh", "/usr"]);

// ls.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on("close", (code) => {
//   console.log("Finished", code);
// });

//! fork

// if (process.argv[2] === "child") {
//   setTimeout(() => {
//     console.log(`Process ${process.argv[2]} started!`);
//   }, 1000);
// } else {
//   const controller = new AbortController();
//   const { signal } = controller;
//   const child = fork("index.js", ["child"], { signal });

//   child.on("error", (error) => {
//     console.log(error);
//   });
// }
