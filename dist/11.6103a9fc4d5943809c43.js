/*!
 * @version f046bbb-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+7LX":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.GenericBarcode=void 0
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("52Lf"))
var i=function(e){function GenericBarcode(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GenericBarcode),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GenericBarcode.__proto__||Object.getPrototypeOf(GenericBarcode)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GenericBarcode,o.default),r(GenericBarcode,[{key:"encode",value:function encode(){return{data:"10101010101010101010101010101010101010101",text:this.text}}},{key:"valid",value:function valid(){return!0}}]),GenericBarcode}()
t.GenericBarcode=i},"/4Rl":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n("NJzS"),o=n("2j0D"),i=n("JB6v"),a=n("n/pZ"),u=n("jlE0"),s=n("fLmL"),c=n("wXsw"),f=n("+7LX")
t.default={CODE39:r.CODE39,CODE128:o.CODE128,CODE128A:o.CODE128A,CODE128B:o.CODE128B,CODE128C:o.CODE128C,EAN13:i.EAN13,EAN8:i.EAN8,EAN5:i.EAN5,EAN2:i.EAN2,UPC:i.UPC,UPCE:i.UPCE,ITF14:a.ITF14,ITF:a.ITF,MSI:u.MSI,MSI10:u.MSI10,MSI11:u.MSI11,MSI1010:u.MSI1010,MSI1110:u.MSI1110,pharmacode:s.pharmacode,codabar:c.codabar,GenericBarcode:f.GenericBarcode}},"/XyT":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
t.default=function(e,t){return r({},e,t)}},"2j0D":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CODE128C=t.CODE128B=t.CODE128A=t.CODE128=void 0
var r=_interopRequireDefault(n("byS7")),o=_interopRequireDefault(n("6Mm9")),i=_interopRequireDefault(n("cLAh")),a=_interopRequireDefault(n("7T9X"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.CODE128=r.default,t.CODE128A=o.default,t.CODE128B=i.default,t.CODE128C=a.default},"3KJX":function(e,t,n){"use strict"
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(e){function InvalidInputException(e,t){_classCallCheck(this,InvalidInputException)
var n=_possibleConstructorReturn(this,(InvalidInputException.__proto__||Object.getPrototypeOf(InvalidInputException)).call(this))
return n.name="InvalidInputException",n.symbology=e,n.input=t,n.message='"'+n.input+'" is not a valid input for '+n.symbology,n}return _inherits(InvalidInputException,Error),InvalidInputException}(),o=function(e){function InvalidElementException(){_classCallCheck(this,InvalidElementException)
var e=_possibleConstructorReturn(this,(InvalidElementException.__proto__||Object.getPrototypeOf(InvalidElementException)).call(this))
return e.name="InvalidElementException",e.message="Not supported type to render on",e}return _inherits(InvalidElementException,Error),InvalidElementException}(),i=function(e){function NoElementException(){_classCallCheck(this,NoElementException)
var e=_possibleConstructorReturn(this,(NoElementException.__proto__||Object.getPrototypeOf(NoElementException)).call(this))
return e.name="NoElementException",e.message="No element to render on.",e}return _inherits(NoElementException,Error),NoElementException}()
t.InvalidInputException=r,t.InvalidElementException=o,t.NoElementException=i},"52Lf":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=function Barcode(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Barcode),this.data=e,this.text=t.text||e,this.options=t}},"6LKm":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
t.checksum=checksum
var o=_interopRequireDefault(n("VyaE")),i=_interopRequireDefault(n("52Lf"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function UPC(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UPC),-1!==e.search(/^[0-9]{11}$/)&&(e+=checksum(e))
var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UPC.__proto__||Object.getPrototypeOf(UPC)).call(this,e,t))
return n.displayValue=t.displayValue,t.fontSize>10*t.width?n.fontSize=10*t.width:n.fontSize=t.fontSize,n.guardHeight=t.height+n.fontSize/2+t.textMargin,n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UPC,i.default),r(UPC,[{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9]{12}$/)&&this.data[11]==checksum(this.data)}},{key:"encode",value:function encode(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function flatEncoding(){var e=""
return e+="101",e+=(0,o.default)(this.data.substr(0,6),"LLLLLL"),e+="01010",e+=(0,o.default)(this.data.substr(6,6),"RRRRRR"),{data:e+="101",text:this.text}}},{key:"guardedEncoding",value:function guardedEncoding(){var e=[]
return this.displayValue&&e.push({data:"00000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),e.push({data:"101"+(0,o.default)(this.data[0],"L"),options:{height:this.guardHeight}}),e.push({data:(0,o.default)(this.data.substr(1,5),"LLLLL"),text:this.text.substr(1,5),options:{fontSize:this.fontSize}}),e.push({data:"01010",options:{height:this.guardHeight}}),e.push({data:(0,o.default)(this.data.substr(6,5),"RRRRR"),text:this.text.substr(6,5),options:{fontSize:this.fontSize}}),e.push({data:(0,o.default)(this.data[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&e.push({data:"00000000",text:this.text.substr(11,1),options:{textAlign:"right",fontSize:this.fontSize}}),e}}]),UPC}()
function checksum(e){var t,n=0
for(t=1;t<11;t+=2)n+=parseInt(e[t])
for(t=0;t<11;t+=2)n+=3*parseInt(e[t])
return(10-n%10)%10}t.default=a},"6Mm9":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("SyMb")),i=n("8I5R")
var a=function(e){function CODE128A(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CODE128A),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CODE128A.__proto__||Object.getPrototypeOf(CODE128A)).call(this,i.A_START_CHAR+e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CODE128A,o.default),r(CODE128A,[{key:"valid",value:function valid(){return new RegExp("^"+i.A_CHARS+"+$").test(this.data)}}]),CODE128A}()
t.default=a},"7T9X":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("SyMb")),i=n("8I5R")
var a=function(e){function CODE128C(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CODE128C),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CODE128C.__proto__||Object.getPrototypeOf(CODE128C)).call(this,i.C_START_CHAR+e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CODE128C,o.default),r(CODE128C,[{key:"valid",value:function valid(){return new RegExp("^"+i.C_CHARS+"+$").test(this.data)}}]),CODE128C}()
t.default=a},"8I5R":function(e,t,n){"use strict"
var r
function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0})
var o=t.SET_A=0,i=t.SET_B=1,a=t.SET_C=2,u=(t.SHIFT=98,t.START_A=103),s=t.START_B=104,c=t.START_C=105
t.MODULO=103,t.STOP=106,t.FNC1=207,t.SET_BY_CODE=(_defineProperty(r={},u,o),_defineProperty(r,s,i),_defineProperty(r,c,a),r),t.SWAP={101:o,100:i,99:a},t.A_START_CHAR=String.fromCharCode(208),t.B_START_CHAR=String.fromCharCode(209),t.C_START_CHAR=String.fromCharCode(210),t.A_CHARS="[\0-_È-Ï]",t.B_CHARS="[ -È-Ï]",t.C_CHARS="(Ï*[0-9]{2}Ï*)",t.BARS=[11011001100,11001101100,11001100110,10010011e3,10010001100,10001001100,10011001e3,10011000100,10001100100,11001001e3,11001000100,11000100100,10110011100,10011011100,10011001110,10111001100,10011101100,10011100110,11001110010,11001011100,11001001110,11011100100,11001110100,11101101110,11101001100,11100101100,11100100110,11101100100,11100110100,11100110010,11011011e3,11011000110,11000110110,10100011e3,10001011e3,10001000110,10110001e3,10001101e3,10001100010,11010001e3,11000101e3,11000100010,10110111e3,10110001110,10001101110,10111011e3,10111000110,10001110110,11101110110,11010001110,11000101110,11011101e3,11011100010,11011101110,11101011e3,11101000110,11100010110,11101101e3,11101100010,11100011010,11101111010,11001000010,11110001010,1010011e4,10100001100,1001011e4,10010000110,10000101100,10000100110,1011001e4,10110000100,1001101e4,10011000010,10000110100,10000110010,11000010010,1100101e4,11110111010,11000010100,10001111010,10100111100,10010111100,10010011110,10111100100,10011110100,10011110010,11110100100,11110010100,11110010010,11011011110,11011110110,11110110110,10101111e3,10100011110,10001011110,10111101e3,10111100010,11110101e3,11110100010,10111011110,10111101110,11101011110,11110101110,11010000100,1101001e4,11010011100,1100011101011]},"8yty":function(e,t,n){"use strict"
var r,o=_interopRequireDefault(n("q1tI")),i=_interopRequireDefault(n("YsXA")),a=_interopRequireDefault(n("17x9"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var u=o.default.version.split(/[.-]/)
r="0"!==u[0]||"13"!==u[1]&&"12"!==u[1]?function getDOMNode(e){return e}:function getDOMNode(e){return e.getDOMNode()}
var s=function(e){function Barcode(e){var t
return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Barcode),(t=function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}(this,_getPrototypeOf(Barcode).call(this,e))).update=t.update.bind(_assertThisInitialized(t)),t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Barcode,o["default"].Component),function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Barcode,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(e){var t=this
return Object.keys(Barcode.propTypes).some(function(n){return t.props[n]!==e[n]})}},{key:"componentDidMount",value:function componentDidMount(){this.update()}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.update()}},{key:"update",value:function update(){var e=r(this.refs.renderElement)
try{new i.default(e,this.props.value,Object.assign({},this.props))}catch(e){window.console.error(e)}}},{key:"render",value:function render(){return"svg"===this.props.renderer?o.default.createElement("svg",{ref:"renderElement"}):"canvas"===this.props.renderer?o.default.createElement("canvas",{ref:"renderElement"}):"img"===this.props.renderer?o.default.createElement("img",{ref:"renderElement"}):void 0}}]),Barcode}()
s.propTypes={value:a.default.string.isRequired,renderer:a.default.string,format:a.default.string,width:a.default.number,height:a.default.number,displayValue:a.default.bool,fontOptions:a.default.string,font:a.default.string,textAlign:a.default.string,textPosition:a.default.string,textMargin:a.default.number,fontSize:a.default.number,background:a.default.string,lineColor:a.default.string,margin:a.default.number,marginTop:a.default.number,marginBottom:a.default.number,marginLeft:a.default.number,marginRight:a.default.number},s.defaultProps={format:"CODE128",renderer:"svg",width:2,height:100,displayValue:!0,fontOptions:"",font:"monospace",textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10},e.exports=s},"B9+t":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("PHz1"))
var i=function checksum(e){var t=e.substr(0,13).split("").map(function(e){return parseInt(e,10)}).reduce(function(e,t,n){return e+t*(3-n%2*2)},0)
return 10*Math.ceil(t/10)-t},a=function(e){function ITF14(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ITF14),-1!==e.search(/^[0-9]{13}$/)&&(e+=i(e)),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ITF14.__proto__||Object.getPrototypeOf(ITF14)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ITF14,o.default),r(ITF14,[{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9]{14}$/)&&+this.data[13]===i(this.data)}}]),ITF14}()
t.default=a},"Ek++":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("52Lf"))
var i=function(e){function MSI(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MSI),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MSI.__proto__||Object.getPrototypeOf(MSI)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MSI,o.default),r(MSI,[{key:"encode",value:function encode(){for(var e="110",t=0;t<this.data.length;t++){var n=parseInt(this.data[t]).toString(2)
n=addZeroes(n,4-n.length)
for(var r=0;r<n.length;r++)e+="0"==n[r]?"100":"110"}return{data:e+="1001",text:this.text}}},{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9]+$/)}}]),MSI}()
function addZeroes(e,t){for(var n=0;n<t;n++)e="0"+e
return e}t.default=i},"G6U+":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype)
var r=Object.getOwnPropertyDescriptor(e,t)
if(void 0===r){var o=Object.getPrototypeOf(e)
return null===o?void 0:get(o,t,n)}if("value"in r)return r.value
var i=r.get
return void 0!==i?i.call(n):void 0},i=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("vf6K"))
var a=function checksum(e){return(10-e.substr(0,7).split("").map(function(e){return+e}).reduce(function(e,t,n){return n%2?e+t:e+3*t},0)%10)%10},u=function(e){function EAN8(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EAN8),-1!==e.search(/^[0-9]{7}$/)&&(e+=a(e)),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EAN8.__proto__||Object.getPrototypeOf(EAN8)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EAN8,i.default),r(EAN8,[{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9]{8}$/)&&+this.data[7]===a(this.data)}},{key:"leftText",value:function leftText(){return o(EAN8.prototype.__proto__||Object.getPrototypeOf(EAN8.prototype),"leftText",this).call(this,0,4)}},{key:"leftEncode",value:function leftEncode(){var e=this.data.substr(0,4)
return o(EAN8.prototype.__proto__||Object.getPrototypeOf(EAN8.prototype),"leftEncode",this).call(this,e,"LLLL")}},{key:"rightText",value:function rightText(){return o(EAN8.prototype.__proto__||Object.getPrototypeOf(EAN8.prototype),"rightText",this).call(this,4,4)}},{key:"rightEncode",value:function rightEncode(){var e=this.data.substr(4,4)
return o(EAN8.prototype.__proto__||Object.getPrototypeOf(EAN8.prototype),"rightEncode",this).call(this,e,"RRRR")}}]),EAN8}()
t.default=u},JB6v:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.UPCE=t.UPC=t.EAN2=t.EAN5=t.EAN8=t.EAN13=void 0
var r=_interopRequireDefault(n("iaK4")),o=_interopRequireDefault(n("G6U+")),i=_interopRequireDefault(n("WD9T")),a=_interopRequireDefault(n("pdJe")),u=_interopRequireDefault(n("6LKm")),s=_interopRequireDefault(n("vph/"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.EAN13=r.default,t.EAN8=o.default,t.EAN5=i.default,t.EAN2=a.default,t.UPC=u.default,t.UPCE=s.default},Kkrk:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.START_BIN="1010",t.END_BIN="11101",t.BINARIES=["00110","10001","01001","11000","00101","10100","01100","00011","10010","01010"]},NJzS:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CODE39=void 0
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("52Lf"))
var i=function(e){function CODE39(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CODE39),e=e.toUpperCase(),t.mod43&&(e+=function getCharacter(e){return a[e]}(function mod43checksum(e){for(var t=0,n=0;n<e.length;n++)t+=characterValue(e[n])
return t%=43}(e))),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CODE39.__proto__||Object.getPrototypeOf(CODE39)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CODE39,o.default),r(CODE39,[{key:"encode",value:function encode(){for(var e=getEncoding("*"),t=0;t<this.data.length;t++)e+=getEncoding(this.data[t])+"0"
return{data:e+=getEncoding("*"),text:this.text}}},{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)}}]),CODE39}(),a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],u=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770]
function getEncoding(e){return function getBinary(e){return u[e].toString(2)}(characterValue(e))}function characterValue(e){return a.indexOf(e)}t.CODE39=i},PHz1:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n("Kkrk"),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("52Lf"))
var a=function(e){function ITF(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ITF),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ITF.__proto__||Object.getPrototypeOf(ITF)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ITF,i.default),r(ITF,[{key:"valid",value:function valid(){return-1!==this.data.search(/^([0-9]{2})+$/)}},{key:"encode",value:function encode(){var e=this,t=this.data.match(/.{2}/g).map(function(t){return e.encodePair(t)}).join("")
return{data:o.START_BIN+t+o.END_BIN,text:this.text}}},{key:"encodePair",value:function encodePair(e){var t=o.BINARIES[e[1]]
return o.BINARIES[e[0]].split("").map(function(e,n){return("1"===e?"111":"1")+("1"===t[n]?"000":"0")}).join("")}}]),ITF}()
t.default=a},RGHy:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("Ek++")),o=n("blPF")
var i=function(e){function MSI11(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MSI11),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MSI11.__proto__||Object.getPrototypeOf(MSI11)).call(this,e+(0,o.mod11)(e),t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MSI11,r.default),MSI11}()
t.default=i},RyeT:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("Ek++")),o=n("blPF")
var i=function(e){function MSI10(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MSI10),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MSI10.__proto__||Object.getPrototypeOf(MSI10)).call(this,e+(0,o.mod10)(e),t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MSI10,r.default),MSI10}()
t.default=i},SyMb:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("52Lf")),i=n("8I5R")
var a=function(e){function CODE128(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CODE128)
var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CODE128.__proto__||Object.getPrototypeOf(CODE128)).call(this,e.substring(1),t))
return n.bytes=e.split("").map(function(e){return e.charCodeAt(0)}),n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CODE128,o.default),r(CODE128,[{key:"valid",value:function valid(){return/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)}},{key:"encode",value:function encode(){var e=this.bytes,t=e.shift()-105,n=i.SET_BY_CODE[t]
if(void 0===n)throw new RangeError("The encoding does not start with a start character.")
!0===this.shouldEncodeAsEan128()&&e.unshift(i.FNC1)
var r=CODE128.next(e,1,n)
return{text:this.text===this.data?this.text.replace(/[^\x20-\x7E]/g,""):this.text,data:CODE128.getBar(t)+r.result+CODE128.getBar((r.checksum+t)%i.MODULO)+CODE128.getBar(i.STOP)}}},{key:"shouldEncodeAsEan128",value:function shouldEncodeAsEan128(){var e=this.options.ean128||!1
return"string"==typeof e&&(e="true"===e.toLowerCase()),e}}],[{key:"getBar",value:function getBar(e){return i.BARS[e]?i.BARS[e].toString():""}},{key:"correctIndex",value:function correctIndex(e,t){if(t===i.SET_A){var n=e.shift()
return n<32?n+64:n-32}return t===i.SET_B?e.shift()-32:10*(e.shift()-48)+e.shift()-48}},{key:"next",value:function next(e,t,n){if(!e.length)return{result:"",checksum:0}
var r=void 0,o=void 0
if(e[0]>=200){o=e.shift()-105
var a=i.SWAP[o]
void 0!==a?r=CODE128.next(e,t+1,a):(n!==i.SET_A&&n!==i.SET_B||o!==i.SHIFT||(e[0]=n===i.SET_A?e[0]>95?e[0]-96:e[0]:e[0]<32?e[0]+96:e[0]),r=CODE128.next(e,t+1,n))}else o=CODE128.correctIndex(e,n),r=CODE128.next(e,t+1,n)
var u=o*t
return{result:CODE128.getBar(o)+r.result,checksum:u+r.checksum}}}]),CODE128}()
t.default=a},TO02:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var o=function(){function ObjectRenderer(e,t,n){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ObjectRenderer),this.object=e,this.encodings=t,this.options=n}return r(ObjectRenderer,[{key:"render",value:function render(){this.object.encodings=this.encodings}}]),ObjectRenderer}()
t.default=o},UmEg:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function optionsFromStrings(e){var t=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"]
for(var n in t)t.hasOwnProperty(n)&&(n=t[n],"string"==typeof e[n]&&(e[n]=parseInt(e[n],10)))
"string"==typeof e.displayValue&&(e.displayValue="false"!=e.displayValue)
return e}},VyaE:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n("wkMt")
t.default=function encode(e,t,n){var o=e.split("").map(function(e,n){return r.BINARIES[t[n]]}).map(function(t,n){return t?t[e[n]]:""})
if(n){var i=e.length-1
o=o.map(function(e,t){return t<i?e+n:e})}return o.join("")}},WD9T:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n("wkMt"),i=_interopRequireDefault(n("VyaE")),a=_interopRequireDefault(n("52Lf"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function EAN5(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EAN5),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EAN5.__proto__||Object.getPrototypeOf(EAN5)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EAN5,a.default),r(EAN5,[{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9]{5}$/)}},{key:"encode",value:function encode(){var e=o.EAN5_STRUCTURE[function checksum(e){return e.split("").map(function(e){return+e}).reduce(function(e,t,n){return n%2?e+9*t:e+3*t},0)%10}(this.data)]
return{data:"1011"+(0,i.default)(this.data,e,"01"),text:this.text}}}]),EAN5}()
t.default=u},YsXA:function(e,t,n){"use strict"
var r=_interopRequireDefault(n("/4Rl")),o=_interopRequireDefault(n("/XyT")),i=_interopRequireDefault(n("orCN")),a=_interopRequireDefault(n("efHi")),u=_interopRequireDefault(n("sdgK")),s=_interopRequireDefault(n("UmEg")),c=_interopRequireDefault(n("vYpS")),f=n("3KJX"),l=_interopRequireDefault(n("yjKC"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var p=function API(){},d=function JsBarcode(e,t,n){var r=new p
if(void 0===e)throw Error("No element to render on was provided.")
return r._renderProperties=(0,u.default)(e),r._encodings=[],r._options=l.default,r._errorHandler=new c.default(r),void 0!==t&&((n=n||{}).format||(n.format=autoSelectBarcode()),r.options(n)[n.format](t,n).render()),r}
for(var h in d.getModule=function(e){return r.default[e]},r.default)r.default.hasOwnProperty(h)&&registerBarcode(r.default,h)
function registerBarcode(e,t){p.prototype[t]=p.prototype[t.toUpperCase()]=p.prototype[t.toLowerCase()]=function(n,r){var i=this
return i._errorHandler.wrapBarcodeCall(function(){r.text=void 0===r.text?void 0:""+r.text
var a=(0,o.default)(i._options,r)
a=(0,s.default)(a)
var u=e[t],c=encode(n,u,a)
return i._encodings.push(c),i})}}function encode(e,t,n){var r=new t(e=""+e,n)
if(!r.valid())throw new f.InvalidInputException(r.constructor.name,e)
var a=r.encode()
a=(0,i.default)(a)
for(var u=0;u<a.length;u++)a[u].options=(0,o.default)(n,a[u].options)
return a}function autoSelectBarcode(){return r.default.CODE128?"CODE128":Object.keys(r.default)[0]}function render(e,t,n){t=(0,i.default)(t)
for(var r=0;r<t.length;r++)t[r].options=(0,o.default)(n,t[r].options),(0,a.default)(t[r].options);(0,a.default)(n),new(0,e.renderer)(e.element,t,n).render(),e.afterRender&&e.afterRender()}p.prototype.options=function(e){return this._options=(0,o.default)(this._options,e),this},p.prototype.blank=function(e){var t=new Array(e+1).join("0")
return this._encodings.push({data:t}),this},p.prototype.init=function(){var e
if(this._renderProperties)for(var t in Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]),this._renderProperties){e=this._renderProperties[t]
var n=(0,o.default)(this._options,e.options)
"auto"==n.format&&(n.format=autoSelectBarcode()),this._errorHandler.wrapBarcodeCall(function(){var t=encode(n.value,r.default[n.format.toUpperCase()],n)
render(e,t,n)})}},p.prototype.render=function(){if(!this._renderProperties)throw new f.NoElementException
if(Array.isArray(this._renderProperties))for(var e=0;e<this._renderProperties.length;e++)render(this._renderProperties[e],this._encodings,this._options)
else render(this._renderProperties,this._encodings,this._options)
return this},p.prototype._defaults=l.default,"undefined"!=typeof window&&(window.JsBarcode=d),"undefined"!=typeof jQuery&&(jQuery.fn.JsBarcode=function(e,t){var n=[]
return jQuery(this).each(function(){n.push(this)}),d(n,e,t)}),e.exports=d},blPF:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mod10=function mod10(e){for(var t=0,n=0;n<e.length;n++){var r=parseInt(e[n]);(n+e.length)%2==0?t+=r:t+=2*r%10+Math.floor(2*r/10)}return(10-t%10)%10},t.mod11=function mod11(e){for(var t=0,n=[2,3,4,5,6,7],r=0;r<e.length;r++){var o=parseInt(e[e.length-1-r])
t+=n[r%n.length]*o}return(11-t%11)%11}},byS7:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=_interopRequireDefault(n("SyMb")),o=_interopRequireDefault(n("u12M"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function CODE128AUTO(e,t){if(function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CODE128AUTO),/^[\x00-\x7F\xC8-\xD3]+$/.test(e))var n=_possibleConstructorReturn(this,(CODE128AUTO.__proto__||Object.getPrototypeOf(CODE128AUTO)).call(this,(0,o.default)(e),t))
else n=_possibleConstructorReturn(this,(CODE128AUTO.__proto__||Object.getPrototypeOf(CODE128AUTO)).call(this,e,t))
return _possibleConstructorReturn(n)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CODE128AUTO,r.default),CODE128AUTO}()
t.default=i},cLAh:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("SyMb")),i=n("8I5R")
var a=function(e){function CODE128B(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CODE128B),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CODE128B.__proto__||Object.getPrototypeOf(CODE128B)).call(this,i.B_START_CHAR+e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CODE128B,o.default),r(CODE128B,[{key:"valid",value:function valid(){return new RegExp("^"+i.B_CHARS+"+$").test(this.data)}}]),CODE128B}()
t.default=a},cho7:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("/XyT")),i=n("q1t9")
var a=function(){function CanvasRenderer(e,t,n){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CanvasRenderer),this.canvas=e,this.encodings=t,this.options=n}return r(CanvasRenderer,[{key:"render",value:function render(){if(!this.canvas.getContext)throw new Error("The browser does not support canvas.")
this.prepareCanvas()
for(var e=0;e<this.encodings.length;e++){var t=(0,o.default)(this.options,this.encodings[e].options)
this.drawCanvasBarcode(t,this.encodings[e]),this.drawCanvasText(t,this.encodings[e]),this.moveCanvasDrawing(this.encodings[e])}this.restoreCanvas()}},{key:"prepareCanvas",value:function prepareCanvas(){var e=this.canvas.getContext("2d")
e.save(),(0,i.calculateEncodingAttributes)(this.encodings,this.options,e)
var t=(0,i.getTotalWidthOfEncodings)(this.encodings),n=(0,i.getMaximumHeightOfEncodings)(this.encodings)
this.canvas.width=t+this.options.marginLeft+this.options.marginRight,this.canvas.height=n,e.clearRect(0,0,this.canvas.width,this.canvas.height),this.options.background&&(e.fillStyle=this.options.background,e.fillRect(0,0,this.canvas.width,this.canvas.height)),e.translate(this.options.marginLeft,0)}},{key:"drawCanvasBarcode",value:function drawCanvasBarcode(e,t){var n,r=this.canvas.getContext("2d"),o=t.data
n="top"==e.textPosition?e.marginTop+e.fontSize+e.textMargin:e.marginTop,r.fillStyle=e.lineColor
for(var i=0;i<o.length;i++){var a=i*e.width+t.barcodePadding
"1"===o[i]?r.fillRect(a,n,e.width,e.height):o[i]&&r.fillRect(a,n,e.width,e.height*o[i])}}},{key:"drawCanvasText",value:function drawCanvasText(e,t){var n,r,o=this.canvas.getContext("2d"),i=e.fontOptions+" "+e.fontSize+"px "+e.font
e.displayValue&&(r="top"==e.textPosition?e.marginTop+e.fontSize-e.textMargin:e.height+e.textMargin+e.marginTop+e.fontSize,o.font=i,"left"==e.textAlign||t.barcodePadding>0?(n=0,o.textAlign="left"):"right"==e.textAlign?(n=t.width-1,o.textAlign="right"):(n=t.width/2,o.textAlign="center"),o.fillText(t.text,n,r))}},{key:"moveCanvasDrawing",value:function moveCanvasDrawing(e){this.canvas.getContext("2d").translate(e.width,0)}},{key:"restoreCanvas",value:function restoreCanvas(){this.canvas.getContext("2d").restore()}}]),CanvasRenderer}()
t.default=a},dSvQ:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=_interopRequireDefault(n("cho7")),o=_interopRequireDefault(n("vl4V")),i=_interopRequireDefault(n("TO02"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default={CanvasRenderer:r.default,SVGRenderer:o.default,ObjectRenderer:i.default}},efHi:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function fixOptions(e){return e.marginTop=e.marginTop||e.margin,e.marginBottom=e.marginBottom||e.margin,e.marginRight=e.marginRight||e.margin,e.marginLeft=e.marginLeft||e.margin,e}},fLmL:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.pharmacode=void 0
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("52Lf"))
var i=function(e){function pharmacode(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,pharmacode)
var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(pharmacode.__proto__||Object.getPrototypeOf(pharmacode)).call(this,e,t))
return n.number=parseInt(e,10),n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(pharmacode,o.default),r(pharmacode,[{key:"encode",value:function encode(){for(var e=this.number,t="";!isNaN(e)&&0!=e;)e%2==0?(t="11100"+t,e=(e-2)/2):(t="100"+t,e=(e-1)/2)
return{data:t=t.slice(0,-2),text:this.text}}},{key:"valid",value:function valid(){return this.number>=3&&this.number<=131070}}]),pharmacode}()
t.pharmacode=i},"gF+w":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("Ek++")),o=n("blPF")
var i=function(e){function MSI1110(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MSI1110),e+=(0,o.mod11)(e),e+=(0,o.mod10)(e),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MSI1110.__proto__||Object.getPrototypeOf(MSI1110)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MSI1110,r.default),MSI1110}()
t.default=i},iGFM:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("Ek++")),o=n("blPF")
var i=function(e){function MSI1010(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MSI1010),e+=(0,o.mod10)(e),e+=(0,o.mod10)(e),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(MSI1010.__proto__||Object.getPrototypeOf(MSI1010)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(MSI1010,r.default),MSI1010}()
t.default=i},iaK4:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype)
var r=Object.getOwnPropertyDescriptor(e,t)
if(void 0===r){var o=Object.getPrototypeOf(e)
return null===o?void 0:get(o,t,n)}if("value"in r)return r.value
var i=r.get
return void 0!==i?i.call(n):void 0},i=n("wkMt"),a=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("vf6K"))
var u=function checksum(e){return(10-e.substr(0,12).split("").map(function(e){return+e}).reduce(function(e,t,n){return n%2?e+3*t:e+t},0)%10)%10},s=function(e){function EAN13(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EAN13),-1!==e.search(/^[0-9]{12}$/)&&(e+=u(e))
var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EAN13.__proto__||Object.getPrototypeOf(EAN13)).call(this,e,t))
return n.lastChar=t.lastChar,n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EAN13,a.default),r(EAN13,[{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9]{13}$/)&&+this.data[12]===u(this.data)}},{key:"leftText",value:function leftText(){return o(EAN13.prototype.__proto__||Object.getPrototypeOf(EAN13.prototype),"leftText",this).call(this,1,6)}},{key:"leftEncode",value:function leftEncode(){var e=this.data.substr(1,6),t=i.EAN13_STRUCTURE[this.data[0]]
return o(EAN13.prototype.__proto__||Object.getPrototypeOf(EAN13.prototype),"leftEncode",this).call(this,e,t)}},{key:"rightText",value:function rightText(){return o(EAN13.prototype.__proto__||Object.getPrototypeOf(EAN13.prototype),"rightText",this).call(this,7,6)}},{key:"rightEncode",value:function rightEncode(){var e=this.data.substr(7,6)
return o(EAN13.prototype.__proto__||Object.getPrototypeOf(EAN13.prototype),"rightEncode",this).call(this,e,"RRRRRR")}},{key:"encodeGuarded",value:function encodeGuarded(){var e=o(EAN13.prototype.__proto__||Object.getPrototypeOf(EAN13.prototype),"encodeGuarded",this).call(this)
return this.options.displayValue&&(e.unshift({data:"000000000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),this.options.lastChar&&(e.push({data:"00"}),e.push({data:"00000",text:this.options.lastChar,options:{fontSize:this.fontSize}}))),e}}]),EAN13}()
t.default=s},jlE0:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MSI1110=t.MSI1010=t.MSI11=t.MSI10=t.MSI=void 0
var r=_interopRequireDefault(n("Ek++")),o=_interopRequireDefault(n("RyeT")),i=_interopRequireDefault(n("RGHy")),a=_interopRequireDefault(n("iGFM")),u=_interopRequireDefault(n("gF+w"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.MSI=r.default,t.MSI10=o.default,t.MSI11=i.default,t.MSI1010=a.default,t.MSI1110=u.default},"n/pZ":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ITF14=t.ITF=void 0
var r=_interopRequireDefault(n("PHz1")),o=_interopRequireDefault(n("B9+t"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.ITF=r.default,t.ITF14=o.default},orCN:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function linearizeEncodings(e){var t=[]
return function nextLevel(e){if(Array.isArray(e))for(var n=0;n<e.length;n++)nextLevel(e[n])
else e.text=e.text||"",e.data=e.data||"",t.push(e)}(e),t}},pdJe:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n("wkMt"),i=_interopRequireDefault(n("VyaE")),a=_interopRequireDefault(n("52Lf"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function EAN2(e,t){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EAN2),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EAN2.__proto__||Object.getPrototypeOf(EAN2)).call(this,e,t))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EAN2,a.default),r(EAN2,[{key:"valid",value:function valid(){return-1!==this.data.search(/^[0-9]{2}$/)}},{key:"encode",value:function encode(){var e=o.EAN2_STRUCTURE[parseInt(this.data)%4]
return{data:"1011"+(0,i.default)(this.data,e,"01"),text:this.text}}}]),EAN2}()
t.default=u},q1t9:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getTotalWidthOfEncodings=t.calculateEncodingAttributes=t.getBarcodePadding=t.getEncodingHeight=t.getMaximumHeightOfEncodings=void 0
var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("/XyT"))
function getEncodingHeight(e,t){return t.height+(t.displayValue&&e.text.length>0?t.fontSize+t.textMargin:0)+t.marginTop+t.marginBottom}function getBarcodePadding(e,t,n){if(n.displayValue&&t<e){if("center"==n.textAlign)return Math.floor((e-t)/2)
if("left"==n.textAlign)return 0
if("right"==n.textAlign)return Math.floor(e-t)}return 0}function messureText(e,t,n){var r
if(n)r=n
else{if("undefined"==typeof document)return 0
r=document.createElement("canvas").getContext("2d")}r.font=t.fontOptions+" "+t.fontSize+"px "+t.font
var o=r.measureText(e)
return o?o.width:0}t.getMaximumHeightOfEncodings=function getMaximumHeightOfEncodings(e){for(var t=0,n=0;n<e.length;n++)e[n].height>t&&(t=e[n].height)
return t},t.getEncodingHeight=getEncodingHeight,t.getBarcodePadding=getBarcodePadding,t.calculateEncodingAttributes=function calculateEncodingAttributes(e,t,n){for(var o=0;o<e.length;o++){var i,a=e[o],u=(0,r.default)(t,a.options)
i=u.displayValue?messureText(a.text,u,n):0
var s=a.data.length*u.width
a.width=Math.ceil(Math.max(i,s)),a.height=getEncodingHeight(a,u),a.barcodePadding=getBarcodePadding(i,s,u)}},t.getTotalWidthOfEncodings=function getTotalWidthOfEncodings(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].width
return t}},qrNs:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=_interopRequireDefault(n("UmEg")),o=_interopRequireDefault(n("yjKC"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=function getOptionsFromElement(e){var t={}
for(var n in o.default)o.default.hasOwnProperty(n)&&(e.hasAttribute("jsbarcode-"+n.toLowerCase())&&(t[n]=e.getAttribute("jsbarcode-"+n.toLowerCase())),e.hasAttribute("data-"+n.toLowerCase())&&(t[n]=e.getAttribute("data-"+n.toLowerCase())))
return t.value=e.getAttribute("jsbarcode-value")||e.getAttribute("data-value"),t=(0,r.default)(t)}},sdgK:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=_interopRequireDefault(n("qrNs")),i=_interopRequireDefault(n("dSvQ")),a=n("3KJX")
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getRenderProperties(e){if("string"==typeof e)return function querySelectedRenderProperties(e){var t=document.querySelectorAll(e)
if(0===t.length)return
for(var n=[],r=0;r<t.length;r++)n.push(getRenderProperties(t[r]))
return n}(e)
if(Array.isArray(e)){for(var t=[],n=0;n<e.length;n++)t.push(getRenderProperties(e[n]))
return t}if("undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLImageElement)return function newCanvasRenderProperties(e){var t=document.createElement("canvas")
return{element:t,options:(0,o.default)(e),renderer:i.default.CanvasRenderer,afterRender:function afterRender(){e.setAttribute("src",t.toDataURL())}}}(e)
if(e&&e.nodeName&&"svg"===e.nodeName.toLowerCase()||"undefined"!=typeof SVGElement&&e instanceof SVGElement)return{element:e,options:(0,o.default)(e),renderer:i.default.SVGRenderer}
if("undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement)return{element:e,options:(0,o.default)(e),renderer:i.default.CanvasRenderer}
if(e&&e.getContext)return{element:e,renderer:i.default.CanvasRenderer}
if(e&&"object"===(void 0===e?"undefined":r(e))&&!e.nodeName)return{element:e,renderer:i.default.ObjectRenderer}
throw new a.InvalidElementException}t.default=getRenderProperties},u12M:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n("8I5R"),o=function matchSetALength(e){return e.match(new RegExp("^"+r.A_CHARS+"*"))[0].length},i=function matchSetBLength(e){return e.match(new RegExp("^"+r.B_CHARS+"*"))[0].length},a=function matchSetC(e){return e.match(new RegExp("^"+r.C_CHARS+"*"))[0]}
function autoSelectFromAB(e,t){var n=t?r.A_CHARS:r.B_CHARS,o=e.match(new RegExp("^("+n+"+?)(([0-9]{2}){2,})([^0-9]|$)"))
if(o)return o[1]+String.fromCharCode(204)+autoSelectFromC(e.substring(o[1].length))
var i=e.match(new RegExp("^"+n+"+"))[0]
return i.length===e.length?e:i+String.fromCharCode(t?205:206)+autoSelectFromAB(e.substring(i.length),!t)}function autoSelectFromC(e){var t=a(e),n=t.length
if(n===e.length)return e
e=e.substring(n)
var r=o(e)>=i(e)
return t+String.fromCharCode(r?206:205)+autoSelectFromAB(e,r)}t.default=function(e){var t=void 0
if(a(e).length>=2)t=r.C_START_CHAR+autoSelectFromC(e)
else{var n=o(e)>i(e)
t=(n?r.A_START_CHAR:r.B_START_CHAR)+autoSelectFromAB(e,n)}return t.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,function(e,t){return String.fromCharCode(203)+t})}},vYpS:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()
var o=function(){function ErrorHandler(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ErrorHandler),this.api=e}return r(ErrorHandler,[{key:"handleCatch",value:function handleCatch(e){if("InvalidInputException"!==e.name)throw e
if(this.api._options.valid===this.api._defaults.valid)throw e.message
this.api._options.valid(!1),this.api.render=function(){}}},{key:"wrapBarcodeCall",value:function wrapBarcodeCall(e){try{var t=e.apply(void 0,arguments)
return this.api._options.valid(!0),t}catch(e){return this.handleCatch(e),this.api}}}]),ErrorHandler}()
t.default=o},vf6K:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n("wkMt"),i=_interopRequireDefault(n("VyaE")),a=_interopRequireDefault(n("52Lf"))
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function EAN(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,EAN)
var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(EAN.__proto__||Object.getPrototypeOf(EAN)).call(this,e,t))
return n.fontSize=!t.flat&&t.fontSize>10*t.width?10*t.width:t.fontSize,n.guardHeight=t.height+n.fontSize/2+t.textMargin,n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(EAN,a.default),r(EAN,[{key:"encode",value:function encode(){return this.options.flat?this.encodeFlat():this.encodeGuarded()}},{key:"leftText",value:function leftText(e,t){return this.text.substr(e,t)}},{key:"leftEncode",value:function leftEncode(e,t){return(0,i.default)(e,t)}},{key:"rightText",value:function rightText(e,t){return this.text.substr(e,t)}},{key:"rightEncode",value:function rightEncode(e,t){return(0,i.default)(e,t)}},{key:"encodeGuarded",value:function encodeGuarded(){var e={fontSize:this.fontSize},t={height:this.guardHeight}
return[{data:o.SIDE_BIN,options:t},{data:this.leftEncode(),text:this.leftText(),options:e},{data:o.MIDDLE_BIN,options:t},{data:this.rightEncode(),text:this.rightText(),options:e},{data:o.SIDE_BIN,options:t}]}},{key:"encodeFlat",value:function encodeFlat(){return{data:[o.SIDE_BIN,this.leftEncode(),o.MIDDLE_BIN,this.rightEncode(),o.SIDE_BIN].join(""),text:this.text}}}]),EAN}()
t.default=u},vl4V:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("/XyT")),i=n("q1t9")
var a="http://www.w3.org/2000/svg",u=function(){function SVGRenderer(e,t,n){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SVGRenderer),this.svg=e,this.encodings=t,this.options=n,this.document=n.xmlDocument||document}return r(SVGRenderer,[{key:"render",value:function render(){var e=this.options.marginLeft
this.prepareSVG()
for(var t=0;t<this.encodings.length;t++){var n=this.encodings[t],r=(0,o.default)(this.options,n.options),i=this.createGroup(e,r.marginTop,this.svg)
this.setGroupOptions(i,r),this.drawSvgBarcode(i,r,n),this.drawSVGText(i,r,n),e+=n.width}}},{key:"prepareSVG",value:function prepareSVG(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);(0,i.calculateEncodingAttributes)(this.encodings,this.options)
var e=(0,i.getTotalWidthOfEncodings)(this.encodings),t=(0,i.getMaximumHeightOfEncodings)(this.encodings),n=e+this.options.marginLeft+this.options.marginRight
this.setSvgAttributes(n,t),this.options.background&&this.drawRect(0,0,n,t,this.svg).setAttribute("style","fill:"+this.options.background+";")}},{key:"drawSvgBarcode",value:function drawSvgBarcode(e,t,n){var r,o=n.data
r="top"==t.textPosition?t.fontSize+t.textMargin:0
for(var i=0,a=0,u=0;u<o.length;u++)a=u*t.width+n.barcodePadding,"1"===o[u]?i++:i>0&&(this.drawRect(a-t.width*i,r,t.width*i,t.height,e),i=0)
i>0&&this.drawRect(a-t.width*(i-1),r,t.width*i,t.height,e)}},{key:"drawSVGText",value:function drawSVGText(e,t,n){var r,o,i=this.document.createElementNS(a,"text")
t.displayValue&&(i.setAttribute("style","font:"+t.fontOptions+" "+t.fontSize+"px "+t.font),o="top"==t.textPosition?t.fontSize-t.textMargin:t.height+t.textMargin+t.fontSize,"left"==t.textAlign||n.barcodePadding>0?(r=0,i.setAttribute("text-anchor","start")):"right"==t.textAlign?(r=n.width-1,i.setAttribute("text-anchor","end")):(r=n.width/2,i.setAttribute("text-anchor","middle")),i.setAttribute("x",r),i.setAttribute("y",o),i.appendChild(this.document.createTextNode(n.text)),e.appendChild(i))}},{key:"setSvgAttributes",value:function setSvgAttributes(e,t){var n=this.svg
n.setAttribute("width",e+"px"),n.setAttribute("height",t+"px"),n.setAttribute("x","0px"),n.setAttribute("y","0px"),n.setAttribute("viewBox","0 0 "+e+" "+t),n.setAttribute("xmlns",a),n.setAttribute("version","1.1"),n.setAttribute("style","transform: translate(0,0)")}},{key:"createGroup",value:function createGroup(e,t,n){var r=this.document.createElementNS(a,"g")
return r.setAttribute("transform","translate("+e+", "+t+")"),n.appendChild(r),r}},{key:"setGroupOptions",value:function setGroupOptions(e,t){e.setAttribute("style","fill:"+t.lineColor+";")}},{key:"drawRect",value:function drawRect(e,t,n,r,o){var i=this.document.createElementNS(a,"rect")
return i.setAttribute("x",e),i.setAttribute("y",t),i.setAttribute("width",n),i.setAttribute("height",r),o.appendChild(i),i}}]),SVGRenderer}()
t.default=u},"vph/":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n("VyaE")),i=_interopRequireDefault(n("52Lf")),a=n("6LKm")
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["XX00000XXX","XX10000XXX","XX20000XXX","XXX00000XX","XXXX00000X","XXXXX00005","XXXXX00006","XXXXX00007","XXXXX00008","XXXXX00009"],s=[["EEEOOO","OOOEEE"],["EEOEOO","OOEOEE"],["EEOOEO","OOEEOE"],["EEOOOE","OOEEEO"],["EOEEOO","OEOOEE"],["EOOEEO","OEEOOE"],["EOOOEE","OEEEOO"],["EOEOEO","OEOEOE"],["EOEOOE","OEOEEO"],["EOOEOE","OEEOEO"]],c=function(e){function UPCE(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UPCE)
var n=_possibleConstructorReturn(this,(UPCE.__proto__||Object.getPrototypeOf(UPCE)).call(this,e,t))
if(n.isValid=!1,-1!==e.search(/^[0-9]{6}$/))n.middleDigits=e,n.upcA=expandToUPCA(e,"0"),n.text=t.text||""+n.upcA[0]+e+n.upcA[n.upcA.length-1],n.isValid=!0
else{if(-1===e.search(/^[01][0-9]{7}$/))return _possibleConstructorReturn(n)
if(n.middleDigits=e.substring(1,e.length-1),n.upcA=expandToUPCA(n.middleDigits,e[0]),n.upcA[n.upcA.length-1]!==e[e.length-1])return _possibleConstructorReturn(n)
n.isValid=!0}return n.displayValue=t.displayValue,t.fontSize>10*t.width?n.fontSize=10*t.width:n.fontSize=t.fontSize,n.guardHeight=t.height+n.fontSize/2+t.textMargin,n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UPCE,i.default),r(UPCE,[{key:"valid",value:function valid(){return this.isValid}},{key:"encode",value:function encode(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function flatEncoding(){var e=""
return e+="101",e+=this.encodeMiddleDigits(),{data:e+="010101",text:this.text}}},{key:"guardedEncoding",value:function guardedEncoding(){var e=[]
return this.displayValue&&e.push({data:"00000000",text:this.text[0],options:{textAlign:"left",fontSize:this.fontSize}}),e.push({data:"101",options:{height:this.guardHeight}}),e.push({data:this.encodeMiddleDigits(),text:this.text.substring(1,7),options:{fontSize:this.fontSize}}),e.push({data:"010101",options:{height:this.guardHeight}}),this.displayValue&&e.push({data:"00000000",text:this.text[7],options:{textAlign:"right",fontSize:this.fontSize}}),e}},{key:"encodeMiddleDigits",value:function encodeMiddleDigits(){var e=this.upcA[0],t=this.upcA[this.upcA.length-1],n=s[parseInt(t)][parseInt(e)]
return(0,o.default)(this.middleDigits,n)}}]),UPCE}()
function expandToUPCA(e,t){for(var n=parseInt(e[e.length-1]),r=u[n],o="",i=0,s=0;s<r.length;s++){var c=r[s]
o+="X"===c?e[i++]:c}return""+(o=""+t+o)+(0,a.checksum)(o)}t.default=c},wXsw:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.codabar=void 0
var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(n("52Lf"))
var i=function(e){function codabar(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,codabar),0===e.search(/^[0-9\-\$\:\.\+\/]+$/)&&(e="A"+e+"A")
var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(codabar.__proto__||Object.getPrototypeOf(codabar)).call(this,e.toUpperCase(),t))
return n.text=n.options.text||n.text.replace(/[A-D]/g,""),n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(codabar,o.default),r(codabar,[{key:"valid",value:function valid(){return-1!==this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)}},{key:"encode",value:function encode(){for(var e=[],t=this.getEncodings(),n=0;n<this.data.length;n++)e.push(t[this.data.charAt(n)]),n!==this.data.length-1&&e.push("0")
return{text:this.text,data:e.join("")}}},{key:"getEncodings",value:function getEncodings(){return{0:"101010011",1:"101011001",2:"101001011",3:"110010101",4:"101101001",5:"110101001",6:"100101011",7:"100101101",8:"100110101",9:"110100101","-":"101001101",$:"101100101",":":"1101011011","/":"1101101011",".":"1101101101","+":"1011011011",A:"1011001001",B:"1001001011",C:"1010010011",D:"1010011001"}}}]),codabar}()
t.codabar=i},wkMt:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.SIDE_BIN="101",t.MIDDLE_BIN="01010",t.BINARIES={L:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],G:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],R:["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"],O:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],E:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]},t.EAN2_STRUCTURE=["LL","LG","GL","GG"],t.EAN5_STRUCTURE=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"],t.EAN13_STRUCTURE=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"]},yjKC:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",text:void 0,textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function valid(){}}
t.default=r}}])
