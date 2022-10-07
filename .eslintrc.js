module.exports = {
    //env 表示启用eslint检测的环境
    env: {
        browser: true,
        es2021: true,
    },
    //eslint 中基础配置需要继承的配置
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    //overrides键和processor 键 特定类型的文件指定处理器
    overrides: [],
    //解析器
    parser: 'vue-eslint-parser',
    //Eslint 中支持我们使用哪些语法;EsLint 支持任何类型的 JavaScript 语言选项（比如 ES6、模块类型等等），默认不进行任何配置时 EsLint 默认检测规则为 ES5 代码
    parserOptions: {
        //指定你想要使用的ECMAScript版本
        ecmaVersion: 'latest',
        //设置为“Script”(默认)或"module" (如果你的代码是ECMAScript模块)
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    //插件
    plugins: ['vue', '@typescript-eslint'],
    //需要修改的启用规则及其各自的错误级别
    /**
     * 错误级别分为三种
     * off 0 -关闭规则
     * warn 或 1 -开启规则
     * error 或 2 -开启规则
     */
    rules: {},
}
