const _0x464c09 = function () {
  let _0x451913 = true;
  return function (_0x258426, _0x4b7b8d) {
    const _0x1bb18e = _0x451913 ? function () {
      if (_0x4b7b8d) {
        const _0x2d8886 = _0x4b7b8d.apply(_0x258426, arguments);
        _0x4b7b8d = null;
        return _0x2d8886;
      }
    } : function () {};
    _0x451913 = false;
    return _0x1bb18e;
  };
}();
const _0x4c494b = _0x464c09(this, function () {
  return _0x4c494b.toString().search("(((.+)+)+)+$").toString().constructor(_0x4c494b).search("(((.+)+)+)+$");
});
_0x4c494b();
window.addEventListener("load", handleWindowLoadEvent);
var _0x31840e;
var _0x53c5a8;
function handleWindowLoadEvent() {
  _0x31840e = new _0x36ee9a("canvas", 0x0, 0x0, "\n  attribute vec3 position;\n  uniform   mat4 mvpMatrix;\n  varying   vec2 vPosition;\n\n  void main(void){\n      gl_Position = mvpMatrix * vec4(position, 1.0);\n      vPosition = position.xy;\n  }\n  ", "\n#ifdef GL_ES\nprecision mediump float;\n#endif            \n\nuniform float u_time;\nuniform vec2 u_resolution;\nvarying vec2 vPosition;\n\nvec3 hash(vec2 seed){\n    vec3 p3 = fract(float(seed.x + seed.y*86.) * vec3(.1051, .1020, .0983));\n\tp3 += dot(p3, p3.yzx + 33.33);\n    return fract(p3);\n}\n\nvec3 layer(float scale, vec2 uv, float time){\n    // uv coord in cell\n    vec2 scaled_uv = uv * scale - 0.5;\n    vec2 uv0 = fract( scaled_uv ) - 0.5;\n    // cell id\n    vec2 cell_id = scaled_uv - fract(scaled_uv);\n    \n    \n    vec3 col = vec3(0);\n    float speed = 1.5;\n    // distance to a spinning random point in the cell (also surrounding cells)\n    vec3 seed = hash(cell_id);\n\n    float radiance = seed.x + time * seed.y;\n    vec2 center_of_star = vec2(sin(radiance), cos(radiance))*0.3;\n\n    // radial distort effect for star shine\n    vec2 v_to_star = uv0 - center_of_star;\n    float star_radiance = atan(v_to_star.x/v_to_star.y);\n    float star_spark_1 = sin(star_radiance*14.+radiance*6.);\n    float star_spark_2 = sin(star_radiance*8.-radiance*2.);\n    float stars = length(v_to_star) * (5.+star_spark_1+star_spark_2) * 0.03;\n    col += smoothstep(length(seed) * 0.01, 0., stars);\n    return col;\n}\nvoid main()\n{    // center global uv from -1 to 1\n    vec2 virtual_resolution = vec2(2.0, 2.0);\n    vec2 uv = (vPosition * 2. - virtual_resolution.xy) / virtual_resolution.y;\n    vec3 col = vec3(0.);//vColor.xyz;\n    \n    const float layer_count = 6.5;\n    for(float i = 0.0; i < layer_count; i+=1.){\n        float rotate_speed = u_time*0.4;\n        float scale = mod(i - rotate_speed, layer_count)*1.5;\n        vec2 offseted_uv = uv + vec2(sin(rotate_speed), cos(rotate_speed));\n        vec3 layer_col = layer(scale, offseted_uv, u_time + i*1.5);\n        \n        // we want the star to smoothly show up\n        float max_scale = layer_count * 1.5;\n        float color_amp = smoothstep(0., 1., smoothstep(max_scale, 0., scale));\n        col += layer_col * color_amp;\n    }\n    // blue background\n    col += vec3(0., 0., -0.15) * (uv.y - 0.7) * pow(length(uv), 0.5);\n    gl_FragColor = vec4(col, 1.);\n}\n  ", true);
  _0x31840e.render();
  _0x53c5a8 = new _0x36ee9a("canvas-calc", 0x28a, 0x28a, "\n  attribute vec3 position;\n  varying   float owO;\n  \n  void main(void){\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n      owO = position.z;\n  }\n  ", "\n#ifdef GL_ES\nprecision highp float;\n#endif            \nvarying float owO;\n#define OvO 255.0\n#define Ovo 128.0\n#define OVO 23.0\n\nfloat OwO (float Owo, float OWO, float owO) { \n    OWO = floor(OWO + 0.5); owO = floor(owO + 0.5); \n    return mod(floor((floor(Owo) + 0.5) / exp2(OWO)), floor(1.0*exp2(owO - OWO) + 0.5)); \n}\nvec4 oWo (float Ow0) { \n    if (Ow0 == 0.0) return vec4(0.0); \n    float Owo = Ow0 > 0.0 ? 0.0 : 1.0; \n    Ow0 = abs(Ow0); \n    float OWO = floor(log2(Ow0)); \n    float oWo = OWO + OvO - Ovo; \n    OWO = ((Ow0 / exp2(OWO)) - 1.0) * pow(2.0, OVO);\n    float owO = oWo / 2.0; \n    oWo = fract(owO) + fract(owO); \n    float oWO = floor(owO); \n    owO = OwO(OWO, 0.0, 8.0) / OvO; \n    Ow0 = OwO(OWO, 8.0, 16.0) / OvO; \n    O, _0x56d6f8[0xd], _0x56d6f8[0x9]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x1], _0x56d6f8[0x13], _0x56d6f8[0xa], _0x56d6f8[0x0], _0x56d6f8[0x12]) * 0x186a0).toString();
  return _0x16a9e1;
}
function _0x52fd86(_0x1f947c) {
  let _0x4a7c67 = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(_0x1f947c).toString(CryptoJS.enc.Hex));
  let _0x1f1504 = CryptoJS.enc.Hex.parse("fd3cb6c1be89457ba82919a33f02707c");
  let _0x289540 = CryptoJS.enc.Hex.parse("4f6b9161b29e59e2d94fa90529d745601473cb4203c02d9549eea6e322908d71e0472241d86f3821b3c96dd82937b04dcef80b9f68b23dd2371d2a56ef873ce857563eefc6f9057aa0cc5b41ff87477256f6b56ef342da815099d1217d301d03b76e4fae675d27bf95ca43154015b964");
  let _0x21f6cd = CryptoJS.AES.decrypt({
    ciphertext: _0x289540
  }, _0x4a7c67, {
    iv: _0x1f1504,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
    hasher: CryptoJS.algo.SHA256
  });
  return _0x21f6cd.toString(CryptoJS.enc.Utf8);
}
class _0x36ee9a {
  constructor(_0x520539, _0x4a3ad7, _0x1e42e2, _0x3c6045, _0x3602fb, _0x557592) {
    this.canvas = document.getElementById(_0x520539);
    if (_0x4a3ad7 != 0x0 && _0x1e42e2 != 0x0) {
      this.canvas.width = _0x4a3ad7;
      this.canvas.height = _0x1e42e2;
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.d = [0x4, 0x14, 0x17, 0xd, 0xb, 0x0, 0xf, 0x1, 0xe, 0x15, 0x9, 0x13, 0x8, 0x3, 0x11, 0x18, 0x10, 0x6, 0x16, 0xa, 0x7, 0x12, 0x2, 0x5, 0xc];
    this.timeLoad = performance.now();
    this.gl = this.canvas.getContext("webgl2");
    this.gl.getExtension("EXT_color_buffer_float");
    this.v_shader = this.create_shader(_0x3c6045, "OuO");
    this.f_shader = this.create_shader(_0x3602fb, ">w<");
    this.prg = this.create_program(this.v_shader, this.f_shader);
    let _0x579165 = this;
    function _0x52ad9c() {
      _0x579165.render();
      _0x579165.animationFrameRequest = window.requestAnimationFrame(_0x52ad9c);
    }
    if (_0x557592) {
      _0x52ad9c();
    }
    return this;
  }
  ["wtf"](_0x3ddc6e, _0x37c543, _0x10ddd8) {
    this.gl.clearColor(0x0, 0x0, 0x0, 0x1);
    this.gl.clearDepth(0x1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    const _0x4b856b = this.gl.getAttribLocation(this.prg, "position");
    const _0x413a4a = [-0x1, -0x1, (_0x3ddc6e % 0x1 + this.d[~~_0x3ddc6e]) / 0x19, -0x1, 0x1, (_0x37c543 % 0x1 + this.d[~~_0x37c543]) / 0x19, 0x1, 0x1, (_0x37c543 % 0x1 + this.d[~~_0x37c543]) / 0x19, -0x1, -0x1, (_0x3ddc6e % 0x1 + this.d[~~_0x3ddc6e]) / 0x19, 0x1, 0x1, (_0x37c543 % 0x1 + this.d[~~_0x37c543]) / 0x19, 0x1, -0x1, (_0x3ddc6e % 0x1 + this.d[~~_0x3ddc6e]) / 0x19];
    const _0x3e2e26 = this.create_vbo(_0x413a4a);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, _0x3e2e26);
    this.gl.enableVertexAttribArray(_0x4b856b);
    this.gl.vertexAttribPointer(_0x4b856b, 0x3, this.gl.FLOAT, false, 0x0, 0x0);
    this.gl.useProgram(this.prg);
    this.gl.drawArrays(this.gl.TRIANGLES, 0x0, 0x6);
    this.gl.flush();
    const _0x2fa9a7 = new Uint8Array(0x4);
    this.gl.readPixels(this.w / 0x2, (_0x10ddd8 % 0x1 + this.d[~~_0x10ddd8]) * this.h / 0x19, 0x1, 0x1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, _0x2fa9a7);
    let _0x511406 = new Float32Array(_0x2fa9a7.buffer);
    return _0x511406[0x0].toFixed(0xf);
  }
  ["gtfo"](_0x226eef, _0x4ab524, _0x6b804d, _0x3e3cf3, _0x5cd04f) {
    this.gl.clearColor(0x0, 0x0, 0x0, 0x1);
    this.gl.clearDepth(0x1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    const _0x16760a = this.gl.getAttribLocation(this.prg, "position");
    const _0x13e5e0 = [-0x1, -0x1, (_0x226eef % 0x1 + this.d[~~_0x226eef]) / 0x19, 0x3, -0x1, (_0x4ab524 % 0x1 + this.d[~~_0x4ab524]) / 0x19, -0x1, 0x3, (_0x6b804d % 0x1 + this.d[~~_0x6b804d]) / 0x19];
    const _0x49be08 = this.create_vbo(_0x13e5e0);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, _0x49be08);
    this.gl.enableVertexAttribArray(_0x16760a);
    this.gl.vertexAttribPointer(_0x16760a, 0x3, this.gl.FLOAT, false, 0x0, 0x0);
    this.gl.useProgram(this.prg);
    this.gl.drawArrays(this.gl.TRIANGLES, 0x0, 0x3);
    this.gl.flush();
    const _0x3da8ae = new Uint8Array(0x4);
    this.gl.readPixels((_0x3e3cf3 % 0x1 + this.d[~~_0x3e3cf3]) * this.w / 0x19, (_0x5cd04f % 0x1 + this.d[~~_0x5cd04f]) * this.h / 0x19, 0x1, 0x1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, _0x3da8ae);
    let _0x2e76ac = new Float32Array(_0x3da8ae.buffer);
    return _0x2e76ac[0x0].toFixed(0xf);
  }
  ["render"]() {
    this.gl.clearColor(0x0, 0x0, 0x0, 0x1);
    this.gl.clearDepth(0x1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    let _0x39f658 = performance.now();
    this.timeDelta = (_0x39f658 - this.timePrev) / 0x3e8;
    this.timePrev = _0x39f658;
    const _0x18111e = new Array(0x2);
    _0x18111e[0x0] = this.gl.getAttribLocation(this.prg, "position");
    const _0x15ddf2 = new Array(0x2);
    _0x15ddf2[0x0] = 0x3;
    _0x15ddf2[0x1] = 0x4;
    const _0x2626af = [0x3, 0x8, 0x0, 0x7, -0x3, 0x5, 0x3, -0x8, 0x0, 0x3, 0x8, 0x0, 0x7, -0x3, 0x5, 0x7, 0x3, 0x5, 0x3, 0x8, 0x0, -0x3, -0x8, 0x0, 0x3, -0x8, 0x0, 0x3, 0x8, 0x0, -0x3, -0x8, 0x0, -0x3, 0x8, 0x0, -0x3, 0x8, 0x0, -0x7, -0x3, 0x5, -0x3, -0x8, 0x0, -0x3, 0x8, 0x0, -0x7, -0x3, 0x5, -0x7, 0x3, 0x5];
    const _0x1ebfe3 = this.create_vbo(_0x2626af);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, _0x1ebfe3);
    this.gl.enableVertexAttribArray(_0x18111e[0x0]);
    this.gl.vertexAttribPointer(_0x18111e[0x0], _0x15ddf2[0x0], this.gl.FLOAT, false, 0x0, 0x0);
    const _0x570653 = new matIV();
    const _0x5a4b24 = _0x570653.identity(_0x570653.create());
    const _0x5f594b = _0x570653.identity(_0x570653.create());
    const _0x15df66 = _0x570653.identity(_0x570653.create());
    const _0x28d80f = _0x570653.identity(_0x570653.create());
    const _0xf54bc7 = (_0x39f658 - this.timeLoad) / 0x3e8;
    const _0x404188 = [Math.sin(Math.sin(_0xf54bc7) / 0x3), Math.cos(Math.sin(_0xf54bc7) / 0x3), 0x0];
    _0x570653.lookAt([0x0, 0x0, 0x5], [0x0, 0x0, 0x0], _0x404188, _0x5f594b);
    _0x570653.perspective(0x5a, this.canvas.width / this.canvas.height, 0.1, 0x64, _0x15df66);
    _0x570653.multiply(_0x15df66, _0x5f594b, _0x28d80f);
    _0x570653.multiply(_0x28d80f, _0x5a4b24, _0x28d80f);
    const _0x4d0a27 = this.gl.getUniformLocation(this.prg, "mvpMatrix");
    this.gl.uniformMatrix4fv(_0x4d0a27, false, _0x28d80f);
    const _0x504e76 = this.gl.getUniformLocation(this.prg, "u_time");
    this.gl.uniform1f(_0x504e76, _0xf54bc7);
    const _0x15e050 = this.gl.getUniformLocation(this.prg, "u_resolution");
    this.gl.uniform2f(_0x15e050, this.canvas.width, this.canvas.height);
    this.gl.useProgram(this.prg);
    this.gl.drawArrays(this.gl.TRIANGLES, 0x0, 0x12);
    this.gl.flush();
  }
  ["create_shader"](_0x217f95, _0x50b1bf) {
    let _0x333f8e;
    switch (_0x50b1bf) {
      case "OuO":
        _0x333f8e = this.gl.createShader(this.gl.VERTEX_SHADER);
        break;
      case ">w<":
        _0x333f8e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        break;
      default:
        return;
    }
    this.gl.shaderSource(_0x333f8e, _0x217f95);
    this.gl.compileShader(_0x333f8e);
    if (this.gl.getShaderParameter(_0x333f8e, this.gl.COMPILE_STATUS)) {
      return _0x333f8e;
    } else {
      alert(this.gl.getShaderInfoLog(_0x333f8e));
    }
  }
  ["create_program"](_0x4d159e, _0x135a44) {
    const _0x171a80 = this.gl.createProgram();
    this.gl.attachShader(_0x171a80, _0x4d159e);
    this.gl.attachShader(_0x171a80, _0x135a44);
    this.gl.linkProgram(_0x171a80);
    if (this.gl.getProgramParameter(_0x171a80, this.gl.LINK_STATUS)) {
      this.gl.useProgram(_0x171a80);
      return _0x171a80;
    } else {
      alert(this.gl.getProgramInfoLog(_0x171a80));
    }
  }
  ["create_vbo"](_0xbcae1c) {
    const _0x9500e2 = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, _0x9500e2);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(_0xbcae1c), this.gl.STATIC_DRAW);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    return _0x9500e2;
  }
}11d161);
}
function _0x344186(_0x56d6f8) {
  let _0x526465 = _0x53c5a8.wtf(_0x56d6f8[0x13], _0x56d6f8[0x3], _0x56d6f8[0x5]) * 0x19;
  let _0x27d483 = _0x53c5a8.wtf(_0x56d6f8[0x7], _0x56d6f8[0x14], _0x56d6f8[0x12]) * 0x19;
  let _0x47edd7 = _0x53c5a8.wtf(_0x56d6f8[0xb], _0x56d6f8[0x16], _0x56d6f8[0x12]) * 0x19;
  let _0x3c8060 = _0x53c5a8.wtf(_0x56d6f8[0x5], _0x56d6f8[0x11], _0x56d6f8[0x2]) * 0x19;
  let _0x315313 = _0x53c5a8.wtf(_0x56d6f8[0x14], _0x56d6f8[0xd], _0x56d6f8[0x5]) * 0x19;
  let _0x3cef24 = _0x53c5a8.wtf(_0x56d6f8[0xb], _0x56d6f8[0x1], _0x56d6f8[0x15]) * 0x19;
  let _0x2ee445 = _0x53c5a8.wtf(_0x56d6f8[0x8], _0x56d6f8[0xb], _0x56d6f8[0x1]) * 0x19;
  let _0x5e280a = _0x53c5a8.wtf(_0x56d6f8[0x9], _0x56d6f8[0x5], _0x56d6f8[0x4]) * 0x19;
  let _0x5f6c26 = _0x53c5a8.wtf(_0x56d6f8[0x11], _0x56d6f8[0x9], _0x56d6f8[0x15]) * 0x19;
  let _0x13e7aa = _0x53c5a8.wtf(_0x56d6f8[0x17], _0x56d6f8[0x9], _0x56d6f8[0x14]) * 0x19;
  let _0x9d682e = _0x53c5a8.wtf(_0x56d6f8[0x10], _0x56d6f8[0x5], _0x56d6f8[0x4]) * 0x19;
  let _0x277f3c = _0x53c5a8.wtf(_0x56d6f8[0x10], _0x56d6f8[0xe], _0x56d6f8[0xd]) * 0x19;
  let _0x2f58be = _0x53c5a8.wtf(_0x56d6f8[0x5], _0x56d6f8[0x6], _0x56d6f8[0xa]) * 0x19;
  let _0x5a6698 = _0x53c5a8.wtf(_0x56d6f8[0x2], _0x56d6f8[0xb], _0x56d6f8[0x5]) * 0x19;
  let _0x52d3ed = _0x53c5a8.wtf(_0x56d6f8[0xb], _0x56d6f8[0x3], _0x56d6f8[0x1]) * 0x19;
  let _0x4320e6 = _0x53c5a8.wtf(_0x56d6f8[0xc], _0x56d6f8[0x3], _0x56d6f8[0xa]) * 0x19;
  let _0xf9ef4b = _0x53c5a8.wtf(_0x56d6f8[0xe], _0x56d6f8[0x1], _0x56d6f8[0x9]) * 0x19;
  let _0x429aaf = _0x53c5a8.wtf(_0x56d6f8[0x12], _0x56d6f8[0xb], _0x56d6f8[0x11]) * 0x19;
  let _0x1a4487 = _0x53c5a8.wtf(_0x56d6f8[0xc], _0x56d6f8[0xf], _0x56d6f8[0x2]) * 0x19;
  let _0x4c135d = _0x53c5a8.wtf(_0x56d6f8[0x16], _0x56d6f8[0x0], _0x56d6f8[0x13]) * 0x19;
  let _0x5c13fb = 0x0;
  _0x5c13fb += Math.abs(0.3837876686390533 - _0x53c5a8.gtfo(_0x3cef24, _0xf9ef4b, _0x5f6c26, 0x10, 0x15));
  _0x5c13fb += Math.abs(0.21054889940828397 - _0x53c5a8.gtfo(_0x52d3ed, _0x3cef24, _0x2ee445, 0x8, 0x2));
  _0x5c13fb += Math.abs(0.475323349112426 - _0x53c5a8.gtfo(_0x3cef24, _0x429aaf, _0x2f58be, 0x0, 0x14));
  _0x5c13fb += Math.abs(0.6338370887573964 - _0x53c5a8.gtfo(_0x3c8060, _0x27d483, _0x2f58be, 0x8, 0x4));
  _0x5c13fb += Math.abs(0.4111607928994082 - _0x53c5a8.gtfo(_0x47edd7, _0x52d3ed, _0x4320e6, 0x17, 0x1));
  _0x5c13fb += Math.abs(0.7707577751479291 - _0x53c5a8.gtfo(_0x429aaf, _0x3c8060, _0x277f3c, 0x14, 0x6));
  _0x5c13fb += Math.abs(0.7743081420118344 - _0x53c5a8.gtfo(_0x13e7aa, _0x5a6698, _0x3c8060, 0x9, 0xa));
  _0x5c13fb += Math.abs(0.36471487573964495 - _0x53c5a8.gtfo(_0x5f6c26, _0x526465, _0x315313, 0x12, 0x8));
  _0x5c13fb += Math.abs(0.312678449704142 - _0x53c5a8.gtfo(_0x4320e6, _0x13e7aa, _0x429aaf, 0x0, 0x11));
  _0x5c13fb += Math.abs(0.9502808165680473 - _0x53c5a8.gtfo(_0x1a4487, _0x13e7aa, _0x3c8060, 0x16, 0xa));
  _0x5c13fb += Math.abs(0.5869052899408282 - _0x53c5a8.gtfo(_0x2f58be, _0x5e280a, _0x47edd7, 0xe, 0xa));
  _0x5c13fb += Math.abs(0.9323389467455623 - _0x53c5a8.gtfo(_0x429aaf, _0x47edd7, _0x2f58be, 0xc, 0x7));
  _0x5c13fb += Math.abs(0.4587118106508875 - _0x53c5a8.gtfo(_0x2ee445, _0x5a6698, _0x47edd7, 0x4, 0x15));
  _0x5c13fb += Math.abs(0.14484472189349107 - _0x53c5a8.gtfo(_0x4320e6, _0x13e7aa, _0x52d3ed, 0x7, 0xf));
  _0x5c13fb += Math.abs(0.7255550059171598 - _0x53c5a8.gtfo(_0x3cef24, _0x429aaf, _0x1a4487, 0x9, 0x17));
  _0x5c13fb += Math.abs(0.5031261301775147 - _0x53c5a8.gtfo(_0x3c8060, _0x47edd7, _0x52d3ed, 0x7, 0x1));
  _0x5c13fb += Math.abs(0.1417352189349112 - _0x53c5a8.gtfo(_0x2ee445, _0x52d3ed, _0x5f6c26, 0x10, 0xe));
  _0x5c13fb += Math.abs(0.5579334437869822 - _0x53c5a8.gtfo(_0x52d3ed, _0x47edd7, _0x1a4487, 0x13, 0xb));
  _0x5c13fb += Math.abs(0.48502262721893485 - _0x53c5a8.gtfo(_0x9d682e, _0x315313, _0x5e280a, 0x17, 0x12));
  _0x5c13fb += Math.abs(0.5920916568047336 - _0x53c5a8.gtfo(_0x5e280a, _0x5f6c26, _0x27d483, 0x13, 0x6));
  _0x5c13fb += Math.abs(0.7222713017751479 - _0x53c5a8.gtfo(_0xf9ef4b, _0x47edd7, _0x315313, 0x8, 0x10));
  _0x5c13fb += Math.abs(0.12367382248520711 - _0x53c5a8.gtfo(_0x9d682e, _0x4320e6, _0x2f58be, 0x9, 0x5));
  _0x5c13fb += Math.abs(0.4558028402366864 - _0x53c5a8.gtfo(_0x277f3c, _0x9d682e, _0x47edd7, 0xa, 0x2));
  _0x5c13fb += Math.abs(0.8537692426035504 - _0x53c5a8.gtfo(_0x429aaf, _0x13e7aa, _0x5a6698, 0x4, 0xb));
  _0x5c13fb += Math.abs(0.9618170650887574 - _0x53c5a8.gtfo(_0x2f58be, _0x1a4487, _0x429aaf, 0xf, 0x2));
  _0x5c13fb += Math.abs(0.22088933727810647 - _0x53c5a8.gtfo(_0x526465, _0x5e280a, _0xf9ef4b, 0xa, 0x5));
  _0x5c13fb += Math.abs(0.4302783550295858 - _0x53c5a8.gtfo(_0xf9ef4b, _0x277f3c, _0x3cef24, 0xe, 0x2));
  _0x5c13fb += Math.abs(0.6262803313609467 - _0x53c5a8.gtfo(_0x4c135d, _0x52d3ed, _0x47edd7, 0x11, 0x16));
  if (_0x5c13fb > 0.00001) {
    return null;
  }
  s = "";
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x4], _0x56d6f8[0x2], _0x56d6f8[0x16]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x11], _0x56d6f8[0x9], _0x56d6f8[0xe]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x4], _0x56d6f8[0xd], _0x56d6f8[0x7]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x4], _0x56d6f8[0x14], _0x56d6f8[0x17]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x5], _0x56d6f8[0x7], _0x56d6f8[0xc]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x14], _0x56d6f8[0x13], _0x56d6f8[0x4]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x11], _0x56d6f8[0x6], _0x56d6f8[0x13]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x6], _0x56d6f8[0x15], _0x56d6f8[0x12]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x4], _0x56d6f8[0x3], _0x56d6f8[0x8]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0xb], _0x56d6f8[0x7], _0x56d6f8[0xe]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x9], _0x56d6f8[0x2], _0x56d6f8[0xd]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x16], _0x56d6f8[0xa], _0x56d6f8[0x3]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0xf], _0x56d6f8[0x16], _0x56d6f8[0xd]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x10], _0x56d6f8[0xc], _0x56d6f8[0x9]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0xe], _0x56d6f8[0x8], _0x56d6f8[0x11]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x1], _0x56d6f8[0x12], _0x56d6f8[0x6]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0xa], _0x56d6f8[0xb], _0x56d6f8[0x3]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x8], _0x56d6f8[0xc], _0x56d6f8[0x5]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x1], _0x56d6f8[0x3], _0x56d6f8[0xc]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.wtf(_0x56d6f8[0x9], _0x56d6f8[0xd], _0x56d6f8[0x7]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x16], _0x56d6f8[0xd], _0x56d6f8[0x5], _0x56d6f8[0x4], _0x56d6f8[0x7]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xa], _0x56d6f8[0xe], _0x56d6f8[0x11], _0x56d6f8[0x17], _0x56d6f8[0xb]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x17], _0x56d6f8[0x14], _0x56d6f8[0x6], _0x56d6f8[0x1], _0x56d6f8[0x3]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xf], _0x56d6f8[0xc], _0x56d6f8[0x2], _0x56d6f8[0xd], _0x56d6f8[0x9]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x10], _0x56d6f8[0x14], _0x56d6f8[0x6], _0x56d6f8[0x5], _0x56d6f8[0x12]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x3], _0x56d6f8[0x6], _0x56d6f8[0x7], _0x56d6f8[0x8], _0x56d6f8[0x17]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x15], _0x56d6f8[0x9], _0x56d6f8[0xa], _0x56d6f8[0x3], _0x56d6f8[0x16]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xe], _0x56d6f8[0x6], _0x56d6f8[0xf], _0x56d6f8[0xc], _0x56d6f8[0x13]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xd], _0x56d6f8[0x13], _0x56d6f8[0x16], _0x56d6f8[0x17], _0x56d6f8[0x1]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x15], _0x56d6f8[0x2], _0x56d6f8[0x9], _0x56d6f8[0x0], _0x56d6f8[0x13]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x5], _0x56d6f8[0x13], _0x56d6f8[0x15], _0x56d6f8[0xe], _0x56d6f8[0x6]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x10], _0x56d6f8[0xf], _0x56d6f8[0x14], _0x56d6f8[0xd], _0x56d6f8[0x3]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x14], _0x56d6f8[0xf], _0x56d6f8[0xa], _0x56d6f8[0x15], _0x56d6f8[0x6]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x7], _0x56d6f8[0x1], _0x56d6f8[0x15], _0x56d6f8[0x14], _0x56d6f8[0x3]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x9], _0x56d6f8[0x14], _0x56d6f8[0x1], _0x56d6f8[0xa], _0x56d6f8[0x6]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xa], _0x56d6f8[0x2], _0x56d6f8[0x1], _0x56d6f8[0x10], _0x56d6f8[0x4]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xf], _0x56d6f8[0x5], _0x56d6f8[0x14], _0x56d6f8[0x13], _0x56d6f8[0x8]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x14], _0x56d6f8[0x8], _0x56d6f8[0x15], _0x56d6f8[0xa], _0x56d6f8[0xc]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x13], _0x56d6f8[0x5], _0x56d6f8[0x4], _0x56d6f8[0x2], _0x56d6f8[0x16]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xa], _0x56d6f8[0x14], _0x56d6f8[0xe], _0x56d6f8[0x9], _0x56d6f8[0x7]) * 0x186a0).toString();
  let _0x16a9e1 = _0x52fd86(s);
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x5], _0x56d6f8[0xf], _0x56d6f8[0x9], _0x56d6f8[0xd], _0x56d6f8[0x10]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x14], _0x56d6f8[0x8], _0x56d6f8[0xb], _0x56d6f8[0x16], _0x56d6f8[0x17]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x16], _0x56d6f8[0x3], _0x56d6f8[0x1], _0x56d6f8[0x11], _0x56d6f8[0xf]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x4], _0x56d6f8[0x8], _0x56d6f8[0xe], _0x56d6f8[0x3], _0x56d6f8[0x11]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xc], _0x56d6f8[0x6], _0x56d6f8[0xb], _0x56d6f8[0xa], _0x56d6f8[0xf]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xd], _0x56d6f8[0x5], _0x56d6f8[0x2], _0x56d6f8[0x4], _0x56d6f8[0x9]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x15], _0x56d6f8[0xc], _0x56d6f8[0x13], _0x56d6f8[0xb], _0x56d6f8[0x14]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xd], _0x56d6f8[0xb], _0x56d6f8[0x12], _0x56d6f8[0xc], _0x56d6f8[0x14]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xb], _0x56d6f8[0x2], _0x56d6f8[0x8], _0x56d6f8[0x3], _0x56d6f8[0x10]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x10], _0x56d6f8[0x1], _0x56d6f8[0x5], _0x56d6f8[0x4], _0x56d6f8[0x16]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x0], _0x56d6f8[0x3], _0x56d6f8[0xc], _0x56d6f8[0xa], _0x56d6f8[0x1]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x13], _0x56d6f8[0x16], _0x56d6f8[0x11], _0x56d6f8[0xe], _0x56d6f8[0xd]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xe], _0x56d6f8[0x2], _0x56d6f8[0xa], _0x56d6f8[0x12], _0x56d6f8[0x10]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x15], _0x56d6f8[0x0], _0x56d6f8[0x12], _0x56d6f8[0x13], _0x56d6f8[0x4]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x16], _0x56d6f8[0xc], _0x56d6f8[0x9], _0x56d6f8[0x10], _0x56d6f8[0x11]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x4], _0x56d6f8[0x12], _0x56d6f8[0xf], _0x56d6f8[0x0], _0x56d6f8[0xe]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x9], _0x56d6f8[0x5], _0x56d6f8[0x13], _0x56d6f8[0x14], _0x56d6f8[0xc]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0xa], _0x56d6f8[0x6], _0x56d6f8[0x14], _0x56d6f8[0xb], _0x56d6f8[0x5]) * 0x186a0).toString();
  s += Math.round(_0x53c5a8.gtfo(_0x56d6f8[0x1], _0x56d6f8[0xb], _0x56d6f8[0x16]WO = (oWo * Ovo + OwO(OWO, 16.0, OVO)) / OvO; \n    Owo = (Owo * Ovo + oWO) / OvO; \n    return vec4(owO, Ow0, OWO, Owo); \n}\n\nvoid main()\n{\n    gl_FragColor = oWo(owO);\n}\n  ", false);
  _0x53c5a8.render();
  let _0x2b2a01 = document.getElementById("pattern-container");
  let _0x2d06d1 = document.getElementById("lines");
  let _0x49f825 = null;
  let _0x3a306e = null;
  let _0x316e9f = false;
  let _0x1d7494 = [];
  _0x2b2a01.childNodes.forEach(_0x230366 => {
    if (!_0x230366.classList) {
      return;
    }
    if (!_0x230366.classList.contains("dot")) {
      return;
    }
    _0x230366.addEventListener("mousedown", _0x5be741 => {
      _0x1d7494.forEach(_0x2ca3e5 => {
        _0x2ca3e5.classList.remove("selected");
        _0x2ca3e5.classList.remove("select");
        _0x2ca3e5.classList.remove("lose");
        _0x2ca3e5.classList.remove("win");
      });
      _0x2d06d1.innerHTML = "";
      _0x1d7494 = [];
      _0x316e9f = true;
      _0x230366.classList.add("select");
      _0x3a306e = document.createElementNS("http://www.w3.org/2000/svg", "line");
      _0x3a306e.setAttribute("x1", _0x230366.offsetLeft + _0x230366.offsetWidth / 0x2);
      _0x3a306e.setAttribute("y1", _0x230366.offsetTop + _0x230366.offsetHeight / 0x2);
      _0x3a306e.setAttribute("x2", _0x230366.offsetLeft + _0x230366.offsetWidth / 0x2);
      _0x3a306e.setAttribute("y2", _0x230366.offsetTop + _0x230366.offsetHeight / 0x2);
      _0x3a306e.setAttribute("stroke", "white");
      _0x3a306e.setAttribute("stroke-width", "5");
      _0x2d06d1.appendChild(_0x3a306e);
      _0x1d7494.push(_0x230366);
      _0x49f825 = _0x230366;
    });
    _0x230366.addEventListener("mouseover", _0x1cae46 => {
      if (!_0x316e9f) {
        return;
      }
      if (_0x230366.classList.contains("selected")) {
        return;
      }
      if (_0x230366.classList.contains("select")) {
        return;
      }
      if (_0x3a306e) {
        _0x3a306e.setAttribute("x2", _0x230366.offsetLeft + _0x230366.offsetWidth / 0x2);
        _0x3a306e.setAttribute("y2", _0x230366.offsetTop + _0x230366.offsetHeight / 0x2);
        _0x49f825.classList.add("selected");
        _0x49f825.classList.remove("select");
      }
      _0x230366.classList.add("select");
      _0x3a306e = document.createElementNS("http://www.w3.org/2000/svg", "line");
      _0x3a306e.setAttribute("x1", _0x230366.offsetLeft + _0x230366.offsetWidth / 0x2);
      _0x3a306e.setAttribute("y1", _0x230366.offsetTop + _0x230366.offsetHeight / 0x2);
      _0x3a306e.setAttribute("x2", _0x230366.offsetLeft + _0x230366.offsetWidth / 0x2);
      _0x3a306e.setAttribute("y2", _0x230366.offsetTop + _0x230366.offsetHeight / 0x2);
      _0x3a306e.setAttribute("stroke", "white");
      _0x3a306e.setAttribute("stroke-width", "5");
      _0x2d06d1.appendChild(_0x3a306e);
      _0x1d7494.push(_0x230366);
      _0x49f825 = _0x230366;
    });
  });
  _0x2b2a01.addEventListener("mousemove", _0x3c10fa => {
    if (!_0x316e9f) {
      return;
    }
    if (_0x49f825 && _0x3a306e) {
      _0x3a306e.setAttribute("x2", _0x3c10fa.clientX - _0x2b2a01.getBoundingClientRect().left);
      _0x3a306e.setAttribute("y2", _0x3c10fa.clientY - _0x2b2a01.getBoundingClientRect().top);
    }
  });
  _0x2b2a01.addEventListener("mouseup", _0x3584c1 => {
    if (_0x49f825 && _0x3a306e) {
      _0x3a306e.setAttribute("x2", _0x49f825.offsetLeft + _0x49f825.offsetWidth / 0x2);
      _0x3a306e.setAttribute("y2", _0x49f825.offsetTop + _0x49f825.offsetHeight / 0x2);
      _0x49f825.classList.add("selected");
      _0x49f825 = null;
      let _0x2647e0 = _0x344186(_0x1d7494.map(_0x2b09ea => parseInt(_0x2b09ea.dataset.number)));
      if (_0x2647e0 !== null) {
        _0x1d7494.forEach(_0x3de332 => {
          _0x3de332.classList.add("win");
        });
        let _0x2ad44b = document.getElementById("flag");
        _0x2ad44b.innerText = _0x2647e0;
      } else {
        _0x1d7494.forEach(_0x58e683 => {
          _0x58e683.classList.add("lose");
        });
      }
    }
    _0x316e9f = false;
  });
}
function _0x9b7c28(_0x11d161) {
  return Math.abs(_0x
