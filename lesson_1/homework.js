const array = [];
const set = new Set();
const count = 100000;

// Adding elements

const timerAddArrayStart = Date.now();
for (let i = 0; i < count; i++) {
  array.push(i);
}
const timerAddArrayEnd = Date.now() - timerAddArrayStart;
console.log(timerAddArrayEnd);

const timerAddSetStart = Date.now();
for (let i = 0; i < count; i++) {
  set.add(i);
}
const timerAddSetEnd = Date.now() - timerAddSetStart;
console.log(timerAddSetEnd);

if (timerAddArrayEnd < timerAddSetEnd) {
  console.log("Array is faster at adding elements than Set");
} else {
  console.log("Set is faster at adding elements than Array");
}

// Removing elements

const timerRemoveArrayStart = Date.now();
for (let i = 0; i < count; i++) {
  array.splice(i, 1);
}
const timerRemoveArrayEnd = Date.now() - timerRemoveArrayStart;
console.log(timerRemoveArrayEnd);

const timerRemoveSetStart = Date.now();
for (let i = 0; i < count; i++) {
  set.delete(i);
}
const timerRemoveSetEnd = Date.now() - timerRemoveSetStart;
console.log(timerRemoveSetEnd);

if (timerRemoveArrayEnd < timerRemoveSetEnd) {
  console.log("Array is faster at removing elements than Set");
} else {
  console.log("Set is faster at removing elements than Array");
}

// Searching elements

const timerSearchArrayStart = Date.now();
for (let i = 0; i < count; i++) {
  array.indexOf(i);
}
const timerSearchArrayEnd = Date.now() - timerSearchArrayStart;
console.log(timerSearchArrayEnd);

const timerSearchSetStart = Date.now();
for (let i = 0; i < count; i++) {
  set.delete(i);
}
const timerSearchSetEnd = Date.now() - timerSearchSetStart;
console.log(timerSearchSetEnd);

if (timerSearchArrayEnd < timerSearchSetEnd) {
  console.log("Array is faster at removing elements than Set");
} else {
  console.log("Set is faster at removing elements than Array");
}
