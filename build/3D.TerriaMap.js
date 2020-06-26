((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([["3D"],{

/***/ "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox sync recursive ^\\.\\/tycho2t3_80_.*\\.jpg$":
/*!***************************************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox sync ^\.\/tycho2t3_80_.*\.jpg$ ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./tycho2t3_80_mx.jpg": "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox/tycho2t3_80_mx.jpg",
	"./tycho2t3_80_my.jpg": "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox/tycho2t3_80_my.jpg",
	"./tycho2t3_80_mz.jpg": "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox/tycho2t3_80_mz.jpg",
	"./tycho2t3_80_px.jpg": "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox/tycho2t3_80_px.jpg",
	"./tycho2t3_80_py.jpg": "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox/tycho2t3_80_py.jpg",
	"./tycho2t3_80_pz.jpg": "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox/tycho2t3_80_pz.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/terriajs-cesium/Source/Assets/Textures/SkyBox sync recursive ^\\.\\/tycho2t3_80_.*\\.jpg$";

/***/ }),

/***/ "./packages/terriajs/lib/Map/CesiumSelectionIndicator.js":
/*!***************************************************************!*\
  !*** ./packages/terriajs/lib/Map/CesiumSelectionIndicator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*global require*/

var Cartesian2 = __webpack_require__(/*! terriajs-cesium/Source/Core/Cartesian2 */ "./node_modules/terriajs-cesium/Source/Core/Cartesian2.js");

var defined = __webpack_require__(/*! terriajs-cesium/Source/Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js");

var defineProperties = __webpack_require__(/*! terriajs-cesium/Source/Core/defineProperties */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js");

var DeveloperError = __webpack_require__(/*! terriajs-cesium/Source/Core/DeveloperError */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");

var EasingFunction = __webpack_require__(/*! terriajs-cesium/Source/Core/EasingFunction */ "./node_modules/terriajs-cesium/Source/Core/EasingFunction.js");

var knockout = __webpack_require__(/*! terriajs-cesium/Source/ThirdParty/knockout */ "./node_modules/terriajs-cesium/Source/ThirdParty/knockout.js");

var SceneTransforms = __webpack_require__(/*! terriajs-cesium/Source/Scene/SceneTransforms */ "./node_modules/terriajs-cesium/Source/Scene/SceneTransforms.js");

var selectionIndicatorUrl = __webpack_require__(/*! ../../wwwroot/images/NM-LocationTarget.svg */ "./packages/terriajs/wwwroot/images/NM-LocationTarget.svg");

var screenSpacePos = new Cartesian2();
var offScreen = "-1000px";

var CesiumSelectionIndicator = function CesiumSelectionIndicator(cesium) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(cesium)) {
    throw new DeveloperError("cesium is required.");
  } //>>includeEnd('debug')


  this._cesium = cesium;
  this._screenPositionX = offScreen;
  this._screenPositionY = offScreen;
  this._tweens = cesium.scene.tweens;
  this._container = cesium.viewer.container;
  /**
   * Gets or sets the world position of the object for which to display the selection indicator.
   * @type {Cartesian3}
   */

  this.position = undefined;
  /**
   * Gets or sets the visibility of the selection indicator.
   * @type {Boolean}
   */

  this.showSelection = true;
  this.transform = "";
  this.opacity = 1.0;
  knockout.track(this, ["position", "_screenPositionX", "_screenPositionY", "_scale", "rotate", "showSelection", "transform", "opacity"]);
  /**
   * Gets the visibility of the position indicator.  This can be false even if an
   * object is selected, when the selected object has no position.
   * @type {Boolean}
   */

  this.isVisible = undefined;
  knockout.defineProperty(this, "isVisible", {
    get: function get() {
      return this.showSelection && defined(this.position);
    }
  });
  /**
   * Gets or sets the function for converting the world position of the object to the screen space position.
   *
   * @member
   * @type {SelectionIndicatorViewModel~ComputeScreenSpacePosition}
   * @default SceneTransforms.wgs84ToWindowCoordinates
   *
   * @example
   * selectionIndicatorViewModel.computeScreenSpacePosition = function(position, result) {
   *     return Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, position, result);
   * };
   */

  this.computeScreenSpacePosition = function (position, result) {
    return SceneTransforms.wgs84ToWindowCoordinates(cesium.scene, position, result);
  };

  var el = document.createElement("div");
  el.className = "selection-indicator";

  this._container.appendChild(el);

  this._selectionIndicatorElement = el;
  var img = document.createElement("img");
  img.setAttribute("src", selectionIndicatorUrl);
  img.setAttribute("alt", "");
  img.setAttribute("width", 50);
  img.setAttribute("height", 50);
  el.appendChild(img);
  var that = this;

  function update() {
    el.style.top = that._screenPositionY;
    el.style.left = that._screenPositionX;
    el.style.transform = that.transform;
    el.style.opacity = that.opacity;
  }

  update();
  this._subscriptions = [];

  this._subscriptions.push(knockout.getObservable(this, "_screenPositionX").subscribe(update));

  this._subscriptions.push(knockout.getObservable(this, "_screenPositionY").subscribe(update));

  this._subscriptions.push(knockout.getObservable(this, "transform").subscribe(update));

  this._subscriptions.push(knockout.getObservable(this, "opacity").subscribe(update));
};

CesiumSelectionIndicator.prototype.destroy = function () {
  this._selectionIndicatorElement.parentNode.removeChild(this._selectionIndicatorElement);

  this._subscriptions.forEach(function (subscription) {
    subscription.dispose();
  });
};
/**
 * Updates the view of the selection indicator to match the position and content properties of the view model.
 * This function should be called as part of the render loop.
 */


CesiumSelectionIndicator.prototype.update = function () {
  if (this.showSelection && defined(this.position)) {
    var screenPosition = this.computeScreenSpacePosition(this.position, screenSpacePos);

    if (!defined(screenPosition)) {
      this._screenPositionX = offScreen;
      this._screenPositionY = offScreen;
    } else {
      var container = this._container;
      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var indicatorSize = this._selectionIndicatorElement.clientWidth;
      var halfSize = indicatorSize * 0.5;
      screenPosition.x = Math.min(Math.max(screenPosition.x, -indicatorSize), containerWidth + indicatorSize) - halfSize;
      screenPosition.y = Math.min(Math.max(screenPosition.y, -indicatorSize), containerHeight + indicatorSize) - halfSize;
      this._screenPositionX = Math.floor(screenPosition.x + 0.25) + "px";
      this._screenPositionY = Math.floor(screenPosition.y + 0.25) + "px";
    }
  }
};
/**
 * Animate the indicator to draw attention to the selection.
 */


CesiumSelectionIndicator.prototype.animateAppear = function () {
  if (defined(this._selectionIndicatorTween)) {
    if (this._selectionIndicatorIsAppearing) {
      // Already appearing; don't restart the animation.
      return;
    }

    this._selectionIndicatorTween.cancelTween();

    this._selectionIndicatorTween = undefined;
  }

  this._selectionIndicatorIsAppearing = true;
  var that = this;
  this._selectionIndicatorTween = this._tweens.add({
    startObject: {
      scale: 2.0,
      opacity: 0.0,
      rotate: -180
    },
    stopObject: {
      scale: 1.0,
      opacity: 1.0,
      rotate: 0
    },
    duration: 0.8,
    easingFunction: EasingFunction.EXPONENTIAL_OUT,
    update: function update(value) {
      that.opacity = value.opacity;
      that.transform = "scale(" + value.scale + ") rotate(" + value.rotate + "deg)";
    },
    complete: function complete() {
      that._selectionIndicatorTween = undefined;
    },
    cancel: function cancel() {
      that._selectionIndicatorTween = undefined;
    }
  });
};
/**
 * Animate the indicator to release the selection.
 */


CesiumSelectionIndicator.prototype.animateDepart = function () {
  if (defined(this._selectionIndicatorTween)) {
    if (!this._selectionIndicatorIsAppearing) {
      // Already disappearing, don't restart the animation.
      return;
    }

    this._selectionIndicatorTween.cancelTween();

    this._selectionIndicatorTween = undefined;
  }

  this._selectionIndicatorIsAppearing = false;
  var that = this;
  this._selectionIndicatorTween = this._tweens.add({
    startObject: {
      scale: 1.0,
      opacity: 1.0
    },
    stopObject: {
      scale: 1.5,
      opacity: 0.0
    },
    duration: 0.8,
    easingFunction: EasingFunction.EXPONENTIAL_OUT,
    update: function update(value) {
      that.opacity = value.opacity;
      that.transform = "scale(" + value.scale + ") rotate(0deg)";
    },
    complete: function complete() {
      that._selectionIndicatorTween = undefined;
    },
    cancel: function cancel() {
      that._selectionIndicatorTween = undefined;
    }
  });
};

defineProperties(CesiumSelectionIndicator.prototype, {
  /**
   * Gets the HTML element containing the selection indicator.
   * @memberof CesiumSelectionIndicator.prototype
   *
   * @type {Element}
   */
  container: {
    get: function get() {
      return this._container;
    }
  },

  /**
   * Gets the HTML element that holds the selection indicator.
   * @memberof CesiumSelectionIndicator.prototype
   *
   * @type {Element}
   */
  selectionIndicatorElement: {
    get: function get() {
      return this._selectionIndicatorElement;
    }
  },

  /**
   * Gets the scene being used.
   * @memberof CesiumSelectionIndicator.prototype
   *
   * @type {Scene}
   */
  scene: {
    get: function get() {
      return this._scene;
    }
  }
});
/**
 * A function that converts the world position of an object to a screen space position.
 * @callback CesiumSelectionIndicator~ComputeScreenSpacePosition
 * @param {Cartesian3} position The position in WGS84 (world) coordinates.
 * @param {Cartesian2} result An object to return the input position transformed to window coordinates.
 * @returns {Cartesian2} The modified result parameter.
 */

module.exports = CesiumSelectionIndicator;

/***/ }),

/***/ "./packages/terriajs/lib/Models/Cesium.js":
/*!************************************************!*\
  !*** ./packages/terriajs/lib/Models/Cesium.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*global require*/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var BoundingSphere = __webpack_require__(/*! terriajs-cesium/Source/Core/BoundingSphere */ "./node_modules/terriajs-cesium/Source/Core/BoundingSphere.js");

var BoundingSphereState = __webpack_require__(/*! terriajs-cesium/Source/DataSources/BoundingSphereState */ "./node_modules/terriajs-cesium/Source/DataSources/BoundingSphereState.js");

var Cartesian2 = __webpack_require__(/*! terriajs-cesium/Source/Core/Cartesian2 */ "./node_modules/terriajs-cesium/Source/Core/Cartesian2.js");

var Cartesian3 = __webpack_require__(/*! terriajs-cesium/Source/Core/Cartesian3 */ "./node_modules/terriajs-cesium/Source/Core/Cartesian3.js");

var Cartographic = __webpack_require__(/*! terriajs-cesium/Source/Core/Cartographic */ "./node_modules/terriajs-cesium/Source/Core/Cartographic.js");

var CesiumMath = __webpack_require__(/*! terriajs-cesium/Source/Core/Math */ "./node_modules/terriajs-cesium/Source/Core/Math.js");

var defaultValue = __webpack_require__(/*! terriajs-cesium/Source/Core/defaultValue */ "./node_modules/terriajs-cesium/Source/Core/defaultValue.js");

var defined = __webpack_require__(/*! terriajs-cesium/Source/Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js");

var destroyObject = __webpack_require__(/*! terriajs-cesium/Source/Core/destroyObject */ "./node_modules/terriajs-cesium/Source/Core/destroyObject.js");

var DeveloperError = __webpack_require__(/*! terriajs-cesium/Source/Core/DeveloperError */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");

var Ellipsoid = __webpack_require__(/*! terriajs-cesium/Source/Core/Ellipsoid */ "./node_modules/terriajs-cesium/Source/Core/Ellipsoid.js");

var Entity = __webpack_require__(/*! terriajs-cesium/Source/DataSources/Entity */ "./node_modules/terriajs-cesium/Source/DataSources/Entity.js");

var formatError = __webpack_require__(/*! terriajs-cesium/Source/Core/formatError */ "./node_modules/terriajs-cesium/Source/Core/formatError.js");

var getTimestamp = __webpack_require__(/*! terriajs-cesium/Source/Core/getTimestamp */ "./node_modules/terriajs-cesium/Source/Core/getTimestamp.js");

var HeadingPitchRange = __webpack_require__(/*! terriajs-cesium/Source/Core/HeadingPitchRange */ "./node_modules/terriajs-cesium/Source/Core/HeadingPitchRange.js");

var ImageryLayer = __webpack_require__(/*! terriajs-cesium/Source/Scene/ImageryLayer */ "./node_modules/terriajs-cesium/Source/Scene/ImageryLayer.js");

var JulianDate = __webpack_require__(/*! terriajs-cesium/Source/Core/JulianDate */ "./node_modules/terriajs-cesium/Source/Core/JulianDate.js");

var knockout = __webpack_require__(/*! terriajs-cesium/Source/ThirdParty/knockout */ "./node_modules/terriajs-cesium/Source/ThirdParty/knockout.js");

var loadWithXhr = __webpack_require__(/*! ../Core/loadWithXhr */ "./packages/terriajs/lib/Core/loadWithXhr.js");

var Matrix4 = __webpack_require__(/*! terriajs-cesium/Source/Core/Matrix4 */ "./node_modules/terriajs-cesium/Source/Core/Matrix4.js");

var Rectangle = __webpack_require__(/*! terriajs-cesium/Source/Core/Rectangle */ "./node_modules/terriajs-cesium/Source/Core/Rectangle.js");

var sampleTerrain = __webpack_require__(/*! terriajs-cesium/Source/Core/sampleTerrain */ "./node_modules/terriajs-cesium/Source/Core/sampleTerrain.js");

var SceneTransforms = __webpack_require__(/*! terriajs-cesium/Source/Scene/SceneTransforms */ "./node_modules/terriajs-cesium/Source/Scene/SceneTransforms.js");

var ScreenSpaceEventType = __webpack_require__(/*! terriajs-cesium/Source/Core/ScreenSpaceEventType */ "./node_modules/terriajs-cesium/Source/Core/ScreenSpaceEventType.js");

var TaskProcessor = __webpack_require__(/*! terriajs-cesium/Source/Core/TaskProcessor */ "./node_modules/terriajs-cesium/Source/Core/TaskProcessor.js");

var Transforms = __webpack_require__(/*! terriajs-cesium/Source/Core/Transforms */ "./node_modules/terriajs-cesium/Source/Core/Transforms.js");

var when = __webpack_require__(/*! terriajs-cesium/Source/ThirdParty/when */ "./node_modules/terriajs-cesium/Source/ThirdParty/when.js");

var EventHelper = __webpack_require__(/*! terriajs-cesium/Source/Core/EventHelper */ "./node_modules/terriajs-cesium/Source/Core/EventHelper.js");

var ImagerySplitDirection = __webpack_require__(/*! terriajs-cesium/Source/Scene/ImagerySplitDirection */ "./node_modules/terriajs-cesium/Source/Scene/ImagerySplitDirection.js");

var CesiumSelectionIndicator = __webpack_require__(/*! ../Map/CesiumSelectionIndicator */ "./packages/terriajs/lib/Map/CesiumSelectionIndicator.js");

var Feature = __webpack_require__(/*! ./Feature */ "./packages/terriajs/lib/Models/Feature.js");

var GlobeOrMap = __webpack_require__(/*! ./GlobeOrMap */ "./packages/terriajs/lib/Models/GlobeOrMap.js");

var inherit = __webpack_require__(/*! ../Core/inherit */ "./packages/terriajs/lib/Core/inherit.js");

var pollToPromise = __webpack_require__(/*! ../Core/pollToPromise */ "./packages/terriajs/lib/Core/pollToPromise.js");

var TerriaError = __webpack_require__(/*! ../Core/TerriaError */ "./packages/terriajs/lib/Core/TerriaError.js");

var PickedFeatures = __webpack_require__(/*! ../Map/PickedFeatures */ "./packages/terriajs/lib/Map/PickedFeatures.js");

var ViewerMode = __webpack_require__(/*! ./ViewerMode */ "./packages/terriajs/lib/Models/ViewerMode.js");
/**
 * The Cesium viewer component
 *
 * @alias Cesium
 * @constructor
 * @extends GlobeOrMap
 *
 * @param {Terria} terria The Terria instance.
 * @param {Viewer} viewer The Cesium viewer instance.
 */


var Cesium = function Cesium(terria, viewer) {
  var _this = this;

  GlobeOrMap.call(this, terria);
  /**
   * Gets or sets the Cesium {@link Viewer} instance.
   * @type {Viewer}
   */

  this.viewer = viewer;
  /**
   * Gets or sets the Cesium {@link Scene} instance.
   * @type {Scene}
   */

  this.scene = viewer.scene;
  /**
   * Gets or sets whether the viewer has stopped rendering since startup or last set to false.
   * @type {Boolean}
   */

  this.stoppedRendering = false;
  /**
   * Gets or sets whether to output info to the console when starting and stopping rendering loop.
   * @type {Boolean}
   */

  this.verboseRendering = false;
  /**
   * Gets or sets whether this viewer _can_ show a splitter.
   * @type {Boolean}
   */

  this.canShowSplitter = true;
  /**
   * Gets the {@link DataSourceDisplay} used to render a {@link DataSource}.
   * @type {DataSourceDisplay}
   */

  this.dataSourceDisplay = undefined;
  this._lastClockTime = new JulianDate(0, 0.0);
  this._lastCameraViewMatrix = new Matrix4();
  this._lastCameraMoveTime = 0;
  this._selectionIndicator = new CesiumSelectionIndicator(this);
  this._removePostRenderListener = this.scene.postRender.addEventListener(postRender.bind(undefined, this));
  this._removeInfoBoxCloseListener = undefined;
  this._boundNotifyRepaintRequired = this.notifyRepaintRequired.bind(this);
  this._pauseMapInteractionCount = 0;
  this.scene.imagerySplitPosition = this.terria.splitPosition;
  this.supportsPolylinesOnTerrain = this.scene.context.depthTexture; // Handle left click by picking objects from the map.

  viewer.screenSpaceEventHandler.setInputAction(function (e) {
    this.pickFromScreenPosition(e.position);
  }.bind(this), ScreenSpaceEventType.LEFT_CLICK); // Force a repaint when the mouse moves or the window changes size.

  var canvas = this.viewer.canvas;
  canvas.addEventListener("mousemove", this._boundNotifyRepaintRequired, false);
  canvas.addEventListener("mousedown", this._boundNotifyRepaintRequired, false);
  canvas.addEventListener("mouseup", this._boundNotifyRepaintRequired, false);
  canvas.addEventListener("touchstart", this._boundNotifyRepaintRequired, false);
  canvas.addEventListener("touchend", this._boundNotifyRepaintRequired, false);
  canvas.addEventListener("touchmove", this._boundNotifyRepaintRequired, false);

  if (defined(window.PointerEvent)) {
    canvas.addEventListener("pointerdown", this._boundNotifyRepaintRequired, false);
    canvas.addEventListener("pointerup", this._boundNotifyRepaintRequired, false);
    canvas.addEventListener("pointermove", this._boundNotifyRepaintRequired, false);
  } // Detect available wheel event


  this._wheelEvent = undefined;

  if ("onwheel" in canvas) {
    // spec event type
    this._wheelEvent = "wheel";
  } else if (defined(document.onmousewheel)) {
    // legacy event type
    this._wheelEvent = "mousewheel";
  } else {
    // older Firefox
    this._wheelEvent = "DOMMouseScroll";
  }

  canvas.addEventListener(this._wheelEvent, this._boundNotifyRepaintRequired, false);
  window.addEventListener("resize", this._boundNotifyRepaintRequired, false);

  this._setViewerResolution = function () {
    // Force rendering in CSS pixel resolution instead of native device
    // resolution which is the default since cesium1.61.0
    // We only tweak if user hasn't specified to use useNativeResolution
    if (!_this.terria.useNativeResolution) {
      _this.viewer.resolutionScale = 1.0 / window.devicePixelRatio;
    }
  };

  this._setViewerResolution();

  window.addEventListener("resize", this._setViewerResolution, false); // Force a repaint when the feature info box is closed.  Cesium can't close its info box
  // when the clock is not ticking, for reasons that are not clear.

  if (defined(this.viewer.infoBox)) {
    this._removeInfoBoxCloseListener = this.viewer.infoBox.viewModel.closeClicked.addEventListener(this._boundNotifyRepaintRequired);
  }

  if (defined(this.viewer._clockViewModel)) {
    var clock = this.viewer._clockViewModel;
    this._shouldAnimateSubscription = knockout.getObservable(clock, "shouldAnimate").subscribe(this._boundNotifyRepaintRequired);
    this._currentTimeSubscription = knockout.getObservable(clock, "currentTime").subscribe(this._boundNotifyRepaintRequired);
  }

  if (defined(this.viewer.timeline)) {
    this.viewer.timeline.addEventListener("settime", this._boundNotifyRepaintRequired, false);
  }

  this._selectedFeatureSubscription = knockout.getObservable(this.terria, "selectedFeature").subscribe(function () {
    selectFeature(this);
  }, this);
  this._splitterPositionSubscription = knockout.getObservable(this.terria, "splitPosition").subscribe(function () {
    if (this.scene) {
      this.scene.imagerySplitPosition = this.terria.splitPosition;
      this.notifyRepaintRequired();
    }
  }, this);
  this._showSplitterSubscription = knockout.getObservable(terria, "showSplitter").subscribe(function () {
    this.updateAllItemsForSplitter();
  }, this); // Hacky way to force a repaint when an async load request completes

  var that = this;
  this._originalLoadWithXhr = loadWithXhr.load;

  loadWithXhr.load = function (url, responseType, method, data, headers, deferred, overrideMimeType, preferText, timeout) {
    deferred.promise.always(that._boundNotifyRepaintRequired);

    that._originalLoadWithXhr(url, responseType, method, data, headers, deferred, overrideMimeType, preferText, timeout);
  }; // Hacky way to force a repaint when a web worker sends something back.


  this._originalScheduleTask = TaskProcessor.prototype.scheduleTask;

  TaskProcessor.prototype.scheduleTask = function (parameters, transferableObjects) {
    var result = that._originalScheduleTask.call(this, parameters, transferableObjects);

    if (!defined(this._originalWorkerMessageSinkRepaint)) {
      this._originalWorkerMessageSinkRepaint = this._worker.onmessage;
      var taskProcessor = this;

      this._worker.onmessage = function (event) {
        taskProcessor._originalWorkerMessageSinkRepaint(event);

        if (that.isDestroyed()) {
          taskProcessor._worker.onmessage = taskProcessor._originalWorkerMessageSinkRepaint;
          taskProcessor._originalWorkerMessageSinkRepaint = undefined;
        } else {
          that.notifyRepaintRequired();
        }
      };
    }

    return result;
  };

  this.eventHelper = new EventHelper(); // If the render loop crashes, inform the user and then switch to 2D.

  this.eventHelper.add(this.scene.renderError, function (scene, error) {
    this.terria.error.raiseEvent(new TerriaError({
      sender: this,
      title: "Error rendering in 3D",
      message: "\
<p>An error occurred while rendering in 3D.  This probably indicates a bug in " + terria.appName + " or an incompatibility with your system \
or web browser.  We'll now switch you to 2D so that you can continue your work.  We would appreciate it if you report this \
error by sending an email to <a href=\"mailto:" + terria.supportEmail + '">' + terria.supportEmail + "</a> with the \
technical details below.  Thank you!</p><pre>" + formatError(error) + "</pre>"
    }));
    this.terria.viewerMode = ViewerMode.Leaflet;
  }, this);
  this.eventHelper.add(this.scene.globe.tileLoadProgressEvent, this.updateTilesLoadingCount.bind(this));
  selectFeature(this);
};

inherit(GlobeOrMap, Cesium);

Cesium.prototype.destroy = function () {
  if (defined(this._selectionIndicator)) {
    this._selectionIndicator.destroy();

    this._selectionIndicator = undefined;
  }

  if (defined(this._removePostRenderListener)) {
    this._removePostRenderListener();

    this._removePostRenderListener = undefined;
  }

  if (defined(this._removeInfoBoxCloseListener)) {
    this._removeInfoBoxCloseListener();
  }

  if (defined(this._shouldAnimateSubscription)) {
    this._shouldAnimateSubscription.dispose();

    this._shouldAnimateSubscription = undefined;
  }

  if (defined(this._currentTimeSubscription)) {
    this._currentTimeSubscription.dispose();

    this._currentTimeSubscription = undefined;
  }

  if (defined(this.viewer.timeline)) {
    this.viewer.timeline.removeEventListener("settime", this._boundNotifyRepaintRequired, false);
  }

  if (defined(this._selectedFeatureSubscription)) {
    this._selectedFeatureSubscription.dispose();

    this._selectedFeatureSubscription = undefined;
  }

  if (defined(this._splitterPositionSubscription)) {
    this._splitterPositionSubscription.dispose();

    this._splitterPositionSubscription = undefined;
  }

  if (defined(this._showSplitterSubscription)) {
    this._showSplitterSubscription.dispose();

    this._showSplitterSubscription = undefined;
  }

  this.viewer.canvas.removeEventListener("mousemove", this._boundNotifyRepaintRequired, false);
  this.viewer.canvas.removeEventListener("mousedown", this._boundNotifyRepaintRequired, false);
  this.viewer.canvas.removeEventListener("mouseup", this._boundNotifyRepaintRequired, false);
  this.viewer.canvas.removeEventListener("touchstart", this._boundNotifyRepaintRequired, false);
  this.viewer.canvas.removeEventListener("touchend", this._boundNotifyRepaintRequired, false);
  this.viewer.canvas.removeEventListener("touchmove", this._boundNotifyRepaintRequired, false);

  if (defined(window.PointerEvent)) {
    this.viewer.canvas.removeEventListener("pointerdown", this._boundNotifyRepaintRequired, false);
    this.viewer.canvas.removeEventListener("pointerup", this._boundNotifyRepaintRequired, false);
    this.viewer.canvas.removeEventListener("pointermove", this._boundNotifyRepaintRequired, false);
  }

  this.viewer.canvas.removeEventListener(this._wheelEvent, this._boundNotifyRepaintRequired, false);
  window.removeEventListener("resize", this._boundNotifyRepaintRequired, false);
  window.removeEventListener("resize", this._setViewerResolution, false);
  loadWithXhr.load = this._originalLoadWithXhr;
  TaskProcessor.prototype.scheduleTask = this._originalScheduleTask;
  this.eventHelper.removeAll();
  GlobeOrMap.disposeCommonListeners(this);
  return destroyObject(this);
};

Cesium.prototype.isDestroyed = function () {
  return false;
};

var cartesian3Scratch = new Cartesian3();
var enuToFixedScratch = new Matrix4();
var southwestScratch = new Cartesian3();
var southeastScratch = new Cartesian3();
var northeastScratch = new Cartesian3();
var northwestScratch = new Cartesian3();
var southwestCartographicScratch = new Cartographic();
var southeastCartographicScratch = new Cartographic();
var northeastCartographicScratch = new Cartographic();
var northwestCartographicScratch = new Cartographic();
/**
 * Gets the current extent of the camera.  This may be approximate if the viewer does not have a strictly rectangular view.
 * @return {Rectangle} The current visible extent.
 */

Cesium.prototype.getCurrentExtent = function () {
  var scene = this.scene;
  var camera = scene.camera;
  var width = scene.canvas.clientWidth;
  var height = scene.canvas.clientHeight;
  var centerOfScreen = new Cartesian2(width / 2.0, height / 2.0);
  var pickRay = scene.camera.getPickRay(centerOfScreen);
  var center = scene.globe.pick(pickRay, scene);

  if (!defined(center)) {
    // TODO: binary search to find the horizon point and use that as the center.
    return this.terria.homeView.rectangle;
  }

  var ellipsoid = this.scene.globe.ellipsoid;
  var fovy = scene.camera.frustum.fovy * 0.5;
  var fovx = Math.atan(Math.tan(fovy) * scene.camera.frustum.aspectRatio);
  var cameraOffset = Cartesian3.subtract(camera.positionWC, center, cartesian3Scratch);
  var cameraHeight = Cartesian3.magnitude(cameraOffset);
  var xDistance = cameraHeight * Math.tan(fovx);
  var yDistance = cameraHeight * Math.tan(fovy);
  var southwestEnu = new Cartesian3(-xDistance, -yDistance, 0.0);
  var southeastEnu = new Cartesian3(xDistance, -yDistance, 0.0);
  var northeastEnu = new Cartesian3(xDistance, yDistance, 0.0);
  var northwestEnu = new Cartesian3(-xDistance, yDistance, 0.0);
  var enuToFixed = Transforms.eastNorthUpToFixedFrame(center, ellipsoid, enuToFixedScratch);
  var southwest = Matrix4.multiplyByPoint(enuToFixed, southwestEnu, southwestScratch);
  var southeast = Matrix4.multiplyByPoint(enuToFixed, southeastEnu, southeastScratch);
  var northeast = Matrix4.multiplyByPoint(enuToFixed, northeastEnu, northeastScratch);
  var northwest = Matrix4.multiplyByPoint(enuToFixed, northwestEnu, northwestScratch);
  var southwestCartographic = ellipsoid.cartesianToCartographic(southwest, southwestCartographicScratch);
  var southeastCartographic = ellipsoid.cartesianToCartographic(southeast, southeastCartographicScratch);
  var northeastCartographic = ellipsoid.cartesianToCartographic(northeast, northeastCartographicScratch);
  var northwestCartographic = ellipsoid.cartesianToCartographic(northwest, northwestCartographicScratch); // Account for date-line wrapping

  if (southeastCartographic.longitude < southwestCartographic.longitude) {
    southeastCartographic.longitude += CesiumMath.TWO_PI;
  }

  if (northeastCartographic.longitude < northwestCartographic.longitude) {
    northeastCartographic.longitude += CesiumMath.TWO_PI;
  }

  var rect = new Rectangle(CesiumMath.convertLongitudeRange(Math.min(southwestCartographic.longitude, northwestCartographic.longitude)), Math.min(southwestCartographic.latitude, southeastCartographic.latitude), CesiumMath.convertLongitudeRange(Math.max(northeastCartographic.longitude, southeastCartographic.longitude)), Math.max(northeastCartographic.latitude, northwestCartographic.latitude));
  rect.center = center;
  return rect;
};
/**
 * Gets the current container element.
 * @return {Element} The current container element.
 */


Cesium.prototype.getContainer = function () {
  return this.viewer.container;
};
/**
 * Zooms to a specified camera view or extent with a smooth flight animation.
 *
 * @param {CameraView|Rectangle|DataSource|Cesium3DTileset} target The view, extent, DataSource, or Cesium3DTileset to which to zoom.
 * @param {Number} [flightDurationSeconds=3.0] The length of the flight animation in seconds.
 */


Cesium.prototype.zoomTo = function (target, flightDurationSeconds) {
  if (!defined(target)) {
    throw new DeveloperError("target is required.");
  }

  flightDurationSeconds = defaultValue(flightDurationSeconds, 3.0);
  var that = this;
  that.lastTarget = target;
  return when().then(function () {
    if (target instanceof Rectangle) {
      var camera = that.scene.camera; // Work out the destination that the camera would naturally fly to

      var destinationCartesian = camera.getRectangleCameraCoordinates(target);
      var destination = Ellipsoid.WGS84.cartesianToCartographic(destinationCartesian);
      var terrainProvider = that.scene.globe.terrainProvider;
      var level = 6; // A sufficiently coarse tile level that still has approximately accurate height

      var positions = [Rectangle.center(target)]; // Perform an elevation query at the centre of the rectangle

      return sampleTerrain(terrainProvider, level, positions).then(function (results) {
        if (that.lastTarget !== target) {
          return;
        } // Add terrain elevation to camera altitude


        var finalDestinationCartographic = {
          longitude: destination.longitude,
          latitude: destination.latitude,
          height: destination.height + results[0].height
        };
        var finalDestination = Ellipsoid.WGS84.cartographicToCartesian(finalDestinationCartographic);
        camera.flyTo({
          duration: flightDurationSeconds,
          destination: finalDestination
        });
      });
    } else if (defined(target.entities)) {
      // Zooming to a DataSource
      if (target.isLoading && defined(target.loadingEvent)) {
        var deferred = when.defer();
        var removeEvent = target.loadingEvent.addEventListener(function () {
          removeEvent();
          deferred.resolve();
        });
        return deferred.promise.then(function () {
          if (that.lastTarget !== target) {
            return;
          }

          return zoomToDataSource(that, target, flightDurationSeconds);
        });
      }

      return zoomToDataSource(that, target);
    } else if (defined(target.readyPromise)) {
      return target.readyPromise.then(function () {
        if (defined(target.boundingSphere) && that.lastTarget === target) {
          zoomToBoundingSphere(that, target, flightDurationSeconds);
        }
      });
    } else if (defined(target.boundingSphere)) {
      return zoomToBoundingSphere(that, target);
    } else if (defined(target.position)) {
      that.scene.camera.flyTo({
        duration: flightDurationSeconds,
        destination: target.position,
        orientation: {
          direction: target.direction,
          up: target.up
        }
      });
    } else {
      that.scene.camera.flyTo({
        duration: flightDurationSeconds,
        destination: target.rectangle
      });
    }
  }).then(function () {
    that.notifyRepaintRequired();
  });
};

var boundingSphereScratch = new BoundingSphere();

function zoomToDataSource(cesium, target, flightDurationSeconds) {
  return pollToPromise(function () {
    var dataSourceDisplay = cesium.dataSourceDisplay;
    var entities = target.entities.values;
    var boundingSpheres = [];

    for (var i = 0, len = entities.length; i < len; i++) {
      var state = BoundingSphereState.PENDING;

      try {
        state = dataSourceDisplay.getBoundingSphere(entities[i], false, boundingSphereScratch);
      } catch (e) {}

      if (state === BoundingSphereState.PENDING) {
        return false;
      } else if (state !== BoundingSphereState.FAILED) {
        boundingSpheres.push(BoundingSphere.clone(boundingSphereScratch));
      }
    }

    var boundingSphere = BoundingSphere.fromBoundingSpheres(boundingSpheres);
    cesium.scene.camera.flyToBoundingSphere(boundingSphere, {
      duration: flightDurationSeconds
    });
    return true;
  }, {
    pollInterval: 100,
    timeout: 5000
  });
}

function zoomToBoundingSphere(cesium, target, flightDurationSeconds) {
  var boundingSphere = target.boundingSphere;
  var modelMatrix = target.modelMatrix;

  if (modelMatrix) {
    boundingSphere = BoundingSphere.transform(boundingSphere, modelMatrix);
  }

  cesium.scene.camera.flyToBoundingSphere(boundingSphere, {
    offset: new HeadingPitchRange(0.0, -0.5, boundingSphere.radius),
    duration: flightDurationSeconds
  });
}
/**
 * Captures a screenshot of the map.
 * @return {Promise} A promise that resolves to a data URL when the screenshot is ready.
 */


Cesium.prototype.captureScreenshot = function () {
  var deferred = when.defer();
  var removeCallback = this.scene.postRender.addEventListener(function () {
    removeCallback();

    try {
      var cesiumCanvas = this.scene.canvas; // If we're using the splitter, draw the split position as a vertical white line.

      var canvas = cesiumCanvas;

      if (this.terria.showSplitter) {
        canvas = document.createElement("canvas");
        canvas.width = cesiumCanvas.width;
        canvas.height = cesiumCanvas.height;
        var context = canvas.getContext("2d");
        context.drawImage(cesiumCanvas, 0, 0);
        var x = this.terria.splitPosition * cesiumCanvas.width;
        context.strokeStyle = this.terria.baseMapContrastColor;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, cesiumCanvas.height);
        context.stroke();
      }

      deferred.resolve(canvas.toDataURL("image/png"));
    } catch (e) {
      deferred.reject(e);
    }
  }, this);
  this.scene.render(this.terria.clock.currentTime);
  return deferred.promise;
};
/**
 * Notifies the viewer that a repaint is required.
 */


Cesium.prototype.notifyRepaintRequired = function () {
  if (this.verboseRendering && !this.viewer.useDefaultRenderLoop) {
    console.log("starting rendering @ " + getTimestamp());
  }

  this._lastCameraMoveTime = getTimestamp();
  this.viewer.useDefaultRenderLoop = true;
};
/**
 * Computes the screen position of a given world position.
 * @param  {Cartesian3} position The world position in Earth-centered Fixed coordinates.
 * @param  {Cartesian2} [result] The instance to which to copy the result.
 * @return {Cartesian2} The screen position, or undefined if the position is not on the screen.
 */


Cesium.prototype.computePositionOnScreen = function (position, result) {
  return SceneTransforms.wgs84ToWindowCoordinates(this.scene, position, result);
};
/**
 * Adds an attribution to the globe.
 * @param {Credit} attribution The attribution to add.
 */


Cesium.prototype.addAttribution = function (attribution) {
  if (attribution) {
    this.scene.frameState.creditDisplay.addDefaultCredit(attribution);
  }
};
/**
 * Removes an attribution from the globe.
 * @param {Credit} attribution The attribution to remove.
 */


Cesium.prototype.removeAttribution = function (attribution) {
  if (attribution) {
    this.scene.frameState.creditDisplay.removeDefaultCredit(attribution);
  }
};
/**
 * Gets all attribution currently active on the globe or map.
 * @returns {String[]} The list of current attributions, as HTML strings.
 */


Cesium.prototype.getAllAttribution = function () {
  var credits = this.scene.frameState.creditDisplay._currentFrameCredits.screenCredits.values.concat(this.scene.frameState.creditDisplay._currentFrameCredits.lightboxCredits.values);

  return credits.map(function (credit) {
    return credit.html;
  });
};
/**
 * Updates the order of layers, moving layers where {@link CatalogItem#keepOnTop} is true to the top.
 */


Cesium.prototype.updateLayerOrderToKeepOnTop = function () {
  // move alwaysOnTop layers to the top
  var items = this.terria.nowViewing.items;
  var scene = this.scene;

  for (var l = items.length - 1; l >= 0; l--) {
    if (items[l].imageryLayer && items[l].keepOnTop) {
      scene.imageryLayers.raiseToTop(items[l].imageryLayer);
    }
  }
};

Cesium.prototype.updateLayerOrderAfterReorder = function () {// because this Cesium model does the reordering via raise and lower, no action needed.
}; // useful for counting the number of items in composite and non-composite items


function countNumberOfSubItems(item) {
  if (defined(item.items)) {
    return item.items.length;
  } else {
    return 1;
  }
}
/**
 * Raise an item's level in the viewer
 * This does not check that index is valid
 * @param {Number} index The index of the item to raise
 */


Cesium.prototype.raise = function (index) {
  var items = this.terria.nowViewing.items;
  var item = items[index];
  var itemAbove = items[index - 1];

  if (!defined(itemAbove.items) && !defined(itemAbove.imageryLayer)) {
    return;
  } // Both item and itemAbove may either have a single imageryLayer, or be a composite item
  // Composite items have an items array of further items.
  // Define n as the number of subitems in ItemAbove (1 except for composites)
  // if item is a composite, then raise each subitem in item n times,
  // starting with the one at the top - which is the last one in the list
  // if item is not a composite, just raise the item n times directly.


  var n = countNumberOfSubItems(itemAbove);
  var i, j, subItem;

  if (defined(item.items)) {
    for (i = item.items.length - 1; i >= 0; --i) {
      subItem = item.items[i];

      if (defined(subItem.imageryLayer)) {
        for (j = 0; j < n; ++j) {
          this.scene.imageryLayers.raise(subItem.imageryLayer);
        }
      }
    }
  }

  if (!defined(item.imageryLayer)) {
    return;
  }

  for (j = 0; j < n; ++j) {
    this.scene.imageryLayers.raise(item.imageryLayer);
  }
};
/**
 * Lower an item's level in the viewer
 * This does not check that index is valid
 * @param {Number} index The index of the item to lower
 */


Cesium.prototype.lower = function (index) {
  var items = this.terria.nowViewing.items;
  var item = items[index];
  var itemBelow = items[index + 1];

  if (!defined(itemBelow.items) && !defined(itemBelow.imageryLayer)) {
    return;
  } // same considerations as above, but lower composite subitems starting at the other end of the list


  var n = countNumberOfSubItems(itemBelow);
  var i, j, subItem;

  if (defined(item.items)) {
    for (i = 0; i < item.items.length; ++i) {
      subItem = item.items[i];

      if (defined(subItem.imageryLayer)) {
        for (j = 0; j < n; ++j) {
          this.scene.imageryLayers.lower(subItem.imageryLayer);
        }
      }
    }
  }

  if (!defined(item.imageryLayer)) {
    return;
  }

  for (j = 0; j < n; ++j) {
    this.scene.imageryLayers.lower(item.imageryLayer);
  }
};
/**
 * Lowers this imagery layer to the bottom, underneath all other layers.  If this item is not enabled or not shown,
 * this method does nothing.
 * @param {CatalogItem} item The item to lower to the bottom (usually a basemap)
 */


Cesium.prototype.lowerToBottom = function (item) {
  if (defined(item.items)) {
    // the front item is at the end of the list.
    // so to preserve order of any subitems, send any subitems to the bottom in order from the front
    for (var i = item.items.length - 1; i >= 0; --i) {
      var subItem = item.items[i];
      this.lowerToBottom(subItem); // recursive
    }
  }

  if (!defined(item._imageryLayer)) {
    return;
  }

  this.terria.cesium.scene.imageryLayers.lowerToBottom(item._imageryLayer);
};

Cesium.prototype.adjustDisclaimer = function () {};
/**
 * Picks features based off a latitude, longitude and (optionally) height.
 * @param {Object} latlng The position on the earth to pick.
 * @param {Object} imageryLayerCoords A map of imagery provider urls to the coords used to get features for those imagery
 *     providers - i.e. x, y, level
 * @param existingFeatures An optional list of existing features to concatenate the ones found from asynchronous picking to.
 */


Cesium.prototype.pickFromLocation = function (latlng, imageryLayerCoords, existingFeatures) {
  var pickPosition = this.scene.globe.ellipsoid.cartographicToCartesian(Cartographic.fromDegrees(latlng.lng, latlng.lat, latlng.height));
  var pickPositionCartographic = Ellipsoid.WGS84.cartesianToCartographic(pickPosition);
  var promises = [];
  var imageryLayers = [];

  for (var i = this.scene.imageryLayers.length - 1; i >= 0; i--) {
    var imageryLayer = this.scene.imageryLayers.get(i);
    var imageryProvider = imageryLayer._imageryProvider;

    if (imageryProvider.url && imageryLayerCoords[imageryProvider.url]) {
      var coords = imageryLayerCoords[imageryProvider.url];
      promises.push(imageryProvider.pickFeatures(coords.x, coords.y, coords.level, pickPositionCartographic.longitude, pickPositionCartographic.latitude));
      imageryLayers.push(imageryLayer);
    }
  }

  var result = this._buildPickedFeatures(imageryLayerCoords, pickPosition, existingFeatures, promises, imageryLayers, pickPositionCartographic.height);

  var mapInteractionModeStack = this.terria.mapInteractionModeStack;

  if (defined(mapInteractionModeStack) && mapInteractionModeStack.length > 0) {
    mapInteractionModeStack[mapInteractionModeStack.length - 1].pickedFeatures = result;
  } else {
    this.terria.pickedFeatures = result;
  }
};
/**
 * Picks features based on coordinates relative to the Cesium window. Will draw a ray from the camera through the point
 * specified and set terria.pickedFeatures based on this.
 *
 * @param {Cartesian3} screenPosition The position on the screen.
 */


Cesium.prototype.pickFromScreenPosition = function (screenPosition) {
  var pickRay = this.scene.camera.getPickRay(screenPosition);
  var pickPosition = this.scene.globe.pick(pickRay, this.scene);
  var pickPositionCartographic = Ellipsoid.WGS84.cartesianToCartographic(pickPosition);
  var vectorFeatures = this.pickVectorFeatures(screenPosition);

  var providerCoords = this._attachProviderCoordHooks();

  var pickRasterPromise = this.scene.imageryLayers.pickImageryLayerFeatures(pickRay, this.scene);

  var result = this._buildPickedFeatures(providerCoords, pickPosition, vectorFeatures, [pickRasterPromise], undefined, pickPositionCartographic.height);

  var mapInteractionModeStack = this.terria.mapInteractionModeStack;

  if (defined(mapInteractionModeStack) && mapInteractionModeStack.length > 0) {
    mapInteractionModeStack[mapInteractionModeStack.length - 1].pickedFeatures = result;
  } else {
    this.terria.pickedFeatures = result;
  }
};
/**
 * Picks all *vector* features (e.g. GeoJSON) shown at a certain position on the screen, ignoring raster features
 * (e.g. WFS). Because all vector features are already in memory, this is synchronous.
 *
 * @param {Cartesian2} screenPosition position on the screen to look for features
 * @returns {Feature[]} The features found.
 */


Cesium.prototype.pickVectorFeatures = function (screenPosition) {
  // Pick vector features
  var vectorFeatures = [];
  var pickedList = this.scene.drillPick(screenPosition);

  for (var i = 0; i < pickedList.length; ++i) {
    var picked = pickedList[i];
    var id = picked.id;

    if (id && id.entityCollection && id.entityCollection.owner && id.entityCollection.owner.name === GlobeOrMap._featureHighlightName) {
      continue;
    }

    if (!defined(id) && defined(picked.primitive)) {
      id = picked.primitive.id;
    }

    if (id instanceof Entity && vectorFeatures.indexOf(id) === -1) {
      var feature = Feature.fromEntityCollectionOrEntity(id);
      vectorFeatures.push(feature);
    } else if (picked.primitive && picked.primitive._catalogItem && picked.primitive._catalogItem.getFeaturesFromPickResult) {
      var result = picked.primitive._catalogItem.getFeaturesFromPickResult(screenPosition, picked);

      if (result) {
        if (Array.isArray(result)) {
          vectorFeatures.push.apply(vectorFeatures, _toConsumableArray(result));
        } else {
          vectorFeatures.push(result);
        }
      }
    }
  }

  return vectorFeatures;
};
/**
 * Hooks into the {@link ImageryProvider#pickFeatures} method of every imagery provider in the scene - when this method is
 * evaluated (usually as part of feature picking), it will record the tile coordinates used against the url of the
 * imagery provider in an object that is returned by this method. Hooks are removed immediately after being executed once.
 *
 * @returns {{x, y, level}} A map of urls to the coords used by the imagery provider when picking features. Will
 *     initially be empty but will be updated as the hooks are evaluated.
 * @private
 */


Cesium.prototype._attachProviderCoordHooks = function () {
  var providerCoords = {};

  var pickFeaturesHook = function pickFeaturesHook(imageryProvider, oldPick, x, y, level, longitude, latitude) {
    var featuresPromise = oldPick.call(imageryProvider, x, y, level, longitude, latitude); // Use url to uniquely identify providers because what else can we do?

    if (imageryProvider.url) {
      providerCoords[imageryProvider.url] = {
        x: x,
        y: y,
        level: level
      };
    }

    imageryProvider.pickFeatures = oldPick;
    return featuresPromise;
  };

  for (var j = 0; j < this.scene.imageryLayers.length; j++) {
    var imageryProvider = this.scene.imageryLayers.get(j).imageryProvider;
    imageryProvider.pickFeatures = pickFeaturesHook.bind(undefined, imageryProvider, imageryProvider.pickFeatures);
  }

  return providerCoords;
};
/**
 * Builds a {@link PickedFeatures} object from a number of inputs.
 *
 * @param {{x, y, level}} providerCoords A map of imagery provider urls to the coords used to get features for that provider.
 * @param {Cartesian3} pickPosition The position in the 3D model that has been picked.
 * @param {Entity[]} existingFeatures Existing features - the results of feature promises will be appended to this.
 * @param {Promise[]} featurePromises Zero or more promises that each resolve to a list of {@link ImageryLayerFeatureInfo}s
 *     (usually there will be one promise per ImageryLayer. These will be combined as part of
 *     {@link PickedFeatures#allFeaturesAvailablePromise} and their results used to build the final
 *     {@link PickedFeatures#features} array.
 * @param {ImageryLayer[]} imageryLayers An array of ImageryLayers that should line up with the one passed as featurePromises.
 * @param {number} defaultHeight The height to use for feature position heights if none is available when picking.
 * @returns {PickedFeatures} A {@link PickedFeatures} object that is a combination of everything passed.
 * @private
 */


Cesium.prototype._buildPickedFeatures = function (providerCoords, pickPosition, existingFeatures, featurePromises, imageryLayers, defaultHeight) {
  var result = new PickedFeatures();
  result.providerCoords = providerCoords;
  result.pickPosition = pickPosition;
  result.allFeaturesAvailablePromise = when.all(featurePromises).then(function (allFeatures) {
    result.isLoading = false;
    result.features = allFeatures.reduce(function (resultFeaturesSoFar, imageryLayerFeatures, i) {
      if (!defined(imageryLayerFeatures)) {
        return resultFeaturesSoFar;
      }

      var features = imageryLayerFeatures.map(function (feature) {
        if (defined(imageryLayers)) {
          feature.imageryLayer = imageryLayers[i];
        }

        if (!defined(feature.position)) {
          feature.position = Ellipsoid.WGS84.cartesianToCartographic(pickPosition);
        } // If the picked feature does not have a height, use the height of the picked location.
        // This at least avoids major parallax effects on the selection indicator.


        if (!defined(feature.position.height) || feature.position.height === 0.0) {
          feature.position.height = defaultHeight;
        }

        return this._createFeatureFromImageryLayerFeature(feature);
      }.bind(this));

      if (this.terria.showSplitter) {
        // Select only features from the same side or both sides of the splitter
        var screenPosition = this.computePositionOnScreen(result.pickPosition);
        var pickedSide = this.terria.getSplitterSideForScreenPosition(screenPosition);
        features = features.filter(function (feature) {
          var splitDirection = feature.imageryLayer.splitDirection;
          return splitDirection === pickedSide || splitDirection === ImagerySplitDirection.NONE;
        });
      }

      return resultFeaturesSoFar.concat(features);
    }.bind(this), defaultValue(existingFeatures, []));
  }.bind(this)).otherwise(function () {
    result.isLoading = false;
    result.error = "An unknown error occurred while picking features.";
  });
  return result;
};
/**
 * Returns a new layer using a provided ImageryProvider, and adds it to the scene.
 * Note the optional parameters are a superset of the Leaflet version of this function, with one deletion (onProjectionError).
 *
 * @param {Object} options Options
 * @param {ImageryProvider} options.imageryProvider The imagery provider to create a new layer for.
 * @param {Number} [layerIndex] The index to add the layer at.  If omitted, the layer will added on top of all existing layers.
 * @param {Rectangle} [options.rectangle=imageryProvider.rectangle] The rectangle of the layer.  This rectangle
 *        can limit the visible portion of the imagery provider.
 * @param {Number|Function} [options.opacity=1.0] The alpha blending value of this layer, from 0.0 to 1.0.
 *                          This can either be a simple number or a function with the signature
 *                          <code>function(frameState, layer, x, y, level)</code>.  The function is passed the
 *                          current frame state, this layer, and the x, y, and level coordinates of the
 *                          imagery tile for which the alpha is required, and it is expected to return
 *                          the alpha value to use for the tile.
 * @param {Boolean} [options.clipToRectangle]
 * @param {Boolean} [options.treat403AsError]
 * @param {Boolean} [options.treat403AsError]
 * @param {Boolean} [options.ignoreUnknownTileErrors]
 * @param {Function} [options.onLoadError]
 * @returns {ImageryLayer} The newly created layer.
 */


Cesium.prototype.addImageryProvider = function (options) {
  var scene = this.scene;
  var errorEvent = options.imageryProvider.errorEvent;

  if (defined(errorEvent)) {
    errorEvent.addEventListener(options.onLoadError);
  }

  var result = new ImageryLayer(options.imageryProvider, {
    show: false,
    alpha: options.opacity,
    rectangle: options.clipToRectangle ? options.rectangle : undefined,
    isRequired: options.isRequiredForRendering // TODO: This doesn't seem to be a valid option for ImageryLayer - remove (and upstream)?

  }); // layerIndex is an optional parameter used when the imageryLayer corresponds to a CsvCatalogItem whose selected item has just changed
  // to ensure that the layer is re-added in the correct position

  scene.imageryLayers.add(result, options.layerIndex);
  this.updateLayerOrderToKeepOnTop();
  return result;
};

Cesium.prototype.removeImageryLayer = function (options) {
  var scene = this.scene;
  scene.imageryLayers.remove(options.layer);
};

Cesium.prototype.showImageryLayer = function (options) {
  options.layer.show = true;
};

Cesium.prototype.hideImageryLayer = function (options) {
  options.layer.show = false;
};

Cesium.prototype.isImageryLayerShown = function (options) {
  return options.layer.show;
};

Cesium.prototype.updateItemForSplitter = function (item) {
  if (!defined(item.splitDirection) || !defined(item.imageryLayer)) {
    return;
  }

  var terria = item.terria;

  if (terria.showSplitter) {
    item.imageryLayer.splitDirection = item.splitDirection;
  } else {
    item.imageryLayer.splitDirection = ImagerySplitDirection.NONE;
  } // Also update the next layer, if any.


  if (item._nextLayer) {
    item._nextLayer.splitDirection = item.imageryLayer.splitDirection;
  }

  this.notifyRepaintRequired();
};

Cesium.prototype.pauseMapInteraction = function () {
  ++this._pauseMapInteractionCount;

  if (this._pauseMapInteractionCount === 1) {
    this.scene.screenSpaceCameraController.enableInputs = false;
  }
};

Cesium.prototype.resumeMapInteraction = function () {
  var _this2 = this;

  --this._pauseMapInteractionCount;

  if (this._pauseMapInteractionCount === 0) {
    setTimeout(function () {
      if (_this2._pauseMapInteractionCount === 0) {
        _this2.scene.screenSpaceCameraController.enableInputs = true;
      }
    }, 0);
  }
};

function postRender(cesium, date) {
  // We can safely stop rendering when:
  //  - the camera position hasn't changed in over a second,
  //  - there are no tiles waiting to load, and
  //  - the clock is not animating
  //  - there are no tweens in progress
  var now = getTimestamp();
  var scene = cesium.scene;

  if (!Matrix4.equalsEpsilon(cesium._lastCameraViewMatrix, scene.camera.viewMatrix, 1e-5)) {
    cesium._lastCameraMoveTime = now;
  }

  var cameraMovedInLastSecond = now - cesium._lastCameraMoveTime < 1000;
  var surface = scene.globe._surface;
  var tilesWaiting = !surface._tileProvider.ready || surface._tileLoadQueueHigh.length > 0 || surface._tileLoadQueueMedium.length > 0 || surface._tileLoadQueueLow.length > 0 || surface._debug.tilesWaitingForChildren > 0;

  if (!cameraMovedInLastSecond && !tilesWaiting && !cesium.viewer.clock.shouldAnimate && cesium.scene.tweens.length === 0) {
    if (cesium.verboseRendering) {
      console.log("stopping rendering @ " + getTimestamp());
    }

    cesium.viewer.useDefaultRenderLoop = false;
    cesium.stoppedRendering = true;
  }

  Matrix4.clone(scene.camera.viewMatrix, cesium._lastCameraViewMatrix);
  var feature = cesium.terria.selectedFeature;

  if (defined(feature)) {
    var position;

    if (defined(cesium.dataSourceDisplay)) {
      var originalEntity = defined(feature.cesiumEntity) ? feature.cesiumEntity : feature;
      var state = cesium.dataSourceDisplay.getBoundingSphere(originalEntity, true, boundingSphereScratch);

      if (state === BoundingSphereState.DONE) {
        position = Cartesian3.clone(boundingSphereScratch.center);
      }
    }

    if (!defined(position) && defined(feature.position)) {
      position = feature.position.getValue(cesium.terria.clock.currentTime);
    }

    if (defined(position)) {
      cesium._selectionIndicator.position = position;
    }
  }

  cesium._selectionIndicator.update();
}

function selectFeature(cesium) {
  var feature = cesium.terria.selectedFeature;

  cesium._highlightFeature(feature);

  if (defined(feature) && defined(feature.position)) {
    cesium._selectionIndicator.position = feature.position.getValue(cesium.terria.clock.currentTime);

    cesium._selectionIndicator.animateAppear();
  } else {
    cesium._selectionIndicator.animateDepart();
  }

  cesium._selectionIndicator.update();
}

module.exports = Cesium;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM0QuVGVycmlhTWFwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGVycmlhanMvbGliL01hcC9DZXNpdW1TZWxlY3Rpb25JbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGVycmlhanMvbGliL01vZGVscy9DZXNpdW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKmdsb2JhbCByZXF1aXJlKi9cblxudmFyIENhcnRlc2lhbjIgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL0NhcnRlc2lhbjJcIik7XG5cbnZhciBkZWZpbmVkID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9kZWZpbmVkXCIpO1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvZGVmaW5lUHJvcGVydGllc1wiKTtcblxudmFyIERldmVsb3BlckVycm9yID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9EZXZlbG9wZXJFcnJvclwiKTtcblxudmFyIEVhc2luZ0Z1bmN0aW9uID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9FYXNpbmdGdW5jdGlvblwiKTtcblxudmFyIGtub2Nrb3V0ID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvVGhpcmRQYXJ0eS9rbm9ja291dFwiKTtcblxudmFyIFNjZW5lVHJhbnNmb3JtcyA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL1NjZW5lL1NjZW5lVHJhbnNmb3Jtc1wiKTtcblxudmFyIHNlbGVjdGlvbkluZGljYXRvclVybCA9IHJlcXVpcmUoXCIuLi8uLi93d3dyb290L2ltYWdlcy9OTS1Mb2NhdGlvblRhcmdldC5zdmdcIik7XG5cbnZhciBzY3JlZW5TcGFjZVBvcyA9IG5ldyBDYXJ0ZXNpYW4yKCk7XG52YXIgb2ZmU2NyZWVuID0gXCItMTAwMHB4XCI7XG5cbnZhciBDZXNpdW1TZWxlY3Rpb25JbmRpY2F0b3IgPSBmdW5jdGlvbiBDZXNpdW1TZWxlY3Rpb25JbmRpY2F0b3IoY2VzaXVtKSB7XG4gIC8vPj5pbmNsdWRlU3RhcnQoJ2RlYnVnJywgcHJhZ21hcy5kZWJ1Zyk7XG4gIGlmICghZGVmaW5lZChjZXNpdW0pKSB7XG4gICAgdGhyb3cgbmV3IERldmVsb3BlckVycm9yKFwiY2VzaXVtIGlzIHJlcXVpcmVkLlwiKTtcbiAgfSAvLz4+aW5jbHVkZUVuZCgnZGVidWcnKVxuXG5cbiAgdGhpcy5fY2VzaXVtID0gY2VzaXVtO1xuICB0aGlzLl9zY3JlZW5Qb3NpdGlvblggPSBvZmZTY3JlZW47XG4gIHRoaXMuX3NjcmVlblBvc2l0aW9uWSA9IG9mZlNjcmVlbjtcbiAgdGhpcy5fdHdlZW5zID0gY2VzaXVtLnNjZW5lLnR3ZWVucztcbiAgdGhpcy5fY29udGFpbmVyID0gY2VzaXVtLnZpZXdlci5jb250YWluZXI7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgdGhlIHdvcmxkIHBvc2l0aW9uIG9mIHRoZSBvYmplY3QgZm9yIHdoaWNoIHRvIGRpc3BsYXkgdGhlIHNlbGVjdGlvbiBpbmRpY2F0b3IuXG4gICAqIEB0eXBlIHtDYXJ0ZXNpYW4zfVxuICAgKi9cblxuICB0aGlzLnBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAvKipcbiAgICogR2V0cyBvciBzZXRzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gaW5kaWNhdG9yLlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG5cbiAgdGhpcy5zaG93U2VsZWN0aW9uID0gdHJ1ZTtcbiAgdGhpcy50cmFuc2Zvcm0gPSBcIlwiO1xuICB0aGlzLm9wYWNpdHkgPSAxLjA7XG4gIGtub2Nrb3V0LnRyYWNrKHRoaXMsIFtcInBvc2l0aW9uXCIsIFwiX3NjcmVlblBvc2l0aW9uWFwiLCBcIl9zY3JlZW5Qb3NpdGlvbllcIiwgXCJfc2NhbGVcIiwgXCJyb3RhdGVcIiwgXCJzaG93U2VsZWN0aW9uXCIsIFwidHJhbnNmb3JtXCIsIFwib3BhY2l0eVwiXSk7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBwb3NpdGlvbiBpbmRpY2F0b3IuICBUaGlzIGNhbiBiZSBmYWxzZSBldmVuIGlmIGFuXG4gICAqIG9iamVjdCBpcyBzZWxlY3RlZCwgd2hlbiB0aGUgc2VsZWN0ZWQgb2JqZWN0IGhhcyBubyBwb3NpdGlvbi5cbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIHRoaXMuaXNWaXNpYmxlID0gdW5kZWZpbmVkO1xuICBrbm9ja291dC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzVmlzaWJsZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93U2VsZWN0aW9uICYmIGRlZmluZWQodGhpcy5wb3NpdGlvbik7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIEdldHMgb3Igc2V0cyB0aGUgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgdGhlIHdvcmxkIHBvc2l0aW9uIG9mIHRoZSBvYmplY3QgdG8gdGhlIHNjcmVlbiBzcGFjZSBwb3NpdGlvbi5cbiAgICpcbiAgICogQG1lbWJlclxuICAgKiBAdHlwZSB7U2VsZWN0aW9uSW5kaWNhdG9yVmlld01vZGVsfkNvbXB1dGVTY3JlZW5TcGFjZVBvc2l0aW9ufVxuICAgKiBAZGVmYXVsdCBTY2VuZVRyYW5zZm9ybXMud2dzODRUb1dpbmRvd0Nvb3JkaW5hdGVzXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHNlbGVjdGlvbkluZGljYXRvclZpZXdNb2RlbC5jb21wdXRlU2NyZWVuU3BhY2VQb3NpdGlvbiA9IGZ1bmN0aW9uKHBvc2l0aW9uLCByZXN1bHQpIHtcbiAgICogICAgIHJldHVybiBDZXNpdW0uU2NlbmVUcmFuc2Zvcm1zLndnczg0VG9XaW5kb3dDb29yZGluYXRlcyhzY2VuZSwgcG9zaXRpb24sIHJlc3VsdCk7XG4gICAqIH07XG4gICAqL1xuXG4gIHRoaXMuY29tcHV0ZVNjcmVlblNwYWNlUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24sIHJlc3VsdCkge1xuICAgIHJldHVybiBTY2VuZVRyYW5zZm9ybXMud2dzODRUb1dpbmRvd0Nvb3JkaW5hdGVzKGNlc2l1bS5zY2VuZSwgcG9zaXRpb24sIHJlc3VsdCk7XG4gIH07XG5cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWwuY2xhc3NOYW1lID0gXCJzZWxlY3Rpb24taW5kaWNhdG9yXCI7XG5cbiAgdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKTtcblxuICB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3JFbGVtZW50ID0gZWw7XG4gIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGVjdGlvbkluZGljYXRvclVybCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCA1MCk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgNTApO1xuICBlbC5hcHBlbmRDaGlsZChpbWcpO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoYXQuX3NjcmVlblBvc2l0aW9uWTtcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhhdC5fc2NyZWVuUG9zaXRpb25YO1xuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IHRoYXQudHJhbnNmb3JtO1xuICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0aGF0Lm9wYWNpdHk7XG4gIH1cblxuICB1cGRhdGUoKTtcbiAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChrbm9ja291dC5nZXRPYnNlcnZhYmxlKHRoaXMsIFwiX3NjcmVlblBvc2l0aW9uWFwiKS5zdWJzY3JpYmUodXBkYXRlKSk7XG5cbiAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKGtub2Nrb3V0LmdldE9ic2VydmFibGUodGhpcywgXCJfc2NyZWVuUG9zaXRpb25ZXCIpLnN1YnNjcmliZSh1cGRhdGUpKTtcblxuICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goa25vY2tvdXQuZ2V0T2JzZXJ2YWJsZSh0aGlzLCBcInRyYW5zZm9ybVwiKS5zdWJzY3JpYmUodXBkYXRlKSk7XG5cbiAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKGtub2Nrb3V0LmdldE9ic2VydmFibGUodGhpcywgXCJvcGFjaXR5XCIpLnN1YnNjcmliZSh1cGRhdGUpKTtcbn07XG5cbkNlc2l1bVNlbGVjdGlvbkluZGljYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc2VsZWN0aW9uSW5kaWNhdG9yRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX3NlbGVjdGlvbkluZGljYXRvckVsZW1lbnQpO1xuXG4gIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBVcGRhdGVzIHRoZSB2aWV3IG9mIHRoZSBzZWxlY3Rpb24gaW5kaWNhdG9yIHRvIG1hdGNoIHRoZSBwb3NpdGlvbiBhbmQgY29udGVudCBwcm9wZXJ0aWVzIG9mIHRoZSB2aWV3IG1vZGVsLlxuICogVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgY2FsbGVkIGFzIHBhcnQgb2YgdGhlIHJlbmRlciBsb29wLlxuICovXG5cblxuQ2VzaXVtU2VsZWN0aW9uSW5kaWNhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnNob3dTZWxlY3Rpb24gJiYgZGVmaW5lZCh0aGlzLnBvc2l0aW9uKSkge1xuICAgIHZhciBzY3JlZW5Qb3NpdGlvbiA9IHRoaXMuY29tcHV0ZVNjcmVlblNwYWNlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgc2NyZWVuU3BhY2VQb3MpO1xuXG4gICAgaWYgKCFkZWZpbmVkKHNjcmVlblBvc2l0aW9uKSkge1xuICAgICAgdGhpcy5fc2NyZWVuUG9zaXRpb25YID0gb2ZmU2NyZWVuO1xuICAgICAgdGhpcy5fc2NyZWVuUG9zaXRpb25ZID0gb2ZmU2NyZWVuO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xuICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICB2YXIgaW5kaWNhdG9yU2l6ZSA9IHRoaXMuX3NlbGVjdGlvbkluZGljYXRvckVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICB2YXIgaGFsZlNpemUgPSBpbmRpY2F0b3JTaXplICogMC41O1xuICAgICAgc2NyZWVuUG9zaXRpb24ueCA9IE1hdGgubWluKE1hdGgubWF4KHNjcmVlblBvc2l0aW9uLngsIC1pbmRpY2F0b3JTaXplKSwgY29udGFpbmVyV2lkdGggKyBpbmRpY2F0b3JTaXplKSAtIGhhbGZTaXplO1xuICAgICAgc2NyZWVuUG9zaXRpb24ueSA9IE1hdGgubWluKE1hdGgubWF4KHNjcmVlblBvc2l0aW9uLnksIC1pbmRpY2F0b3JTaXplKSwgY29udGFpbmVySGVpZ2h0ICsgaW5kaWNhdG9yU2l6ZSkgLSBoYWxmU2l6ZTtcbiAgICAgIHRoaXMuX3NjcmVlblBvc2l0aW9uWCA9IE1hdGguZmxvb3Ioc2NyZWVuUG9zaXRpb24ueCArIDAuMjUpICsgXCJweFwiO1xuICAgICAgdGhpcy5fc2NyZWVuUG9zaXRpb25ZID0gTWF0aC5mbG9vcihzY3JlZW5Qb3NpdGlvbi55ICsgMC4yNSkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBBbmltYXRlIHRoZSBpbmRpY2F0b3IgdG8gZHJhdyBhdHRlbnRpb24gdG8gdGhlIHNlbGVjdGlvbi5cbiAqL1xuXG5cbkNlc2l1bVNlbGVjdGlvbkluZGljYXRvci5wcm90b3R5cGUuYW5pbWF0ZUFwcGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRlZmluZWQodGhpcy5fc2VsZWN0aW9uSW5kaWNhdG9yVHdlZW4pKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvbkluZGljYXRvcklzQXBwZWFyaW5nKSB7XG4gICAgICAvLyBBbHJlYWR5IGFwcGVhcmluZzsgZG9uJ3QgcmVzdGFydCB0aGUgYW5pbWF0aW9uLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbGVjdGlvbkluZGljYXRvclR3ZWVuLmNhbmNlbFR3ZWVuKCk7XG5cbiAgICB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3JUd2VlbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRoaXMuX3NlbGVjdGlvbkluZGljYXRvcklzQXBwZWFyaW5nID0gdHJ1ZTtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3JUd2VlbiA9IHRoaXMuX3R3ZWVucy5hZGQoe1xuICAgIHN0YXJ0T2JqZWN0OiB7XG4gICAgICBzY2FsZTogMi4wLFxuICAgICAgb3BhY2l0eTogMC4wLFxuICAgICAgcm90YXRlOiAtMTgwXG4gICAgfSxcbiAgICBzdG9wT2JqZWN0OiB7XG4gICAgICBzY2FsZTogMS4wLFxuICAgICAgb3BhY2l0eTogMS4wLFxuICAgICAgcm90YXRlOiAwXG4gICAgfSxcbiAgICBkdXJhdGlvbjogMC44LFxuICAgIGVhc2luZ0Z1bmN0aW9uOiBFYXNpbmdGdW5jdGlvbi5FWFBPTkVOVElBTF9PVVQsXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUodmFsdWUpIHtcbiAgICAgIHRoYXQub3BhY2l0eSA9IHZhbHVlLm9wYWNpdHk7XG4gICAgICB0aGF0LnRyYW5zZm9ybSA9IFwic2NhbGUoXCIgKyB2YWx1ZS5zY2FsZSArIFwiKSByb3RhdGUoXCIgKyB2YWx1ZS5yb3RhdGUgKyBcImRlZylcIjtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIHRoYXQuX3NlbGVjdGlvbkluZGljYXRvclR3ZWVuID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICB0aGF0Ll9zZWxlY3Rpb25JbmRpY2F0b3JUd2VlbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xufTtcbi8qKlxuICogQW5pbWF0ZSB0aGUgaW5kaWNhdG9yIHRvIHJlbGVhc2UgdGhlIHNlbGVjdGlvbi5cbiAqL1xuXG5cbkNlc2l1bVNlbGVjdGlvbkluZGljYXRvci5wcm90b3R5cGUuYW5pbWF0ZURlcGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRlZmluZWQodGhpcy5fc2VsZWN0aW9uSW5kaWNhdG9yVHdlZW4pKSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3JJc0FwcGVhcmluZykge1xuICAgICAgLy8gQWxyZWFkeSBkaXNhcHBlYXJpbmcsIGRvbid0IHJlc3RhcnQgdGhlIGFuaW1hdGlvbi5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3JUd2Vlbi5jYW5jZWxUd2VlbigpO1xuXG4gICAgdGhpcy5fc2VsZWN0aW9uSW5kaWNhdG9yVHdlZW4gPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3JJc0FwcGVhcmluZyA9IGZhbHNlO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHRoaXMuX3NlbGVjdGlvbkluZGljYXRvclR3ZWVuID0gdGhpcy5fdHdlZW5zLmFkZCh7XG4gICAgc3RhcnRPYmplY3Q6IHtcbiAgICAgIHNjYWxlOiAxLjAsXG4gICAgICBvcGFjaXR5OiAxLjBcbiAgICB9LFxuICAgIHN0b3BPYmplY3Q6IHtcbiAgICAgIHNjYWxlOiAxLjUsXG4gICAgICBvcGFjaXR5OiAwLjBcbiAgICB9LFxuICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgZWFzaW5nRnVuY3Rpb246IEVhc2luZ0Z1bmN0aW9uLkVYUE9ORU5USUFMX09VVCxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgICAgdGhhdC5vcGFjaXR5ID0gdmFsdWUub3BhY2l0eTtcbiAgICAgIHRoYXQudHJhbnNmb3JtID0gXCJzY2FsZShcIiArIHZhbHVlLnNjYWxlICsgXCIpIHJvdGF0ZSgwZGVnKVwiO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgdGhhdC5fc2VsZWN0aW9uSW5kaWNhdG9yVHdlZW4gPSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIHRoYXQuX3NlbGVjdGlvbkluZGljYXRvclR3ZWVuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzKENlc2l1bVNlbGVjdGlvbkluZGljYXRvci5wcm90b3R5cGUsIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIEhUTUwgZWxlbWVudCBjb250YWluaW5nIHRoZSBzZWxlY3Rpb24gaW5kaWNhdG9yLlxuICAgKiBAbWVtYmVyb2YgQ2VzaXVtU2VsZWN0aW9uSW5kaWNhdG9yLnByb3RvdHlwZVxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIGNvbnRhaW5lcjoge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIEhUTUwgZWxlbWVudCB0aGF0IGhvbGRzIHRoZSBzZWxlY3Rpb24gaW5kaWNhdG9yLlxuICAgKiBAbWVtYmVyb2YgQ2VzaXVtU2VsZWN0aW9uSW5kaWNhdG9yLnByb3RvdHlwZVxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIHNlbGVjdGlvbkluZGljYXRvckVsZW1lbnQ6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3JFbGVtZW50O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgc2NlbmUgYmVpbmcgdXNlZC5cbiAgICogQG1lbWJlcm9mIENlc2l1bVNlbGVjdGlvbkluZGljYXRvci5wcm90b3R5cGVcbiAgICpcbiAgICogQHR5cGUge1NjZW5lfVxuICAgKi9cbiAgc2NlbmU6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2VuZTtcbiAgICB9XG4gIH1cbn0pO1xuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIHdvcmxkIHBvc2l0aW9uIG9mIGFuIG9iamVjdCB0byBhIHNjcmVlbiBzcGFjZSBwb3NpdGlvbi5cbiAqIEBjYWxsYmFjayBDZXNpdW1TZWxlY3Rpb25JbmRpY2F0b3J+Q29tcHV0ZVNjcmVlblNwYWNlUG9zaXRpb25cbiAqIEBwYXJhbSB7Q2FydGVzaWFuM30gcG9zaXRpb24gVGhlIHBvc2l0aW9uIGluIFdHUzg0ICh3b3JsZCkgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge0NhcnRlc2lhbjJ9IHJlc3VsdCBBbiBvYmplY3QgdG8gcmV0dXJuIHRoZSBpbnB1dCBwb3NpdGlvbiB0cmFuc2Zvcm1lZCB0byB3aW5kb3cgY29vcmRpbmF0ZXMuXG4gKiBAcmV0dXJucyB7Q2FydGVzaWFuMn0gVGhlIG1vZGlmaWVkIHJlc3VsdCBwYXJhbWV0ZXIuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBDZXNpdW1TZWxlY3Rpb25JbmRpY2F0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKmdsb2JhbCByZXF1aXJlKi9cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxudmFyIEJvdW5kaW5nU3BoZXJlID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9Cb3VuZGluZ1NwaGVyZVwiKTtcblxudmFyIEJvdW5kaW5nU3BoZXJlU3RhdGUgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9EYXRhU291cmNlcy9Cb3VuZGluZ1NwaGVyZVN0YXRlXCIpO1xuXG52YXIgQ2FydGVzaWFuMiA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvQ2FydGVzaWFuMlwiKTtcblxudmFyIENhcnRlc2lhbjMgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL0NhcnRlc2lhbjNcIik7XG5cbnZhciBDYXJ0b2dyYXBoaWMgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL0NhcnRvZ3JhcGhpY1wiKTtcblxudmFyIENlc2l1bU1hdGggPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL01hdGhcIik7XG5cbnZhciBkZWZhdWx0VmFsdWUgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL2RlZmF1bHRWYWx1ZVwiKTtcblxudmFyIGRlZmluZWQgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL2RlZmluZWRcIik7XG5cbnZhciBkZXN0cm95T2JqZWN0ID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9kZXN0cm95T2JqZWN0XCIpO1xuXG52YXIgRGV2ZWxvcGVyRXJyb3IgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL0RldmVsb3BlckVycm9yXCIpO1xuXG52YXIgRWxsaXBzb2lkID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9FbGxpcHNvaWRcIik7XG5cbnZhciBFbnRpdHkgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9EYXRhU291cmNlcy9FbnRpdHlcIik7XG5cbnZhciBmb3JtYXRFcnJvciA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvZm9ybWF0RXJyb3JcIik7XG5cbnZhciBnZXRUaW1lc3RhbXAgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL2dldFRpbWVzdGFtcFwiKTtcblxudmFyIEhlYWRpbmdQaXRjaFJhbmdlID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9IZWFkaW5nUGl0Y2hSYW5nZVwiKTtcblxudmFyIEltYWdlcnlMYXllciA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL1NjZW5lL0ltYWdlcnlMYXllclwiKTtcblxudmFyIEp1bGlhbkRhdGUgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL0p1bGlhbkRhdGVcIik7XG5cbnZhciBrbm9ja291dCA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL1RoaXJkUGFydHkva25vY2tvdXRcIik7XG5cbnZhciBsb2FkV2l0aFhociA9IHJlcXVpcmUoXCIuLi9Db3JlL2xvYWRXaXRoWGhyXCIpO1xuXG52YXIgTWF0cml4NCA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvTWF0cml4NFwiKTtcblxudmFyIFJlY3RhbmdsZSA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvUmVjdGFuZ2xlXCIpO1xuXG52YXIgc2FtcGxlVGVycmFpbiA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvc2FtcGxlVGVycmFpblwiKTtcblxudmFyIFNjZW5lVHJhbnNmb3JtcyA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL1NjZW5lL1NjZW5lVHJhbnNmb3Jtc1wiKTtcblxudmFyIFNjcmVlblNwYWNlRXZlbnRUeXBlID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9TY3JlZW5TcGFjZUV2ZW50VHlwZVwiKTtcblxudmFyIFRhc2tQcm9jZXNzb3IgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL1Rhc2tQcm9jZXNzb3JcIik7XG5cbnZhciBUcmFuc2Zvcm1zID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9UcmFuc2Zvcm1zXCIpO1xuXG52YXIgd2hlbiA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL1RoaXJkUGFydHkvd2hlblwiKTtcblxudmFyIEV2ZW50SGVscGVyID0gcmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9FdmVudEhlbHBlclwiKTtcblxudmFyIEltYWdlcnlTcGxpdERpcmVjdGlvbiA9IHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL1NjZW5lL0ltYWdlcnlTcGxpdERpcmVjdGlvblwiKTtcblxudmFyIENlc2l1bVNlbGVjdGlvbkluZGljYXRvciA9IHJlcXVpcmUoXCIuLi9NYXAvQ2VzaXVtU2VsZWN0aW9uSW5kaWNhdG9yXCIpO1xuXG52YXIgRmVhdHVyZSA9IHJlcXVpcmUoXCIuL0ZlYXR1cmVcIik7XG5cbnZhciBHbG9iZU9yTWFwID0gcmVxdWlyZShcIi4vR2xvYmVPck1hcFwiKTtcblxudmFyIGluaGVyaXQgPSByZXF1aXJlKFwiLi4vQ29yZS9pbmhlcml0XCIpO1xuXG52YXIgcG9sbFRvUHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9Db3JlL3BvbGxUb1Byb21pc2VcIik7XG5cbnZhciBUZXJyaWFFcnJvciA9IHJlcXVpcmUoXCIuLi9Db3JlL1RlcnJpYUVycm9yXCIpO1xuXG52YXIgUGlja2VkRmVhdHVyZXMgPSByZXF1aXJlKFwiLi4vTWFwL1BpY2tlZEZlYXR1cmVzXCIpO1xuXG52YXIgVmlld2VyTW9kZSA9IHJlcXVpcmUoXCIuL1ZpZXdlck1vZGVcIik7XG4vKipcbiAqIFRoZSBDZXNpdW0gdmlld2VyIGNvbXBvbmVudFxuICpcbiAqIEBhbGlhcyBDZXNpdW1cbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgR2xvYmVPck1hcFxuICpcbiAqIEBwYXJhbSB7VGVycmlhfSB0ZXJyaWEgVGhlIFRlcnJpYSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7Vmlld2VyfSB2aWV3ZXIgVGhlIENlc2l1bSB2aWV3ZXIgaW5zdGFuY2UuXG4gKi9cblxuXG52YXIgQ2VzaXVtID0gZnVuY3Rpb24gQ2VzaXVtKHRlcnJpYSwgdmlld2VyKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgR2xvYmVPck1hcC5jYWxsKHRoaXMsIHRlcnJpYSk7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgdGhlIENlc2l1bSB7QGxpbmsgVmlld2VyfSBpbnN0YW5jZS5cbiAgICogQHR5cGUge1ZpZXdlcn1cbiAgICovXG5cbiAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgdGhlIENlc2l1bSB7QGxpbmsgU2NlbmV9IGluc3RhbmNlLlxuICAgKiBAdHlwZSB7U2NlbmV9XG4gICAqL1xuXG4gIHRoaXMuc2NlbmUgPSB2aWV3ZXIuc2NlbmU7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgd2hldGhlciB0aGUgdmlld2VyIGhhcyBzdG9wcGVkIHJlbmRlcmluZyBzaW5jZSBzdGFydHVwIG9yIGxhc3Qgc2V0IHRvIGZhbHNlLlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG5cbiAgdGhpcy5zdG9wcGVkUmVuZGVyaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgd2hldGhlciB0byBvdXRwdXQgaW5mbyB0byB0aGUgY29uc29sZSB3aGVuIHN0YXJ0aW5nIGFuZCBzdG9wcGluZyByZW5kZXJpbmcgbG9vcC5cbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIHRoaXMudmVyYm9zZVJlbmRlcmluZyA9IGZhbHNlO1xuICAvKipcbiAgICogR2V0cyBvciBzZXRzIHdoZXRoZXIgdGhpcyB2aWV3ZXIgX2Nhbl8gc2hvdyBhIHNwbGl0dGVyLlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG5cbiAgdGhpcy5jYW5TaG93U3BsaXR0ZXIgPSB0cnVlO1xuICAvKipcbiAgICogR2V0cyB0aGUge0BsaW5rIERhdGFTb3VyY2VEaXNwbGF5fSB1c2VkIHRvIHJlbmRlciBhIHtAbGluayBEYXRhU291cmNlfS5cbiAgICogQHR5cGUge0RhdGFTb3VyY2VEaXNwbGF5fVxuICAgKi9cblxuICB0aGlzLmRhdGFTb3VyY2VEaXNwbGF5ID0gdW5kZWZpbmVkO1xuICB0aGlzLl9sYXN0Q2xvY2tUaW1lID0gbmV3IEp1bGlhbkRhdGUoMCwgMC4wKTtcbiAgdGhpcy5fbGFzdENhbWVyYVZpZXdNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xuICB0aGlzLl9sYXN0Q2FtZXJhTW92ZVRpbWUgPSAwO1xuICB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3IgPSBuZXcgQ2VzaXVtU2VsZWN0aW9uSW5kaWNhdG9yKHRoaXMpO1xuICB0aGlzLl9yZW1vdmVQb3N0UmVuZGVyTGlzdGVuZXIgPSB0aGlzLnNjZW5lLnBvc3RSZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihwb3N0UmVuZGVyLmJpbmQodW5kZWZpbmVkLCB0aGlzKSk7XG4gIHRoaXMuX3JlbW92ZUluZm9Cb3hDbG9zZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuICB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCA9IHRoaXMubm90aWZ5UmVwYWludFJlcXVpcmVkLmJpbmQodGhpcyk7XG4gIHRoaXMuX3BhdXNlTWFwSW50ZXJhY3Rpb25Db3VudCA9IDA7XG4gIHRoaXMuc2NlbmUuaW1hZ2VyeVNwbGl0UG9zaXRpb24gPSB0aGlzLnRlcnJpYS5zcGxpdFBvc2l0aW9uO1xuICB0aGlzLnN1cHBvcnRzUG9seWxpbmVzT25UZXJyYWluID0gdGhpcy5zY2VuZS5jb250ZXh0LmRlcHRoVGV4dHVyZTsgLy8gSGFuZGxlIGxlZnQgY2xpY2sgYnkgcGlja2luZyBvYmplY3RzIGZyb20gdGhlIG1hcC5cblxuICB2aWV3ZXIuc2NyZWVuU3BhY2VFdmVudEhhbmRsZXIuc2V0SW5wdXRBY3Rpb24oZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLnBpY2tGcm9tU2NyZWVuUG9zaXRpb24oZS5wb3NpdGlvbik7XG4gIH0uYmluZCh0aGlzKSwgU2NyZWVuU3BhY2VFdmVudFR5cGUuTEVGVF9DTElDSyk7IC8vIEZvcmNlIGEgcmVwYWludCB3aGVuIHRoZSBtb3VzZSBtb3ZlcyBvciB0aGUgd2luZG93IGNoYW5nZXMgc2l6ZS5cblxuICB2YXIgY2FudmFzID0gdGhpcy52aWV3ZXIuY2FudmFzO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCwgZmFsc2UpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCwgZmFsc2UpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuX2JvdW5kTm90aWZ5UmVwYWludFJlcXVpcmVkLCBmYWxzZSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcblxuICBpZiAoZGVmaW5lZCh3aW5kb3cuUG9pbnRlckV2ZW50KSkge1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCwgZmFsc2UpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgfSAvLyBEZXRlY3QgYXZhaWxhYmxlIHdoZWVsIGV2ZW50XG5cblxuICB0aGlzLl93aGVlbEV2ZW50ID0gdW5kZWZpbmVkO1xuXG4gIGlmIChcIm9ud2hlZWxcIiBpbiBjYW52YXMpIHtcbiAgICAvLyBzcGVjIGV2ZW50IHR5cGVcbiAgICB0aGlzLl93aGVlbEV2ZW50ID0gXCJ3aGVlbFwiO1xuICB9IGVsc2UgaWYgKGRlZmluZWQoZG9jdW1lbnQub25tb3VzZXdoZWVsKSkge1xuICAgIC8vIGxlZ2FjeSBldmVudCB0eXBlXG4gICAgdGhpcy5fd2hlZWxFdmVudCA9IFwibW91c2V3aGVlbFwiO1xuICB9IGVsc2Uge1xuICAgIC8vIG9sZGVyIEZpcmVmb3hcbiAgICB0aGlzLl93aGVlbEV2ZW50ID0gXCJET01Nb3VzZVNjcm9sbFwiO1xuICB9XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fd2hlZWxFdmVudCwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcblxuICB0aGlzLl9zZXRWaWV3ZXJSZXNvbHV0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEZvcmNlIHJlbmRlcmluZyBpbiBDU1MgcGl4ZWwgcmVzb2x1dGlvbiBpbnN0ZWFkIG9mIG5hdGl2ZSBkZXZpY2VcbiAgICAvLyByZXNvbHV0aW9uIHdoaWNoIGlzIHRoZSBkZWZhdWx0IHNpbmNlIGNlc2l1bTEuNjEuMFxuICAgIC8vIFdlIG9ubHkgdHdlYWsgaWYgdXNlciBoYXNuJ3Qgc3BlY2lmaWVkIHRvIHVzZSB1c2VOYXRpdmVSZXNvbHV0aW9uXG4gICAgaWYgKCFfdGhpcy50ZXJyaWEudXNlTmF0aXZlUmVzb2x1dGlvbikge1xuICAgICAgX3RoaXMudmlld2VyLnJlc29sdXRpb25TY2FsZSA9IDEuMCAvIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLl9zZXRWaWV3ZXJSZXNvbHV0aW9uKCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0Vmlld2VyUmVzb2x1dGlvbiwgZmFsc2UpOyAvLyBGb3JjZSBhIHJlcGFpbnQgd2hlbiB0aGUgZmVhdHVyZSBpbmZvIGJveCBpcyBjbG9zZWQuICBDZXNpdW0gY2FuJ3QgY2xvc2UgaXRzIGluZm8gYm94XG4gIC8vIHdoZW4gdGhlIGNsb2NrIGlzIG5vdCB0aWNraW5nLCBmb3IgcmVhc29ucyB0aGF0IGFyZSBub3QgY2xlYXIuXG5cbiAgaWYgKGRlZmluZWQodGhpcy52aWV3ZXIuaW5mb0JveCkpIHtcbiAgICB0aGlzLl9yZW1vdmVJbmZvQm94Q2xvc2VMaXN0ZW5lciA9IHRoaXMudmlld2VyLmluZm9Cb3gudmlld01vZGVsLmNsb3NlQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2JvdW5kTm90aWZ5UmVwYWludFJlcXVpcmVkKTtcbiAgfVxuXG4gIGlmIChkZWZpbmVkKHRoaXMudmlld2VyLl9jbG9ja1ZpZXdNb2RlbCkpIHtcbiAgICB2YXIgY2xvY2sgPSB0aGlzLnZpZXdlci5fY2xvY2tWaWV3TW9kZWw7XG4gICAgdGhpcy5fc2hvdWxkQW5pbWF0ZVN1YnNjcmlwdGlvbiA9IGtub2Nrb3V0LmdldE9ic2VydmFibGUoY2xvY2ssIFwic2hvdWxkQW5pbWF0ZVwiKS5zdWJzY3JpYmUodGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQpO1xuICAgIHRoaXMuX2N1cnJlbnRUaW1lU3Vic2NyaXB0aW9uID0ga25vY2tvdXQuZ2V0T2JzZXJ2YWJsZShjbG9jaywgXCJjdXJyZW50VGltZVwiKS5zdWJzY3JpYmUodGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQpO1xuICB9XG5cbiAgaWYgKGRlZmluZWQodGhpcy52aWV3ZXIudGltZWxpbmUpKSB7XG4gICAgdGhpcy52aWV3ZXIudGltZWxpbmUuYWRkRXZlbnRMaXN0ZW5lcihcInNldHRpbWVcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgfVxuXG4gIHRoaXMuX3NlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbiA9IGtub2Nrb3V0LmdldE9ic2VydmFibGUodGhpcy50ZXJyaWEsIFwic2VsZWN0ZWRGZWF0dXJlXCIpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgc2VsZWN0RmVhdHVyZSh0aGlzKTtcbiAgfSwgdGhpcyk7XG4gIHRoaXMuX3NwbGl0dGVyUG9zaXRpb25TdWJzY3JpcHRpb24gPSBrbm9ja291dC5nZXRPYnNlcnZhYmxlKHRoaXMudGVycmlhLCBcInNwbGl0UG9zaXRpb25cIikuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS5pbWFnZXJ5U3BsaXRQb3NpdGlvbiA9IHRoaXMudGVycmlhLnNwbGl0UG9zaXRpb247XG4gICAgICB0aGlzLm5vdGlmeVJlcGFpbnRSZXF1aXJlZCgpO1xuICAgIH1cbiAgfSwgdGhpcyk7XG4gIHRoaXMuX3Nob3dTcGxpdHRlclN1YnNjcmlwdGlvbiA9IGtub2Nrb3V0LmdldE9ic2VydmFibGUodGVycmlhLCBcInNob3dTcGxpdHRlclwiKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudXBkYXRlQWxsSXRlbXNGb3JTcGxpdHRlcigpO1xuICB9LCB0aGlzKTsgLy8gSGFja3kgd2F5IHRvIGZvcmNlIGEgcmVwYWludCB3aGVuIGFuIGFzeW5jIGxvYWQgcmVxdWVzdCBjb21wbGV0ZXNcblxuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHRoaXMuX29yaWdpbmFsTG9hZFdpdGhYaHIgPSBsb2FkV2l0aFhoci5sb2FkO1xuXG4gIGxvYWRXaXRoWGhyLmxvYWQgPSBmdW5jdGlvbiAodXJsLCByZXNwb25zZVR5cGUsIG1ldGhvZCwgZGF0YSwgaGVhZGVycywgZGVmZXJyZWQsIG92ZXJyaWRlTWltZVR5cGUsIHByZWZlclRleHQsIHRpbWVvdXQpIHtcbiAgICBkZWZlcnJlZC5wcm9taXNlLmFsd2F5cyh0aGF0Ll9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCk7XG5cbiAgICB0aGF0Ll9vcmlnaW5hbExvYWRXaXRoWGhyKHVybCwgcmVzcG9uc2VUeXBlLCBtZXRob2QsIGRhdGEsIGhlYWRlcnMsIGRlZmVycmVkLCBvdmVycmlkZU1pbWVUeXBlLCBwcmVmZXJUZXh0LCB0aW1lb3V0KTtcbiAgfTsgLy8gSGFja3kgd2F5IHRvIGZvcmNlIGEgcmVwYWludCB3aGVuIGEgd2ViIHdvcmtlciBzZW5kcyBzb21ldGhpbmcgYmFjay5cblxuXG4gIHRoaXMuX29yaWdpbmFsU2NoZWR1bGVUYXNrID0gVGFza1Byb2Nlc3Nvci5wcm90b3R5cGUuc2NoZWR1bGVUYXNrO1xuXG4gIFRhc2tQcm9jZXNzb3IucHJvdG90eXBlLnNjaGVkdWxlVGFzayA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzLCB0cmFuc2ZlcmFibGVPYmplY3RzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoYXQuX29yaWdpbmFsU2NoZWR1bGVUYXNrLmNhbGwodGhpcywgcGFyYW1ldGVycywgdHJhbnNmZXJhYmxlT2JqZWN0cyk7XG5cbiAgICBpZiAoIWRlZmluZWQodGhpcy5fb3JpZ2luYWxXb3JrZXJNZXNzYWdlU2lua1JlcGFpbnQpKSB7XG4gICAgICB0aGlzLl9vcmlnaW5hbFdvcmtlck1lc3NhZ2VTaW5rUmVwYWludCA9IHRoaXMuX3dvcmtlci5vbm1lc3NhZ2U7XG4gICAgICB2YXIgdGFza1Byb2Nlc3NvciA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX3dvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGFza1Byb2Nlc3Nvci5fb3JpZ2luYWxXb3JrZXJNZXNzYWdlU2lua1JlcGFpbnQoZXZlbnQpO1xuXG4gICAgICAgIGlmICh0aGF0LmlzRGVzdHJveWVkKCkpIHtcbiAgICAgICAgICB0YXNrUHJvY2Vzc29yLl93b3JrZXIub25tZXNzYWdlID0gdGFza1Byb2Nlc3Nvci5fb3JpZ2luYWxXb3JrZXJNZXNzYWdlU2lua1JlcGFpbnQ7XG4gICAgICAgICAgdGFza1Byb2Nlc3Nvci5fb3JpZ2luYWxXb3JrZXJNZXNzYWdlU2lua1JlcGFpbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhhdC5ub3RpZnlSZXBhaW50UmVxdWlyZWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHRoaXMuZXZlbnRIZWxwZXIgPSBuZXcgRXZlbnRIZWxwZXIoKTsgLy8gSWYgdGhlIHJlbmRlciBsb29wIGNyYXNoZXMsIGluZm9ybSB0aGUgdXNlciBhbmQgdGhlbiBzd2l0Y2ggdG8gMkQuXG5cbiAgdGhpcy5ldmVudEhlbHBlci5hZGQodGhpcy5zY2VuZS5yZW5kZXJFcnJvciwgZnVuY3Rpb24gKHNjZW5lLCBlcnJvcikge1xuICAgIHRoaXMudGVycmlhLmVycm9yLnJhaXNlRXZlbnQobmV3IFRlcnJpYUVycm9yKHtcbiAgICAgIHNlbmRlcjogdGhpcyxcbiAgICAgIHRpdGxlOiBcIkVycm9yIHJlbmRlcmluZyBpbiAzRFwiLFxuICAgICAgbWVzc2FnZTogXCJcXFxuPHA+QW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVuZGVyaW5nIGluIDNELiAgVGhpcyBwcm9iYWJseSBpbmRpY2F0ZXMgYSBidWcgaW4gXCIgKyB0ZXJyaWEuYXBwTmFtZSArIFwiIG9yIGFuIGluY29tcGF0aWJpbGl0eSB3aXRoIHlvdXIgc3lzdGVtIFxcXG5vciB3ZWIgYnJvd3Nlci4gIFdlJ2xsIG5vdyBzd2l0Y2ggeW91IHRvIDJEIHNvIHRoYXQgeW91IGNhbiBjb250aW51ZSB5b3VyIHdvcmsuICBXZSB3b3VsZCBhcHByZWNpYXRlIGl0IGlmIHlvdSByZXBvcnQgdGhpcyBcXFxuZXJyb3IgYnkgc2VuZGluZyBhbiBlbWFpbCB0byA8YSBocmVmPVxcXCJtYWlsdG86XCIgKyB0ZXJyaWEuc3VwcG9ydEVtYWlsICsgJ1wiPicgKyB0ZXJyaWEuc3VwcG9ydEVtYWlsICsgXCI8L2E+IHdpdGggdGhlIFxcXG50ZWNobmljYWwgZGV0YWlscyBiZWxvdy4gIFRoYW5rIHlvdSE8L3A+PHByZT5cIiArIGZvcm1hdEVycm9yKGVycm9yKSArIFwiPC9wcmU+XCJcbiAgICB9KSk7XG4gICAgdGhpcy50ZXJyaWEudmlld2VyTW9kZSA9IFZpZXdlck1vZGUuTGVhZmxldDtcbiAgfSwgdGhpcyk7XG4gIHRoaXMuZXZlbnRIZWxwZXIuYWRkKHRoaXMuc2NlbmUuZ2xvYmUudGlsZUxvYWRQcm9ncmVzc0V2ZW50LCB0aGlzLnVwZGF0ZVRpbGVzTG9hZGluZ0NvdW50LmJpbmQodGhpcykpO1xuICBzZWxlY3RGZWF0dXJlKHRoaXMpO1xufTtcblxuaW5oZXJpdChHbG9iZU9yTWFwLCBDZXNpdW0pO1xuXG5DZXNpdW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkZWZpbmVkKHRoaXMuX3NlbGVjdGlvbkluZGljYXRvcikpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25JbmRpY2F0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5fc2VsZWN0aW9uSW5kaWNhdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlZmluZWQodGhpcy5fcmVtb3ZlUG9zdFJlbmRlckxpc3RlbmVyKSkge1xuICAgIHRoaXMuX3JlbW92ZVBvc3RSZW5kZXJMaXN0ZW5lcigpO1xuXG4gICAgdGhpcy5fcmVtb3ZlUG9zdFJlbmRlckxpc3RlbmVyID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlZmluZWQodGhpcy5fcmVtb3ZlSW5mb0JveENsb3NlTGlzdGVuZXIpKSB7XG4gICAgdGhpcy5fcmVtb3ZlSW5mb0JveENsb3NlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIGlmIChkZWZpbmVkKHRoaXMuX3Nob3VsZEFuaW1hdGVTdWJzY3JpcHRpb24pKSB7XG4gICAgdGhpcy5fc2hvdWxkQW5pbWF0ZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLl9zaG91bGRBbmltYXRlU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGRlZmluZWQodGhpcy5fY3VycmVudFRpbWVTdWJzY3JpcHRpb24pKSB7XG4gICAgdGhpcy5fY3VycmVudFRpbWVTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5fY3VycmVudFRpbWVTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVmaW5lZCh0aGlzLnZpZXdlci50aW1lbGluZSkpIHtcbiAgICB0aGlzLnZpZXdlci50aW1lbGluZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2V0dGltZVwiLCB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCwgZmFsc2UpO1xuICB9XG5cbiAgaWYgKGRlZmluZWQodGhpcy5fc2VsZWN0ZWRGZWF0dXJlU3Vic2NyaXB0aW9uKSkge1xuICAgIHRoaXMuX3NlbGVjdGVkRmVhdHVyZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEZlYXR1cmVTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVmaW5lZCh0aGlzLl9zcGxpdHRlclBvc2l0aW9uU3Vic2NyaXB0aW9uKSkge1xuICAgIHRoaXMuX3NwbGl0dGVyUG9zaXRpb25TdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5fc3BsaXR0ZXJQb3NpdGlvblN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZWZpbmVkKHRoaXMuX3Nob3dTcGxpdHRlclN1YnNjcmlwdGlvbikpIHtcbiAgICB0aGlzLl9zaG93U3BsaXR0ZXJTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuXG4gICAgdGhpcy5fc2hvd1NwbGl0dGVyU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdGhpcy52aWV3ZXIuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgdGhpcy52aWV3ZXIuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgdGhpcy52aWV3ZXIuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuX2JvdW5kTm90aWZ5UmVwYWludFJlcXVpcmVkLCBmYWxzZSk7XG4gIHRoaXMudmlld2VyLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCwgZmFsc2UpO1xuICB0aGlzLnZpZXdlci5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMuX2JvdW5kTm90aWZ5UmVwYWludFJlcXVpcmVkLCBmYWxzZSk7XG4gIHRoaXMudmlld2VyLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMuX2JvdW5kTm90aWZ5UmVwYWludFJlcXVpcmVkLCBmYWxzZSk7XG5cbiAgaWYgKGRlZmluZWQod2luZG93LlBvaW50ZXJFdmVudCkpIHtcbiAgICB0aGlzLnZpZXdlci5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuX2JvdW5kTm90aWZ5UmVwYWludFJlcXVpcmVkLCBmYWxzZSk7XG4gICAgdGhpcy52aWV3ZXIuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5fYm91bmROb3RpZnlSZXBhaW50UmVxdWlyZWQsIGZhbHNlKTtcbiAgICB0aGlzLnZpZXdlci5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuX2JvdW5kTm90aWZ5UmVwYWludFJlcXVpcmVkLCBmYWxzZSk7XG4gIH1cblxuICB0aGlzLnZpZXdlci5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl93aGVlbEV2ZW50LCB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCwgZmFsc2UpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9ib3VuZE5vdGlmeVJlcGFpbnRSZXF1aXJlZCwgZmFsc2UpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXRWaWV3ZXJSZXNvbHV0aW9uLCBmYWxzZSk7XG4gIGxvYWRXaXRoWGhyLmxvYWQgPSB0aGlzLl9vcmlnaW5hbExvYWRXaXRoWGhyO1xuICBUYXNrUHJvY2Vzc29yLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSB0aGlzLl9vcmlnaW5hbFNjaGVkdWxlVGFzaztcbiAgdGhpcy5ldmVudEhlbHBlci5yZW1vdmVBbGwoKTtcbiAgR2xvYmVPck1hcC5kaXNwb3NlQ29tbW9uTGlzdGVuZXJzKHRoaXMpO1xuICByZXR1cm4gZGVzdHJveU9iamVjdCh0aGlzKTtcbn07XG5cbkNlc2l1bS5wcm90b3R5cGUuaXNEZXN0cm95ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBjYXJ0ZXNpYW4zU2NyYXRjaCA9IG5ldyBDYXJ0ZXNpYW4zKCk7XG52YXIgZW51VG9GaXhlZFNjcmF0Y2ggPSBuZXcgTWF0cml4NCgpO1xudmFyIHNvdXRod2VzdFNjcmF0Y2ggPSBuZXcgQ2FydGVzaWFuMygpO1xudmFyIHNvdXRoZWFzdFNjcmF0Y2ggPSBuZXcgQ2FydGVzaWFuMygpO1xudmFyIG5vcnRoZWFzdFNjcmF0Y2ggPSBuZXcgQ2FydGVzaWFuMygpO1xudmFyIG5vcnRod2VzdFNjcmF0Y2ggPSBuZXcgQ2FydGVzaWFuMygpO1xudmFyIHNvdXRod2VzdENhcnRvZ3JhcGhpY1NjcmF0Y2ggPSBuZXcgQ2FydG9ncmFwaGljKCk7XG52YXIgc291dGhlYXN0Q2FydG9ncmFwaGljU2NyYXRjaCA9IG5ldyBDYXJ0b2dyYXBoaWMoKTtcbnZhciBub3J0aGVhc3RDYXJ0b2dyYXBoaWNTY3JhdGNoID0gbmV3IENhcnRvZ3JhcGhpYygpO1xudmFyIG5vcnRod2VzdENhcnRvZ3JhcGhpY1NjcmF0Y2ggPSBuZXcgQ2FydG9ncmFwaGljKCk7XG4vKipcbiAqIEdldHMgdGhlIGN1cnJlbnQgZXh0ZW50IG9mIHRoZSBjYW1lcmEuICBUaGlzIG1heSBiZSBhcHByb3hpbWF0ZSBpZiB0aGUgdmlld2VyIGRvZXMgbm90IGhhdmUgYSBzdHJpY3RseSByZWN0YW5ndWxhciB2aWV3LlxuICogQHJldHVybiB7UmVjdGFuZ2xlfSBUaGUgY3VycmVudCB2aXNpYmxlIGV4dGVudC5cbiAqL1xuXG5DZXNpdW0ucHJvdG90eXBlLmdldEN1cnJlbnRFeHRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzY2VuZSA9IHRoaXMuc2NlbmU7XG4gIHZhciBjYW1lcmEgPSBzY2VuZS5jYW1lcmE7XG4gIHZhciB3aWR0aCA9IHNjZW5lLmNhbnZhcy5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IHNjZW5lLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gIHZhciBjZW50ZXJPZlNjcmVlbiA9IG5ldyBDYXJ0ZXNpYW4yKHdpZHRoIC8gMi4wLCBoZWlnaHQgLyAyLjApO1xuICB2YXIgcGlja1JheSA9IHNjZW5lLmNhbWVyYS5nZXRQaWNrUmF5KGNlbnRlck9mU2NyZWVuKTtcbiAgdmFyIGNlbnRlciA9IHNjZW5lLmdsb2JlLnBpY2socGlja1JheSwgc2NlbmUpO1xuXG4gIGlmICghZGVmaW5lZChjZW50ZXIpKSB7XG4gICAgLy8gVE9ETzogYmluYXJ5IHNlYXJjaCB0byBmaW5kIHRoZSBob3Jpem9uIHBvaW50IGFuZCB1c2UgdGhhdCBhcyB0aGUgY2VudGVyLlxuICAgIHJldHVybiB0aGlzLnRlcnJpYS5ob21lVmlldy5yZWN0YW5nbGU7XG4gIH1cblxuICB2YXIgZWxsaXBzb2lkID0gdGhpcy5zY2VuZS5nbG9iZS5lbGxpcHNvaWQ7XG4gIHZhciBmb3Z5ID0gc2NlbmUuY2FtZXJhLmZydXN0dW0uZm92eSAqIDAuNTtcbiAgdmFyIGZvdnggPSBNYXRoLmF0YW4oTWF0aC50YW4oZm92eSkgKiBzY2VuZS5jYW1lcmEuZnJ1c3R1bS5hc3BlY3RSYXRpbyk7XG4gIHZhciBjYW1lcmFPZmZzZXQgPSBDYXJ0ZXNpYW4zLnN1YnRyYWN0KGNhbWVyYS5wb3NpdGlvbldDLCBjZW50ZXIsIGNhcnRlc2lhbjNTY3JhdGNoKTtcbiAgdmFyIGNhbWVyYUhlaWdodCA9IENhcnRlc2lhbjMubWFnbml0dWRlKGNhbWVyYU9mZnNldCk7XG4gIHZhciB4RGlzdGFuY2UgPSBjYW1lcmFIZWlnaHQgKiBNYXRoLnRhbihmb3Z4KTtcbiAgdmFyIHlEaXN0YW5jZSA9IGNhbWVyYUhlaWdodCAqIE1hdGgudGFuKGZvdnkpO1xuICB2YXIgc291dGh3ZXN0RW51ID0gbmV3IENhcnRlc2lhbjMoLXhEaXN0YW5jZSwgLXlEaXN0YW5jZSwgMC4wKTtcbiAgdmFyIHNvdXRoZWFzdEVudSA9IG5ldyBDYXJ0ZXNpYW4zKHhEaXN0YW5jZSwgLXlEaXN0YW5jZSwgMC4wKTtcbiAgdmFyIG5vcnRoZWFzdEVudSA9IG5ldyBDYXJ0ZXNpYW4zKHhEaXN0YW5jZSwgeURpc3RhbmNlLCAwLjApO1xuICB2YXIgbm9ydGh3ZXN0RW51ID0gbmV3IENhcnRlc2lhbjMoLXhEaXN0YW5jZSwgeURpc3RhbmNlLCAwLjApO1xuICB2YXIgZW51VG9GaXhlZCA9IFRyYW5zZm9ybXMuZWFzdE5vcnRoVXBUb0ZpeGVkRnJhbWUoY2VudGVyLCBlbGxpcHNvaWQsIGVudVRvRml4ZWRTY3JhdGNoKTtcbiAgdmFyIHNvdXRod2VzdCA9IE1hdHJpeDQubXVsdGlwbHlCeVBvaW50KGVudVRvRml4ZWQsIHNvdXRod2VzdEVudSwgc291dGh3ZXN0U2NyYXRjaCk7XG4gIHZhciBzb3V0aGVhc3QgPSBNYXRyaXg0Lm11bHRpcGx5QnlQb2ludChlbnVUb0ZpeGVkLCBzb3V0aGVhc3RFbnUsIHNvdXRoZWFzdFNjcmF0Y2gpO1xuICB2YXIgbm9ydGhlYXN0ID0gTWF0cml4NC5tdWx0aXBseUJ5UG9pbnQoZW51VG9GaXhlZCwgbm9ydGhlYXN0RW51LCBub3J0aGVhc3RTY3JhdGNoKTtcbiAgdmFyIG5vcnRod2VzdCA9IE1hdHJpeDQubXVsdGlwbHlCeVBvaW50KGVudVRvRml4ZWQsIG5vcnRod2VzdEVudSwgbm9ydGh3ZXN0U2NyYXRjaCk7XG4gIHZhciBzb3V0aHdlc3RDYXJ0b2dyYXBoaWMgPSBlbGxpcHNvaWQuY2FydGVzaWFuVG9DYXJ0b2dyYXBoaWMoc291dGh3ZXN0LCBzb3V0aHdlc3RDYXJ0b2dyYXBoaWNTY3JhdGNoKTtcbiAgdmFyIHNvdXRoZWFzdENhcnRvZ3JhcGhpYyA9IGVsbGlwc29pZC5jYXJ0ZXNpYW5Ub0NhcnRvZ3JhcGhpYyhzb3V0aGVhc3QsIHNvdXRoZWFzdENhcnRvZ3JhcGhpY1NjcmF0Y2gpO1xuICB2YXIgbm9ydGhlYXN0Q2FydG9ncmFwaGljID0gZWxsaXBzb2lkLmNhcnRlc2lhblRvQ2FydG9ncmFwaGljKG5vcnRoZWFzdCwgbm9ydGhlYXN0Q2FydG9ncmFwaGljU2NyYXRjaCk7XG4gIHZhciBub3J0aHdlc3RDYXJ0b2dyYXBoaWMgPSBlbGxpcHNvaWQuY2FydGVzaWFuVG9DYXJ0b2dyYXBoaWMobm9ydGh3ZXN0LCBub3J0aHdlc3RDYXJ0b2dyYXBoaWNTY3JhdGNoKTsgLy8gQWNjb3VudCBmb3IgZGF0ZS1saW5lIHdyYXBwaW5nXG5cbiAgaWYgKHNvdXRoZWFzdENhcnRvZ3JhcGhpYy5sb25naXR1ZGUgPCBzb3V0aHdlc3RDYXJ0b2dyYXBoaWMubG9uZ2l0dWRlKSB7XG4gICAgc291dGhlYXN0Q2FydG9ncmFwaGljLmxvbmdpdHVkZSArPSBDZXNpdW1NYXRoLlRXT19QSTtcbiAgfVxuXG4gIGlmIChub3J0aGVhc3RDYXJ0b2dyYXBoaWMubG9uZ2l0dWRlIDwgbm9ydGh3ZXN0Q2FydG9ncmFwaGljLmxvbmdpdHVkZSkge1xuICAgIG5vcnRoZWFzdENhcnRvZ3JhcGhpYy5sb25naXR1ZGUgKz0gQ2VzaXVtTWF0aC5UV09fUEk7XG4gIH1cblxuICB2YXIgcmVjdCA9IG5ldyBSZWN0YW5nbGUoQ2VzaXVtTWF0aC5jb252ZXJ0TG9uZ2l0dWRlUmFuZ2UoTWF0aC5taW4oc291dGh3ZXN0Q2FydG9ncmFwaGljLmxvbmdpdHVkZSwgbm9ydGh3ZXN0Q2FydG9ncmFwaGljLmxvbmdpdHVkZSkpLCBNYXRoLm1pbihzb3V0aHdlc3RDYXJ0b2dyYXBoaWMubGF0aXR1ZGUsIHNvdXRoZWFzdENhcnRvZ3JhcGhpYy5sYXRpdHVkZSksIENlc2l1bU1hdGguY29udmVydExvbmdpdHVkZVJhbmdlKE1hdGgubWF4KG5vcnRoZWFzdENhcnRvZ3JhcGhpYy5sb25naXR1ZGUsIHNvdXRoZWFzdENhcnRvZ3JhcGhpYy5sb25naXR1ZGUpKSwgTWF0aC5tYXgobm9ydGhlYXN0Q2FydG9ncmFwaGljLmxhdGl0dWRlLCBub3J0aHdlc3RDYXJ0b2dyYXBoaWMubGF0aXR1ZGUpKTtcbiAgcmVjdC5jZW50ZXIgPSBjZW50ZXI7XG4gIHJldHVybiByZWN0O1xufTtcbi8qKlxuICogR2V0cyB0aGUgY3VycmVudCBjb250YWluZXIgZWxlbWVudC5cbiAqIEByZXR1cm4ge0VsZW1lbnR9IFRoZSBjdXJyZW50IGNvbnRhaW5lciBlbGVtZW50LlxuICovXG5cblxuQ2VzaXVtLnByb3RvdHlwZS5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnZpZXdlci5jb250YWluZXI7XG59O1xuLyoqXG4gKiBab29tcyB0byBhIHNwZWNpZmllZCBjYW1lcmEgdmlldyBvciBleHRlbnQgd2l0aCBhIHNtb290aCBmbGlnaHQgYW5pbWF0aW9uLlxuICpcbiAqIEBwYXJhbSB7Q2FtZXJhVmlld3xSZWN0YW5nbGV8RGF0YVNvdXJjZXxDZXNpdW0zRFRpbGVzZXR9IHRhcmdldCBUaGUgdmlldywgZXh0ZW50LCBEYXRhU291cmNlLCBvciBDZXNpdW0zRFRpbGVzZXQgdG8gd2hpY2ggdG8gem9vbS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbZmxpZ2h0RHVyYXRpb25TZWNvbmRzPTMuMF0gVGhlIGxlbmd0aCBvZiB0aGUgZmxpZ2h0IGFuaW1hdGlvbiBpbiBzZWNvbmRzLlxuICovXG5cblxuQ2VzaXVtLnByb3RvdHlwZS56b29tVG8gPSBmdW5jdGlvbiAodGFyZ2V0LCBmbGlnaHREdXJhdGlvblNlY29uZHMpIHtcbiAgaWYgKCFkZWZpbmVkKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgRGV2ZWxvcGVyRXJyb3IoXCJ0YXJnZXQgaXMgcmVxdWlyZWQuXCIpO1xuICB9XG5cbiAgZmxpZ2h0RHVyYXRpb25TZWNvbmRzID0gZGVmYXVsdFZhbHVlKGZsaWdodER1cmF0aW9uU2Vjb25kcywgMy4wKTtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB0aGF0Lmxhc3RUYXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiB3aGVuKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIFJlY3RhbmdsZSkge1xuICAgICAgdmFyIGNhbWVyYSA9IHRoYXQuc2NlbmUuY2FtZXJhOyAvLyBXb3JrIG91dCB0aGUgZGVzdGluYXRpb24gdGhhdCB0aGUgY2FtZXJhIHdvdWxkIG5hdHVyYWxseSBmbHkgdG9cblxuICAgICAgdmFyIGRlc3RpbmF0aW9uQ2FydGVzaWFuID0gY2FtZXJhLmdldFJlY3RhbmdsZUNhbWVyYUNvb3JkaW5hdGVzKHRhcmdldCk7XG4gICAgICB2YXIgZGVzdGluYXRpb24gPSBFbGxpcHNvaWQuV0dTODQuY2FydGVzaWFuVG9DYXJ0b2dyYXBoaWMoZGVzdGluYXRpb25DYXJ0ZXNpYW4pO1xuICAgICAgdmFyIHRlcnJhaW5Qcm92aWRlciA9IHRoYXQuc2NlbmUuZ2xvYmUudGVycmFpblByb3ZpZGVyO1xuICAgICAgdmFyIGxldmVsID0gNjsgLy8gQSBzdWZmaWNpZW50bHkgY29hcnNlIHRpbGUgbGV2ZWwgdGhhdCBzdGlsbCBoYXMgYXBwcm94aW1hdGVseSBhY2N1cmF0ZSBoZWlnaHRcblxuICAgICAgdmFyIHBvc2l0aW9ucyA9IFtSZWN0YW5nbGUuY2VudGVyKHRhcmdldCldOyAvLyBQZXJmb3JtIGFuIGVsZXZhdGlvbiBxdWVyeSBhdCB0aGUgY2VudHJlIG9mIHRoZSByZWN0YW5nbGVcblxuICAgICAgcmV0dXJuIHNhbXBsZVRlcnJhaW4odGVycmFpblByb3ZpZGVyLCBsZXZlbCwgcG9zaXRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgIGlmICh0aGF0Lmxhc3RUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBBZGQgdGVycmFpbiBlbGV2YXRpb24gdG8gY2FtZXJhIGFsdGl0dWRlXG5cblxuICAgICAgICB2YXIgZmluYWxEZXN0aW5hdGlvbkNhcnRvZ3JhcGhpYyA9IHtcbiAgICAgICAgICBsb25naXR1ZGU6IGRlc3RpbmF0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBsYXRpdHVkZTogZGVzdGluYXRpb24ubGF0aXR1ZGUsXG4gICAgICAgICAgaGVpZ2h0OiBkZXN0aW5hdGlvbi5oZWlnaHQgKyByZXN1bHRzWzBdLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZmluYWxEZXN0aW5hdGlvbiA9IEVsbGlwc29pZC5XR1M4NC5jYXJ0b2dyYXBoaWNUb0NhcnRlc2lhbihmaW5hbERlc3RpbmF0aW9uQ2FydG9ncmFwaGljKTtcbiAgICAgICAgY2FtZXJhLmZseVRvKHtcbiAgICAgICAgICBkdXJhdGlvbjogZmxpZ2h0RHVyYXRpb25TZWNvbmRzLFxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBmaW5hbERlc3RpbmF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkZWZpbmVkKHRhcmdldC5lbnRpdGllcykpIHtcbiAgICAgIC8vIFpvb21pbmcgdG8gYSBEYXRhU291cmNlXG4gICAgICBpZiAodGFyZ2V0LmlzTG9hZGluZyAmJiBkZWZpbmVkKHRhcmdldC5sb2FkaW5nRXZlbnQpKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IHdoZW4uZGVmZXIoKTtcbiAgICAgICAgdmFyIHJlbW92ZUV2ZW50ID0gdGFyZ2V0LmxvYWRpbmdFdmVudC5hZGRFdmVudExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZW1vdmVFdmVudCgpO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGF0Lmxhc3RUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB6b29tVG9EYXRhU291cmNlKHRoYXQsIHRhcmdldCwgZmxpZ2h0RHVyYXRpb25TZWNvbmRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB6b29tVG9EYXRhU291cmNlKHRoYXQsIHRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChkZWZpbmVkKHRhcmdldC5yZWFkeVByb21pc2UpKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnJlYWR5UHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRlZmluZWQodGFyZ2V0LmJvdW5kaW5nU3BoZXJlKSAmJiB0aGF0Lmxhc3RUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgIHpvb21Ub0JvdW5kaW5nU3BoZXJlKHRoYXQsIHRhcmdldCwgZmxpZ2h0RHVyYXRpb25TZWNvbmRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkZWZpbmVkKHRhcmdldC5ib3VuZGluZ1NwaGVyZSkpIHtcbiAgICAgIHJldHVybiB6b29tVG9Cb3VuZGluZ1NwaGVyZSh0aGF0LCB0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAoZGVmaW5lZCh0YXJnZXQucG9zaXRpb24pKSB7XG4gICAgICB0aGF0LnNjZW5lLmNhbWVyYS5mbHlUbyh7XG4gICAgICAgIGR1cmF0aW9uOiBmbGlnaHREdXJhdGlvblNlY29uZHMsXG4gICAgICAgIGRlc3RpbmF0aW9uOiB0YXJnZXQucG9zaXRpb24sXG4gICAgICAgIG9yaWVudGF0aW9uOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiB0YXJnZXQuZGlyZWN0aW9uLFxuICAgICAgICAgIHVwOiB0YXJnZXQudXBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuc2NlbmUuY2FtZXJhLmZseVRvKHtcbiAgICAgICAgZHVyYXRpb246IGZsaWdodER1cmF0aW9uU2Vjb25kcyxcbiAgICAgICAgZGVzdGluYXRpb246IHRhcmdldC5yZWN0YW5nbGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgdGhhdC5ub3RpZnlSZXBhaW50UmVxdWlyZWQoKTtcbiAgfSk7XG59O1xuXG52YXIgYm91bmRpbmdTcGhlcmVTY3JhdGNoID0gbmV3IEJvdW5kaW5nU3BoZXJlKCk7XG5cbmZ1bmN0aW9uIHpvb21Ub0RhdGFTb3VyY2UoY2VzaXVtLCB0YXJnZXQsIGZsaWdodER1cmF0aW9uU2Vjb25kcykge1xuICByZXR1cm4gcG9sbFRvUHJvbWlzZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRhdGFTb3VyY2VEaXNwbGF5ID0gY2VzaXVtLmRhdGFTb3VyY2VEaXNwbGF5O1xuICAgIHZhciBlbnRpdGllcyA9IHRhcmdldC5lbnRpdGllcy52YWx1ZXM7XG4gICAgdmFyIGJvdW5kaW5nU3BoZXJlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVudGl0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgc3RhdGUgPSBCb3VuZGluZ1NwaGVyZVN0YXRlLlBFTkRJTkc7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXRlID0gZGF0YVNvdXJjZURpc3BsYXkuZ2V0Qm91bmRpbmdTcGhlcmUoZW50aXRpZXNbaV0sIGZhbHNlLCBib3VuZGluZ1NwaGVyZVNjcmF0Y2gpO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgaWYgKHN0YXRlID09PSBCb3VuZGluZ1NwaGVyZVN0YXRlLlBFTkRJTkcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZSAhPT0gQm91bmRpbmdTcGhlcmVTdGF0ZS5GQUlMRUQpIHtcbiAgICAgICAgYm91bmRpbmdTcGhlcmVzLnB1c2goQm91bmRpbmdTcGhlcmUuY2xvbmUoYm91bmRpbmdTcGhlcmVTY3JhdGNoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJvdW5kaW5nU3BoZXJlID0gQm91bmRpbmdTcGhlcmUuZnJvbUJvdW5kaW5nU3BoZXJlcyhib3VuZGluZ1NwaGVyZXMpO1xuICAgIGNlc2l1bS5zY2VuZS5jYW1lcmEuZmx5VG9Cb3VuZGluZ1NwaGVyZShib3VuZGluZ1NwaGVyZSwge1xuICAgICAgZHVyYXRpb246IGZsaWdodER1cmF0aW9uU2Vjb25kc1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9LCB7XG4gICAgcG9sbEludGVydmFsOiAxMDAsXG4gICAgdGltZW91dDogNTAwMFxuICB9KTtcbn1cblxuZnVuY3Rpb24gem9vbVRvQm91bmRpbmdTcGhlcmUoY2VzaXVtLCB0YXJnZXQsIGZsaWdodER1cmF0aW9uU2Vjb25kcykge1xuICB2YXIgYm91bmRpbmdTcGhlcmUgPSB0YXJnZXQuYm91bmRpbmdTcGhlcmU7XG4gIHZhciBtb2RlbE1hdHJpeCA9IHRhcmdldC5tb2RlbE1hdHJpeDtcblxuICBpZiAobW9kZWxNYXRyaXgpIHtcbiAgICBib3VuZGluZ1NwaGVyZSA9IEJvdW5kaW5nU3BoZXJlLnRyYW5zZm9ybShib3VuZGluZ1NwaGVyZSwgbW9kZWxNYXRyaXgpO1xuICB9XG5cbiAgY2VzaXVtLnNjZW5lLmNhbWVyYS5mbHlUb0JvdW5kaW5nU3BoZXJlKGJvdW5kaW5nU3BoZXJlLCB7XG4gICAgb2Zmc2V0OiBuZXcgSGVhZGluZ1BpdGNoUmFuZ2UoMC4wLCAtMC41LCBib3VuZGluZ1NwaGVyZS5yYWRpdXMpLFxuICAgIGR1cmF0aW9uOiBmbGlnaHREdXJhdGlvblNlY29uZHNcbiAgfSk7XG59XG4vKipcbiAqIENhcHR1cmVzIGEgc2NyZWVuc2hvdCBvZiB0aGUgbWFwLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBkYXRhIFVSTCB3aGVuIHRoZSBzY3JlZW5zaG90IGlzIHJlYWR5LlxuICovXG5cblxuQ2VzaXVtLnByb3RvdHlwZS5jYXB0dXJlU2NyZWVuc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlZmVycmVkID0gd2hlbi5kZWZlcigpO1xuICB2YXIgcmVtb3ZlQ2FsbGJhY2sgPSB0aGlzLnNjZW5lLnBvc3RSZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlQ2FsbGJhY2soKTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgY2VzaXVtQ2FudmFzID0gdGhpcy5zY2VuZS5jYW52YXM7IC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBzcGxpdHRlciwgZHJhdyB0aGUgc3BsaXQgcG9zaXRpb24gYXMgYSB2ZXJ0aWNhbCB3aGl0ZSBsaW5lLlxuXG4gICAgICB2YXIgY2FudmFzID0gY2VzaXVtQ2FudmFzO1xuXG4gICAgICBpZiAodGhpcy50ZXJyaWEuc2hvd1NwbGl0dGVyKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNlc2l1bUNhbnZhcy53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNlc2l1bUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoY2VzaXVtQ2FudmFzLCAwLCAwKTtcbiAgICAgICAgdmFyIHggPSB0aGlzLnRlcnJpYS5zcGxpdFBvc2l0aW9uICogY2VzaXVtQ2FudmFzLndpZHRoO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy50ZXJyaWEuYmFzZU1hcENvbnRyYXN0Q29sb3I7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKHgsIDApO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyh4LCBjZXNpdW1DYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgIH1cblxuICAgICAgZGVmZXJyZWQucmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgdGhpcy5zY2VuZS5yZW5kZXIodGhpcy50ZXJyaWEuY2xvY2suY3VycmVudFRpbWUpO1xuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG4vKipcbiAqIE5vdGlmaWVzIHRoZSB2aWV3ZXIgdGhhdCBhIHJlcGFpbnQgaXMgcmVxdWlyZWQuXG4gKi9cblxuXG5DZXNpdW0ucHJvdG90eXBlLm5vdGlmeVJlcGFpbnRSZXF1aXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMudmVyYm9zZVJlbmRlcmluZyAmJiAhdGhpcy52aWV3ZXIudXNlRGVmYXVsdFJlbmRlckxvb3ApIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0aW5nIHJlbmRlcmluZyBAIFwiICsgZ2V0VGltZXN0YW1wKCkpO1xuICB9XG5cbiAgdGhpcy5fbGFzdENhbWVyYU1vdmVUaW1lID0gZ2V0VGltZXN0YW1wKCk7XG4gIHRoaXMudmlld2VyLnVzZURlZmF1bHRSZW5kZXJMb29wID0gdHJ1ZTtcbn07XG4vKipcbiAqIENvbXB1dGVzIHRoZSBzY3JlZW4gcG9zaXRpb24gb2YgYSBnaXZlbiB3b3JsZCBwb3NpdGlvbi5cbiAqIEBwYXJhbSAge0NhcnRlc2lhbjN9IHBvc2l0aW9uIFRoZSB3b3JsZCBwb3NpdGlvbiBpbiBFYXJ0aC1jZW50ZXJlZCBGaXhlZCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSAge0NhcnRlc2lhbjJ9IFtyZXN1bHRdIFRoZSBpbnN0YW5jZSB0byB3aGljaCB0byBjb3B5IHRoZSByZXN1bHQuXG4gKiBAcmV0dXJuIHtDYXJ0ZXNpYW4yfSBUaGUgc2NyZWVuIHBvc2l0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlIHBvc2l0aW9uIGlzIG5vdCBvbiB0aGUgc2NyZWVuLlxuICovXG5cblxuQ2VzaXVtLnByb3RvdHlwZS5jb21wdXRlUG9zaXRpb25PblNjcmVlbiA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgcmVzdWx0KSB7XG4gIHJldHVybiBTY2VuZVRyYW5zZm9ybXMud2dzODRUb1dpbmRvd0Nvb3JkaW5hdGVzKHRoaXMuc2NlbmUsIHBvc2l0aW9uLCByZXN1bHQpO1xufTtcbi8qKlxuICogQWRkcyBhbiBhdHRyaWJ1dGlvbiB0byB0aGUgZ2xvYmUuXG4gKiBAcGFyYW0ge0NyZWRpdH0gYXR0cmlidXRpb24gVGhlIGF0dHJpYnV0aW9uIHRvIGFkZC5cbiAqL1xuXG5cbkNlc2l1bS5wcm90b3R5cGUuYWRkQXR0cmlidXRpb24gPSBmdW5jdGlvbiAoYXR0cmlidXRpb24pIHtcbiAgaWYgKGF0dHJpYnV0aW9uKSB7XG4gICAgdGhpcy5zY2VuZS5mcmFtZVN0YXRlLmNyZWRpdERpc3BsYXkuYWRkRGVmYXVsdENyZWRpdChhdHRyaWJ1dGlvbik7XG4gIH1cbn07XG4vKipcbiAqIFJlbW92ZXMgYW4gYXR0cmlidXRpb24gZnJvbSB0aGUgZ2xvYmUuXG4gKiBAcGFyYW0ge0NyZWRpdH0gYXR0cmlidXRpb24gVGhlIGF0dHJpYnV0aW9uIHRvIHJlbW92ZS5cbiAqL1xuXG5cbkNlc2l1bS5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRpb24gPSBmdW5jdGlvbiAoYXR0cmlidXRpb24pIHtcbiAgaWYgKGF0dHJpYnV0aW9uKSB7XG4gICAgdGhpcy5zY2VuZS5mcmFtZVN0YXRlLmNyZWRpdERpc3BsYXkucmVtb3ZlRGVmYXVsdENyZWRpdChhdHRyaWJ1dGlvbik7XG4gIH1cbn07XG4vKipcbiAqIEdldHMgYWxsIGF0dHJpYnV0aW9uIGN1cnJlbnRseSBhY3RpdmUgb24gdGhlIGdsb2JlIG9yIG1hcC5cbiAqIEByZXR1cm5zIHtTdHJpbmdbXX0gVGhlIGxpc3Qgb2YgY3VycmVudCBhdHRyaWJ1dGlvbnMsIGFzIEhUTUwgc3RyaW5ncy5cbiAqL1xuXG5cbkNlc2l1bS5wcm90b3R5cGUuZ2V0QWxsQXR0cmlidXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjcmVkaXRzID0gdGhpcy5zY2VuZS5mcmFtZVN0YXRlLmNyZWRpdERpc3BsYXkuX2N1cnJlbnRGcmFtZUNyZWRpdHMuc2NyZWVuQ3JlZGl0cy52YWx1ZXMuY29uY2F0KHRoaXMuc2NlbmUuZnJhbWVTdGF0ZS5jcmVkaXREaXNwbGF5Ll9jdXJyZW50RnJhbWVDcmVkaXRzLmxpZ2h0Ym94Q3JlZGl0cy52YWx1ZXMpO1xuXG4gIHJldHVybiBjcmVkaXRzLm1hcChmdW5jdGlvbiAoY3JlZGl0KSB7XG4gICAgcmV0dXJuIGNyZWRpdC5odG1sO1xuICB9KTtcbn07XG4vKipcbiAqIFVwZGF0ZXMgdGhlIG9yZGVyIG9mIGxheWVycywgbW92aW5nIGxheWVycyB3aGVyZSB7QGxpbmsgQ2F0YWxvZ0l0ZW0ja2VlcE9uVG9wfSBpcyB0cnVlIHRvIHRoZSB0b3AuXG4gKi9cblxuXG5DZXNpdW0ucHJvdG90eXBlLnVwZGF0ZUxheWVyT3JkZXJUb0tlZXBPblRvcCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbW92ZSBhbHdheXNPblRvcCBsYXllcnMgdG8gdGhlIHRvcFxuICB2YXIgaXRlbXMgPSB0aGlzLnRlcnJpYS5ub3dWaWV3aW5nLml0ZW1zO1xuICB2YXIgc2NlbmUgPSB0aGlzLnNjZW5lO1xuXG4gIGZvciAodmFyIGwgPSBpdGVtcy5sZW5ndGggLSAxOyBsID49IDA7IGwtLSkge1xuICAgIGlmIChpdGVtc1tsXS5pbWFnZXJ5TGF5ZXIgJiYgaXRlbXNbbF0ua2VlcE9uVG9wKSB7XG4gICAgICBzY2VuZS5pbWFnZXJ5TGF5ZXJzLnJhaXNlVG9Ub3AoaXRlbXNbbF0uaW1hZ2VyeUxheWVyKTtcbiAgICB9XG4gIH1cbn07XG5cbkNlc2l1bS5wcm90b3R5cGUudXBkYXRlTGF5ZXJPcmRlckFmdGVyUmVvcmRlciA9IGZ1bmN0aW9uICgpIHsvLyBiZWNhdXNlIHRoaXMgQ2VzaXVtIG1vZGVsIGRvZXMgdGhlIHJlb3JkZXJpbmcgdmlhIHJhaXNlIGFuZCBsb3dlciwgbm8gYWN0aW9uIG5lZWRlZC5cbn07IC8vIHVzZWZ1bCBmb3IgY291bnRpbmcgdGhlIG51bWJlciBvZiBpdGVtcyBpbiBjb21wb3NpdGUgYW5kIG5vbi1jb21wb3NpdGUgaXRlbXNcblxuXG5mdW5jdGlvbiBjb3VudE51bWJlck9mU3ViSXRlbXMoaXRlbSkge1xuICBpZiAoZGVmaW5lZChpdGVtLml0ZW1zKSkge1xuICAgIHJldHVybiBpdGVtLml0ZW1zLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuLyoqXG4gKiBSYWlzZSBhbiBpdGVtJ3MgbGV2ZWwgaW4gdGhlIHZpZXdlclxuICogVGhpcyBkb2VzIG5vdCBjaGVjayB0aGF0IGluZGV4IGlzIHZhbGlkXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIHJhaXNlXG4gKi9cblxuXG5DZXNpdW0ucHJvdG90eXBlLnJhaXNlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIHZhciBpdGVtcyA9IHRoaXMudGVycmlhLm5vd1ZpZXdpbmcuaXRlbXM7XG4gIHZhciBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICB2YXIgaXRlbUFib3ZlID0gaXRlbXNbaW5kZXggLSAxXTtcblxuICBpZiAoIWRlZmluZWQoaXRlbUFib3ZlLml0ZW1zKSAmJiAhZGVmaW5lZChpdGVtQWJvdmUuaW1hZ2VyeUxheWVyKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBCb3RoIGl0ZW0gYW5kIGl0ZW1BYm92ZSBtYXkgZWl0aGVyIGhhdmUgYSBzaW5nbGUgaW1hZ2VyeUxheWVyLCBvciBiZSBhIGNvbXBvc2l0ZSBpdGVtXG4gIC8vIENvbXBvc2l0ZSBpdGVtcyBoYXZlIGFuIGl0ZW1zIGFycmF5IG9mIGZ1cnRoZXIgaXRlbXMuXG4gIC8vIERlZmluZSBuIGFzIHRoZSBudW1iZXIgb2Ygc3ViaXRlbXMgaW4gSXRlbUFib3ZlICgxIGV4Y2VwdCBmb3IgY29tcG9zaXRlcylcbiAgLy8gaWYgaXRlbSBpcyBhIGNvbXBvc2l0ZSwgdGhlbiByYWlzZSBlYWNoIHN1Yml0ZW0gaW4gaXRlbSBuIHRpbWVzLFxuICAvLyBzdGFydGluZyB3aXRoIHRoZSBvbmUgYXQgdGhlIHRvcCAtIHdoaWNoIGlzIHRoZSBsYXN0IG9uZSBpbiB0aGUgbGlzdFxuICAvLyBpZiBpdGVtIGlzIG5vdCBhIGNvbXBvc2l0ZSwganVzdCByYWlzZSB0aGUgaXRlbSBuIHRpbWVzIGRpcmVjdGx5LlxuXG5cbiAgdmFyIG4gPSBjb3VudE51bWJlck9mU3ViSXRlbXMoaXRlbUFib3ZlKTtcbiAgdmFyIGksIGosIHN1Ykl0ZW07XG5cbiAgaWYgKGRlZmluZWQoaXRlbS5pdGVtcykpIHtcbiAgICBmb3IgKGkgPSBpdGVtLml0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBzdWJJdGVtID0gaXRlbS5pdGVtc1tpXTtcblxuICAgICAgaWYgKGRlZmluZWQoc3ViSXRlbS5pbWFnZXJ5TGF5ZXIpKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyArK2opIHtcbiAgICAgICAgICB0aGlzLnNjZW5lLmltYWdlcnlMYXllcnMucmFpc2Uoc3ViSXRlbS5pbWFnZXJ5TGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFkZWZpbmVkKGl0ZW0uaW1hZ2VyeUxheWVyKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAoaiA9IDA7IGogPCBuOyArK2opIHtcbiAgICB0aGlzLnNjZW5lLmltYWdlcnlMYXllcnMucmFpc2UoaXRlbS5pbWFnZXJ5TGF5ZXIpO1xuICB9XG59O1xuLyoqXG4gKiBMb3dlciBhbiBpdGVtJ3MgbGV2ZWwgaW4gdGhlIHZpZXdlclxuICogVGhpcyBkb2VzIG5vdCBjaGVjayB0aGF0IGluZGV4IGlzIHZhbGlkXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIGxvd2VyXG4gKi9cblxuXG5DZXNpdW0ucHJvdG90eXBlLmxvd2VyID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIHZhciBpdGVtcyA9IHRoaXMudGVycmlhLm5vd1ZpZXdpbmcuaXRlbXM7XG4gIHZhciBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICB2YXIgaXRlbUJlbG93ID0gaXRlbXNbaW5kZXggKyAxXTtcblxuICBpZiAoIWRlZmluZWQoaXRlbUJlbG93Lml0ZW1zKSAmJiAhZGVmaW5lZChpdGVtQmVsb3cuaW1hZ2VyeUxheWVyKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBzYW1lIGNvbnNpZGVyYXRpb25zIGFzIGFib3ZlLCBidXQgbG93ZXIgY29tcG9zaXRlIHN1Yml0ZW1zIHN0YXJ0aW5nIGF0IHRoZSBvdGhlciBlbmQgb2YgdGhlIGxpc3RcblxuXG4gIHZhciBuID0gY291bnROdW1iZXJPZlN1Ykl0ZW1zKGl0ZW1CZWxvdyk7XG4gIHZhciBpLCBqLCBzdWJJdGVtO1xuXG4gIGlmIChkZWZpbmVkKGl0ZW0uaXRlbXMpKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uaXRlbXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHN1Ykl0ZW0gPSBpdGVtLml0ZW1zW2ldO1xuXG4gICAgICBpZiAoZGVmaW5lZChzdWJJdGVtLmltYWdlcnlMYXllcikpIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG47ICsraikge1xuICAgICAgICAgIHRoaXMuc2NlbmUuaW1hZ2VyeUxheWVycy5sb3dlcihzdWJJdGVtLmltYWdlcnlMYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIWRlZmluZWQoaXRlbS5pbWFnZXJ5TGF5ZXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChqID0gMDsgaiA8IG47ICsraikge1xuICAgIHRoaXMuc2NlbmUuaW1hZ2VyeUxheWVycy5sb3dlcihpdGVtLmltYWdlcnlMYXllcik7XG4gIH1cbn07XG4vKipcbiAqIExvd2VycyB0aGlzIGltYWdlcnkgbGF5ZXIgdG8gdGhlIGJvdHRvbSwgdW5kZXJuZWF0aCBhbGwgb3RoZXIgbGF5ZXJzLiAgSWYgdGhpcyBpdGVtIGlzIG5vdCBlbmFibGVkIG9yIG5vdCBzaG93bixcbiAqIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy5cbiAqIEBwYXJhbSB7Q2F0YWxvZ0l0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gbG93ZXIgdG8gdGhlIGJvdHRvbSAodXN1YWxseSBhIGJhc2VtYXApXG4gKi9cblxuXG5DZXNpdW0ucHJvdG90eXBlLmxvd2VyVG9Cb3R0b20gPSBmdW5jdGlvbiAoaXRlbSkge1xuICBpZiAoZGVmaW5lZChpdGVtLml0ZW1zKSkge1xuICAgIC8vIHRoZSBmcm9udCBpdGVtIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAgLy8gc28gdG8gcHJlc2VydmUgb3JkZXIgb2YgYW55IHN1Yml0ZW1zLCBzZW5kIGFueSBzdWJpdGVtcyB0byB0aGUgYm90dG9tIGluIG9yZGVyIGZyb20gdGhlIGZyb250XG4gICAgZm9yICh2YXIgaSA9IGl0ZW0uaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHZhciBzdWJJdGVtID0gaXRlbS5pdGVtc1tpXTtcbiAgICAgIHRoaXMubG93ZXJUb0JvdHRvbShzdWJJdGVtKTsgLy8gcmVjdXJzaXZlXG4gICAgfVxuICB9XG5cbiAgaWYgKCFkZWZpbmVkKGl0ZW0uX2ltYWdlcnlMYXllcikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnRlcnJpYS5jZXNpdW0uc2NlbmUuaW1hZ2VyeUxheWVycy5sb3dlclRvQm90dG9tKGl0ZW0uX2ltYWdlcnlMYXllcik7XG59O1xuXG5DZXNpdW0ucHJvdG90eXBlLmFkanVzdERpc2NsYWltZXIgPSBmdW5jdGlvbiAoKSB7fTtcbi8qKlxuICogUGlja3MgZmVhdHVyZXMgYmFzZWQgb2ZmIGEgbGF0aXR1ZGUsIGxvbmdpdHVkZSBhbmQgKG9wdGlvbmFsbHkpIGhlaWdodC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBsYXRsbmcgVGhlIHBvc2l0aW9uIG9uIHRoZSBlYXJ0aCB0byBwaWNrLlxuICogQHBhcmFtIHtPYmplY3R9IGltYWdlcnlMYXllckNvb3JkcyBBIG1hcCBvZiBpbWFnZXJ5IHByb3ZpZGVyIHVybHMgdG8gdGhlIGNvb3JkcyB1c2VkIHRvIGdldCBmZWF0dXJlcyBmb3IgdGhvc2UgaW1hZ2VyeVxuICogICAgIHByb3ZpZGVycyAtIGkuZS4geCwgeSwgbGV2ZWxcbiAqIEBwYXJhbSBleGlzdGluZ0ZlYXR1cmVzIEFuIG9wdGlvbmFsIGxpc3Qgb2YgZXhpc3RpbmcgZmVhdHVyZXMgdG8gY29uY2F0ZW5hdGUgdGhlIG9uZXMgZm91bmQgZnJvbSBhc3luY2hyb25vdXMgcGlja2luZyB0by5cbiAqL1xuXG5cbkNlc2l1bS5wcm90b3R5cGUucGlja0Zyb21Mb2NhdGlvbiA9IGZ1bmN0aW9uIChsYXRsbmcsIGltYWdlcnlMYXllckNvb3JkcywgZXhpc3RpbmdGZWF0dXJlcykge1xuICB2YXIgcGlja1Bvc2l0aW9uID0gdGhpcy5zY2VuZS5nbG9iZS5lbGxpcHNvaWQuY2FydG9ncmFwaGljVG9DYXJ0ZXNpYW4oQ2FydG9ncmFwaGljLmZyb21EZWdyZWVzKGxhdGxuZy5sbmcsIGxhdGxuZy5sYXQsIGxhdGxuZy5oZWlnaHQpKTtcbiAgdmFyIHBpY2tQb3NpdGlvbkNhcnRvZ3JhcGhpYyA9IEVsbGlwc29pZC5XR1M4NC5jYXJ0ZXNpYW5Ub0NhcnRvZ3JhcGhpYyhwaWNrUG9zaXRpb24pO1xuICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgdmFyIGltYWdlcnlMYXllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gdGhpcy5zY2VuZS5pbWFnZXJ5TGF5ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGltYWdlcnlMYXllciA9IHRoaXMuc2NlbmUuaW1hZ2VyeUxheWVycy5nZXQoaSk7XG4gICAgdmFyIGltYWdlcnlQcm92aWRlciA9IGltYWdlcnlMYXllci5faW1hZ2VyeVByb3ZpZGVyO1xuXG4gICAgaWYgKGltYWdlcnlQcm92aWRlci51cmwgJiYgaW1hZ2VyeUxheWVyQ29vcmRzW2ltYWdlcnlQcm92aWRlci51cmxdKSB7XG4gICAgICB2YXIgY29vcmRzID0gaW1hZ2VyeUxheWVyQ29vcmRzW2ltYWdlcnlQcm92aWRlci51cmxdO1xuICAgICAgcHJvbWlzZXMucHVzaChpbWFnZXJ5UHJvdmlkZXIucGlja0ZlYXR1cmVzKGNvb3Jkcy54LCBjb29yZHMueSwgY29vcmRzLmxldmVsLCBwaWNrUG9zaXRpb25DYXJ0b2dyYXBoaWMubG9uZ2l0dWRlLCBwaWNrUG9zaXRpb25DYXJ0b2dyYXBoaWMubGF0aXR1ZGUpKTtcbiAgICAgIGltYWdlcnlMYXllcnMucHVzaChpbWFnZXJ5TGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSB0aGlzLl9idWlsZFBpY2tlZEZlYXR1cmVzKGltYWdlcnlMYXllckNvb3JkcywgcGlja1Bvc2l0aW9uLCBleGlzdGluZ0ZlYXR1cmVzLCBwcm9taXNlcywgaW1hZ2VyeUxheWVycywgcGlja1Bvc2l0aW9uQ2FydG9ncmFwaGljLmhlaWdodCk7XG5cbiAgdmFyIG1hcEludGVyYWN0aW9uTW9kZVN0YWNrID0gdGhpcy50ZXJyaWEubWFwSW50ZXJhY3Rpb25Nb2RlU3RhY2s7XG5cbiAgaWYgKGRlZmluZWQobWFwSW50ZXJhY3Rpb25Nb2RlU3RhY2spICYmIG1hcEludGVyYWN0aW9uTW9kZVN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICBtYXBJbnRlcmFjdGlvbk1vZGVTdGFja1ttYXBJbnRlcmFjdGlvbk1vZGVTdGFjay5sZW5ndGggLSAxXS5waWNrZWRGZWF0dXJlcyA9IHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnRlcnJpYS5waWNrZWRGZWF0dXJlcyA9IHJlc3VsdDtcbiAgfVxufTtcbi8qKlxuICogUGlja3MgZmVhdHVyZXMgYmFzZWQgb24gY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gdGhlIENlc2l1bSB3aW5kb3cuIFdpbGwgZHJhdyBhIHJheSBmcm9tIHRoZSBjYW1lcmEgdGhyb3VnaCB0aGUgcG9pbnRcbiAqIHNwZWNpZmllZCBhbmQgc2V0IHRlcnJpYS5waWNrZWRGZWF0dXJlcyBiYXNlZCBvbiB0aGlzLlxuICpcbiAqIEBwYXJhbSB7Q2FydGVzaWFuM30gc2NyZWVuUG9zaXRpb24gVGhlIHBvc2l0aW9uIG9uIHRoZSBzY3JlZW4uXG4gKi9cblxuXG5DZXNpdW0ucHJvdG90eXBlLnBpY2tGcm9tU2NyZWVuUG9zaXRpb24gPSBmdW5jdGlvbiAoc2NyZWVuUG9zaXRpb24pIHtcbiAgdmFyIHBpY2tSYXkgPSB0aGlzLnNjZW5lLmNhbWVyYS5nZXRQaWNrUmF5KHNjcmVlblBvc2l0aW9uKTtcbiAgdmFyIHBpY2tQb3NpdGlvbiA9IHRoaXMuc2NlbmUuZ2xvYmUucGljayhwaWNrUmF5LCB0aGlzLnNjZW5lKTtcbiAgdmFyIHBpY2tQb3NpdGlvbkNhcnRvZ3JhcGhpYyA9IEVsbGlwc29pZC5XR1M4NC5jYXJ0ZXNpYW5Ub0NhcnRvZ3JhcGhpYyhwaWNrUG9zaXRpb24pO1xuICB2YXIgdmVjdG9yRmVhdHVyZXMgPSB0aGlzLnBpY2tWZWN0b3JGZWF0dXJlcyhzY3JlZW5Qb3NpdGlvbik7XG5cbiAgdmFyIHByb3ZpZGVyQ29vcmRzID0gdGhpcy5fYXR0YWNoUHJvdmlkZXJDb29yZEhvb2tzKCk7XG5cbiAgdmFyIHBpY2tSYXN0ZXJQcm9taXNlID0gdGhpcy5zY2VuZS5pbWFnZXJ5TGF5ZXJzLnBpY2tJbWFnZXJ5TGF5ZXJGZWF0dXJlcyhwaWNrUmF5LCB0aGlzLnNjZW5lKTtcblxuICB2YXIgcmVzdWx0ID0gdGhpcy5fYnVpbGRQaWNrZWRGZWF0dXJlcyhwcm92aWRlckNvb3JkcywgcGlja1Bvc2l0aW9uLCB2ZWN0b3JGZWF0dXJlcywgW3BpY2tSYXN0ZXJQcm9taXNlXSwgdW5kZWZpbmVkLCBwaWNrUG9zaXRpb25DYXJ0b2dyYXBoaWMuaGVpZ2h0KTtcblxuICB2YXIgbWFwSW50ZXJhY3Rpb25Nb2RlU3RhY2sgPSB0aGlzLnRlcnJpYS5tYXBJbnRlcmFjdGlvbk1vZGVTdGFjaztcblxuICBpZiAoZGVmaW5lZChtYXBJbnRlcmFjdGlvbk1vZGVTdGFjaykgJiYgbWFwSW50ZXJhY3Rpb25Nb2RlU3RhY2subGVuZ3RoID4gMCkge1xuICAgIG1hcEludGVyYWN0aW9uTW9kZVN0YWNrW21hcEludGVyYWN0aW9uTW9kZVN0YWNrLmxlbmd0aCAtIDFdLnBpY2tlZEZlYXR1cmVzID0gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRoaXMudGVycmlhLnBpY2tlZEZlYXR1cmVzID0gcmVzdWx0O1xuICB9XG59O1xuLyoqXG4gKiBQaWNrcyBhbGwgKnZlY3RvciogZmVhdHVyZXMgKGUuZy4gR2VvSlNPTikgc2hvd24gYXQgYSBjZXJ0YWluIHBvc2l0aW9uIG9uIHRoZSBzY3JlZW4sIGlnbm9yaW5nIHJhc3RlciBmZWF0dXJlc1xuICogKGUuZy4gV0ZTKS4gQmVjYXVzZSBhbGwgdmVjdG9yIGZlYXR1cmVzIGFyZSBhbHJlYWR5IGluIG1lbW9yeSwgdGhpcyBpcyBzeW5jaHJvbm91cy5cbiAqXG4gKiBAcGFyYW0ge0NhcnRlc2lhbjJ9IHNjcmVlblBvc2l0aW9uIHBvc2l0aW9uIG9uIHRoZSBzY3JlZW4gdG8gbG9vayBmb3IgZmVhdHVyZXNcbiAqIEByZXR1cm5zIHtGZWF0dXJlW119IFRoZSBmZWF0dXJlcyBmb3VuZC5cbiAqL1xuXG5cbkNlc2l1bS5wcm90b3R5cGUucGlja1ZlY3RvckZlYXR1cmVzID0gZnVuY3Rpb24gKHNjcmVlblBvc2l0aW9uKSB7XG4gIC8vIFBpY2sgdmVjdG9yIGZlYXR1cmVzXG4gIHZhciB2ZWN0b3JGZWF0dXJlcyA9IFtdO1xuICB2YXIgcGlja2VkTGlzdCA9IHRoaXMuc2NlbmUuZHJpbGxQaWNrKHNjcmVlblBvc2l0aW9uKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBpY2tlZExpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGlja2VkID0gcGlja2VkTGlzdFtpXTtcbiAgICB2YXIgaWQgPSBwaWNrZWQuaWQ7XG5cbiAgICBpZiAoaWQgJiYgaWQuZW50aXR5Q29sbGVjdGlvbiAmJiBpZC5lbnRpdHlDb2xsZWN0aW9uLm93bmVyICYmIGlkLmVudGl0eUNvbGxlY3Rpb24ub3duZXIubmFtZSA9PT0gR2xvYmVPck1hcC5fZmVhdHVyZUhpZ2hsaWdodE5hbWUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghZGVmaW5lZChpZCkgJiYgZGVmaW5lZChwaWNrZWQucHJpbWl0aXZlKSkge1xuICAgICAgaWQgPSBwaWNrZWQucHJpbWl0aXZlLmlkO1xuICAgIH1cblxuICAgIGlmIChpZCBpbnN0YW5jZW9mIEVudGl0eSAmJiB2ZWN0b3JGZWF0dXJlcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcbiAgICAgIHZhciBmZWF0dXJlID0gRmVhdHVyZS5mcm9tRW50aXR5Q29sbGVjdGlvbk9yRW50aXR5KGlkKTtcbiAgICAgIHZlY3RvckZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgfSBlbHNlIGlmIChwaWNrZWQucHJpbWl0aXZlICYmIHBpY2tlZC5wcmltaXRpdmUuX2NhdGFsb2dJdGVtICYmIHBpY2tlZC5wcmltaXRpdmUuX2NhdGFsb2dJdGVtLmdldEZlYXR1cmVzRnJvbVBpY2tSZXN1bHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBwaWNrZWQucHJpbWl0aXZlLl9jYXRhbG9nSXRlbS5nZXRGZWF0dXJlc0Zyb21QaWNrUmVzdWx0KHNjcmVlblBvc2l0aW9uLCBwaWNrZWQpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICB2ZWN0b3JGZWF0dXJlcy5wdXNoLmFwcGx5KHZlY3RvckZlYXR1cmVzLCBfdG9Db25zdW1hYmxlQXJyYXkocmVzdWx0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVjdG9yRmVhdHVyZXMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlY3RvckZlYXR1cmVzO1xufTtcbi8qKlxuICogSG9va3MgaW50byB0aGUge0BsaW5rIEltYWdlcnlQcm92aWRlciNwaWNrRmVhdHVyZXN9IG1ldGhvZCBvZiBldmVyeSBpbWFnZXJ5IHByb3ZpZGVyIGluIHRoZSBzY2VuZSAtIHdoZW4gdGhpcyBtZXRob2QgaXNcbiAqIGV2YWx1YXRlZCAodXN1YWxseSBhcyBwYXJ0IG9mIGZlYXR1cmUgcGlja2luZyksIGl0IHdpbGwgcmVjb3JkIHRoZSB0aWxlIGNvb3JkaW5hdGVzIHVzZWQgYWdhaW5zdCB0aGUgdXJsIG9mIHRoZVxuICogaW1hZ2VyeSBwcm92aWRlciBpbiBhbiBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBieSB0aGlzIG1ldGhvZC4gSG9va3MgYXJlIHJlbW92ZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgYmVpbmcgZXhlY3V0ZWQgb25jZS5cbiAqXG4gKiBAcmV0dXJucyB7e3gsIHksIGxldmVsfX0gQSBtYXAgb2YgdXJscyB0byB0aGUgY29vcmRzIHVzZWQgYnkgdGhlIGltYWdlcnkgcHJvdmlkZXIgd2hlbiBwaWNraW5nIGZlYXR1cmVzLiBXaWxsXG4gKiAgICAgaW5pdGlhbGx5IGJlIGVtcHR5IGJ1dCB3aWxsIGJlIHVwZGF0ZWQgYXMgdGhlIGhvb2tzIGFyZSBldmFsdWF0ZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQ2VzaXVtLnByb3RvdHlwZS5fYXR0YWNoUHJvdmlkZXJDb29yZEhvb2tzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJvdmlkZXJDb29yZHMgPSB7fTtcblxuICB2YXIgcGlja0ZlYXR1cmVzSG9vayA9IGZ1bmN0aW9uIHBpY2tGZWF0dXJlc0hvb2soaW1hZ2VyeVByb3ZpZGVyLCBvbGRQaWNrLCB4LCB5LCBsZXZlbCwgbG9uZ2l0dWRlLCBsYXRpdHVkZSkge1xuICAgIHZhciBmZWF0dXJlc1Byb21pc2UgPSBvbGRQaWNrLmNhbGwoaW1hZ2VyeVByb3ZpZGVyLCB4LCB5LCBsZXZlbCwgbG9uZ2l0dWRlLCBsYXRpdHVkZSk7IC8vIFVzZSB1cmwgdG8gdW5pcXVlbHkgaWRlbnRpZnkgcHJvdmlkZXJzIGJlY2F1c2Ugd2hhdCBlbHNlIGNhbiB3ZSBkbz9cblxuICAgIGlmIChpbWFnZXJ5UHJvdmlkZXIudXJsKSB7XG4gICAgICBwcm92aWRlckNvb3Jkc1tpbWFnZXJ5UHJvdmlkZXIudXJsXSA9IHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeSxcbiAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGltYWdlcnlQcm92aWRlci5waWNrRmVhdHVyZXMgPSBvbGRQaWNrO1xuICAgIHJldHVybiBmZWF0dXJlc1Byb21pc2U7XG4gIH07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnNjZW5lLmltYWdlcnlMYXllcnMubGVuZ3RoOyBqKyspIHtcbiAgICB2YXIgaW1hZ2VyeVByb3ZpZGVyID0gdGhpcy5zY2VuZS5pbWFnZXJ5TGF5ZXJzLmdldChqKS5pbWFnZXJ5UHJvdmlkZXI7XG4gICAgaW1hZ2VyeVByb3ZpZGVyLnBpY2tGZWF0dXJlcyA9IHBpY2tGZWF0dXJlc0hvb2suYmluZCh1bmRlZmluZWQsIGltYWdlcnlQcm92aWRlciwgaW1hZ2VyeVByb3ZpZGVyLnBpY2tGZWF0dXJlcyk7XG4gIH1cblxuICByZXR1cm4gcHJvdmlkZXJDb29yZHM7XG59O1xuLyoqXG4gKiBCdWlsZHMgYSB7QGxpbmsgUGlja2VkRmVhdHVyZXN9IG9iamVjdCBmcm9tIGEgbnVtYmVyIG9mIGlucHV0cy5cbiAqXG4gKiBAcGFyYW0ge3t4LCB5LCBsZXZlbH19IHByb3ZpZGVyQ29vcmRzIEEgbWFwIG9mIGltYWdlcnkgcHJvdmlkZXIgdXJscyB0byB0aGUgY29vcmRzIHVzZWQgdG8gZ2V0IGZlYXR1cmVzIGZvciB0aGF0IHByb3ZpZGVyLlxuICogQHBhcmFtIHtDYXJ0ZXNpYW4zfSBwaWNrUG9zaXRpb24gVGhlIHBvc2l0aW9uIGluIHRoZSAzRCBtb2RlbCB0aGF0IGhhcyBiZWVuIHBpY2tlZC5cbiAqIEBwYXJhbSB7RW50aXR5W119IGV4aXN0aW5nRmVhdHVyZXMgRXhpc3RpbmcgZmVhdHVyZXMgLSB0aGUgcmVzdWx0cyBvZiBmZWF0dXJlIHByb21pc2VzIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhpcy5cbiAqIEBwYXJhbSB7UHJvbWlzZVtdfSBmZWF0dXJlUHJvbWlzZXMgWmVybyBvciBtb3JlIHByb21pc2VzIHRoYXQgZWFjaCByZXNvbHZlIHRvIGEgbGlzdCBvZiB7QGxpbmsgSW1hZ2VyeUxheWVyRmVhdHVyZUluZm99c1xuICogICAgICh1c3VhbGx5IHRoZXJlIHdpbGwgYmUgb25lIHByb21pc2UgcGVyIEltYWdlcnlMYXllci4gVGhlc2Ugd2lsbCBiZSBjb21iaW5lZCBhcyBwYXJ0IG9mXG4gKiAgICAge0BsaW5rIFBpY2tlZEZlYXR1cmVzI2FsbEZlYXR1cmVzQXZhaWxhYmxlUHJvbWlzZX0gYW5kIHRoZWlyIHJlc3VsdHMgdXNlZCB0byBidWlsZCB0aGUgZmluYWxcbiAqICAgICB7QGxpbmsgUGlja2VkRmVhdHVyZXMjZmVhdHVyZXN9IGFycmF5LlxuICogQHBhcmFtIHtJbWFnZXJ5TGF5ZXJbXX0gaW1hZ2VyeUxheWVycyBBbiBhcnJheSBvZiBJbWFnZXJ5TGF5ZXJzIHRoYXQgc2hvdWxkIGxpbmUgdXAgd2l0aCB0aGUgb25lIHBhc3NlZCBhcyBmZWF0dXJlUHJvbWlzZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVmYXVsdEhlaWdodCBUaGUgaGVpZ2h0IHRvIHVzZSBmb3IgZmVhdHVyZSBwb3NpdGlvbiBoZWlnaHRzIGlmIG5vbmUgaXMgYXZhaWxhYmxlIHdoZW4gcGlja2luZy5cbiAqIEByZXR1cm5zIHtQaWNrZWRGZWF0dXJlc30gQSB7QGxpbmsgUGlja2VkRmVhdHVyZXN9IG9iamVjdCB0aGF0IGlzIGEgY29tYmluYXRpb24gb2YgZXZlcnl0aGluZyBwYXNzZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQ2VzaXVtLnByb3RvdHlwZS5fYnVpbGRQaWNrZWRGZWF0dXJlcyA9IGZ1bmN0aW9uIChwcm92aWRlckNvb3JkcywgcGlja1Bvc2l0aW9uLCBleGlzdGluZ0ZlYXR1cmVzLCBmZWF0dXJlUHJvbWlzZXMsIGltYWdlcnlMYXllcnMsIGRlZmF1bHRIZWlnaHQpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBQaWNrZWRGZWF0dXJlcygpO1xuICByZXN1bHQucHJvdmlkZXJDb29yZHMgPSBwcm92aWRlckNvb3JkcztcbiAgcmVzdWx0LnBpY2tQb3NpdGlvbiA9IHBpY2tQb3NpdGlvbjtcbiAgcmVzdWx0LmFsbEZlYXR1cmVzQXZhaWxhYmxlUHJvbWlzZSA9IHdoZW4uYWxsKGZlYXR1cmVQcm9taXNlcykudGhlbihmdW5jdGlvbiAoYWxsRmVhdHVyZXMpIHtcbiAgICByZXN1bHQuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcmVzdWx0LmZlYXR1cmVzID0gYWxsRmVhdHVyZXMucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHRGZWF0dXJlc1NvRmFyLCBpbWFnZXJ5TGF5ZXJGZWF0dXJlcywgaSkge1xuICAgICAgaWYgKCFkZWZpbmVkKGltYWdlcnlMYXllckZlYXR1cmVzKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0RmVhdHVyZXNTb0ZhcjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZlYXR1cmVzID0gaW1hZ2VyeUxheWVyRmVhdHVyZXMubWFwKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIGlmIChkZWZpbmVkKGltYWdlcnlMYXllcnMpKSB7XG4gICAgICAgICAgZmVhdHVyZS5pbWFnZXJ5TGF5ZXIgPSBpbWFnZXJ5TGF5ZXJzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkKGZlYXR1cmUucG9zaXRpb24pKSB7XG4gICAgICAgICAgZmVhdHVyZS5wb3NpdGlvbiA9IEVsbGlwc29pZC5XR1M4NC5jYXJ0ZXNpYW5Ub0NhcnRvZ3JhcGhpYyhwaWNrUG9zaXRpb24pO1xuICAgICAgICB9IC8vIElmIHRoZSBwaWNrZWQgZmVhdHVyZSBkb2VzIG5vdCBoYXZlIGEgaGVpZ2h0LCB1c2UgdGhlIGhlaWdodCBvZiB0aGUgcGlja2VkIGxvY2F0aW9uLlxuICAgICAgICAvLyBUaGlzIGF0IGxlYXN0IGF2b2lkcyBtYWpvciBwYXJhbGxheCBlZmZlY3RzIG9uIHRoZSBzZWxlY3Rpb24gaW5kaWNhdG9yLlxuXG5cbiAgICAgICAgaWYgKCFkZWZpbmVkKGZlYXR1cmUucG9zaXRpb24uaGVpZ2h0KSB8fCBmZWF0dXJlLnBvc2l0aW9uLmhlaWdodCA9PT0gMC4wKSB7XG4gICAgICAgICAgZmVhdHVyZS5wb3NpdGlvbi5oZWlnaHQgPSBkZWZhdWx0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUZlYXR1cmVGcm9tSW1hZ2VyeUxheWVyRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIGlmICh0aGlzLnRlcnJpYS5zaG93U3BsaXR0ZXIpIHtcbiAgICAgICAgLy8gU2VsZWN0IG9ubHkgZmVhdHVyZXMgZnJvbSB0aGUgc2FtZSBzaWRlIG9yIGJvdGggc2lkZXMgb2YgdGhlIHNwbGl0dGVyXG4gICAgICAgIHZhciBzY3JlZW5Qb3NpdGlvbiA9IHRoaXMuY29tcHV0ZVBvc2l0aW9uT25TY3JlZW4ocmVzdWx0LnBpY2tQb3NpdGlvbik7XG4gICAgICAgIHZhciBwaWNrZWRTaWRlID0gdGhpcy50ZXJyaWEuZ2V0U3BsaXR0ZXJTaWRlRm9yU2NyZWVuUG9zaXRpb24oc2NyZWVuUG9zaXRpb24pO1xuICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmZpbHRlcihmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgIHZhciBzcGxpdERpcmVjdGlvbiA9IGZlYXR1cmUuaW1hZ2VyeUxheWVyLnNwbGl0RGlyZWN0aW9uO1xuICAgICAgICAgIHJldHVybiBzcGxpdERpcmVjdGlvbiA9PT0gcGlja2VkU2lkZSB8fCBzcGxpdERpcmVjdGlvbiA9PT0gSW1hZ2VyeVNwbGl0RGlyZWN0aW9uLk5PTkU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0RmVhdHVyZXNTb0Zhci5jb25jYXQoZmVhdHVyZXMpO1xuICAgIH0uYmluZCh0aGlzKSwgZGVmYXVsdFZhbHVlKGV4aXN0aW5nRmVhdHVyZXMsIFtdKSk7XG4gIH0uYmluZCh0aGlzKSkub3RoZXJ3aXNlKGZ1bmN0aW9uICgpIHtcbiAgICByZXN1bHQuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcmVzdWx0LmVycm9yID0gXCJBbiB1bmtub3duIGVycm9yIG9jY3VycmVkIHdoaWxlIHBpY2tpbmcgZmVhdHVyZXMuXCI7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogUmV0dXJucyBhIG5ldyBsYXllciB1c2luZyBhIHByb3ZpZGVkIEltYWdlcnlQcm92aWRlciwgYW5kIGFkZHMgaXQgdG8gdGhlIHNjZW5lLlxuICogTm90ZSB0aGUgb3B0aW9uYWwgcGFyYW1ldGVycyBhcmUgYSBzdXBlcnNldCBvZiB0aGUgTGVhZmxldCB2ZXJzaW9uIG9mIHRoaXMgZnVuY3Rpb24sIHdpdGggb25lIGRlbGV0aW9uIChvblByb2plY3Rpb25FcnJvcikuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9uc1xuICogQHBhcmFtIHtJbWFnZXJ5UHJvdmlkZXJ9IG9wdGlvbnMuaW1hZ2VyeVByb3ZpZGVyIFRoZSBpbWFnZXJ5IHByb3ZpZGVyIHRvIGNyZWF0ZSBhIG5ldyBsYXllciBmb3IuXG4gKiBAcGFyYW0ge051bWJlcn0gW2xheWVySW5kZXhdIFRoZSBpbmRleCB0byBhZGQgdGhlIGxheWVyIGF0LiAgSWYgb21pdHRlZCwgdGhlIGxheWVyIHdpbGwgYWRkZWQgb24gdG9wIG9mIGFsbCBleGlzdGluZyBsYXllcnMuXG4gKiBAcGFyYW0ge1JlY3RhbmdsZX0gW29wdGlvbnMucmVjdGFuZ2xlPWltYWdlcnlQcm92aWRlci5yZWN0YW5nbGVdIFRoZSByZWN0YW5nbGUgb2YgdGhlIGxheWVyLiAgVGhpcyByZWN0YW5nbGVcbiAqICAgICAgICBjYW4gbGltaXQgdGhlIHZpc2libGUgcG9ydGlvbiBvZiB0aGUgaW1hZ2VyeSBwcm92aWRlci5cbiAqIEBwYXJhbSB7TnVtYmVyfEZ1bmN0aW9ufSBbb3B0aW9ucy5vcGFjaXR5PTEuMF0gVGhlIGFscGhhIGJsZW5kaW5nIHZhbHVlIG9mIHRoaXMgbGF5ZXIsIGZyb20gMC4wIHRvIDEuMC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNhbiBlaXRoZXIgYmUgYSBzaW1wbGUgbnVtYmVyIG9yIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2lnbmF0dXJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+ZnVuY3Rpb24oZnJhbWVTdGF0ZSwgbGF5ZXIsIHgsIHksIGxldmVsKTwvY29kZT4uICBUaGUgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgZnJhbWUgc3RhdGUsIHRoaXMgbGF5ZXIsIGFuZCB0aGUgeCwgeSwgYW5kIGxldmVsIGNvb3JkaW5hdGVzIG9mIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcnkgdGlsZSBmb3Igd2hpY2ggdGhlIGFscGhhIGlzIHJlcXVpcmVkLCBhbmQgaXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGFscGhhIHZhbHVlIHRvIHVzZSBmb3IgdGhlIHRpbGUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNsaXBUb1JlY3RhbmdsZV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudHJlYXQ0MDNBc0Vycm9yXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy50cmVhdDQwM0FzRXJyb3JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmlnbm9yZVVua25vd25UaWxlRXJyb3JzXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25Mb2FkRXJyb3JdXG4gKiBAcmV0dXJucyB7SW1hZ2VyeUxheWVyfSBUaGUgbmV3bHkgY3JlYXRlZCBsYXllci5cbiAqL1xuXG5cbkNlc2l1bS5wcm90b3R5cGUuYWRkSW1hZ2VyeVByb3ZpZGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHNjZW5lID0gdGhpcy5zY2VuZTtcbiAgdmFyIGVycm9yRXZlbnQgPSBvcHRpb25zLmltYWdlcnlQcm92aWRlci5lcnJvckV2ZW50O1xuXG4gIGlmIChkZWZpbmVkKGVycm9yRXZlbnQpKSB7XG4gICAgZXJyb3JFdmVudC5hZGRFdmVudExpc3RlbmVyKG9wdGlvbnMub25Mb2FkRXJyb3IpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBJbWFnZXJ5TGF5ZXIob3B0aW9ucy5pbWFnZXJ5UHJvdmlkZXIsIHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBhbHBoYTogb3B0aW9ucy5vcGFjaXR5LFxuICAgIHJlY3RhbmdsZTogb3B0aW9ucy5jbGlwVG9SZWN0YW5nbGUgPyBvcHRpb25zLnJlY3RhbmdsZSA6IHVuZGVmaW5lZCxcbiAgICBpc1JlcXVpcmVkOiBvcHRpb25zLmlzUmVxdWlyZWRGb3JSZW5kZXJpbmcgLy8gVE9ETzogVGhpcyBkb2Vzbid0IHNlZW0gdG8gYmUgYSB2YWxpZCBvcHRpb24gZm9yIEltYWdlcnlMYXllciAtIHJlbW92ZSAoYW5kIHVwc3RyZWFtKT9cblxuICB9KTsgLy8gbGF5ZXJJbmRleCBpcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdXNlZCB3aGVuIHRoZSBpbWFnZXJ5TGF5ZXIgY29ycmVzcG9uZHMgdG8gYSBDc3ZDYXRhbG9nSXRlbSB3aG9zZSBzZWxlY3RlZCBpdGVtIGhhcyBqdXN0IGNoYW5nZWRcbiAgLy8gdG8gZW5zdXJlIHRoYXQgdGhlIGxheWVyIGlzIHJlLWFkZGVkIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgc2NlbmUuaW1hZ2VyeUxheWVycy5hZGQocmVzdWx0LCBvcHRpb25zLmxheWVySW5kZXgpO1xuICB0aGlzLnVwZGF0ZUxheWVyT3JkZXJUb0tlZXBPblRvcCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuQ2VzaXVtLnByb3RvdHlwZS5yZW1vdmVJbWFnZXJ5TGF5ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc2NlbmUgPSB0aGlzLnNjZW5lO1xuICBzY2VuZS5pbWFnZXJ5TGF5ZXJzLnJlbW92ZShvcHRpb25zLmxheWVyKTtcbn07XG5cbkNlc2l1bS5wcm90b3R5cGUuc2hvd0ltYWdlcnlMYXllciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMubGF5ZXIuc2hvdyA9IHRydWU7XG59O1xuXG5DZXNpdW0ucHJvdG90eXBlLmhpZGVJbWFnZXJ5TGF5ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBvcHRpb25zLmxheWVyLnNob3cgPSBmYWxzZTtcbn07XG5cbkNlc2l1bS5wcm90b3R5cGUuaXNJbWFnZXJ5TGF5ZXJTaG93biA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmxheWVyLnNob3c7XG59O1xuXG5DZXNpdW0ucHJvdG90eXBlLnVwZGF0ZUl0ZW1Gb3JTcGxpdHRlciA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIGlmICghZGVmaW5lZChpdGVtLnNwbGl0RGlyZWN0aW9uKSB8fCAhZGVmaW5lZChpdGVtLmltYWdlcnlMYXllcikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGVycmlhID0gaXRlbS50ZXJyaWE7XG5cbiAgaWYgKHRlcnJpYS5zaG93U3BsaXR0ZXIpIHtcbiAgICBpdGVtLmltYWdlcnlMYXllci5zcGxpdERpcmVjdGlvbiA9IGl0ZW0uc3BsaXREaXJlY3Rpb247XG4gIH0gZWxzZSB7XG4gICAgaXRlbS5pbWFnZXJ5TGF5ZXIuc3BsaXREaXJlY3Rpb24gPSBJbWFnZXJ5U3BsaXREaXJlY3Rpb24uTk9ORTtcbiAgfSAvLyBBbHNvIHVwZGF0ZSB0aGUgbmV4dCBsYXllciwgaWYgYW55LlxuXG5cbiAgaWYgKGl0ZW0uX25leHRMYXllcikge1xuICAgIGl0ZW0uX25leHRMYXllci5zcGxpdERpcmVjdGlvbiA9IGl0ZW0uaW1hZ2VyeUxheWVyLnNwbGl0RGlyZWN0aW9uO1xuICB9XG5cbiAgdGhpcy5ub3RpZnlSZXBhaW50UmVxdWlyZWQoKTtcbn07XG5cbkNlc2l1bS5wcm90b3R5cGUucGF1c2VNYXBJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgKyt0aGlzLl9wYXVzZU1hcEludGVyYWN0aW9uQ291bnQ7XG5cbiAgaWYgKHRoaXMuX3BhdXNlTWFwSW50ZXJhY3Rpb25Db3VudCA9PT0gMSkge1xuICAgIHRoaXMuc2NlbmUuc2NyZWVuU3BhY2VDYW1lcmFDb250cm9sbGVyLmVuYWJsZUlucHV0cyA9IGZhbHNlO1xuICB9XG59O1xuXG5DZXNpdW0ucHJvdG90eXBlLnJlc3VtZU1hcEludGVyYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAtLXRoaXMuX3BhdXNlTWFwSW50ZXJhY3Rpb25Db3VudDtcblxuICBpZiAodGhpcy5fcGF1c2VNYXBJbnRlcmFjdGlvbkNvdW50ID09PSAwKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMyLl9wYXVzZU1hcEludGVyYWN0aW9uQ291bnQgPT09IDApIHtcbiAgICAgICAgX3RoaXMyLnNjZW5lLnNjcmVlblNwYWNlQ2FtZXJhQ29udHJvbGxlci5lbmFibGVJbnB1dHMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwb3N0UmVuZGVyKGNlc2l1bSwgZGF0ZSkge1xuICAvLyBXZSBjYW4gc2FmZWx5IHN0b3AgcmVuZGVyaW5nIHdoZW46XG4gIC8vICAtIHRoZSBjYW1lcmEgcG9zaXRpb24gaGFzbid0IGNoYW5nZWQgaW4gb3ZlciBhIHNlY29uZCxcbiAgLy8gIC0gdGhlcmUgYXJlIG5vIHRpbGVzIHdhaXRpbmcgdG8gbG9hZCwgYW5kXG4gIC8vICAtIHRoZSBjbG9jayBpcyBub3QgYW5pbWF0aW5nXG4gIC8vICAtIHRoZXJlIGFyZSBubyB0d2VlbnMgaW4gcHJvZ3Jlc3NcbiAgdmFyIG5vdyA9IGdldFRpbWVzdGFtcCgpO1xuICB2YXIgc2NlbmUgPSBjZXNpdW0uc2NlbmU7XG5cbiAgaWYgKCFNYXRyaXg0LmVxdWFsc0Vwc2lsb24oY2VzaXVtLl9sYXN0Q2FtZXJhVmlld01hdHJpeCwgc2NlbmUuY2FtZXJhLnZpZXdNYXRyaXgsIDFlLTUpKSB7XG4gICAgY2VzaXVtLl9sYXN0Q2FtZXJhTW92ZVRpbWUgPSBub3c7XG4gIH1cblxuICB2YXIgY2FtZXJhTW92ZWRJbkxhc3RTZWNvbmQgPSBub3cgLSBjZXNpdW0uX2xhc3RDYW1lcmFNb3ZlVGltZSA8IDEwMDA7XG4gIHZhciBzdXJmYWNlID0gc2NlbmUuZ2xvYmUuX3N1cmZhY2U7XG4gIHZhciB0aWxlc1dhaXRpbmcgPSAhc3VyZmFjZS5fdGlsZVByb3ZpZGVyLnJlYWR5IHx8IHN1cmZhY2UuX3RpbGVMb2FkUXVldWVIaWdoLmxlbmd0aCA+IDAgfHwgc3VyZmFjZS5fdGlsZUxvYWRRdWV1ZU1lZGl1bS5sZW5ndGggPiAwIHx8IHN1cmZhY2UuX3RpbGVMb2FkUXVldWVMb3cubGVuZ3RoID4gMCB8fCBzdXJmYWNlLl9kZWJ1Zy50aWxlc1dhaXRpbmdGb3JDaGlsZHJlbiA+IDA7XG5cbiAgaWYgKCFjYW1lcmFNb3ZlZEluTGFzdFNlY29uZCAmJiAhdGlsZXNXYWl0aW5nICYmICFjZXNpdW0udmlld2VyLmNsb2NrLnNob3VsZEFuaW1hdGUgJiYgY2VzaXVtLnNjZW5lLnR3ZWVucy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoY2VzaXVtLnZlcmJvc2VSZW5kZXJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RvcHBpbmcgcmVuZGVyaW5nIEAgXCIgKyBnZXRUaW1lc3RhbXAoKSk7XG4gICAgfVxuXG4gICAgY2VzaXVtLnZpZXdlci51c2VEZWZhdWx0UmVuZGVyTG9vcCA9IGZhbHNlO1xuICAgIGNlc2l1bS5zdG9wcGVkUmVuZGVyaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIE1hdHJpeDQuY2xvbmUoc2NlbmUuY2FtZXJhLnZpZXdNYXRyaXgsIGNlc2l1bS5fbGFzdENhbWVyYVZpZXdNYXRyaXgpO1xuICB2YXIgZmVhdHVyZSA9IGNlc2l1bS50ZXJyaWEuc2VsZWN0ZWRGZWF0dXJlO1xuXG4gIGlmIChkZWZpbmVkKGZlYXR1cmUpKSB7XG4gICAgdmFyIHBvc2l0aW9uO1xuXG4gICAgaWYgKGRlZmluZWQoY2VzaXVtLmRhdGFTb3VyY2VEaXNwbGF5KSkge1xuICAgICAgdmFyIG9yaWdpbmFsRW50aXR5ID0gZGVmaW5lZChmZWF0dXJlLmNlc2l1bUVudGl0eSkgPyBmZWF0dXJlLmNlc2l1bUVudGl0eSA6IGZlYXR1cmU7XG4gICAgICB2YXIgc3RhdGUgPSBjZXNpdW0uZGF0YVNvdXJjZURpc3BsYXkuZ2V0Qm91bmRpbmdTcGhlcmUob3JpZ2luYWxFbnRpdHksIHRydWUsIGJvdW5kaW5nU3BoZXJlU2NyYXRjaCk7XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gQm91bmRpbmdTcGhlcmVTdGF0ZS5ET05FKSB7XG4gICAgICAgIHBvc2l0aW9uID0gQ2FydGVzaWFuMy5jbG9uZShib3VuZGluZ1NwaGVyZVNjcmF0Y2guY2VudGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRlZmluZWQocG9zaXRpb24pICYmIGRlZmluZWQoZmVhdHVyZS5wb3NpdGlvbikpIHtcbiAgICAgIHBvc2l0aW9uID0gZmVhdHVyZS5wb3NpdGlvbi5nZXRWYWx1ZShjZXNpdW0udGVycmlhLmNsb2NrLmN1cnJlbnRUaW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZGVmaW5lZChwb3NpdGlvbikpIHtcbiAgICAgIGNlc2l1bS5fc2VsZWN0aW9uSW5kaWNhdG9yLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgY2VzaXVtLl9zZWxlY3Rpb25JbmRpY2F0b3IudXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEZlYXR1cmUoY2VzaXVtKSB7XG4gIHZhciBmZWF0dXJlID0gY2VzaXVtLnRlcnJpYS5zZWxlY3RlZEZlYXR1cmU7XG5cbiAgY2VzaXVtLl9oaWdobGlnaHRGZWF0dXJlKGZlYXR1cmUpO1xuXG4gIGlmIChkZWZpbmVkKGZlYXR1cmUpICYmIGRlZmluZWQoZmVhdHVyZS5wb3NpdGlvbikpIHtcbiAgICBjZXNpdW0uX3NlbGVjdGlvbkluZGljYXRvci5wb3NpdGlvbiA9IGZlYXR1cmUucG9zaXRpb24uZ2V0VmFsdWUoY2VzaXVtLnRlcnJpYS5jbG9jay5jdXJyZW50VGltZSk7XG5cbiAgICBjZXNpdW0uX3NlbGVjdGlvbkluZGljYXRvci5hbmltYXRlQXBwZWFyKCk7XG4gIH0gZWxzZSB7XG4gICAgY2VzaXVtLl9zZWxlY3Rpb25JbmRpY2F0b3IuYW5pbWF0ZURlcGFydCgpO1xuICB9XG5cbiAgY2VzaXVtLl9zZWxlY3Rpb25JbmRpY2F0b3IudXBkYXRlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2VzaXVtOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=