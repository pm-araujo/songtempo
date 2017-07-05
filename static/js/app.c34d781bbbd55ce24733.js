webpackJsonp([1],{0:function(t,i,I){function o(t){I(52)}var a=I(1)(I(18),I(846),o,null,null);t.exports=a.exports},14:function(t,i,I){"use strict";var o=I(2),a=I(7);o.a.use(a.c),i.a=new a.c.Store({state:{bpm:90,bpmControls:1,bpmClickMuted:!0},getters:{getControlsState:function(t){return t.bpmControls},getBpmRadial:function(t){return(.228554+(1.093834-.228554)/(1+Math.pow(t.bpm/99.45512,4.168781))).toFixed(3)+"s"},getBpmMetronome:function(t){return(.4571079+(2.187667-.4571079)/(1+Math.pow(t.bpm/99.45512,4.168781))).toFixed(3)+"s"},getBpm:function(t){return t.bpm},getBpmClick:function(t){return t.bpmClickMuted}},mutations:{closeControls:function(t){t.bpmControls=0},peekControls:function(t){t.bpmControls=1},openControls:function(t){t.bpmControls=2},setBpm:function(t,i){t.bpm=i},toggleBpmClick:function(t){t.bpmClickMuted=!t.bpmClickMuted}},actions:{incrementBpm:function(t){t.state.bpm<240&&t.commit("setBpm",t.state.bpm+30)},decrementBpm:function(t){t.state.bpm>60&&t.commit("setBpm",t.state.bpm-30)},togglePeekControls:function(t,i){0===t.state.bpmControls?t.commit("peekControls"):1===t.state.bpmControls&&(0===i?t.commit("closeControls"):t.commit("peekControls"))},toggleOpenControls:function(t){2===t.state.bpmControls?t.commit("closeControls"):t.commit("openControls")},toggleBpmClick:function(t){t.commit("toggleBpmClick")}}})},16:function(t,i,I){function o(t){I(50)}var a=I(1)(I(19),I(844),o,null,null);t.exports=a.exports},17:function(t,i,I){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=I(2),a=I(16),n=I.n(a),l=I(14),e=I(0),c=I.n(e);I(15);o.a.component("icon",c.a),o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",store:l.a,components:{App:n.a}})},18:function(t,i,I){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=I(2),a={};i.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(o.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(o.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,i=t.width,I=t.height;return Math.max(i,I)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(i){i.outerScale=t.normalizedScale});var i=0,I=0;this.$children.forEach(function(t){i=Math.max(i,t.width),I=Math.max(I,t.height)}),this.childrenWidth=i,this.childrenHeight=I,this.$children.forEach(function(t){t.x=(i-t.width)/2,t.y=(I-t.height)/2})}},register:function(t){for(var i in t){var I=t[i];I.paths||(I.paths=[]),I.d&&I.paths.push({d:I.d}),I.polygons||(I.polygons=[]),I.points&&I.polygons.push({points:I.points}),a[i]=I}},icons:a}},19:function(t,i,I){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=I(841),a=I.n(o),n=I(842),l=I.n(n);i.default={name:"app",components:{navbar:a.a,"welcome-hero":l.a},mounted:function(){this.$children[0].$emit("appLoaded"),this.$children[1].$emit("appLoaded")}}},20:function(t,i,I){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=I(8),a=I.n(o),n=I(7);i.default={data:function(){return{appLoaded:!1,clickInterval:{}}},computed:a()({},I.i(n.a)({bpm:"getBpm",bpmMetro:"getBpmMetronome",bpmClickMuted:"getBpmClick"}),{metroAnimation:function(){return{animationDuration:this.bpmMetro,animationPlayState:this.appLoaded?"running":"paused"}}}),methods:a()({},I.i(n.b)({peekControls:"togglePeekControls",openControls:"toggleOpenControls"})),watch:{bpm:function(){var t=this;clearInterval(this.clickInterval),this.bpmClickMuted||(this.clickInterval=setInterval(function(){t.$refs.clickSound.currentTime=0,t.$refs.clickSound.play()},6e4/this.bpm))},bpmClickMuted:function(){var t=this;clearInterval(this.clickInterval),this.bpmClickMuted||(this.clickInterval=setInterval(function(){t.$refs.clickSound.currentTime=0,t.$refs.clickSound.play()},6e4/this.bpm))}},mounted:function(){var t=this;this.$on("appLoaded",function(){t.appLoaded=!0})}}},21:function(t,i,I){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=I(8),a=I.n(o),n=I(7);i.default={data:function(){return{appLoaded:!1}},computed:a()({},I.i(n.a)({bpmControls:"getControlsState",bpmClickMuted:"getBpmClick"}),{bpmControlsClass:function(){return{"Hero-bpmWrapper--hidden":0===this.bpmControls,"Hero-bpmWrapper--peek":1===this.bpmControls,"Hero-bpmWrapper--open":2===this.bpmControls}},radialAnimation:function(){return{animationDuration:this.getBpm(),animationPlayState:this.appLoaded?"running":"paused"}}}),methods:a()({},I.i(n.a)({getBpm:"getBpmRadial"}),I.i(n.b)({incrementBpm:"incrementBpm",decrementBpm:"decrementBpm",peekControls:"togglePeekControls",openControls:"toggleOpenControls",toggleBpmClick:"toggleBpmClick"})),mounted:function(){var t=this;this.$on("appLoaded",function(){t.appLoaded=!0})}}},50:function(t,i){},51:function(t,i){},52:function(t,i){},53:function(t,i){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNDcuOTc3NzA3bW0iCiAgIGhlaWdodD0iMTMxLjc1NzQ2bW0iCiAgIHZpZXdCb3g9IjAgMCAxNjkuOTk5NzUgNDY2Ljg1NzE1IgogICBpZD0ic3ZnNDMyNCIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibWV0cm8tcG9pbnRlci5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0MzI2IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjciCiAgICAgaW5rc2NhcGU6Y3g9IjExNy42NDE0MiIKICAgICBpbmtzY2FwZTpjeT0iMzM5LjE5Njg2IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MzI5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI5LjUwMDEyLC0zMjQuNjQ3OTIpIj4KICAgIDxnCiAgICAgICBpZD0iZzQzMzciCiAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiPgogICAgICA8cmVjdAogICAgICAgICB5PSIzMjYuNjQ3OTIiCiAgICAgICAgIHg9IjIwMi44NTcxNSIKICAgICAgICAgaGVpZ2h0PSI0NjIuODU3MTUiCiAgICAgICAgIHdpZHRoPSIyMyIKICAgICAgICAgaWQ9InJlY3Q0MzMyIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICA8cGF0aAogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0icmVjdDQzMzQiCiAgICAgICAgIGQ9Im0gMTMxLjUsMzc1LjIxOTM2IDE2NiwwIC00MCw4MCAtODYsMCB6IgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="},54:function(t,i){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTQ1Ljg0OTY5bW0iCiAgIGhlaWdodD0iMTQ1Ljg1MDE5bW0iCiAgIHZpZXdCb3g9IjAgMCA1MTYuNzkwMjIgNTE2Ljc5MjAxIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibWV0cm9ub21lLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuNzA3MTA2NzgiCiAgICAgaW5rc2NhcGU6Y3g9IjIzMy40NDEyNCIKICAgICBpbmtzY2FwZTpjeT0iMTUwLjE4MTQ1IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHNob3dndWlkZXM9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgaWQ9ImdyaWQ0MTY0IgogICAgICAgb3JpZ2lueD0iLTEzNy4xMTU5NCIKICAgICAgIG9yaWdpbnk9Ii0zNDcuNzI2OCIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3LjExNTk0LC0xODcuODQzNDMpIj4KICAgIDxwYXRoCiAgICAgICBpZD0icmVjdDQxNjEiCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0MDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMzM3LjExNTA1LDIwNy44NDM0MyAxMTguNzkxOTksMCAxNzgsNDc2Ljc5MTk5IC00NzYuNzkxOTksMCB6IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxOC44NTUyODk0NjtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0NDE4OSIKICAgICAgIHdpZHRoPSI0My4wNjE0NTUiCiAgICAgICBoZWlnaHQ9IjM1Mi4yNjI0NSIKICAgICAgIHg9IjM3NS4wNTIxOSIKICAgICAgIHk9IjI0Ni42NzM0MiIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo0MDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0NDIxMyIKICAgICAgIHdpZHRoPSIxMCIKICAgICAgIGhlaWdodD0iMzczLjEyNSIKICAgICAgIHg9IjM5MS41IgogICAgICAgeT0iMjM1LjIzNzIiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAzNzAuMTE1OTQsNTg5Ljk5MDg5IDIxLjUzLDAiCiAgICAgICBpZD0icGF0aDQyMjkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjc7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNDAxLjExNTk0LDU0Ni42MzY0NCAyMS41MywwIgogICAgICAgaWQ9InBhdGg0MjI5LTYiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjc7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMzcwLjExNTk0LDUwMi45MzU0NCAyMS41MywwIgogICAgICAgaWQ9InBhdGg0MjI5LTUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjc7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNDAxLjExNTk0LDQ1OS41ODA5OSAyMS41MywwIgogICAgICAgaWQ9InBhdGg0MjI5LTYtNSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAzNzAuMTE1OTQsNDE2LjA4NTQ0IDIxLjUzLDAiCiAgICAgICBpZD0icGF0aDQyMjktMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSA0MDEuMTE1OTQsMzcyLjczMDk5IDIxLjUzLDAiCiAgICAgICBpZD0icGF0aDQyMjktNi0xIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo3O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDM3MC4xMTU5NCwzMjkuMDI5OTkgMjEuNTMsMCIKICAgICAgIGlkPSJwYXRoNDIyOS01LTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjc7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNDAxLjExNTk0LDI4NS42NzU1NCAyMS41MywwIgogICAgICAgaWQ9InBhdGg0MjI5LTYtNS05IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo="},841:function(t,i,I){var o=I(1)(I(20),I(843),null,null,null);t.exports=o.exports},842:function(t,i,I){function o(t){I(51)}var a=I(1)(I(21),I(845),o,null,null);t.exports=a.exports},843:function(t,i,I){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("header",{staticClass:"Navbar",on:{mouseover:function(i){t.peekControls(1)},mouseleave:function(i){t.peekControls(0)},click:t.openControls}},[o("audio",{ref:"clickSound",attrs:{preload:"true",src:"static/sounds/click.mp3"}}),t._v(" "),o("div",{staticClass:"Navbar-headerTitle"},[o("div",{staticClass:"Text-orange u-marginLeft--small"},[t._v("Song")]),t._v(" "),o("div",{staticClass:"Metronome u-marginLeft--xSmall"},[o("img",{staticClass:"Metronome-base",attrs:{src:I(54)}}),t._v(" "),o("img",{staticClass:"Metronome-pointer",style:t.metroAnimation,attrs:{src:I(53)}})]),t._v(" "),o("div",{staticClass:"u-marginLeft--xSmall"},[t._v("Tempo")])]),t._v(" "),o("span",{staticClass:"Navbar-bpmCount u-marginTop--tiny"},[t._v(t._s(t.bpm)+" bpm")]),t._v(" "),o("span")])},staticRenderFns:[]}},844:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,I=t._self._c||i;return I("div",{attrs:{id:"app"}},[I("navbar"),t._v(" "),I("welcome-hero"),t._v(" "),I("footer",{staticClass:"Footer"},[t._m(0),t._v(" "),t._m(1),t._v(" "),I("div",{staticClass:"u-marginTop--tiny"},[t._v("\n      Copyright © 2017 Pedro Araújo\n    ")]),t._v(" "),I("a",{staticClass:"Footer-link",attrs:{target:"_blank",href:"https://github.com/pm-araujo"}},[I("icon",{attrs:{name:"github",scale:"2"}})],1)])],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,I=t._self._c||i;return I("p",{staticClass:"u-marginBot--tiny"},[t._v("\n      Released under the\n      "),I("a",{staticClass:"Footer-link",attrs:{target:"_blank",href:"https://opensource.org/licenses/MIT"}},[t._v("MIT License\n      ")])])},function(){var t=this,i=t.$createElement,I=t._self._c||i;return I("div",[t._v("\n      Resources used by this page are\n      "),I("a",{staticClass:"Footer-link",attrs:{href:"https://en.wikipedia.org/wiki/Public_domain",target:"_blank"}},[t._v("\n        Public Domain\n      ")])])}]}},845:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,I=t._self._c||i;return I("section",{staticClass:"Hero"},[I("div",{staticClass:"Hero-radialPulse",style:t.radialAnimation}),t._v(" "),I("div",{staticClass:"Hero-bpmWrapper",class:t.bpmControlsClass},[I("div",{staticClass:"Hero-bpmControls"},[I("button",{staticClass:"Button",on:{click:t.toggleBpmClick}},[I("icon",{style:{opacity:t.bpmClickMuted?.5:1},attrs:{name:"music"}})],1),t._v(" "),I("button",{staticClass:"Button",on:{click:t.incrementBpm}},[t._v("Faster")]),t._v(" "),I("button",{staticClass:"Button",on:{click:t.decrementBpm}},[t._v("Slower")]),t._v(" "),I("button",{staticClass:"Button Button--roundBot",on:{click:t.openControls}},[I("icon",{attrs:{name:2===this.bpmControls?"angle-up":"angle-down"}})],1)])]),t._v(" "),I("div",{staticClass:"Hero-wrapper u-marginTop--medium"},[I("div",{staticClass:"Hero-welcomeMsg"},[t._v("\n      Upload music file to see tempo stats\n    ")]),t._v(" "),I("div",{staticClass:"u-marginTop--medium"},[I("button",{staticClass:"Button"},[I("icon",{staticClass:"u-marginRight--xSmall",attrs:{name:"upload"}}),t._v(" "),I("span",[t._v("Upload")])],1)]),t._v(" "),I("div",{staticClass:"Hero-extensionTitle u-marginTop--xSmall"},[t._v("\n      Supported extensions:\n    ")]),t._v(" "),I("small",{staticClass:"Hero-extensionList"},[t._v("MP3, WAV, OGG, ACC")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,i=t.$createElement,I=t._self._c||i;return I("div",{staticClass:"Hero-footer u-marginTop--large"},[I("div",{staticClass:"Hero-controls"})])}]}},846:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,I=t._self._c||i;return I("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(i){return I("path",t._b({},"path",i))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(i){return I("polygon",t._b({},"polygon",i))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[I("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}}},[17]);
//# sourceMappingURL=app.c34d781bbbd55ce24733.js.map