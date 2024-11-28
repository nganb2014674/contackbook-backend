module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    rules: {
        'no-multi-spaces': 'error', // Cấm khoảng trắng thừa
        'space-before-function-paren': ['error', 'never'], // Không có khoảng trắng trước dấu ( trong hàm
        'no-unused-vars': 'warn', // Cảnh báo biến không được sử dụng
    },
};