# 语法规范检查器eslint_checker（适用于cdn方式的项目）
## author daiyujie
## email  Mail_163dai@163.com
## 使用说明：

- 拷贝该文件夹到要检查的目录下，文件夹不要重命名

- 如果有网络环境，删除node_modules文件夹，并运行npm install 重新安装依赖包

- 如果没有（针对离线环境），删除node_modules文件夹，解压node_modules.zip 到当前目录

- 运行 npm run check 检查语法错误
```
 npm run check
```
- 运行 npm run check_and_fix 检查并修复语法错误（抛出无法修复的错误）
```
 npm run check_and_fix
```

- 如果发现eslint解析了不该解析的文件，打开.eslintignore文件，添加忽略项

```
 //--.eslintignore

 *.jpg 
 *.tiff
```

