export function drawColorTriangle(gl) {
  // 1. Set Coordinates
  const vertexData = [0, 1, 0, 1, -1, 0, -1, -1, 0];
  const colorData = [
    1, 0, 0, 0, 1, 0, 0, 0, 1];

  // 2. Create Buffer
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // Bind buffer to GL context
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

  // 3. Color Buffer
  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer); // Bind buffer to GL context
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

  // 4. Create Vertex Shader
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  const vertexAttributeName = "position";

  gl.shaderSource(
    vertexShader,
    `
    precision mediump float;

    attribute vec3 ${vertexAttributeName};
    attribute vec3 color;
    varying vec3 vColor;
    
    void main() {
      vColor = color;
      gl_Position = vec4(${vertexAttributeName}, 1);
    }
    `
  );

  gl.compileShader(vertexShader);

  // 5. Create Fragment Shader
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(
    fragmentShader,
    `
    precision mediump float;
    varying vec3 vColor;

    void main() {
        gl_FragColor = vec4(vColor, 1);
    }
    `
  );

  gl.compileShader(fragmentShader);

  // 6. Create Program
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  // 7. Enable Vertex Attributes
  const positionLocation = gl.getAttribLocation(program, vertexAttributeName);
  gl.enableVertexAttribArray(positionLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

  const colorLocation = gl.getAttribLocation(program, 'color');
  gl.enableVertexAttribArray(colorLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
  
  gl.useProgram(program);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
