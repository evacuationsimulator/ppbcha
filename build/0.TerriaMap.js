((self||window).webpackJsonp=(self||window).webpackJsonp||[]).push([[0],{1932:function(e,t,i){var r={"./tycho2t3_80_mx.jpg":1933,"./tycho2t3_80_my.jpg":1934,"./tycho2t3_80_mz.jpg":1935,"./tycho2t3_80_px.jpg":1936,"./tycho2t3_80_py.jpg":1937,"./tycho2t3_80_pz.jpg":1938};function n(e){var t=o(e);return i(t)}function o(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=1932},1988:function(e,t,i){"use strict";var r=i(24),n=i(8),o=i(10),s=i(11),a=i(204),c=i(23),u=i(212),h=i(590),p=new r,d=function(e){if(!n(e))throw new s("cesium is required.");this._cesium=e,this._screenPositionX="-1000px",this._screenPositionY="-1000px",this._tweens=e.scene.tweens,this._container=e.viewer.container,this.position=void 0,this.showSelection=!0,this.transform="",this.opacity=1,c.track(this,["position","_screenPositionX","_screenPositionY","_scale","rotate","showSelection","transform","opacity"]),this.isVisible=void 0,c.defineProperty(this,"isVisible",{get:function(){return this.showSelection&&n(this.position)}}),this.computeScreenSpacePosition=function(t,i){return u.wgs84ToWindowCoordinates(e.scene,t,i)};var t=document.createElement("div");t.className="selection-indicator",this._container.appendChild(t),this._selectionIndicatorElement=t;var i=document.createElement("img");i.setAttribute("src",h),i.setAttribute("alt",""),i.setAttribute("width",50),i.setAttribute("height",50),t.appendChild(i);var r=this;function o(){t.style.top=r._screenPositionY,t.style.left=r._screenPositionX,t.style.transform=r.transform,t.style.opacity=r.opacity}o(),this._subscriptions=[],this._subscriptions.push(c.getObservable(this,"_screenPositionX").subscribe(o)),this._subscriptions.push(c.getObservable(this,"_screenPositionY").subscribe(o)),this._subscriptions.push(c.getObservable(this,"transform").subscribe(o)),this._subscriptions.push(c.getObservable(this,"opacity").subscribe(o))};d.prototype.destroy=function(){this._selectionIndicatorElement.parentNode.removeChild(this._selectionIndicatorElement),this._subscriptions.forEach(function(e){e.dispose()})},d.prototype.update=function(){if(this.showSelection&&n(this.position)){var e=this.computeScreenSpacePosition(this.position,p);if(n(e)){var t=this._container,i=t.clientWidth,r=t.clientHeight,o=this._selectionIndicatorElement.clientWidth,s=.5*o;e.x=Math.min(Math.max(e.x,-o),i+o)-s,e.y=Math.min(Math.max(e.y,-o),r+o)-s,this._screenPositionX=Math.floor(e.x+.25)+"px",this._screenPositionY=Math.floor(e.y+.25)+"px"}else this._screenPositionX="-1000px",this._screenPositionY="-1000px"}},d.prototype.animateAppear=function(){if(n(this._selectionIndicatorTween)){if(this._selectionIndicatorIsAppearing)return;this._selectionIndicatorTween.cancelTween(),this._selectionIndicatorTween=void 0}this._selectionIndicatorIsAppearing=!0;var e=this;this._selectionIndicatorTween=this._tweens.add({startObject:{scale:2,opacity:0,rotate:-180},stopObject:{scale:1,opacity:1,rotate:0},duration:.8,easingFunction:a.EXPONENTIAL_OUT,update:function(t){e.opacity=t.opacity,e.transform="scale("+t.scale+") rotate("+t.rotate+"deg)"},complete:function(){e._selectionIndicatorTween=void 0},cancel:function(){e._selectionIndicatorTween=void 0}})},d.prototype.animateDepart=function(){if(n(this._selectionIndicatorTween)){if(!this._selectionIndicatorIsAppearing)return;this._selectionIndicatorTween.cancelTween(),this._selectionIndicatorTween=void 0}this._selectionIndicatorIsAppearing=!1;var e=this;this._selectionIndicatorTween=this._tweens.add({startObject:{scale:1,opacity:1},stopObject:{scale:1.5,opacity:0},duration:.8,easingFunction:a.EXPONENTIAL_OUT,update:function(t){e.opacity=t.opacity,e.transform="scale("+t.scale+") rotate(0deg)"},complete:function(){e._selectionIndicatorTween=void 0},cancel:function(){e._selectionIndicatorTween=void 0}})},o(d.prototype,{container:{get:function(){return this._container}},selectionIndicatorElement:{get:function(){return this._selectionIndicatorElement}},scene:{get:function(){return this._scene}}}),e.exports=d},769:function(e,t,i){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n=i(33),o=i(90),s=i(24),a=i(12),c=i(32),u=i(14),h=i(9),p=i(8),d=i(20),l=i(11),m=i(26),v=i(143),y=i(201),g=i(111),f=i(338),_=i(316),w=i(42),b=i(23),L=i(154),R=i(28),S=i(29),T=i(331),E=i(212),I=i(216),P=i(141),k=i(60),C=i(18),N=i(153),M=i(140),F=i(1988),x=i(232),q=i(396),O=i(27),A=i(381),D=i(36),W=i(405),V=i(177),B=function(e,t){var i=this;q.call(this,e),this.viewer=t,this.scene=t.scene,this.stoppedRendering=!1,this.verboseRendering=!1,this.canShowSplitter=!0,this.dataSourceDisplay=void 0,this._lastClockTime=new w(0,0),this._lastCameraViewMatrix=new R,this._lastCameraMoveTime=0,this._selectionIndicator=new F(this),this._removePostRenderListener=this.scene.postRender.addEventListener(function(e,t){var i=g(),r=e.scene;R.equalsEpsilon(e._lastCameraViewMatrix,r.camera.viewMatrix,1e-5)||(e._lastCameraMoveTime=i);var n=i-e._lastCameraMoveTime<1e3,s=r.globe._surface,c=!s._tileProvider.ready||s._tileLoadQueueHigh.length>0||s._tileLoadQueueMedium.length>0||s._tileLoadQueueLow.length>0||s._debug.tilesWaitingForChildren>0;n||c||e.viewer.clock.shouldAnimate||0!==e.scene.tweens.length||(e.verboseRendering&&console.log("stopping rendering @ "+g()),e.viewer.useDefaultRenderLoop=!1,e.stoppedRendering=!0);R.clone(r.camera.viewMatrix,e._lastCameraViewMatrix);var u=e.terria.selectedFeature;if(p(u)){var h;if(p(e.dataSourceDisplay)){var d=p(u.cesiumEntity)?u.cesiumEntity:u,l=e.dataSourceDisplay.getBoundingSphere(d,!0,Z);l===o.DONE&&(h=a.clone(Z.center))}!p(h)&&p(u.position)&&(h=u.position.getValue(e.terria.clock.currentTime)),p(h)&&(e._selectionIndicator.position=h)}e._selectionIndicator.update()}.bind(void 0,this)),this._removeInfoBoxCloseListener=void 0,this._boundNotifyRepaintRequired=this.notifyRepaintRequired.bind(this),this._pauseMapInteractionCount=0,this.scene.imagerySplitPosition=this.terria.splitPosition,this.supportsPolylinesOnTerrain=this.scene.context.depthTexture,t.screenSpaceEventHandler.setInputAction(function(e){this.pickFromScreenPosition(e.position)}.bind(this),I.LEFT_CLICK);var r=this.viewer.canvas;if(r.addEventListener("mousemove",this._boundNotifyRepaintRequired,!1),r.addEventListener("mousedown",this._boundNotifyRepaintRequired,!1),r.addEventListener("mouseup",this._boundNotifyRepaintRequired,!1),r.addEventListener("touchstart",this._boundNotifyRepaintRequired,!1),r.addEventListener("touchend",this._boundNotifyRepaintRequired,!1),r.addEventListener("touchmove",this._boundNotifyRepaintRequired,!1),p(window.PointerEvent)&&(r.addEventListener("pointerdown",this._boundNotifyRepaintRequired,!1),r.addEventListener("pointerup",this._boundNotifyRepaintRequired,!1),r.addEventListener("pointermove",this._boundNotifyRepaintRequired,!1)),this._wheelEvent=void 0,"onwheel"in r?this._wheelEvent="wheel":p(document.onmousewheel)?this._wheelEvent="mousewheel":this._wheelEvent="DOMMouseScroll",r.addEventListener(this._wheelEvent,this._boundNotifyRepaintRequired,!1),window.addEventListener("resize",this._boundNotifyRepaintRequired,!1),this._setViewerResolution=function(){i.terria.useNativeResolution||(i.viewer.resolutionScale=1/window.devicePixelRatio)},this._setViewerResolution(),window.addEventListener("resize",this._setViewerResolution,!1),p(this.viewer.infoBox)&&(this._removeInfoBoxCloseListener=this.viewer.infoBox.viewModel.closeClicked.addEventListener(this._boundNotifyRepaintRequired)),p(this.viewer._clockViewModel)){var n=this.viewer._clockViewModel;this._shouldAnimateSubscription=b.getObservable(n,"shouldAnimate").subscribe(this._boundNotifyRepaintRequired),this._currentTimeSubscription=b.getObservable(n,"currentTime").subscribe(this._boundNotifyRepaintRequired)}p(this.viewer.timeline)&&this.viewer.timeline.addEventListener("settime",this._boundNotifyRepaintRequired,!1),this._selectedFeatureSubscription=b.getObservable(this.terria,"selectedFeature").subscribe(function(){ie(this)},this),this._splitterPositionSubscription=b.getObservable(this.terria,"splitPosition").subscribe(function(){this.scene&&(this.scene.imagerySplitPosition=this.terria.splitPosition,this.notifyRepaintRequired())},this),this._showSplitterSubscription=b.getObservable(e,"showSplitter").subscribe(function(){this.updateAllItemsForSplitter()},this);var s=this;this._originalLoadWithXhr=L.load,L.load=function(e,t,i,r,n,o,a,c,u){o.promise.always(s._boundNotifyRepaintRequired),s._originalLoadWithXhr(e,t,i,r,n,o,a,c,u)},this._originalScheduleTask=P.prototype.scheduleTask,P.prototype.scheduleTask=function(e,t){var i=s._originalScheduleTask.call(this,e,t);if(!p(this._originalWorkerMessageSinkRepaint)){this._originalWorkerMessageSinkRepaint=this._worker.onmessage;var r=this;this._worker.onmessage=function(e){r._originalWorkerMessageSinkRepaint(e),s.isDestroyed()?(r._worker.onmessage=r._originalWorkerMessageSinkRepaint,r._originalWorkerMessageSinkRepaint=void 0):s.notifyRepaintRequired()}}return i},this.eventHelper=new N,this.eventHelper.add(this.scene.renderError,function(t,i){this.terria.error.raiseEvent(new D({sender:this,title:"Error rendering in 3D",message:"<p>An error occurred while rendering in 3D.  This probably indicates a bug in "+e.appName+" or an incompatibility with your system or web browser.  We'll now switch you to 2D so that you can continue your work.  We would appreciate it if you report this error by sending an email to <a href=\"mailto:"+e.supportEmail+'">'+e.supportEmail+"</a> with the technical details below.  Thank you!</p><pre>"+y(i)+"</pre>"})),this.terria.viewerMode=V.Leaflet},this),this.eventHelper.add(this.scene.globe.tileLoadProgressEvent,this.updateTilesLoadingCount.bind(this)),ie(this)};O(q,B),B.prototype.destroy=function(){return p(this._selectionIndicator)&&(this._selectionIndicator.destroy(),this._selectionIndicator=void 0),p(this._removePostRenderListener)&&(this._removePostRenderListener(),this._removePostRenderListener=void 0),p(this._removeInfoBoxCloseListener)&&this._removeInfoBoxCloseListener(),p(this._shouldAnimateSubscription)&&(this._shouldAnimateSubscription.dispose(),this._shouldAnimateSubscription=void 0),p(this._currentTimeSubscription)&&(this._currentTimeSubscription.dispose(),this._currentTimeSubscription=void 0),p(this.viewer.timeline)&&this.viewer.timeline.removeEventListener("settime",this._boundNotifyRepaintRequired,!1),p(this._selectedFeatureSubscription)&&(this._selectedFeatureSubscription.dispose(),this._selectedFeatureSubscription=void 0),p(this._splitterPositionSubscription)&&(this._splitterPositionSubscription.dispose(),this._splitterPositionSubscription=void 0),p(this._showSplitterSubscription)&&(this._showSplitterSubscription.dispose(),this._showSplitterSubscription=void 0),this.viewer.canvas.removeEventListener("mousemove",this._boundNotifyRepaintRequired,!1),this.viewer.canvas.removeEventListener("mousedown",this._boundNotifyRepaintRequired,!1),this.viewer.canvas.removeEventListener("mouseup",this._boundNotifyRepaintRequired,!1),this.viewer.canvas.removeEventListener("touchstart",this._boundNotifyRepaintRequired,!1),this.viewer.canvas.removeEventListener("touchend",this._boundNotifyRepaintRequired,!1),this.viewer.canvas.removeEventListener("touchmove",this._boundNotifyRepaintRequired,!1),p(window.PointerEvent)&&(this.viewer.canvas.removeEventListener("pointerdown",this._boundNotifyRepaintRequired,!1),this.viewer.canvas.removeEventListener("pointerup",this._boundNotifyRepaintRequired,!1),this.viewer.canvas.removeEventListener("pointermove",this._boundNotifyRepaintRequired,!1)),this.viewer.canvas.removeEventListener(this._wheelEvent,this._boundNotifyRepaintRequired,!1),window.removeEventListener("resize",this._boundNotifyRepaintRequired,!1),window.removeEventListener("resize",this._setViewerResolution,!1),L.load=this._originalLoadWithXhr,P.prototype.scheduleTask=this._originalScheduleTask,this.eventHelper.removeAll(),q.disposeCommonListeners(this),d(this)},B.prototype.isDestroyed=function(){return!1};var j=new a,H=new R,X=new a,z=new a,G=new a,U=new a,Y=new c,K=new c,Q=new c,J=new c;B.prototype.getCurrentExtent=function(){var e=this.scene,t=e.camera,i=e.canvas.clientWidth,r=e.canvas.clientHeight,n=new s(i/2,r/2),o=e.camera.getPickRay(n),c=e.globe.pick(o,e);if(!p(c))return this.terria.homeView.rectangle;var h=this.scene.globe.ellipsoid,d=.5*e.camera.frustum.fovy,l=Math.atan(Math.tan(d)*e.camera.frustum.aspectRatio),m=a.subtract(t.positionWC,c,j),v=a.magnitude(m),y=v*Math.tan(l),g=v*Math.tan(d),f=new a(-y,-g,0),_=new a(y,-g,0),w=new a(y,g,0),b=new a(-y,g,0),L=k.eastNorthUpToFixedFrame(c,h,H),T=R.multiplyByPoint(L,f,X),E=R.multiplyByPoint(L,_,z),I=R.multiplyByPoint(L,w,G),P=R.multiplyByPoint(L,b,U),C=h.cartesianToCartographic(T,Y),N=h.cartesianToCartographic(E,K),M=h.cartesianToCartographic(I,Q),F=h.cartesianToCartographic(P,J);N.longitude<C.longitude&&(N.longitude+=u.TWO_PI),M.longitude<F.longitude&&(M.longitude+=u.TWO_PI);var x=new S(u.convertLongitudeRange(Math.min(C.longitude,F.longitude)),Math.min(C.latitude,N.latitude),u.convertLongitudeRange(Math.max(M.longitude,N.longitude)),Math.max(M.latitude,F.latitude));return x.center=c,x},B.prototype.getContainer=function(){return this.viewer.container},B.prototype.zoomTo=function(e,t){if(!p(e))throw new l("target is required.");t=h(t,3);var i=this;return i.lastTarget=e,C().then(function(){if(e instanceof S){var r=i.scene.camera,n=r.getRectangleCameraCoordinates(e),o=m.WGS84.cartesianToCartographic(n),s=i.scene.globe.terrainProvider,a=[S.center(e)];return T(s,6,a).then(function(n){if(i.lastTarget===e){var s={longitude:o.longitude,latitude:o.latitude,height:o.height+n[0].height},a=m.WGS84.cartographicToCartesian(s);r.flyTo({duration:t,destination:a})}})}if(p(e.entities)){if(e.isLoading&&p(e.loadingEvent)){var c=C.defer(),u=e.loadingEvent.addEventListener(function(){u(),c.resolve()});return c.promise.then(function(){if(i.lastTarget===e)return $(i,e,t)})}return $(i,e)}return p(e.readyPromise)?e.readyPromise.then(function(){p(e.boundingSphere)&&i.lastTarget===e&&ee(i,e,t)}):p(e.boundingSphere)?ee(i,e):void(p(e.position)?i.scene.camera.flyTo({duration:t,destination:e.position,orientation:{direction:e.direction,up:e.up}}):i.scene.camera.flyTo({duration:t,destination:e.rectangle}))}).then(function(){i.notifyRepaintRequired()})};var Z=new n;function $(e,t,i){return A(function(){for(var r=e.dataSourceDisplay,s=t.entities.values,a=[],c=0,u=s.length;c<u;c++){var h=o.PENDING;try{h=r.getBoundingSphere(s[c],!1,Z)}catch(e){}if(h===o.PENDING)return!1;h!==o.FAILED&&a.push(n.clone(Z))}var p=n.fromBoundingSpheres(a);return e.scene.camera.flyToBoundingSphere(p,{duration:i}),!0},{pollInterval:100,timeout:5e3})}function ee(e,t,i){var r=t.boundingSphere,o=t.modelMatrix;o&&(r=n.transform(r,o)),e.scene.camera.flyToBoundingSphere(r,{offset:new f(0,-.5,r.radius),duration:i})}function te(e){return p(e.items)?e.items.length:1}function ie(e){var t=e.terria.selectedFeature;e._highlightFeature(t),p(t)&&p(t.position)?(e._selectionIndicator.position=t.position.getValue(e.terria.clock.currentTime),e._selectionIndicator.animateAppear()):e._selectionIndicator.animateDepart(),e._selectionIndicator.update()}B.prototype.captureScreenshot=function(){var e=C.defer(),t=this.scene.postRender.addEventListener(function(){t();try{var i=this.scene.canvas,r=i;if(this.terria.showSplitter){(r=document.createElement("canvas")).width=i.width,r.height=i.height;var n=r.getContext("2d");n.drawImage(i,0,0);var o=this.terria.splitPosition*i.width;n.strokeStyle=this.terria.baseMapContrastColor,n.beginPath(),n.moveTo(o,0),n.lineTo(o,i.height),n.stroke()}e.resolve(r.toDataURL("image/png"))}catch(t){e.reject(t)}},this);return this.scene.render(this.terria.clock.currentTime),e.promise},B.prototype.notifyRepaintRequired=function(){this.verboseRendering&&!this.viewer.useDefaultRenderLoop&&console.log("starting rendering @ "+g()),this._lastCameraMoveTime=g(),this.viewer.useDefaultRenderLoop=!0},B.prototype.computePositionOnScreen=function(e,t){return E.wgs84ToWindowCoordinates(this.scene,e,t)},B.prototype.addAttribution=function(e){e&&this.scene.frameState.creditDisplay.addDefaultCredit(e)},B.prototype.removeAttribution=function(e){e&&this.scene.frameState.creditDisplay.removeDefaultCredit(e)},B.prototype.getAllAttribution=function(){return this.scene.frameState.creditDisplay._currentFrameCredits.screenCredits.values.concat(this.scene.frameState.creditDisplay._currentFrameCredits.lightboxCredits.values).map(function(e){return e.html})},B.prototype.updateLayerOrderToKeepOnTop=function(){for(var e=this.terria.nowViewing.items,t=this.scene,i=e.length-1;i>=0;i--)e[i].imageryLayer&&e[i].keepOnTop&&t.imageryLayers.raiseToTop(e[i].imageryLayer)},B.prototype.updateLayerOrderAfterReorder=function(){},B.prototype.raise=function(e){var t=this.terria.nowViewing.items,i=t[e],r=t[e-1];if(p(r.items)||p(r.imageryLayer)){var n,o,s,a=te(r);if(p(i.items))for(n=i.items.length-1;n>=0;--n)if(s=i.items[n],p(s.imageryLayer))for(o=0;o<a;++o)this.scene.imageryLayers.raise(s.imageryLayer);if(p(i.imageryLayer))for(o=0;o<a;++o)this.scene.imageryLayers.raise(i.imageryLayer)}},B.prototype.lower=function(e){var t=this.terria.nowViewing.items,i=t[e],r=t[e+1];if(p(r.items)||p(r.imageryLayer)){var n,o,s,a=te(r);if(p(i.items))for(n=0;n<i.items.length;++n)if(s=i.items[n],p(s.imageryLayer))for(o=0;o<a;++o)this.scene.imageryLayers.lower(s.imageryLayer);if(p(i.imageryLayer))for(o=0;o<a;++o)this.scene.imageryLayers.lower(i.imageryLayer)}},B.prototype.lowerToBottom=function(e){if(p(e.items))for(var t=e.items.length-1;t>=0;--t){var i=e.items[t];this.lowerToBottom(i)}p(e._imageryLayer)&&this.terria.cesium.scene.imageryLayers.lowerToBottom(e._imageryLayer)},B.prototype.adjustDisclaimer=function(){},B.prototype.pickFromLocation=function(e,t,i){for(var r=this.scene.globe.ellipsoid.cartographicToCartesian(c.fromDegrees(e.lng,e.lat,e.height)),n=m.WGS84.cartesianToCartographic(r),o=[],s=[],a=this.scene.imageryLayers.length-1;a>=0;a--){var u=this.scene.imageryLayers.get(a),h=u._imageryProvider;if(h.url&&t[h.url]){var d=t[h.url];o.push(h.pickFeatures(d.x,d.y,d.level,n.longitude,n.latitude)),s.push(u)}}var l=this._buildPickedFeatures(t,r,i,o,s,n.height),v=this.terria.mapInteractionModeStack;p(v)&&v.length>0?v[v.length-1].pickedFeatures=l:this.terria.pickedFeatures=l},B.prototype.pickFromScreenPosition=function(e){var t=this.scene.camera.getPickRay(e),i=this.scene.globe.pick(t,this.scene),r=m.WGS84.cartesianToCartographic(i),n=this.pickVectorFeatures(e),o=this._attachProviderCoordHooks(),s=this.scene.imageryLayers.pickImageryLayerFeatures(t,this.scene),a=this._buildPickedFeatures(o,i,n,[s],void 0,r.height),c=this.terria.mapInteractionModeStack;p(c)&&c.length>0?c[c.length-1].pickedFeatures=a:this.terria.pickedFeatures=a},B.prototype.pickVectorFeatures=function(e){for(var t=[],i=this.scene.drillPick(e),n=0;n<i.length;++n){var o=i[n],s=o.id;if(!(s&&s.entityCollection&&s.entityCollection.owner&&s.entityCollection.owner.name===q._featureHighlightName))if(!p(s)&&p(o.primitive)&&(s=o.primitive.id),s instanceof v&&-1===t.indexOf(s)){var a=x.fromEntityCollectionOrEntity(s);t.push(a)}else if(o.primitive&&o.primitive._catalogItem&&o.primitive._catalogItem.getFeaturesFromPickResult){var c=o.primitive._catalogItem.getFeaturesFromPickResult(e,o);c&&(Array.isArray(c)?t.push.apply(t,r(c)):t.push(c))}}return t},B.prototype._attachProviderCoordHooks=function(){for(var e={},t=function(t,i,r,n,o,s,a){var c=i.call(t,r,n,o,s,a);return t.url&&(e[t.url]={x:r,y:n,level:o}),t.pickFeatures=i,c},i=0;i<this.scene.imageryLayers.length;i++){var r=this.scene.imageryLayers.get(i).imageryProvider;r.pickFeatures=t.bind(void 0,r,r.pickFeatures)}return e},B.prototype._buildPickedFeatures=function(e,t,i,r,n,o){var s=new W;return s.providerCoords=e,s.pickPosition=t,s.allFeaturesAvailablePromise=C.all(r).then(function(e){s.isLoading=!1,s.features=e.reduce(function(e,i,r){if(!p(i))return e;var a=i.map(function(e){return p(n)&&(e.imageryLayer=n[r]),p(e.position)||(e.position=m.WGS84.cartesianToCartographic(t)),p(e.position.height)&&0!==e.position.height||(e.position.height=o),this._createFeatureFromImageryLayerFeature(e)}.bind(this));if(this.terria.showSplitter){var c=this.computePositionOnScreen(s.pickPosition),u=this.terria.getSplitterSideForScreenPosition(c);a=a.filter(function(e){var t=e.imageryLayer.splitDirection;return t===u||t===M.NONE})}return e.concat(a)}.bind(this),h(i,[]))}.bind(this)).otherwise(function(){s.isLoading=!1,s.error="An unknown error occurred while picking features."}),s},B.prototype.addImageryProvider=function(e){var t=this.scene,i=e.imageryProvider.errorEvent;p(i)&&i.addEventListener(e.onLoadError);var r=new _(e.imageryProvider,{show:!1,alpha:e.opacity,rectangle:e.clipToRectangle?e.rectangle:void 0,isRequired:e.isRequiredForRendering});return t.imageryLayers.add(r,e.layerIndex),this.updateLayerOrderToKeepOnTop(),r},B.prototype.removeImageryLayer=function(e){this.scene.imageryLayers.remove(e.layer)},B.prototype.showImageryLayer=function(e){e.layer.show=!0},B.prototype.hideImageryLayer=function(e){e.layer.show=!1},B.prototype.isImageryLayerShown=function(e){return e.layer.show},B.prototype.updateItemForSplitter=function(e){p(e.splitDirection)&&p(e.imageryLayer)&&(e.terria.showSplitter?e.imageryLayer.splitDirection=e.splitDirection:e.imageryLayer.splitDirection=M.NONE,e._nextLayer&&(e._nextLayer.splitDirection=e.imageryLayer.splitDirection),this.notifyRepaintRequired())},B.prototype.pauseMapInteraction=function(){++this._pauseMapInteractionCount,1===this._pauseMapInteractionCount&&(this.scene.screenSpaceCameraController.enableInputs=!1)},B.prototype.resumeMapInteraction=function(){var e=this;--this._pauseMapInteractionCount,0===this._pauseMapInteractionCount&&setTimeout(function(){0===e._pauseMapInteractionCount&&(e.scene.screenSpaceCameraController.enableInputs=!0)},0)},e.exports=B}}]);
//# sourceMappingURL=0.TerriaMap.js.map