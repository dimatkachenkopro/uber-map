(window["webpackJsonpuber-maps"]=window["webpackJsonpuber-maps"]||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),l=a(20),i=a.n(l),s=a(7),c=a(15),o=a(5),u=a(4),m=a(9),d=a(6),k=a(8),f=a(17),p=(a(30),{fill:"#d00",stroke:"none"}),h=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.size,t=void 0===e?20:e;return n.a.createElement("svg",{height:t,viewBox:"0 0 24 24",style:p},n.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),t}(r.PureComponent),b=(a(31),function(e){var t=e.listItems,a=e.deleteMarker,r=e.clearMarkers;return n.a.createElement("aside",{className:"aside"},n.a.createElement("h3",null,"Markers list"),n.a.createElement("hr",null),n.a.createElement("ul",{className:"markers-list"},t.map(function(e,t){return n.a.createElement("li",{className:"markers-list__item",key:t},"Marker: ","".concat(e.longitude.toFixed(6)," / ").concat(e.latitude.toFixed(6)),n.a.createElement("button",{onClick:function(){return a(t)},className:"button button--delete"},"Delete marker"))}),t.length?n.a.createElement("button",{onClick:r,className:"button u-full-width"},"Clear markers"):null))}),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={viewport:{width:1920,height:1080,latitude:49.01956,longitude:31.03717,zoom:5},markers:[{latitude:51.237049,longitude:21.017532},{latitude:52.237249,longitude:22.017532},{latitude:53.237249,longitude:23.017532}]},a.TOKEN="pk.eyJ1IjoiZGltYXRrYWNoZW5rbyIsImEiOiJjanpjeXc1bGswMnloM2NscTQ3azg2OWY2In0.fp9hwpLq0hCnR-hf_clerg",a.deleteMarker=function(e){var t=Object(c.a)(a.state.markers);t.splice(e,1),a.setState({markers:t})},a.clearMarkers=function(){a.setState({markers:[]})},a}return Object(k.a)(t,e),Object(u.a)(t,[{key:"updateViewPort",value:function(e){this.setState({viewport:e})}},{key:"addMarker",value:function(e){var t=Object(s.a)(e.lngLat,2),a=t[0],r={latitude:t[1],longitude:a};this.setState(function(e){return{markers:[].concat(Object(c.a)(e.markers),[r])}})}},{key:"updateMarker",value:function(e,t){var a={latitude:e.lngLat[1],longitude:e.lngLat[0],offsetLeft:0,offsetTop:0},r=Object(c.a)(this.state.markers);r.splice(t,1,a),this.setState({markers:r})}},{key:"render",value:function(){var e=this,t=this.state.markers;return n.a.createElement(n.a.Fragment,null,this.state.markers.length?n.a.createElement(b,{listItems:this.state.markers,deleteMarker:this.deleteMarker,clearMarkers:this.clearMarkers}):null,n.a.createElement(f.b,Object.assign({mapStyle:"mapbox://styles/mapbox/dark-v9",className:"map",mapboxApiAccessToken:this.TOKEN},this.state.viewport,{onViewportChange:function(t){return e.updateViewPort(t)},onClick:function(t){return e.addMarker(t)}}),t.map(function(t,a){return n.a.createElement(f.a,{key:a,latitude:t.latitude,longitude:t.longitude,offsetLeft:t.offsetLeft,offsetTop:t.offsetTop,draggable:!0,onDragEnd:function(t){return e.updateMarker(t,a)}},n.a.createElement(h,{size:20}),"".concat(t.longitude.toFixed(6)," / ").concat(t.latitude.toFixed(6)))})))}}]),t}(r.Component);var v=function(){return n.a.createElement(g,null)};i.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.733e1336.chunk.js.map