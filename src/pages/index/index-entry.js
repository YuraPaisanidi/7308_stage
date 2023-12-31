require("./../../global/js/global-entry")

import "./index.scss"
import gsap from "gsap"

/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/elem1.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/elem2.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/elem3.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/elem4.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/elem5.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/elem6.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/elem7.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/sidebar.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/analytics.svg")
// console.log(svgContent);

require('./app')