window.libpannellum=function(e,t,r){"use strict";function a(a){var n,l,d,c,f,g,m,_,v,p,E,x,R,T,M,w,b=t.createElement("canvas");function A(e,t){return 1==e.level&&1!=t.level?-1:1==t.level&&1!=e.level?1:t.timestamp-e.timestamp}function C(e,t){return e.level!=t.level?e.level-t.level:e.diff-t.diff}function I(e,t,r,a,o,i){this.vertices=e,this.side=t,this.level=r,this.x=a,this.y=o,this.path=i.replace("%s",t).replace("%l",r).replace("%x",a).replace("%y",o)}function U(e,t,r,a,o){if(function(e,t){var r=N(e,t.slice(0,3)),a=N(e,t.slice(3,6)),o=N(e,t.slice(6,9)),i=N(e,t.slice(9,12)),n=r[0]+a[0]+o[0]+i[0];if(-4==n||4==n)return!1;var h=r[1]+a[1]+o[1]+i[1];return-4!=h&&4!=h&&r[2]+a[2]+o[2]+i[2]!=4}(e,t.vertices)){var i=t.vertices,h=i[0]+i[3]+i[6]+i[9],s=i[1]+i[4]+i[7]+i[10],u=i[2]+i[5]+i[8]+i[11],l=Math.sqrt(h*h+s*s+u*u),d=Math.asin(u/l),c=Math.atan2(s,h)-a;c+=c>Math.PI?-2*Math.PI:c<-Math.PI?2*Math.PI:0,c=Math.abs(c),t.diff=Math.acos(Math.sin(r)*Math.sin(d)+Math.cos(r)*Math.cos(d)*Math.cos(c));for(var f=!1,g=0;g<n.nodeCache.length;g++)if(n.nodeCache[g].path==t.path){f=!0,n.nodeCache[g].timestamp=n.nodeCacheTimestamp++,n.nodeCache[g].diff=t.diff,n.currentNodes.push(n.nodeCache[g]);break}if(f||(t.timestamp=n.nodeCacheTimestamp++,n.currentNodes.push(t),n.nodeCache.push(t)),t.level<n.level){var m=v.cubeResolution*Math.pow(2,t.level-v.maxLevel),_=Math.ceil(m*v.invTileResolution)-1,p=m%v.tileResolution*2,E=2*m%v.tileResolution;0===E&&(E=v.tileResolution),0===p&&(p=2*v.tileResolution);var x=.5;t.x!=_&&t.y!=_||(x=1-v.tileResolution/(v.tileResolution+E));var R,T=1-x,M=[],w=x,b=x,A=x,C=T,P=T,B=T;E<v.tileResolution&&(t.x==_&&t.y!=_?(b=.5,P=.5,"d"!=t.side&&"u"!=t.side||(A=.5,B=.5)):t.x!=_&&t.y==_&&(w=.5,C=.5,"l"!=t.side&&"r"!=t.side||(A=.5,B=.5))),p<=v.tileResolution&&(t.x==_&&(w=0,C=1,"l"!=t.side&&"r"!=t.side||(A=0,B=1)),t.y==_&&(b=0,P=1,"d"!=t.side&&"u"!=t.side||(A=0,B=1))),R=new I([i[0],i[1],i[2],i[0]*w+i[3]*C,i[1]*x+i[4]*T,i[2]*A+i[5]*B,i[0]*w+i[6]*C,i[1]*b+i[7]*P,i[2]*A+i[8]*B,i[0]*x+i[9]*T,i[1]*b+i[10]*P,i[2]*A+i[11]*B],t.side,t.level+1,2*t.x,2*t.y,v.fullpath),M.push(R),t.x==_&&p<=v.tileResolution||(R=new I([i[0]*w+i[3]*C,i[1]*x+i[4]*T,i[2]*A+i[5]*B,i[3],i[4],i[5],i[3]*x+i[6]*T,i[4]*b+i[7]*P,i[5]*A+i[8]*B,i[0]*w+i[6]*C,i[1]*b+i[7]*P,i[2]*A+i[8]*B],t.side,t.level+1,2*t.x+1,2*t.y,v.fullpath),M.push(R)),t.x==_&&p<=v.tileResolution||t.y==_&&p<=v.tileResolution||(R=new I([i[0]*w+i[6]*C,i[1]*b+i[7]*P,i[2]*A+i[8]*B,i[3]*x+i[6]*T,i[4]*b+i[7]*P,i[5]*A+i[8]*B,i[6],i[7],i[8],i[9]*w+i[6]*C,i[10]*x+i[7]*T,i[11]*A+i[8]*B],t.side,t.level+1,2*t.x+1,2*t.y+1,v.fullpath),M.push(R)),t.y==_&&p<=v.tileResolution||(R=new I([i[0]*x+i[9]*T,i[1]*b+i[10]*P,i[2]*A+i[11]*B,i[0]*w+i[6]*C,i[1]*b+i[7]*P,i[2]*A+i[8]*B,i[9]*w+i[6]*C,i[10]*x+i[7]*T,i[11]*A+i[8]*B,i[9],i[10],i[11]],t.side,t.level+1,2*t.x,2*t.y+1,v.fullpath),M.push(R));for(var L=0;L<M.length;L++)U(e,M[L],r,a,o)}}}function P(e,t,r){var a=Math.sin(t),o=Math.cos(t);return"x"==r?[e[0],o*e[1]+a*e[2],o*e[2]-a*e[1],e[3],o*e[4]+a*e[5],o*e[5]-a*e[4],e[6],o*e[7]+a*e[8],o*e[8]-a*e[7]]:"y"==r?[o*e[0]-a*e[2],e[1],o*e[2]+a*e[0],o*e[3]-a*e[5],e[4],o*e[5]+a*e[3],o*e[6]-a*e[8],e[7],o*e[8]+a*e[6]]:"z"==r?[o*e[0]+a*e[1],o*e[1]-a*e[0],e[2],o*e[3]+a*e[4],o*e[4]-a*e[3],e[5],o*e[6]+a*e[7],o*e[7]-a*e[6],e[8]]:void 0}function B(e){return[e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]]}b.style.width=b.style.height="100%",a.appendChild(b),this.init=function(e,A,C,I,U,P,B,L){if(A===r&&(A="equirectangular"),"equirectangular"!=A&&"cubemap"!=A&&"multires"!=A)throw console.log("Error: invalid image type specified!"),{type:"config error"};if(p=A,v=e,E=C,w=L||{},n){if(d&&(l.detachShader(n,d),l.deleteShader(d)),c&&(l.detachShader(n,c),l.deleteShader(c)),l.bindBuffer(l.ARRAY_BUFFER,null),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null),n.texture&&l.deleteTexture(n.texture),n.nodeCache)for(var y=0;y<n.nodeCache.length;y++)l.deleteTexture(n.nodeCache[y].texture);l.deleteProgram(n),n=r}var N;if(_=r,"cubemap"==p&&0!=(v[0].width&v[0].width-1)&&(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)||navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/)||navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/)||navigator.userAgent.match(/Trident.*rv[ :]*11\./))||(l||(l=b.getContext("experimental-webgl",{alpha:!1,depth:!1})),l&&1286==l.getError()&&D()),!l&&("multires"==p&&v.hasOwnProperty("fallbackPath")||"cubemap"==p)&&("WebkitAppearance"in t.documentElement.style||navigator.userAgent.match(/Trident.*rv[ :]*11\./)||-1!==navigator.appVersion.indexOf("MSIE 10"))){var S;g&&a.removeChild(g),(g=t.createElement("div")).className="pnlm-world",S=v.basePath?v.basePath+v.fallbackPath:v.fallbackPath;var G=["f","r","b","l","u","d"],F=0,X=function(){var e=t.createElement("canvas");e.className="pnlm-face pnlm-"+G[this.side]+"face",g.appendChild(e);var r=e.getContext("2d");e.style.width=this.width+4+"px",e.style.height=this.height+4+"px",e.width=this.width+4,e.height=this.height+4,r.drawImage(this,2,2);var o,i,n=r.getImageData(0,0,e.width,e.height),h=n.data;for(o=2;o<e.width-2;o++)for(i=0;i<4;i++)h[4*(o+e.width)+i]=h[4*(o+2*e.width)+i],h[4*(o+e.width*(e.height-2))+i]=h[4*(o+e.width*(e.height-3))+i];for(o=2;o<e.height-2;o++)for(i=0;i<4;i++)h[4*(o*e.width+1)+i]=h[4*(o*e.width+2)+i],h[4*((o+1)*e.width-2)+i]=h[4*((o+1)*e.width-3)+i];for(i=0;i<4;i++)h[4*(e.width+1)+i]=h[4*(2*e.width+2)+i],h[4*(2*e.width-2)+i]=h[4*(3*e.width-3)+i],h[4*(e.width*(e.height-2)+1)+i]=h[4*(e.width*(e.height-3)+2)+i],h[4*(e.width*(e.height-1)-2)+i]=h[4*(e.width*(e.height-2)-3)+i];for(o=1;o<e.width-1;o++)for(i=0;i<4;i++)h[4*o+i]=h[4*(o+e.width)+i],h[4*(o+e.width*(e.height-1))+i]=h[4*(o+e.width*(e.height-2))+i];for(o=1;o<e.height-1;o++)for(i=0;i<4;i++)h[o*e.width*4+i]=h[4*(o*e.width+1)+i],h[4*((o+1)*e.width-1)+i]=h[4*((o+1)*e.width-2)+i];for(i=0;i<4;i++)h[i]=h[4*(e.width+1)+i],h[4*(e.width-1)+i]=h[4*(2*e.width-2)+i],h[e.width*(e.height-1)*4+i]=h[4*(e.width*(e.height-2)+1)+i],h[4*(e.width*e.height-1)+i]=h[4*(e.width*(e.height-1)-2)+i];r.putImageData(n,0,0),6==++F&&(f=this.width,a.appendChild(g),B())};for(N=0;N<6;N++){var Y=new Image;Y.crossOrigin=w.crossOrigin?w.crossOrigin:"anonymous",Y.side=N,Y.onload=X,Y.src="multires"==p?encodeURI(S.replace("%s",G[N])+"."+v.extension):encodeURI(v[N].src)}}else{if(!l)throw console.log("Error: no WebGL support detected!"),{type:"no webgl"};v.basePath?v.fullpath=v.basePath+v.path:v.fullpath=v.path,v.invTileResolution=1/v.tileResolution;var W,k,O=[-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1];for(m=[],N=0;N<6;N++)m[N]=O.slice(12*N,12*N+12),O=[-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1];if("equirectangular"==p){if((W=Math.max(v.width,v.height))>(k=l.getParameter(l.MAX_TEXTURE_SIZE)))throw console.log("Error: The image is too big; it's "+W+"px wide, but this device's maximum supported width is "+k+"px."),{type:"webgl size error",width:W,maxWidth:k}}else if("cubemap"==p&&(W=v[0].width)>(k=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE)))throw console.log("Error: The cube face image is too big; it's "+W+"px wide, but this device's maximum supported width is "+k+"px."),{type:"webgl size error",width:W,maxWidth:k};L===r||L.horizonPitch===r&&L.horizonRoll===r||(_=[L.horizonPitch==r?0:L.horizonPitch,L.horizonRoll==r?0:L.horizonRoll]);var z=l.TEXTURE_2D;l.viewport(0,0,l.drawingBufferWidth,l.drawingBufferHeight),d=l.createShader(l.VERTEX_SHADER);var H=o;"multires"==p&&(H=i),l.shaderSource(d,H),l.compileShader(d),c=l.createShader(l.FRAGMENT_SHADER);var q=s;if("cubemap"==p?(z=l.TEXTURE_CUBE_MAP,q=h):"multires"==p&&(q=u),l.shaderSource(c,q),l.compileShader(c),n=l.createProgram(),l.attachShader(n,d),l.attachShader(n,c),l.linkProgram(n),l.getShaderParameter(d,l.COMPILE_STATUS)||console.log(l.getShaderInfoLog(d)),l.getShaderParameter(c,l.COMPILE_STATUS)||console.log(l.getShaderInfoLog(c)),l.getProgramParameter(n,l.LINK_STATUS)||console.log(l.getProgramInfoLog(n)),l.useProgram(n),n.drawInProgress=!1,n.texCoordLocation=l.getAttribLocation(n,"a_texCoord"),l.enableVertexAttribArray(n.texCoordLocation),"multires"!=p){if(x||(x=l.createBuffer()),l.bindBuffer(l.ARRAY_BUFFER,x),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),l.STATIC_DRAW),l.vertexAttribPointer(n.texCoordLocation,2,l.FLOAT,!1,0,0),n.aspectRatio=l.getUniformLocation(n,"u_aspectRatio"),l.uniform1f(n.aspectRatio,l.drawingBufferWidth/l.drawingBufferHeight),n.psi=l.getUniformLocation(n,"u_psi"),n.theta=l.getUniformLocation(n,"u_theta"),n.f=l.getUniformLocation(n,"u_f"),n.h=l.getUniformLocation(n,"u_h"),n.v=l.getUniformLocation(n,"u_v"),n.vo=l.getUniformLocation(n,"u_vo"),n.rot=l.getUniformLocation(n,"u_rot"),l.uniform1f(n.h,I/(2*Math.PI)),l.uniform1f(n.v,U/Math.PI),l.uniform1f(n.vo,P/Math.PI*2),"equirectangular"==p){n.backgroundColor=l.getUniformLocation(n,"u_backgroundColor");var V=L.backgroundColor?L.backgroundColor:[0,0,0];l.uniform4fv(n.backgroundColor,V.concat([1]))}n.texture=l.createTexture(),l.bindTexture(z,n.texture),"cubemap"==p?(l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v[1]),l.texImage2D(l.TEXTURE_CUBE_MAP_NEGATIVE_X,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v[3]),l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_Y,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v[4]),l.texImage2D(l.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v[5]),l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_Z,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v[0]),l.texImage2D(l.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v[2])):l.texImage2D(z,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v),l.texParameteri(z,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(z,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texParameteri(z,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(z,l.TEXTURE_MAG_FILTER,l.LINEAR)}else n.vertPosLocation=l.getAttribLocation(n,"a_vertCoord"),l.enableVertexAttribArray(n.vertPosLocation),R||(R=l.createBuffer()),T||(T=l.createBuffer()),M||(M=l.createBuffer()),l.bindBuffer(l.ARRAY_BUFFER,T),l.bufferData(l.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,1]),l.STATIC_DRAW),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,M),l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),l.STATIC_DRAW),n.perspUniform=l.getUniformLocation(n,"u_perspMatrix"),n.cubeUniform=l.getUniformLocation(n,"u_cubeMatrix"),n.level=-1,n.currentNodes=[],n.nodeCache=[],n.nodeCacheTimestamp=0;var j=l.getError();if(0!==j)throw console.log("Error: Something went wrong with WebGL!",j),{type:"webgl error"};B()}},this.destroy=function(){if(a!==r&&(b!==r&&a.contains(b)&&a.removeChild(b),g!==r&&a.contains(g)&&a.removeChild(g)),l){var e=l.getExtension("WEBGL_lose_context");e&&e.loseContext()}},this.resize=function(){var t=e.devicePixelRatio||1;b.width=b.clientWidth*t,b.height=b.clientHeight*t,l&&(1286==l.getError()&&D(),l.viewport(0,0,l.drawingBufferWidth,l.drawingBufferHeight),"multires"!=p&&l.uniform1f(n.aspectRatio,b.clientWidth/b.clientHeight))},this.resize(),this.setPose=function(e,t){_=[e,t]},this.render=function(e,t,a,o){var i,h,s=0;if(o===r&&(o={}),o.roll&&(s=o.roll),_!==r){var u=_[0],d=_[1],c=e,x=t,M=Math.cos(d)*Math.sin(e)*Math.sin(u)+Math.cos(e)*(Math.cos(u)*Math.cos(t)+Math.sin(d)*Math.sin(u)*Math.sin(t)),w=-Math.sin(e)*Math.sin(d)+Math.cos(e)*Math.cos(d)*Math.sin(t),L=Math.cos(d)*Math.cos(u)*Math.sin(e)+Math.cos(e)*(-Math.cos(t)*Math.sin(u)+Math.cos(u)*Math.sin(d)*Math.sin(t));e=Math.asin(Math.max(Math.min(L,1),-1)),t=Math.atan2(w,M);var N=[Math.cos(c)*(Math.sin(d)*Math.sin(u)*Math.cos(x)-Math.cos(u)*Math.sin(x)),Math.cos(c)*Math.cos(d)*Math.cos(x),Math.cos(c)*(Math.cos(u)*Math.sin(d)*Math.cos(x)+Math.sin(x)*Math.sin(u))],D=[-Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t)],S=Math.acos(Math.max(Math.min((N[0]*D[0]+N[1]*D[1])/(Math.sqrt(N[0]*N[0]+N[1]*N[1]+N[2]*N[2])*Math.sqrt(D[0]*D[0]+D[1]*D[1])),1),-1));N[2]<0&&(S=2*Math.PI-S),s+=S}if(l||"multires"!=p&&"cubemap"!=p){if("multires"!=p){var G=2*Math.atan(Math.tan(.5*a)/(l.drawingBufferWidth/l.drawingBufferHeight));i=1/Math.tan(.5*G),l.uniform1f(n.psi,t),l.uniform1f(n.theta,e),l.uniform1f(n.rot,s),l.uniform1f(n.f,i),!0===E&&"equirectangular"==p&&(l.bindTexture(l.TEXTURE_2D,n.texture),l.texImage2D(l.TEXTURE_2D,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,v)),l.drawArrays(l.TRIANGLES,0,6)}else{var F=function(e,t,r,a){var o=2*Math.atan(Math.tan(e/2)*l.drawingBufferHeight/l.drawingBufferWidth),i=1/Math.tan(o/2);return[i/t,0,0,0,0,i,0,0,0,0,(a+r)/(r-a),2*a*r/(r-a),0,0,-1,0]}(a,l.drawingBufferWidth/l.drawingBufferHeight,.1,100);!function(e){var t=1;for(;t<v.maxLevel&&l.drawingBufferWidth>v.tileResolution*Math.pow(2,t-1)*Math.tan(e/2)*.707;)t++;n.level=t}(a);var X=[1,0,0,0,1,0,0,0,1];X=P(X,-s,"z"),X=P(X,-e,"x"),X=P(X,t,"y"),X=[(q=X)[0],q[1],q[2],0,q[3],q[4],q[5],0,q[6],q[7],q[8],0,0,0,0,1],l.uniformMatrix4fv(n.perspUniform,!1,new Float32Array(B(F))),l.uniformMatrix4fv(n.cubeUniform,!1,new Float32Array(B(X)));var Y=(H=X,[(z=F)[0]*H[0],z[0]*H[1],z[0]*H[2],0,z[5]*H[4],z[5]*H[5],z[5]*H[6],0,z[10]*H[8],z[10]*H[9],z[10]*H[10],z[11],-H[8],-H[9],-H[10],0]);if(n.nodeCache.sort(A),n.nodeCache.length>200&&n.nodeCache.length>n.currentNodes.length+50)for(var W=n.nodeCache.splice(200,n.nodeCache.length-200),k=0;k<W.length;k++)l.deleteTexture(W[k].texture);n.currentNodes=[];var O=["f","b","u","d","l","r"];for(h=0;h<6;h++){U(Y,new I(m[h],O[h],1,0,0,v.fullpath),e,t,a)}for(n.currentNodes.sort(C),k=0;k<n.currentNodes.length;k++)if(!n.currentNodes[k].texture){setTimeout(y,0,n.currentNodes[k]);break}!function(){if(!n.drawInProgress){n.drawInProgress=!0;for(var e=0;e<n.currentNodes.length;e++)n.currentNodes[e].textureLoaded&&(l.bindBuffer(l.ARRAY_BUFFER,R),l.bufferData(l.ARRAY_BUFFER,new Float32Array(n.currentNodes[e].vertices),l.STATIC_DRAW),l.vertexAttribPointer(n.vertPosLocation,3,l.FLOAT,!1,0,0),l.bindBuffer(l.ARRAY_BUFFER,T),l.vertexAttribPointer(n.texCoordLocation,2,l.FLOAT,!1,0,0),l.bindTexture(l.TEXTURE_2D,n.currentNodes[e].texture),l.drawElements(l.TRIANGLES,6,l.UNSIGNED_SHORT,0));n.drawInProgress=!1}}()}var z,H,q;if(o.returnImage!==r)return b.toDataURL("image/png")}else{var V={f:"translate3d(-"+((h=f/2)+2)+"px, -"+(h+2)+"px, -"+h+"px)",b:"translate3d("+(h+2)+"px, -"+(h+2)+"px, "+h+"px) rotateX(180deg) rotateZ(180deg)",u:"translate3d(-"+(h+2)+"px, -"+h+"px, "+(h+2)+"px) rotateX(270deg)",d:"translate3d(-"+(h+2)+"px, "+h+"px, -"+(h+2)+"px) rotateX(90deg)",l:"translate3d(-"+h+"px, -"+(h+2)+"px, "+(h+2)+"px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",r:"translate3d("+h+"px, -"+(h+2)+"px, -"+(h+2)+"px) rotateY(270deg)"},j=(i=1/Math.tan(a/2))*l.drawingBufferWidth/2+"px",Z="perspective("+j+") translateZ("+j+") rotateX("+e+"rad) rotateY("+t+"rad) ",K=Object.keys(V);for(k=0;k<6;k++){var J=g.querySelector(".pnlm-"+K[k]+"face").style;J.webkitTransform=Z+V[K[k]],J.transform=Z+V[K[k]]}}},this.isLoading=function(){if(l&&"multires"==p)for(var e=0;e<n.currentNodes.length;e++)if(!n.currentNodes[e].textureLoaded)return!0;return!1},this.getCanvas=function(){return b};var L=function(){var e,t=4,r={},a=[];function o(){var o=this;this.texture=this.callback=null,this.image=new Image,this.image.crossOrigin=e||"anonymous",this.image.addEventListener("load",function(){var e,i;e=o.image,i=o.texture,l.bindTexture(l.TEXTURE_2D,i),l.texImage2D(l.TEXTURE_2D,0,l.RGB,l.RGB,l.UNSIGNED_BYTE,e),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.bindTexture(l.TEXTURE_2D,null),o.callback(o.texture),function(e){if(a.length){var o=a.shift();e.loadTexture(o.src,o.texture,o.callback)}else r[t++]=e}(o)})}function i(e,t,r){this.src=e,this.texture=t,this.callback=r}o.prototype.loadTexture=function(e,t,r){this.texture=t,this.callback=r,this.image.src=e};for(var n=0;n<t;n++)r[n]=new o;return function(o,n,h){e=h;var s=l.createTexture();return t?r[--t].loadTexture(o,s,n):a.push(new i(o,s,n)),s}}();function y(e){e.textureLoad||(e.textureLoad=!0,L(encodeURI(e.path+"."+v.extension),function(t){e.texture=t,e.textureLoaded=!0},w.crossOrigin))}function N(e,t){var r=function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[4]*t[0]+e[5]*t[1]+e[6]*t[2],e[11]+e[8]*t[0]+e[9]*t[1]+e[10]*t[2],1/(e[12]*t[0]+e[13]*t[1]+e[14]*t[2])]}(e,t),a=r[0]*r[3],o=r[1]*r[3],i=r[2]*r[3],n=[0,0,0];return a<-1&&(n[0]=-1),a>1&&(n[0]=1),o<-1&&(n[1]=-1),o>1&&(n[1]=1),(i<-1||i>1)&&(n[2]=1),n}function D(){console.log("Reducing canvas size due to error 1286!"),b.width=Math.round(b.width/2),b.height=Math.round(b.height/2)}}var o=["attribute vec2 a_texCoord;","varying vec2 v_texCoord;","void main() {","gl_Position = vec4(a_texCoord, 0.0, 1.0);","v_texCoord = a_texCoord;","}"].join(""),i=["attribute vec3 a_vertCoord;","attribute vec2 a_texCoord;","uniform mat4 u_cubeMatrix;","uniform mat4 u_perspMatrix;","varying mediump vec2 v_texCoord;","void main(void) {","gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);","v_texCoord = a_texCoord;","}"].join(""),n=["precision mediump float;","uniform float u_aspectRatio;","uniform float u_psi;","uniform float u_theta;","uniform float u_f;","uniform float u_h;","uniform float u_v;","uniform float u_vo;","uniform float u_rot;","const float PI = 3.14159265358979323846264;","uniform sampler2D u_image;","uniform samplerCube u_imageCube;","varying vec2 v_texCoord;","uniform vec4 u_backgroundColor;","void main() {","float x = v_texCoord.x * u_aspectRatio;","float y = v_texCoord.y;","float sinrot = sin(u_rot);","float cosrot = cos(u_rot);","float rot_x = x * cosrot - y * sinrot;","float rot_y = x * sinrot + y * cosrot;","float sintheta = sin(u_theta);","float costheta = cos(u_theta);","float a = u_f * costheta - rot_y * sintheta;","float root = sqrt(rot_x * rot_x + a * a);","float lambda = atan(rot_x / root, a / root) + u_psi;","float phi = atan((rot_y * costheta + u_f * sintheta) / root);"].join("\n"),h=n+["float cosphi = cos(phi);","gl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));","}"].join("\n"),s=n+["lambda = mod(lambda + PI, PI * 2.0) - PI;","vec2 coord = vec2(lambda / PI, phi / (PI / 2.0));","if(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)","gl_FragColor = u_backgroundColor;","else","gl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));","}"].join("\n"),u=["varying mediump vec2 v_texCoord;","uniform sampler2D u_sampler;","void main(void) {","gl_FragColor = texture2D(u_sampler, v_texCoord);","}"].join("");return{renderer:function(e,t,r,o){return new a(e,t,r,o)}}}(window,document);