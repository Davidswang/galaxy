!function(a){a.fn.farbtastic=function(t){return a.farbtastic(this,t),this},a.farbtastic=function(t,e){return(t=a(t)[0]).farbtastic||(t.farbtastic=new a._farbtastic(t,e))},a._farbtastic=function(t,e){var r=this;r.linkTo=function(t){return"object"==typeof r.callback&&a(r.callback).unbind("keyup",r.updateValue),r.color=null,"function"==typeof t?r.callback=t:"object"!=typeof t&&"string"!=typeof t||(r.callback=a(t),r.callback.bind("keyup",r.updateValue),r.callback[0].value&&r.setColor(r.callback[0].value)),this},r.updateValue=function(a){this.value&&this.value!=r.color&&r.setColor(this.value)},r.setColor=function(a){var t=r.unpack(a);return r.color!=a&&t&&(r.color=a,r.rgb=t,r.hsl=r.RGBToHSL(r.rgb),r.updateDisplay()),this},r.setHSL=function(a){return r.hsl=a,r.rgb=r.HSLToRGB(a),r.color=r.pack(r.rgb),r.updateDisplay(),this},r.initWidget=function(){var o={width:e.width,height:e.width};a(t).html('<div class="farbtastic" style="position: relative"><div class="farbtastic-solid"></div><canvas class="farbtastic-mask"></canvas><canvas class="farbtastic-overlay"></canvas></div>').find("*").attr(o).css(o).end().find("div>*").css("position","absolute"),a.browser.msie,r.radius=(e.width-e.wheelWidth)/2-1,r.square=Math.floor(.7*(r.radius-e.wheelWidth/2))-1,r.mid=Math.floor(e.width/2),r.markerSize=.3*e.wheelWidth,r.solidFill=a(".farbtastic-solid",t).css({width:2*r.square-1,height:2*r.square-1,left:r.mid-r.square,top:r.mid-r.square}),r.cnvMask=a(".farbtastic-mask",t),r.ctxMask=r.cnvMask[0].getContext("2d"),r.cnvOverlay=a(".farbtastic-overlay",t),r.ctxOverlay=r.cnvOverlay[0].getContext("2d"),r.ctxMask.translate(r.mid,r.mid),r.ctxOverlay.translate(r.mid,r.mid),r.drawCircle(),r.drawMask()},r.drawCircle=function(){new Date;var t,o,i=r.radius,c=e.wheelWidth,n=8/i/24*Math.PI,s=r.ctxMask,l=0;s.save(),s.lineWidth=c/i,s.scale(i,i);for(var u=0;u<=24;++u){var d=u/24,h=d*Math.PI*2,f=Math.sin(l),v=-Math.cos(l);if(x2=Math.sin(h),y2=-Math.cos(h),am=(l+h)/2,tan=1/Math.cos((h-l)/2),xm=Math.sin(am)*tan,ym=-Math.cos(am)*tan,color2=r.pack(r.HSLToRGB([d,1,.5])),u>0)if(a.browser.msie){var m=(1+Math.min(Math.abs(Math.tan(l)),Math.abs(Math.tan(Math.PI/2-l))))/24;t=r.pack(r.HSLToRGB([o-.15*m,1,.5])),color2=r.pack(r.HSLToRGB([d+.15*m,1,.5])),(M=s.createLinearGradient(f,v,x2,y2)).addColorStop(0,t),M.addColorStop(1,color2),s.fillStyle=M;var b=(i+c/2)/i,k=(i-c/2)/i;s.beginPath(),s.moveTo(f*b,v*b),s.quadraticCurveTo(xm*b,ym*b,x2*b,y2*b),s.lineTo(x2*k,y2*k),s.quadraticCurveTo(xm*k,ym*k,f*k,v*k),s.fill()}else{var M=s.createLinearGradient(f,v,x2,y2);M.addColorStop(0,t),M.addColorStop(1,color2),s.strokeStyle=M,s.beginPath(),s.moveTo(f,v),s.quadraticCurveTo(xm,ym,x2,y2),s.stroke()}l=h-n,t=color2,o=d}s.restore()},r.drawMask=function(){function t(a,t,e){for(var r=1/a,o=1/t,i=0;i<=t;++i)for(var c=1-i*o,n=0;n<=a;++n){var s=1-n*r,l=1-2*Math.min(c*s,(1-c)*s);e(n,i,l>0?.5*(2*c-1+l)/l:0,l)}}new Date;var e=2*r.square,o=r.square;if(r.ctxMask.getImageData){var i=Math.floor(e/2),c=document.createElement("canvas");c.width=c.height=i+1;var n=c.getContext("2d"),s=n.getImageData(0,0,i+1,i+1),l=0;t(i,i,function(a,t,e,r){s.data[l++]=s.data[l++]=s.data[l++]=255*e,s.data[l++]=255*r}),n.putImageData(s,0,0),r.ctxMask.drawImage(c,0,0,i+1,i+1,-o,-o,2*o,2*o)}else if(a.browser.msie){var u,d,h=Math.floor(e/6);t(h,6,function(t,e,i,c){if(0==t&&(u=d,d=[]),i=Math.round(255*i),c=Math.round(255*c),e>0){var n=u[t][0],s=u[t][1],l=r.packDX(n,s),f=r.packDX(i,c),v=Math.round(r.mid+(.333*(e-1)-1)*o),m=Math.round(r.mid+(.333*e-1)*o);a("<div>").css({position:"absolute",filter:"progid:DXImageTransform.Microsoft.Gradient(StartColorStr="+l+", EndColorStr="+f+", GradientType=0)",top:v,height:m-v,left:r.mid+(6*t-o-1),width:6-(t==h?Math.round(3):0)}).appendTo(r.cnvMask)}d.push([i,c])})}else t(i=Math.floor(e/2),i,function(a,t,e,i){e=Math.round(255*e),r.ctxMask.fillStyle="rgba("+e+", "+e+", "+e+", "+i+")",r.ctxMask.fillRect(2*a-o-1,2*t-o-1,2,2)})},r.drawMarkers=function(){var a=e.width,t=Math.ceil(r.markerSize/4),o=r.markerSize-t+1,i=6.28*r.hsl[0],c=Math.sin(i)*r.radius,n=-Math.cos(i)*r.radius,s=2*r.square*(.5-r.hsl[1]),l=2*r.square*(.5-r.hsl[2]),u=r.invert?"#fff":"#000",d=r.invert?"#000":"#fff",h=[{x:c,y:n,r:o,c:"#000",lw:t+1},{x:c,y:n,r:r.markerSize,c:"#fff",lw:t},{x:s,y:l,r:o,c:d,lw:t+1},{x:s,y:l,r:r.markerSize,c:u,lw:t}];r.ctxOverlay.clearRect(-r.mid,-r.mid,a,a);for(var f=0;f<h.length;f++){var v=h[f];r.ctxOverlay.lineWidth=v.lw,r.ctxOverlay.strokeStyle=v.c,r.ctxOverlay.beginPath(),r.ctxOverlay.arc(v.x,v.y,v.r,0,2*Math.PI,!0),r.ctxOverlay.stroke()}},r.updateDisplay=function(){r.invert=.3*r.rgb[0]+.59*r.rgb[1]+.11*r.rgb[2]<=.6,r.solidFill.css("backgroundColor",r.pack(r.HSLToRGB([r.hsl[0],1,.5]))),r.drawMarkers(),"object"==typeof r.callback?(a(r.callback).css({backgroundColor:r.color,color:r.invert?"#fff":"#000"}),a(r.callback).each(function(){"string"==typeof this.value&&this.value!=r.color&&(this.value=r.color)}).change()):"function"==typeof r.callback&&r.callback.call(r,r.color)},r.widgetCoords=function(a){return{x:a.pageX-r.offset.left-r.mid,y:a.pageY-r.offset.top-r.mid}},r.mousedown=function(e){a._farbtastic.dragging||(a(document).bind("mousemove",r.mousemove).bind("mouseup",r.mouseup),a._farbtastic.dragging=!0),r.offset=a(t).offset();var o=r.widgetCoords(e);return r.circleDrag=Math.max(Math.abs(o.x),Math.abs(o.y))>r.square+2,r.mousemove(e),!1},r.mousemove=function(a){var t=r.widgetCoords(a);if(r.circleDrag){var e=Math.atan2(t.x,-t.y)/6.28;r.setHSL([(e+1)%1,r.hsl[1],r.hsl[2]])}else{var o=Math.max(0,Math.min(1,-t.x/r.square/2+.5)),i=Math.max(0,Math.min(1,-t.y/r.square/2+.5));r.setHSL([r.hsl[0],o,i])}return!1},r.mouseup=function(){a(document).unbind("mousemove",r.mousemove),a(document).unbind("mouseup",r.mouseup),a._farbtastic.dragging=!1},r.dec2hex=function(a){return(a<16?"0":"")+a.toString(16)},r.packDX=function(a,t){return"#"+r.dec2hex(t)+r.dec2hex(a)+r.dec2hex(a)+r.dec2hex(a)},r.pack=function(a){var t=Math.round(255*a[0]),e=Math.round(255*a[1]),o=Math.round(255*a[2]);return"#"+r.dec2hex(t)+r.dec2hex(e)+r.dec2hex(o)},r.unpack=function(a){function t(t){return parseInt(a.substring(t,t+2),16)/255}function t(t){return parseInt(a.substring(t,t+1),16)/15}return 7==a.length?[t(1),t(3),t(5)]:4==a.length?[t(1),t(2),t(3)]:void 0},r.HSLToRGB=function(a){var t,e,r=a[0],o=a[1],i=a[2];return e=i<=.5?i*(o+1):i+o-i*o,t=2*i-e,[this.hueToRGB(t,e,r+.33333),this.hueToRGB(t,e,r),this.hueToRGB(t,e,r-.33333)]},r.hueToRGB=function(a,t,e){return 6*(e=(e+1)%1)<1?a+(t-a)*e*6:2*e<1?t:3*e<2?a+(t-a)*(.66666-e)*6:a},r.RGBToHSL=function(a){var t=a[0],e=a[1],r=a[2],o=Math.min(t,e,r),i=Math.max(t,e,r),c=i-o,n=0,s=0,l=(o+i)/2;return l>0&&l<1&&(s=c/(l<.5?2*l:2-2*l)),c>0&&(i==t&&i!=e&&(n+=(e-r)/c),i==e&&i!=r&&(n+=2+(r-t)/c),i==r&&i!=t&&(n+=4+(t-e)/c),n/=6),[n,s,l]},e.callback||(e={callback:e}),e=a.extend({width:300,wheelWidth:(e.width||300)/10,callback:null},e),r.initWidget(),a("canvas.farbtastic-overlay",t).mousedown(r.mousedown),e.callback&&r.linkTo(e.callback),r.color||r.setColor("#808080")}}(jQuery);