import "./style.css";
import { drawSimpleTriangle } from "./drawSimpleTriangle";
import { drawColorTriangle } from "./drawColorTriangle";

const canvas1 = document.querySelector(".canvas-1");
const canvas2 = document.querySelector(".canvas-2");
/** @type {WebGLRenderingContext} */
const gl1 = canvas1.getContext("webgl");
const gl2 = canvas2.getContext("webgl");

// 1.
drawSimpleTriangle(gl1);

// 2. 
drawColorTriangle(gl2);