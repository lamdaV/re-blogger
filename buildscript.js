const fs = require("fs");
const path = require("path");

// source: https://gist.github.com/kethinov/6658166
const walkSync = (d) => fs.statSync(d).isDirectory() ?
  fs.readdirSync(d).map(f => walkSync(path.join(d, f))) : d;

console.log("[ INFO ] searching ./posts directory...");
const dirs = walkSync("./posts");
console.log("[ INFO ] found files: ");
console.log(dirs);

console.log("[ INFO ] generating posts.json...");
const readOptions = {encoding: "utf8"};
let posts = [{name: "home", content: fs.readFileSync("./posts/home.md", readOptions)}];
dirs.forEach((dir) => {
  if (Array.isArray(dir)) {
    dir.forEach((file) => {
      let content = fs.readFileSync(file, readOptions);
      let name = path.basename(file, path.extname(file));
      posts.push({name, content});
    })
  }
});

const postJSONPath = "./src/posts.json";
console.log(`[ INFO ] writing to '${postJSONPath}'`);
fs.writeFileSync("./src/posts.json", JSON.stringify({posts}));
