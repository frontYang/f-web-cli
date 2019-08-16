#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const pkg = require('../package.json');


program
  .version(pkg.version)
  .option('-i, init [name]', '初始化web项目')  
  .option('-m, initmini [name]', '初始化微信小程序项目')  
  .option('-v, verbose', '打印详细日志')
  .parse(process.argv);


if (program.init) {
  const spinner = ora('downloading web...').start();
  download('frontyang/gulp-demo', program.init, function (err) {
    if (!err) {
      // 可以输出一些项目成功的信息
      console.info(chalk.blueBright('Success!'));
    } else {
      // 可以输出一些项目失败的信息
      console.info(chalk.redBright('Error!'));
    }
  })
}
if (program.initmini) {
  const spinner = ora('downloading miniprogram...').start();
  download('frontyang/wechat-package', program.initmini, function (err) {
    if (!err) {
      // 可以输出一些项目成功的信息
      console.info(chalk.blueBright('Success!'));
    } else {
      // 可以输出一些项目失败的信息
      console.info(chalk.redBright('Error!'));
    }
  })
}

var verbose = false
if (program.verbose) {
  verbose = program.verbose
}


var _verbose = verbose
function log(str) {
  if (_verbose == true) {
    console.log(str)
  }
}

log('verbose = ' + verbose)