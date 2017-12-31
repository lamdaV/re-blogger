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
let posts = {};
dirs.forEach((dir) => {
  if (Array.isArray(dir)) {
    let dirname = path.basename(path.dirname(dir[0]));
    let data = [];
    dir.forEach((file) => {
      let content = fs.readFileSync(file, readOptions);
      let name = path.basename(file, path.extname(file));
      data.push({name, content, type: dirname});
    });
    posts[dirname] = data;
  }
});

const postJSONPath = "./src/posts.json";
console.log(`[ INFO ] writing to '${postJSONPath}'`);
fs.writeFileSync(postJSONPath, JSON.stringify(posts));
