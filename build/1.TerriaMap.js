((self||window).webpackJsonp=(self||window).webpackJsonp||[]).push([[1],{1834:function(t,e,i){t.exports={btn:"tjs-augmented_virtuality_tool__btn tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-primary":"tjs-augmented_virtuality_tool__btn-primary tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn",btnPrimary:"tjs-augmented_virtuality_tool__btn-primary tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-blink":"tjs-augmented_virtuality_tool__btn-blink tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn",btnBlink:"tjs-augmented_virtuality_tool__btn-blink tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-primary--hover":"tjs-augmented_virtuality_tool__btn-primary--hover",btnPrimaryHover:"tjs-augmented_virtuality_tool__btn-primary--hover",blinker:"tjs-augmented_virtuality_tool__blinker",toolButton:"tjs-augmented_virtuality_tool__toolButton",augmentedVirtualityTool:"tjs-augmented_virtuality_tool__augmentedVirtualityTool tjs-tool_button__toolButton"}},1835:function(t,e,i){"use strict";var a=h(i(8)),n=h(i(9)),r=h(i(23)),o=h(i(14)),l=h(i(43)),s=h(i(12)),u=h(i(341)),d=h(i(671));function h(t){return t&&t.__esModule?t:{default:t}}var _=function t(e){var i=this;this._terria=e,this._eventLoopState={},this._manualAlignment=!1,this._maximumUpdatesPerSecond=t.DEFAULT_MAXIMUM_UPDATES_PER_SECOND,this._orientationUpdated=!1,this._alpha=0,this._beta=0,this._gamma=0,this._realignAlpha=0,this._realignHeading=0,this._hoverLevel=t.PRESET_HEIGHTS.length-1,"ondeviceorientation"in window&&window.addEventListener("deviceorientation",function(t){i._storeOrientation(t)}),r.default.track(this,["_eventLoopState","_manualAlignment","_maximumUpdatesPerSecond","_realignAlpha","_realignHeading","_hoverLevel"]),r.default.defineProperty(this,"enabled",{get:function(){return this._eventLoopRunning()||this._manualAlignment},set:function(t){!0!==t&&(t=!1,this.resetAlignment()),t!==this.enabled&&(this._manualAlignment=!1,this._startEventLoop(t))}}),r.default.defineProperty(this,"manualAlignment",{get:function(){return this._getManualAlignment()},set:function(t){this._setManualAlignment(t)}}),r.default.defineProperty(this,"manualAlignmentSet",{get:function(){return 0!==this._realignAlpha||0!==this._realignHeading}}),r.default.defineProperty(this,"hoverLevel",{get:function(){return this._hoverLevel}}),r.default.defineProperty(this,"maximumUpdatesPerSecond",{get:function(){return this._maximumUpdatesPerSecond},set:function(t){this._maximumUpdatesPerSecond=t,this._eventLoopRunning()&&(this._startEventLoop(!1),this._startEventLoop(!0))}}),this.enabled=!1};_.DEFAULT_MAXIMUM_UPDATES_PER_SECOND=10,_.MINIMUM_HOVER_HEIGHT=20,_.PRESET_HEIGHTS=[1e3,250,20],_.prototype.toggleEnabled=function(){this.enabled=!this.enabled},_.prototype.toggleManualAlignment=function(){this.manualAlignment=!this.manualAlignment},_.prototype.resetAlignment=function(){this._orientationUpdated=!0,this._realignAlpha=0,this._realignHeading=0},_.prototype.toggleHoverHeight=function(){this._hoverLevel=(this._hoverLevel+1)%_.PRESET_HEIGHTS.length,this.hover(_.PRESET_HEIGHTS[this._hoverLevel])},_.prototype.hover=function(t,e,i){var r=this;if((0,a.default)(this._terria.cesium)&&(0,a.default)(this._terria.cesium.viewer)&&(0,a.default)(this._terria.cesium.viewer.camera)){var o=this._terria.cesium.viewer.camera;if((0,a.default)(e)||(e=o.positionCartographic.clone()),i=(0,n.default)(i,!0),t<_.MINIMUM_HOVER_HEIGHT&&(t=_.MINIMUM_HOVER_HEIGHT),!(0,a.default)(this._terria.cesium)||!(0,a.default)(this._terria.cesium.scene)||!(0,a.default)(this._terria.cesium.scene.terrainProvider)||this._terria.cesium.scene.terrainProvider instanceof u.default)h(0);else{var l=this._terria.cesium.scene.terrainProvider;(0,d.default)(l,[e]).then(function(t){h(t[0].height)})}}function h(n){(0,a.default)(n)&&(t+=n);var l=s.default.fromRadians(e.longitude,e.latitude,t),u=r._getCurrentOrientation();u.destination=l,i?o.flyTo(u):o.setView(u),r._terria.currentViewer.notifyRepaintRequired()}},_.prototype.moveTo=function(t,e,i){var n=this;if(!this._manualAlignment&&(0,a.default)(this._terria.cesium)&&(0,a.default)(this._terria.cesium.viewer)&&(0,a.default)(this._terria.cesium.viewer.camera)){var r=this._terria.cesium.viewer.camera.positionCartographic.clone(),o=r.height;if(!(0,a.default)(this._terria.cesium)||!(0,a.default)(this._terria.cesium.scene)||!(0,a.default)(this._terria.cesium.scene.terrainProvider)||this._terria.cesium.scene.terrainProvider instanceof u.default)s(void 0);else{var l=this._terria.cesium.scene.terrainProvider;(0,d.default)(l,[r]).then(function(t){s(t[0].height)})}}function s(r){(0,a.default)(r)||(r=0);var l=o-r;(0,a.default)(e)&&l>e&&(l=e),n.hover(l,t,i)}},_.prototype._getManualAlignment=function(){return this.enabled&&this._manualAlignment},_.prototype._setManualAlignment=function(t){!0===this.enabled&&(!0!==t&&(t=!1),!1===t&&(0,a.default)(this._terria.cesium)&&(0,a.default)(this._terria.cesium.viewer)&&(0,a.default)(this._terria.cesium.viewer.camera)&&(this._realignAlpha=this._alpha,this._realignHeading=o.default.toDegrees(this._terria.cesium.viewer.camera.heading)),this._manualAlignment!==t&&(this._manualAlignment=t,this._startEventLoop(!this._manualAlignment)))},_.prototype._eventLoopRunning=function(){return(0,a.default)(this._eventLoopState.intervalId)},_.prototype._startEventLoop=function(t){if(this._eventLoopRunning()!==t)if(!0===t){var e=this;this._orientationUpdated=!0;var i=1e3/this._maximumUpdatesPerSecond,a=setInterval(function(){e._updateOrientation()},i);this._eventLoopState={intervalId:a}}else clearInterval(this._eventLoopState.intervalId),this._eventLoopState={}},_.prototype._storeOrientation=function(t){this._alpha=t.alpha,this._beta=t.beta,this._gamma=t.gamma,this._orientationUpdated=!0},_.prototype._updateOrientation=function(){var t=this._getCurrentScreenOrientation();(t!==this._lastScreenOrientation&&(this._orientationUpdated=!0),this._lastScreenOrientation=t,this._orientationUpdated)&&(this._orientationUpdated=!1,(0,a.default)(this._terria.cesium)&&(0,a.default)(this._terria.cesium.viewer)&&(0,a.default)(this._terria.cesium.viewer.camera)&&(this._terria.cesium.viewer.camera.setView(this._getCurrentOrientation(t)),this._terria.currentViewer.notifyRepaintRequired()))},_.prototype._getCurrentOrientation=function(t){var e=this._alpha,i=this._beta,n=this._gamma,r=this._realignAlpha,o=this._realignHeading;return(0,a.default)(t)||(t=this._getCurrentScreenOrientation()),this._computeTerriaOrientation(e,i,n,t,r,o)},_.prototype._computeTerriaOrientation=function(t,e,i,a,n,r){var s,u=l.default.clone(l.default.IDENTITY,u);s=l.default.fromRotationZ(o.default.toRadians(a)),l.default.multiply(u,s,u),s=l.default.fromRotationX(o.default.toRadians(90)),l.default.multiply(u,s,u),s=l.default.fromRotationZ(o.default.toRadians(i)),l.default.multiply(u,s,u),s=l.default.fromRotationX(o.default.toRadians(-e)),l.default.multiply(u,s,u),s=l.default.fromRotationY(o.default.toRadians(-(t-n))),l.default.multiply(u,s,u),s=l.default.fromRotationY(o.default.toRadians(r)),l.default.multiply(u,s,u);var d=u[l.default.COLUMN1ROW0],h=u[l.default.COLUMN1ROW1],_=u[l.default.COLUMN0ROW2],m=u[l.default.COLUMN1ROW2],f=u[l.default.COLUMN2ROW2],c=o.default.toDegrees(Math.atan2(-_,f)),g=o.default.toDegrees(Math.atan2(-d,h)),p=o.default.toDegrees(Math.atan2(-m,Math.sqrt(_*_+f*f)));return{orientation:{roll:o.default.toRadians(g),pitch:o.default.toRadians(p),heading:o.default.toRadians(c)}}},_.prototype._getCurrentScreenOrientation=function(){return(0,a.default)(screen.orientation)&&(0,a.default)(screen.orientation.angle)?screen.orientation.angle:(0,a.default)(window.orientation)?window.orientation:0},t.exports=_},743:function(t,e,i){"use strict";var a=_(i(13)),n=_(i(19)),r=_(i(15)),o=_(i(21)),l=_(i(1834)),s=_(i(39)),u=_(i(177)),d=_(i(8)),h=_(i(1835));function _(t){return t&&t.__esModule?t:{default:t}}var m=(0,n.default)({displayName:"AugmentedVirtualityTool",mixins:[o.default],propTypes:{terria:r.default.object.isRequired,viewState:r.default.object.isRequired,experimentalWarning:r.default.bool},getInitialState:function(){return{augmentedVirtuality:new h.default(this.props.terria),experimentalWarningShown:!1,realignHelpShown:!1,resetRealignHelpShown:!1}},handleClickAVTool:function(){this.props.terria.augmentedVirtuality=this.state.augmentedVirtuality,(0,d.default)(this.props.experimentalWarning)&&!1!==this.props.experimentalWarning&&!this.state.experimentalWarningShown&&(this.setState({experimentalWarningShown:!0}),this.props.viewState.notifications.push({title:"Experimental Feature: Augmented Reality",message:"Augmented Reality mode is currently in beta. This mode is only designed for use on the latest high end mobile devices. <br /><br />WARNING: This mode can consume a lot of data, please be mindful of data usage charges from your network provider. <br /><br />The accuracy of this mode depends on the accuracy of your mobile devices internal compass.",confirmText:"Got it"})),this.state.augmentedVirtuality.toggleEnabled()},handleClickRealign:function(){this.state.realignHelpShown||(this.setState({realignHelpShown:!0}),this.props.viewState.notifications.push({title:"Manual Alignment",message:'Align your mobile device so that it corresponds with the maps current alignment, then click the blinking compass. If no landmarks to align with are currently visible on the map, you can move the map using drag and pinch actions until a recognisable landmark is visible before aligning the device with the map.<br /><div><img width="100%" src="./build/TerriaJS/images/ar-realign-guide.gif" /></div><br />Tip: The sun or moon are often good landmarks to align with if you are in a location you aren\'t familiar with (be careful not to look at the sun - it can hurt your eyes).',confirmText:"Got it"})),this.state.augmentedVirtuality.toggleManualAlignment()},handleClickResetRealign:function(){this.state.resetRealignHelpShown||(this.setState({resetRealignHelpShown:!0}),this.props.viewState.notifications.push({title:"Reset Alignment",message:"Resetting to compass alignment. If the alignment doesn't match the real world try waving your device in a figure 8 motion to recalibrate device. This can be done at any time.<br /> <br />Avoid locations with magnetic fields or metal objects as these may disorient the devices compass.",confirmText:"Got it"})),this.state.augmentedVirtuality.resetAlignment()},handleClickHover:function(){this.state.augmentedVirtuality.toggleHoverHeight()},render:function(){var t=this.state.augmentedVirtuality.enabled,e=s.default.GLYPHS.arOff,i=l.default.btn;t&&(e=s.default.GLYPHS.arOn,i=l.default.btnPrimary);var n=this.state.augmentedVirtuality.manualAlignment,r=l.default.btn;n&&(r=l.default.btnBlink);var o=this.state.augmentedVirtuality.hoverLevel,d=s.default.GLYPHS.arHover0;switch(o){case 0:d=s.default.GLYPHS.arHover0;break;case 1:d=s.default.GLYPHS.arHover1;break;case 2:d=s.default.GLYPHS.arHover2}return this.props.terria.viewerMode!==u.default.Leaflet?a.default.createElement("div",{className:l.default.augmentedVirtualityTool},a.default.createElement("button",{type:"button",className:i,title:"augmented reality tool",onClick:this.handleClickAVTool},a.default.createElement(s.default,{glyph:e})),t?[a.default.createElement("button",{type:"button",className:l.default.btn,title:"toggle hover height",onClick:this.handleClickHover,key:"0"},a.default.createElement(s.default,{glyph:d})),this.state.augmentedVirtuality.manualAlignmentSet?null:a.default.createElement("button",{type:"button",className:r,title:"toggle manual alignment",onClick:this.handleClickRealign,key:"1"},a.default.createElement(s.default,{glyph:s.default.GLYPHS.arRealign})),this.state.augmentedVirtuality.manualAlignmentSet&&!n?a.default.createElement("button",{type:"button",className:l.default.btn,title:"reset compass alignment",onClick:this.handleClickResetRealign,key:"2"},a.default.createElement(s.default,{glyph:s.default.GLYPHS.arResetAlignment})):null]:null):null}});t.exports=m}}]);
//# sourceMappingURL=1.TerriaMap.js.map