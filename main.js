import "./style.css";
import { drawSimpleTriangle, drawColorTriangle, drawMoveTriangle } from "./draw";

const canvas1 = document.querySelector(".canvas-1");
const canvas2 = document.querySelector(".canvas-2");
const canvas3 = document.querySelector(".canvas-3");
/** @type {WebGLRenderingContext} */
const gl1 = canvas1.getContext("webgl");
const gl2 = canvas2.getContext("webgl");
const gl3 = canvas2.getContext("webgl");

// 1.
drawSimpleTriangle(gl1);

// 2.
drawColorTriangle(gl2);

// 3.
drawMoveTriangle(gl3);
