const path = require('path')
const childProcess = require("child_process")
const fs = require('fs')

const package = require('../package.json')

const DEST_PATH = path.resolve("./", "github_demo");

function main () {
  fs.exists(DEST_PATH, (exists) => {
    if (exists) {
      fs.rmSync(DEST_PATH, { recursive: true });
    }
    copy()
  });
}

function copy() {    
    childProcess.exec(
      `rsync -avz --delete --exclude-from=./scripts/exclude.list ./ ./github_demo`,
      (err, stdout, stderr) => {
        if (err) throw err
        createPackageJson()
        createConfigJS()
      }
    )
}

function createPackageJson() {
   fs.readFile(`${path.resolve('./', 'scripts/template/package.json')}`, 'utf-8', (err, data) => {
    if (err) throw err
    const jsonInfo = JSON.parse(data);
    jsonInfo.version = package.version;
    jsonInfo.dependencies = package.dependencies;
    fs.writeFile(`${path.resolve("./", "github_demo/package.json")}`, JSON.stringify(jsonInfo, null, "\t"), (err) => {
        if (err) throw err
      }
    )
   })
}

function createConfigJS() {
  fs.readFile(`${path.resolve('./', 'scripts/template/config.js')}`, 'utf-8', (err, data) => {
    if (err) throw err
    fs.writeFile(`${path.resolve('./', 'github_demo/config.js')}`, data, err => {
      if (err) throw err 
    })
  })
}

main()