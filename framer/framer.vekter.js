(function(scope) {var __layer_0__ = new Layer({"height":667,"name":"Home","constraintValues":{"height":667,"heightFactor":1,"width":375,"widthFactor":1},"backgroundColor":"hsl(0, 0%, 0%)","clip":true,"width":375});var __layer_1__ = new Layer({"parent":__layer_0__,"name":"overlay","backgroundColor":"rgba(255, 255, 255, 0.42)","width":80,"x":148,"height":80,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":80,"centerAnchorX":0.5013333333333333,"width":80,"bottom":52,"top":null,"centerAnchorY":0.86206896551724133},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid","y":535});var tap = new Layer({"parent":__layer_1__,"name":"tap","backgroundColor":"hsl(0, 0%, 100%)","width":55,"x":13,"height":55,"constraintValues":{"left":13,"aspectRatioLocked":true,"height":55,"centerAnchorX":0.50624999999999998,"width":55,"bottom":12,"right":12,"top":null,"centerAnchorY":0.50624999999999998},"borderRadius":28,"blending":"normal","clip":false,"borderStyle":"solid","y":13});var __layer_2__ = new Layer({"parent":__layer_0__,"name":"active_indicator","backgroundColor":"rgb(255, 255, 255)","width":36,"x":169,"rotation":45,"height":36,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":36,"centerAnchorX":0.49866666666666665,"width":36,"bottom":-38,"top":null,"centerAnchorY":1.0299850074962518},"borderRadius":2,"blending":"normal","clip":false,"borderStyle":"solid","y":669});__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"FrameNode","framerClass":"Layer"};tap.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|tap","targetName":"tap","vekterClass":"RectangleNode"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {tap});scope["__vekterVariables"] = ["tap"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);