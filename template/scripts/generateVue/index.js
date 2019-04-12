const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
const componentType = process.env.TYPE
// 导入模板
const { vueTemplate } = require('./template')
const rootPath = resolve(process.cwd(), `./src/${componentType}`)

log(`请输入要生成的页面组件名称，会生成在${componentType}/目录下`)

process.stdin.on('data', async (chunk) => {
  // 输入组件路径名
  const inputName = String(chunk).trim().toString()
  if (!inputName) {
    errorLog('路径不能为空')
    return
  }
  // 分离目录路径和文件名
  let fileName = ''
  let directoryName = './'

  if (inputName.includes('/')) {
    const arr = inputName.split('/')
    if (arr[arr.length - 1].includes('.vue')) {
      fileName = arr[arr.length - 1]
      directoryName = inputName.replace(`${fileName}`, '')
    } else {
      fileName = 'index.vue'
      directoryName = inputName
    }
  } else {
    if (inputName.includes('.vue')) {
      fileName = inputName
    } else {
      fileName = 'index.vue'
      directoryName = inputName
    }
  }
  // 目录路径
  const directoryPath = resolve(rootPath, directoryName)
  // 组件路径
  const componentPath = resolve(rootPath, directoryName ,fileName)
  // 组件是否存在
  const hasComponentExist = fs.existsSync(componentPath)

  if (hasComponentExist) {
    errorLog(`${inputName}页面组件已经存在，请重新输入`)
    return
  } else {
    log(`正在生成目录...`)
    try {
      await generateDirectory(directoryPath)
    } catch (err) {
      errorLog(err)
    }
  }
  try {
    const componentName = generateComponentName(componentPath, directoryName, fileName)
    log(`正在生成vue文件 ${componentName}`)
    await generateFile(componentPath, vueTemplate(componentName))
    successLog('生成成功')
  } catch (err) {
    errorLog(err)
  }
  // 结束输入
  process.stdin.emit('end')
})

process.stdin.on('end', function () {
  log('exit')
  process.exit()
})

// 生成文件
function generateFile (path, data) {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
// 生成目录
function generateDirectory (directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}
// 递归生成目录
function mkdirs (directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory)
      callback()
    })
  }
}
// 自动生成组件名
function generateComponentName (componentPath, directoryName, fileName) {
  let componentName = ''
  if (componentPath.includes('index.vue') || !componentPath.includes('.vue')) {
    var arr = directoryName.split('/').filter(n => n)
    componentName = arr[arr.length - 1]
  } else {
    componentName = fileName.replace('.vue', '')
  }
  return componentName
}
