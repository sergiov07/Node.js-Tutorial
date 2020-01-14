module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["airbnb", "prettier", "plugin:node/recommended"],
    "plugins": ["prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off",
        "comma-dangle": 0
      }
};


