export function drawSimpleTriangle(gl) {
  // 1. Set Coordinates
  const vertexData = [0, 1, 0, 1, -1, 0, -1, -1, 0];

  // 2. Create Buffer
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // Bind buffer to GL context

  // 3. Load Vertex Data to Buffer
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
  // gl.STATIC_DRAW - how often Vertex Data Changes

  // 4. Create Vertex Shader
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  const vertexAttributeName = "position";

  gl.shaderSource(
    vertexShader,
    `
    attribute vec3 ${vertexAttributeName};
    void main() {
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
    void main() {
        gl_FragColor = vec4(0, 1, 1, 1);
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
  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
  gl.useProgram(program);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
