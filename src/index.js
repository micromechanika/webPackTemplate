const  Test = require("@models/Test");

require('@assets/css/lesbea.less');
require('@assets/css/body.scss');
require('@assets/css/somsassfile.sass');
require('@/assets/css/main.css');

require('@assets/js/angular.ts');
require('@assets/js/react.jsx');


const json = require('@/assets/json/my.json');

document.querySelector('pre').insertAdjacentHTML("afterbegin", new Test().toString);

console.log("JSON",json);
console.log('API Key from Define Plugin:', API_KEY);
