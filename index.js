const { readFileSync, writeFileSync } = require("fs");
const config = require("./config.json");

if (config.compress) {
  let file = readFileSync(config.file + ".txt", "utf8").toLowerCase();
  let repeated = [...new Set(file.split(" "))];

  repeated.forEach(
    (str, index) =>
      (file = file.replace(new RegExp(`\\b${str}\\b`, "g"), index))
  );
  writeFileSync(config.file + "-small.txt", file, "utf8");
  writeFileSync(config.file + "-array.txt", repeated.join(" "), "utf8");
} else {
  let file = readFileSync(config.file + "-small.txt", "utf8").toLowerCase();
  let array = readFileSync(config.file + "-array.txt", "utf8").split(" ");

  array.forEach(
    (str, index) =>
      (file = file.replace(new RegExp(`\\b${index}\\b`, "g"), str))
  );
  writeFileSync(config.file + "-unzip.txt", file, "utf8");
}
