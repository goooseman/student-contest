"use strict";angular.module("mouseMoveSpeedApp",["ngResource","ui.bootstrap"]),angular.module("mouseMoveSpeedApp").controller("MainCtrl",["$scope",function(a){function b(a){return a*Math.PI/180}function c(a,b){a.ctx.beginPath(),a.ctx.globalAlpha=b.alpha,a.ctx.lineWidth=b.lineWidth,a.ctx.fillStyle=b.fillStyle,a.ctx.strokeStyle=b.fillStyle,a.ctx.moveTo(b.from.X,b.from.Y),a.ctx.lineTo(b.to.X,b.to.Y),a.ctx.stroke()}function d(a,b,c,d,e,f,g){return{from:{X:a,Y:b},to:{X:c,Y:d},fillStyle:e,lineWidth:f,alpha:g}}function e(a){a.ctx.beginPath(),a.ctx.fillStyle="rgb(127,127,127)",a.ctx.arc(a.center.X,a.center.Y,a.radius,0,Math.PI,!0),a.ctx.fill()}function f(a){a.ctx.beginPath(),a.ctx.fillStyle="rgb(255,255,255)",a.ctx.arc(a.center.X,a.center.Y,a.radius/100*90,0,Math.PI,!0),a.ctx.fill()}function g(a){e(a),f(a)}function h(a){var b=0;for(a.ctx.globalAlpha=.2,a.ctx.fillStyle="rgb(0,0,0)",b=170;180>b;b++)a.ctx.beginPath(),a.ctx.arc(a.center.X,a.center.Y,b,0,Math.PI,!0),a.ctx.fill()}function i(a){a.ctx.lineWidth=2,a.ctx.globalAlpha=.5,a.ctx.strokeStyle="rgb(255, 255, 255)",a.ctx.fillStyle="rgb(255,255,255)"}function j(a){var e,f,g,h,j,k,l,m,n,o=a.levelRadius-8,p=0,q=a.gaugeOptions,r=0;for(i(a),p=10;180>p;p+=20)r=b(p),e=q.radius-Math.cos(r)*o,f=q.radius-Math.sin(r)*o,g=q.radius-Math.cos(r)*q.radius,h=q.radius-Math.sin(r)*q.radius,j=a.center.X-q.radius+e,k=q.center.Y-q.radius+f,m=a.center.X-q.radius+g,n=q.center.Y-q.radius+h,l=d(j,k,m,n,"rgb(127,127,127)",3,.6),c(a,l)}function k(a){var e,f,g,h,j,k,l,m,n,o=a.levelRadius-8,p=0,q=a.gaugeOptions,r=0;for(i(a),o=a.levelRadius-2,p=20;180>p;p+=20)r=b(p),g=q.radius-Math.cos(r)*o,h=q.radius-Math.sin(r)*o,f=q.radius-Math.cos(r)*q.radius,e=q.radius-Math.sin(r)*q.radius,j=a.center.X-q.radius+g,k=q.center.Y-q.radius+h,l=a.center.X-q.radius+f,m=q.center.Y-q.radius+e,n=d(j,k,l,m,"rgb(127,127,127)",3,.6),c(a,n)}function l(a){j(a),k(a)}function m(a){var c=0,d=0,e=0,f=a.gaugeOptions,g=0;for(i(a),a.ctx.font="italic 10px sans-serif",a.ctx.textBaseline="top",a.ctx.beginPath(),e=10;180>e;e+=20)c=f.radius-Math.cos(b(e))*f.radius,d=f.radius-Math.sin(b(e))*f.radius,10>=e?a.ctx.fillText(g,a.center.X-f.radius-12+c,f.center.Y-f.radius-12+d+5):50>e?a.ctx.fillText(g,a.center.X-f.radius-12+c-5,f.center.Y-f.radius-12+d+5):90>e?a.ctx.fillText(g,a.center.X-f.radius-12+c,f.center.Y-f.radius-12+d):90===e?a.ctx.fillText(g,a.center.X-f.radius-12+c+4,f.center.Y-f.radius-12+d):145>e?a.ctx.fillText(g,a.center.X-f.radius-12+c+10,f.center.Y-f.radius-12+d):a.ctx.fillText(g,a.center.X-f.radius-12+c+15,f.center.Y-f.radius-12+d+5),g+=10;a.ctx.stroke()}function n(a,b,c,d){a.ctx.beginPath(),a.ctx.globalAlpha=b,a.ctx.lineWidth=5,a.ctx.strokeStyle=c,a.ctx.arc(a.center.X,a.center.Y,a.levelRadius,Math.PI+Math.PI/360*d,0-Math.PI/360*10,!1),a.ctx.stroke()}function o(a){var b=10,c=200,d=280;n(a,1,"rgb(82, 240, 55)",b),n(a,.9,"rgb(198, 111, 0)",c),n(a,.9,"rgb(255, 0, 0)",d)}function p(a,b,c,d){var e=0;for(a.ctx.globalAlpha=b,a.ctx.lineWidth=3,a.ctx.strokeStyle=c,a.ctx.fillStyle=d,e=0;30>e;e++)a.ctx.beginPath(),a.ctx.arc(a.center.X,a.center.Y,e,0,Math.PI,!0),a.ctx.fill(),a.ctx.stroke()}function q(a){var b=a.speed/10,c=(20*b+10)%180;return c>180?c-=180:0>c&&(c+=180),c}function r(a){var e=q(a),f=b(e),g=a.gaugeOptions,h=g.radius-20*Math.cos(f),i=g.radius-20*Math.sin(f),j=a.center.X-g.radius+h,k=g.center.Y-g.radius+i,l=g.radius-Math.cos(f)*g.radius,m=g.radius-Math.sin(f)*g.radius,n=a.center.X-g.radius+l,o=g.center.Y-g.radius+m,r=d(j,k,n,o,"rgb(255,0,0)",5,.6);c(a,r),p(a,.6,"rgb(127, 127, 127)","rgb(255,255,255)"),p(a,.2,"rgb(127, 127, 127)","rgb(127,127,127)")}function s(a,b){var c=210,d=210,e=140,f=200;return{ctx:a.getContext("2d"),speed:b,center:{X:c,Y:d},levelRadius:e-10,gaugeOptions:{center:{X:c,Y:d},radius:e},radius:f}}function t(a){a.ctx.clearRect(0,0,800,600),i(a)}function u(){console.log("Target: "+w),console.log("Current: "+v);var a=document.getElementById("speedometer-canvas"),b=null;return null!==a&&a.getContext?(b=s(a,v),t(b),g(b),h(b),l(b),m(b),o(b),r(b)):alert("Canvas not supported by your browser!"),w==v?void clearTimeout(y):(v>w?x=!0:w>v&&(x=!1),x?v-=w>v-10?1:5:v+=v+10>w?1:5,void(y=setTimeout("draw()",5)))}var v=40,w=20,x=null,y=null;a.$on("$includeContentLoaded",function(){v=60,u()})}]);