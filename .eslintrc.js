
// process.env.NODE_ENV = 'production';
module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
		"indent": [ //--必须使用tab进行空行
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [ //--代码中字符串必须使用双引号
			"error",
			"double"
		],
		"semi": [ //--代码必须有分号
			"error",
			"always"
		],
		"no-alert": 2,//禁止使用alert confirm prompt
		"no-debugger": 2,// 生产模式不允许有debugger
		"no-duplicate-case": 2,//switch中的case标签不能重复
		"no-fallthrough": 1,//禁止switch穿透
		"no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
		"no-multiple-empty-lines": [1, { "max": 2 }],//空行最多不能超过2行
		"no-new": 1,//禁止在使用new构造一个实例后不赋值
		"no-undef": 1,//不能有未定义的变量
		"no-use-before-define": 2,//未定义前不能使用
		"no-delete-var": 2,//不能对var声明的变量使用delete操作符
		"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
		"no-eq-null": 2//禁止对null使用==或!=运算符
	}
};