((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([["AugmentedVirtuality"],{

/***/ "./packages/terriajs/lib/Models/AugmentedVirtuality.js":
/*!*************************************************************!*\
  !*** ./packages/terriajs/lib/Models/AugmentedVirtuality.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defined = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"));

var _defaultValue = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/defaultValue */ "./node_modules/terriajs-cesium/Source/Core/defaultValue.js"));

var _knockout = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/ThirdParty/knockout */ "./node_modules/terriajs-cesium/Source/ThirdParty/knockout.js"));

var _Math = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/Math.js */ "./node_modules/terriajs-cesium/Source/Core/Math.js"));

var _Matrix = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/Matrix3.js */ "./node_modules/terriajs-cesium/Source/Core/Matrix3.js"));

var _Cartesian = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/Cartesian3.js */ "./node_modules/terriajs-cesium/Source/Core/Cartesian3.js"));

var _EllipsoidTerrainProvider = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/EllipsoidTerrainProvider */ "./node_modules/terriajs-cesium/Source/Core/EllipsoidTerrainProvider.js"));

var _sampleTerrainMostDetailed = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/sampleTerrainMostDetailed */ "./node_modules/terriajs-cesium/Source/Core/sampleTerrainMostDetailed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Manages state for Augmented Virtuality mode.
 *
 * This mode uses the devices orientation sensors to change the viewers viewport to match the change in orientation.
 *
 * Term Augmented Virtuality:
 * "The use of real-world sensor information (e.g., gyroscopes) to control a virtual environment is an additional form
 * of augmented virtuality, in which external inputs provide context for the virtual view."
 * {@link https://en.wikipedia.org/wiki/Mixed_reality}
 *
 * @alias AugmentedVirtuality
 * @constructor
 */
var AugmentedVirtuality = function AugmentedVirtuality(terria) {
  var that = this;
  this._terria = terria; // Note: We create a persistant object and define a transient property, since knockout needs a persistant variable
  //       to track, but for state we want a 'maybe' intervalId.

  this._eventLoopState = {};
  this._manualAlignment = false;
  this._maximumUpdatesPerSecond = AugmentedVirtuality.DEFAULT_MAXIMUM_UPDATES_PER_SECOND;
  this._orientationUpdated = false;
  this._alpha = 0;
  this._beta = 0;
  this._gamma = 0;
  this._realignAlpha = 0;
  this._realignHeading = 0; // Set the default height to be the last height so that when we first toggle (and increment) we cycle and go to the first height.

  this._hoverLevel = AugmentedVirtuality.PRESET_HEIGHTS.length - 1; // Always run the device orientation event, this way as soon as we enable we know where we are and set the
  // orientation rather then having to wait for the next update.
  // The following is disabled because chrome does not currently support deviceorientationabsolute correctly:
  // if ('ondeviceorientationabsolute' in window)
  // {
  //     window.addEventListener('deviceorientationabsolute', function(event) {that._orientationUpdate(event);} );
  // }
  // else

  if ("ondeviceorientation" in window) {
    window.addEventListener("deviceorientation", function (event) {
      that._storeOrientation(event);
    });
  } // Make the variables used by the object properties knockout observable so that changes in the state notify the UI
  // and cause a UI update. Note: These are all of the variables used just by the getters (not the setters), since
  // these unqiquely define what the current state is and are the only things that can effect/cause the state to change
  // (note: _eventLoopState is hidden behind ._eventLoopRunning() ).


  _knockout["default"].track(this, ["_eventLoopState", "_manualAlignment", "_maximumUpdatesPerSecond", "_realignAlpha", "_realignHeading", "_hoverLevel"]); // Note: The following properties are defined as knockout properties so that they can be used to trigger updates on the UI.

  /**
   * Gets or sets whether Augmented Virtuality mode is currently enabled (true) or not (false).
   *
   * Note: If {@link AugmentedVirtuality#manualAlignment} is enabled and the state is changed it will be disabled.
   *
   * @memberOf AugmentedVirtuality.prototype
   * @member {Boolean} enabled
   */


  _knockout["default"].defineProperty(this, "enabled", {
    get: function get() {
      return this._eventLoopRunning() || this._manualAlignment;
    },
    set: function set(enable) {
      if (enable !== true) {
        enable = false;
        this.resetAlignment();
      }

      if (enable !== this.enabled) {
        // If we are changing the enabled state then disable manual alignment.
        // We only do this if we are changing the enabled state so that the client can repeatedly call the
        // setting without having any effect if they aren't changing the enabled state, but so that every time
        // that the state is changed that the manual alignment is turned back off initally.
        this._manualAlignment = false;

        this._startEventLoop(enable);
      }
    }
  });
  /**
   * Gets or sets whether manual realignment mode is currently enabled (true) or not (false).
   *
   * @memberOf AugmentedVirtuality.prototype
   * @member {Boolean} manualAlignment
   */


  _knockout["default"].defineProperty(this, "manualAlignment", {
    get: function get() {
      return this._getManualAlignment();
    },
    set: function set(startEnd) {
      this._setManualAlignment(startEnd);
    }
  });
  /**
   * Gets whether a manual realignment has been specified (true) or not (false).
   *
   * @memberOf AugmentedVirtuality.prototype
   * @member {Boolean} manualAlignmentSet
   */


  _knockout["default"].defineProperty(this, "manualAlignmentSet", {
    get: function get() {
      return this._realignAlpha !== 0.0 || this._realignHeading !== 0.0;
    }
  });
  /**
   * Gets the index of the current hover level.
   *
   * Use <code>AugmentedVirtuality.PRESET_HEIGHTS.length</code> to find the total avaliable levels.
   *
   * @memberOf AugmentedVirtuality.prototype
   * @member {int} hoverLevel
   */


  _knockout["default"].defineProperty(this, "hoverLevel", {
    get: function get() {
      return this._hoverLevel;
    }
  });
  /**
   * Gets or sets the the maximum number of times that the camera orientation will be updated per second. This is
   * the number of camera orientation updates per seconds is capped to (explicitly the number of times the
   * orientation is updated per second might be less but it won't be more then this number). We want the number of
   * times that the orientation is updated capped so that we don't consume to much battery life updating to
   * frequently, but responsiveness is still acceptable.
   *
   * @memberOf AugmentedVirtuality.prototype
   * @member {Float} maximumUpdatesPerSecond
   */


  _knockout["default"].defineProperty(this, "maximumUpdatesPerSecond", {
    get: function get() {
      return this._maximumUpdatesPerSecond;
    },
    set: function set(maximumUpdatesPerSecond) {
      this._maximumUpdatesPerSecond = maximumUpdatesPerSecond; // If we are currently enabled reset to update the timing interval used.

      if (this._eventLoopRunning()) {
        this._startEventLoop(false);

        this._startEventLoop(true);
      }
    }
  });

  this.enabled = false;
};
/**
 * Gets the the maximum number of times that the camera orientation will be updated per second by default. This is the
 * number of camera orientation updates per seconds is capped to by default (explicitly the number of times the
 * orientation is updated per second might be less but it won't be more then this number). We want the number of times
 * that the orientation is updated capped so that we don't consume to much battery life updating to frequently, but
 * responsiveness is still acceptable.
 */


AugmentedVirtuality.DEFAULT_MAXIMUM_UPDATES_PER_SECOND = 10.0;
/**
 * The minimum height that the viewer is allowed to hover at.
 */

AugmentedVirtuality.MINIMUM_HOVER_HEIGHT = 20.0;
/* These are the heights that we can toggle through (in meters - above the surface height).
 */

AugmentedVirtuality.PRESET_HEIGHTS = [1000, 250, 20];
/**
 * Toggles whether the AugmentedVirutuality mode is enabled or disabled.
 */

AugmentedVirtuality.prototype.toggleEnabled = function () {
  this.enabled = !this.enabled;
};
/**
 * Toggles whether manual alignement is enabled or disabled.
 */


AugmentedVirtuality.prototype.toggleManualAlignment = function () {
  this.manualAlignment = !this.manualAlignment;
};
/**
 * Resets the alignment so that the alignement matches the devices absolute alignment.
 */


AugmentedVirtuality.prototype.resetAlignment = function () {
  this._orientationUpdated = true;
  this._realignAlpha = 0;
  this._realignHeading = 0;
};
/**
 * Toggles the viewer between a range of predefined heights, setting the cameras orientation so that it matches the
 * correct orientation.
 */


AugmentedVirtuality.prototype.toggleHoverHeight = function () {
  this._hoverLevel = (this._hoverLevel + 1) % AugmentedVirtuality.PRESET_HEIGHTS.length;
  this.hover(AugmentedVirtuality.PRESET_HEIGHTS[this._hoverLevel]);
};
/**
 * Moves the viewer to a specified height, setting the orientation so that it matches the correct Augmented Virtuality
 * orientation.
 *
 * @param {Float} height The height in Meters above the globe surface. Note: If height is below
 *                       {@link AugmentedVirtuality.MINIMUM_HOVER_HEIGHT} the height will be set to
 *                       {@link AugmentedVirtuality.MINIMUM_HOVER_HEIGHT} to avoid visual artifacts when the viewer
 *                       becomes to close to the surface.
 * @param {Cartographic} [position] The location to hover over. If not specified the current camera location will be used.
 * @param {Boolean} [flyTo=true] Whether to fly to the location (true) or whether to jump to the location (false).
 */


AugmentedVirtuality.prototype.hover = function (height, position, flyTo) {
  var that = this; // Get access to the camera...if it is not avaliable we can't set the new height so just return now.

  if (!(0, _defined["default"])(this._terria.cesium) || !(0, _defined["default"])(this._terria.cesium.viewer) || !(0, _defined["default"])(this._terria.cesium.viewer.camera)) {
    return;
  }

  var camera = this._terria.cesium.viewer.camera;

  if (!(0, _defined["default"])(position)) {
    position = camera.positionCartographic.clone();
  }

  flyTo = (0, _defaultValue["default"])(flyTo, true); // Clamp the minimum hover height (heights below this value could lead to poor visual artifacts).

  if (height < AugmentedVirtuality.MINIMUM_HOVER_HEIGHT) {
    height = AugmentedVirtuality.MINIMUM_HOVER_HEIGHT;
  } // Reset the viewer height.


  function flyToHeight(surfaceHeight) {
    if ((0, _defined["default"])(surfaceHeight)) {
      height += surfaceHeight;
    }

    var newPosition = _Cartesian["default"].fromRadians(position.longitude, position.latitude, height);

    var pose = that._getCurrentOrientation();

    pose.destination = newPosition;

    if (flyTo) {
      camera.flyTo(pose);
    } else {
      camera.setView(pose);
    } // Needed on mobile to make sure that the render is marked as dirty so that once AV mode has been disabled for a
    // while and then is reenabled the .setView() function still has effect (otherwise dispite the call the .setView()
    // the view orientation does not visually update until the user manualy moves the camera position).


    that._terria.currentViewer.notifyRepaintRequired();
  } // Get the ground surface height at this location and offset the height by it.


  if (!(0, _defined["default"])(this._terria.cesium) || !(0, _defined["default"])(this._terria.cesium.scene) || !(0, _defined["default"])(this._terria.cesium.scene.terrainProvider) || this._terria.cesium.scene.terrainProvider instanceof _EllipsoidTerrainProvider["default"]) {
    // If we can't get access to the terrain provider or we can get access to the terrain provider and the provider is just the Ellipsoid then use the height of 0.
    flyToHeight(0);
  } else {
    var terrainProvider = this._terria.cesium.scene.terrainProvider;
    (0, _sampleTerrainMostDetailed["default"])(terrainProvider, [position]).then(function (updatedPosition) {
      flyToHeight(updatedPosition[0].height);
    });
  }
};
/**
 * Moves the viewer to a specified location while maintaining the current height and the correct Augmented Virtuality
 * orientation.
 *
 * @param {Cartographic} position The location to hover move to.
 * @param {Float} [maximumHeight] The maximum height (in meters) to cap the current camera height to (if this value is
 *                                specified and the viewer is above this height the camera will be restricted to this height).
 * @param {Boolean} [flyTo] Whether to fly to the location (true) or whether to jump to the location (false).
 *
 * When the manual alignment is enabled this function has no effect.
 */


AugmentedVirtuality.prototype.moveTo = function (position, maximumHeight, flyTo) {
  var that = this; // If we are in manual alignment mode we don't allow the viewer to move (since this would create a jaring UX for most use cases).

  if (this._manualAlignment) {
    return;
  } // Get access to the camera...if it is not avaliable we can't get the current height (or set the new location) so just return now.


  if (!(0, _defined["default"])(this._terria.cesium) || !(0, _defined["default"])(this._terria.cesium.viewer) || !(0, _defined["default"])(this._terria.cesium.viewer.camera)) {
    return;
  }

  var camera = this._terria.cesium.viewer.camera;
  var cameraPosition = camera.positionCartographic.clone();
  var viewerHeight = cameraPosition.height; // Reset the viewer height.

  function moveToLocation(surfaceHeight) {
    if (!(0, _defined["default"])(surfaceHeight)) {
      surfaceHeight = 0;
    }

    var hoverHeight = viewerHeight - surfaceHeight;

    if ((0, _defined["default"])(maximumHeight) && hoverHeight > maximumHeight) {
      hoverHeight = maximumHeight;
    }

    that.hover(hoverHeight, position, flyTo);
  } // Get the ground surface height at this location and offset the height by it.


  if (!(0, _defined["default"])(this._terria.cesium) || !(0, _defined["default"])(this._terria.cesium.scene) || !(0, _defined["default"])(this._terria.cesium.scene.terrainProvider) || this._terria.cesium.scene.terrainProvider instanceof _EllipsoidTerrainProvider["default"]) {
    // If we can't get access to the terrain provider or we can get access to the terrain provider and the provider is just the Ellipsoid then use the height of 0.
    moveToLocation(undefined);
  } else {
    var terrainProvider = this._terria.cesium.scene.terrainProvider;
    (0, _sampleTerrainMostDetailed["default"])(terrainProvider, [cameraPosition]).then(function (updatedPosition) {
      moveToLocation(updatedPosition[0].height);
    });
  }
};
/**
 * Whether the user is currently setting a manual alignment.
 *
 * See also {@link AugmentedVirtuality#_setManualAlignment}.
 *
 * @return {Boolean} Whether the user is currently setting a manual alignment (true) or not (false).
 * @private
 */


AugmentedVirtuality.prototype._getManualAlignment = function () {
  return this.enabled && this._manualAlignment;
};
/**
 * Starts / stops manual alignment.
 *
 * When manual realignment is enabled it allows the user to specify a new origin for the alignment between the devices
 * physical and virtual alignment. When manual alignment is enabled the orientation is locked, to allow the user to
 * realign a visual landmark with a physical landmark.
 *
 * Note: Manual alignment is only done for the heading axis, this is because in practice we have found that the heading
 * axis is often out as mobile devices seem to have difficulty obtaining the compass direction, but seem to perform
 * relatively well in the other axes.
 *
 * Note: Realignment is only possible when AugmentedVirtuality is enabled. If AugmentedVirtuality is disabled while
 *       manual alignment is in progress it will be cancelled.
 *
 * See also {@link AugmentedVirtuality#_getManualAlignment}.
 *
 * @param {Boolean} startEnd Whether the user is starting (true) or ending (false) the realignment.
 * @private
 */


AugmentedVirtuality.prototype._setManualAlignment = function (startEnd) {
  // Only allow manual alignment changes when the module is enabled.
  if (this.enabled !== true) {
    return;
  } // Sanitise the input value to a boolean.


  if (startEnd !== true) {
    startEnd = false;
  }

  if (startEnd === false && (0, _defined["default"])(this._terria.cesium) && (0, _defined["default"])(this._terria.cesium.viewer) && (0, _defined["default"])(this._terria.cesium.viewer.camera)) {
    this._realignAlpha = this._alpha;
    this._realignHeading = _Math["default"].toDegrees(this._terria.cesium.viewer.camera.heading);
  }

  if (this._manualAlignment !== startEnd) {
    this._manualAlignment = startEnd;

    this._startEventLoop(!this._manualAlignment);
  }
};
/**
 * Whether the event loop is currently running.
 *
 * @return {Boolean} enable Whether to start the event loop is currently running (true) or not (false).
 * @private
 */


AugmentedVirtuality.prototype._eventLoopRunning = function () {
  return (0, _defined["default"])(this._eventLoopState.intervalId);
};
/**
 * Start or stop the Augmented Virutuality mode event loop. When enabled the orientation will effect the cameras
 * view and when disabled the device orientation will not effect the cameras view.
 *
 * @param {Boolean} enable Whether to start the event loop (true) or stop the event loop (false).
 * @private
 */


AugmentedVirtuality.prototype._startEventLoop = function (enable) {
  // Are we actually changing the state?
  if (this._eventLoopRunning() !== enable) {
    if (enable === true) {
      var that = this;
      this._orientationUpdated = true;
      var intervalMs = 1000 / this._maximumUpdatesPerSecond;
      var id = setInterval(function () {
        that._updateOrientation();
      }, intervalMs);
      this._eventLoopState = {
        intervalId: id
      };
    } else {
      clearInterval(this._eventLoopState.intervalId);
      this._eventLoopState = {};
    }
  }
};
/**
 * Device orientation update event callback function. Stores the updated orientation into the object state.
 *
 * @param {Object} event Contains the updated device orientation (in .alpha, .beta, .gamma).
 * @private
 */


AugmentedVirtuality.prototype._storeOrientation = function (event) {
  this._alpha = event.alpha;
  this._beta = event.beta;
  this._gamma = event.gamma;
  this._orientationUpdated = true;
};
/**
 * This function updates the cameras orientation using the last orientation recorded and the current screen orientation.
 *
 * @private
 */


AugmentedVirtuality.prototype._updateOrientation = function () {
  // Check if the screen orientation has changed and mark the orientation updated if it has.
  var screenOrientation = this._getCurrentScreenOrientation();

  if (screenOrientation !== this._lastScreenOrientation) {
    this._orientationUpdated = true;
  }

  this._lastScreenOrientation = screenOrientation; // Optomise by only updating the camera view if some part of the orientation calculation has changed.

  if (!this._orientationUpdated) {
    // The orientation has not been updated so don't waste time changing the orientation.
    return;
  }

  this._orientationUpdated = false; // Get access to the camera...if it is not avaliable we can't set the orientation so just return now.

  if (!(0, _defined["default"])(this._terria.cesium) || !(0, _defined["default"])(this._terria.cesium.viewer) || !(0, _defined["default"])(this._terria.cesium.viewer.camera)) {
    return;
  }

  var camera = this._terria.cesium.viewer.camera;
  camera.setView(this._getCurrentOrientation(screenOrientation)); // Needed on mobile to make sure that the render is marked as dirty so that once AV mode has been disabled for a
  // while and then is reenabled the .setView() function still has effect (otherwise dispite the call the .setView()
  // the view orientation does not visually update until the user manualy moves the camera position).

  this._terria.currentViewer.notifyRepaintRequired();
};
/**
 * Gets the current orientation stored in the object state and returns the roll, pitch and heading which can be used to set the cameras orientation.
 *
 * @param {Float} screenOrientation The screen orientation in degrees. Note: This field is optional, if supplied this value will be used for the screen orientation, otherwise the screen orientation will be obtained during the execution of this function.
 * @return {Object} A object with the roll, pitch and heading stored into the orientation.
 * @private
 */


AugmentedVirtuality.prototype._getCurrentOrientation = function (screenOrientation) {
  var alpha = this._alpha;
  var beta = this._beta;
  var gamma = this._gamma;
  var realignAlpha = this._realignAlpha;
  var realignHeading = this._realignHeading;

  if (!(0, _defined["default"])(screenOrientation)) {
    screenOrientation = this._getCurrentScreenOrientation();
  }

  return this._computeTerriaOrientation(alpha, beta, gamma, screenOrientation, realignAlpha, realignHeading);
};
/**
 * Turns the orientation in the device frame of reference into an orientation suitable for specifying the Terria camera orientation.
 *
 * @param {Float} alpha The alpha value of the device orientation in degrees (this is the alpha value in the device's frame of reference).
 * @param {Float} beta  The beta  value of the device orientation in degrees (this is the beta  value in the device's frame of reference).
 * @param {Float} gamma The gamma value of the device orientation in degrees (this is the gamma value in the device's frame of reference).
 * @param {Float} screenOrientation The screen orientation in degrees.
 * @param {Float} realignAlpha   The value of the alpha   value the last time realignment was completed (supply zero if realignment is not supported).
 * @param {Float} realignHeading The value of the heading value the last time realignment was completed (supply zero if realignment is not supported).
 * @return {Object} An object with the roll, pitch and heading stored into the orientation.
 * @private
 */


AugmentedVirtuality.prototype._computeTerriaOrientation = function (alpha, beta, gamma, screenOrientation, realignAlpha, realignHeading) {
  // Note: The algorithmic formulation in this function is for simplicity of mathematical expression, readability,
  //       maintainability and modification (i.e. it is easy to understand how to update or insert new offsets or features).
  //       This is not the simplest form which clearly flows from the current formuleation and clearly simplify the
  //       logic and operations but would increase the cost of future modifications and reduce the readability of the
  //       expression. It is not anticipated that the current verbose implementation would have a significant impact
  //       on performance or accuracy, but obviously there will be some impact on both and it can be simplified in
  //       future if needed.
  var rotation = _Matrix["default"].clone(_Matrix["default"].IDENTITY, rotation);

  var rotationIncrement; // Roll - Counteract the change in the (orientation) frame of reference when the screen is rotated and the
  //        rotation lock is not on (the browser reorients the frame of reference to align with the new screen
  //        orientation - where as we want it of the device relative to the world).

  rotationIncrement = _Matrix["default"].fromRotationZ(_Math["default"].toRadians(screenOrientation));

  _Matrix["default"].multiply(rotation, rotationIncrement, rotation); // Pitch - Align the device orientation frame with the ceasium orientation frame.


  rotationIncrement = _Matrix["default"].fromRotationX(_Math["default"].toRadians(90));

  _Matrix["default"].multiply(rotation, rotationIncrement, rotation); // Roll - Apply the deivce roll.


  rotationIncrement = _Matrix["default"].fromRotationZ(_Math["default"].toRadians(gamma));

  _Matrix["default"].multiply(rotation, rotationIncrement, rotation); // Pitch - Apply the deivce pitch.


  rotationIncrement = _Matrix["default"].fromRotationX(_Math["default"].toRadians(-beta));

  _Matrix["default"].multiply(rotation, rotationIncrement, rotation); // Heading - Apply the incremental deivce heading (from when start was last triggered).


  rotationIncrement = _Matrix["default"].fromRotationY(_Math["default"].toRadians(-(alpha - realignAlpha)));

  _Matrix["default"].multiply(rotation, rotationIncrement, rotation); // Heading - Use the offset when the orientation was last started.
  //           Note: This is logically different from the alpha value and can only be applied here in the same way
  //                 since Cesium camera is RPH (Heading last - most local). See Cesium camera rotation decomposition
  //                 for more information on the Cesium camera formuleation.


  rotationIncrement = _Matrix["default"].fromRotationY(_Math["default"].toRadians(realignHeading));

  _Matrix["default"].multiply(rotation, rotationIncrement, rotation); // Decompose rotation matrix into roll, pitch and heading to supply to Cesium camera.
  //
  // Use notation:
  //     R = Roll, P = Pitch, H = Heading
  //     SH = Sin(Heading), CH = Cos(Heading)
  //
  // Ceasium camera rotation = RPH:
  //     [ CR, -SR,   0][  1,   0,   0][ CH,   0,  SH]   [CRCH-SRSPSH, -SRCP, CRSH-SRSPCH]
  //     [ SR,  CR,   0][  0,  CP,  SP][  0,   1,   0] = [SRCH-CRSPSH,  CRCP, SRSH+CRSPCH]
  //     [  0,   0,   1][  0, -SP,  CP][-SH,   0,  CH]   [   -CPSH   ,   -SP,    CPCH    ]
  //     Note: The sign difference of the Sin terms in pitch is different to the standard right handed rotation since
  //           Cesium rotates pitch in the left handed direction. Both heading and roll are right handed rotations.
  //
  // Use the following notation to refer to elements in the Cesium camera rotation matrix:
  //     [R00, R10, R20]
  //     [R01, R11, R21]
  //     [R02, R12, R22]
  //
  // Also note: Tan(X) = Sin(X) / Cos(X)
  //
  // Decompose matrix:
  //    H = ATan(Tan(H)) = ATan(Sin(H)/Cos(H)) = ATan (SH / CH) = ATan(CPSH/CPCH) = ATan (-R02 / R22)
  //    R = ATan(Tan(R)) = ATan(Sin(R)/Cos(R)) = ATan (SR / CR) = ATan(SRCP/CRCP) = ATan (-R10 / R11)
  //    P = ATan(Tan(P)) = ATan(Sin(P)/Cos(P)) = ATan (SP / CP)
  //                                             SP = -R12
  //                                             Need to find CP:
  //                                                 CP = Sqrt(CP^2)
  //                                                    = Sqrt(CP^2*(CH^2+SH^2))              Since: (Cos@^2 + Sin@^2) = 1
  //                                                    = Sqrt((CP^2)*(CH^2) + (CP^2)*(SH^2)) Expand
  //                                                    = Sqrt((CPCH)^2 + (CPSH)^2)           Since: N^2*M^2 = (NM)^2
  //                                                    = Sqrt(R22^2 + (-R02)^2)              Substitute
  //                                                    = Sqrt(R22^2 + R02^2)                 Since: (-N)^2 = N^2
  //  So P = ATan (-R12 / Sqrt(R22^2 + R02^2))
  // Simplify notation for readability:


  var r10 = rotation[_Matrix["default"].COLUMN1ROW0];
  var r11 = rotation[_Matrix["default"].COLUMN1ROW1];
  var r02 = rotation[_Matrix["default"].COLUMN0ROW2];
  var r12 = rotation[_Matrix["default"].COLUMN1ROW2];
  var r22 = rotation[_Matrix["default"].COLUMN2ROW2];

  var heading = _Math["default"].toDegrees(Math.atan2(-r02, r22));

  var roll = _Math["default"].toDegrees(Math.atan2(-r10, r11));

  var pitch = _Math["default"].toDegrees(Math.atan2(-r12, Math.sqrt(r02 * r02 + r22 * r22))); // Create an object with the roll, pitch and heading we just computed.


  return {
    orientation: {
      roll: _Math["default"].toRadians(roll),
      pitch: _Math["default"].toRadians(pitch),
      heading: _Math["default"].toRadians(heading)
    }
  };
};
/**
 * Gets the current screen orientation.
 *
 * @return {Object} The current screen orientation in degrees.
 * @private
 */


AugmentedVirtuality.prototype._getCurrentScreenOrientation = function () {
  if ((0, _defined["default"])(screen.orientation) && (0, _defined["default"])(screen.orientation.angle)) {
    return screen.orientation.angle;
  }

  if ((0, _defined["default"])(window.orientation)) {
    return window.orientation;
  }

  return 0;
};

module.exports = AugmentedVirtuality;

/***/ }),

/***/ "./packages/terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool.jsx":
/*!*************************************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool.jsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createReactClass = _interopRequireDefault(__webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _ObserveModelMixin = _interopRequireDefault(__webpack_require__(/*! ../../ObserveModelMixin */ "./packages/terriajs/lib/ReactViews/ObserveModelMixin.js"));

var _augmented_virtuality_tool = _interopRequireDefault(__webpack_require__(/*! ./augmented_virtuality_tool.scss */ "./packages/terriajs/lib/ReactViews/Map/Navigation/augmented_virtuality_tool.scss"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ../../Icon */ "./packages/terriajs/lib/ReactViews/Icon.jsx"));

var _ViewerMode = _interopRequireDefault(__webpack_require__(/*! ../../../Models/ViewerMode */ "./packages/terriajs/lib/Models/ViewerMode.js"));

var _defined = _interopRequireDefault(__webpack_require__(/*! terriajs-cesium/Source/Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"));

var _AugmentedVirtuality = _interopRequireDefault(__webpack_require__(/*! ../../../Models/AugmentedVirtuality */ "./packages/terriajs/lib/Models/AugmentedVirtuality.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AugmentedVirtualityTool = (0, _createReactClass["default"])({
  displayName: "AugmentedVirtualityTool",
  mixins: [_ObserveModelMixin["default"]],
  propTypes: {
    terria: _propTypes["default"].object.isRequired,
    viewState: _propTypes["default"].object.isRequired,
    experimentalWarning: _propTypes["default"].bool
  },
  getInitialState: function getInitialState() {
    return {
      augmentedVirtuality: new _AugmentedVirtuality["default"](this.props.terria),
      experimentalWarningShown: false,
      realignHelpShown: false,
      resetRealignHelpShown: false
    };
  },
  handleClickAVTool: function handleClickAVTool() {
    // Make the AugmentedVirtuality module avaliable elsewhere.
    this.props.terria.augmentedVirtuality = this.state.augmentedVirtuality;

    if ((0, _defined["default"])(this.props.experimentalWarning) && this.props.experimentalWarning !== false && !this.state.experimentalWarningShown) {
      this.setState({
        experimentalWarningShown: true
      });
      this.props.viewState.notifications.push({
        title: "Experimental Feature: Augmented Reality",
        message: "Augmented Reality mode is currently in beta. " + "This mode is only designed for use on the latest high end mobile devices. " + "<br /><br />WARNING: This mode can consume a lot of data, please be mindful of data usage charges from your network provider. " + "<br /><br />The accuracy of this mode depends on the accuracy of your mobile devices internal compass.",
        confirmText: "Got it"
      });
    }

    this.state.augmentedVirtuality.toggleEnabled();
  },
  handleClickRealign: function handleClickRealign() {
    if (!this.state.realignHelpShown) {
      this.setState({
        realignHelpShown: true
      });
      this.props.viewState.notifications.push({
        title: "Manual Alignment",
        message: "Align your mobile device so that it corresponds with the maps current alignment, then click the blinking compass." + " If no landmarks to align with are currently visible on the map, you can move the map using" + " drag and pinch actions until a recognisable landmark is visible before aligning the device with the map." + '<br /><div><img width="100%" src="./build/TerriaJS/images/ar-realign-guide.gif" /></div>' + "<br />Tip: The sun or moon are often good landmarks to align with if you are in a location you aren\x27t familiar with (be careful not to look at the sun - it can hurt your eyes).",
        confirmText: "Got it"
      });
    }

    this.state.augmentedVirtuality.toggleManualAlignment();
  },
  handleClickResetRealign: function handleClickResetRealign() {
    if (!this.state.resetRealignHelpShown) {
      this.setState({
        resetRealignHelpShown: true
      });
      this.props.viewState.notifications.push({
        title: "Reset Alignment",
        message: "Resetting to compass alignment. If the alignment doesn\x27t match the real world try waving" + " your device in a figure 8 motion to recalibrate device. This can be done at any time." + "<br /> <br />Avoid locations with magnetic fields or metal objects as these may disorient the devices compass.",
        confirmText: "Got it"
      });
    }

    this.state.augmentedVirtuality.resetAlignment();
  },
  handleClickHover: function handleClickHover() {
    this.state.augmentedVirtuality.toggleHoverHeight();
  },
  render: function render() {
    var enabled = this.state.augmentedVirtuality.enabled;
    var toggleImage = _Icon["default"].GLYPHS.arOff;
    var toggleStyle = _augmented_virtuality_tool["default"].btn;

    if (enabled) {
      toggleImage = _Icon["default"].GLYPHS.arOn;
      toggleStyle = _augmented_virtuality_tool["default"].btnPrimary;
    }

    var realignment = this.state.augmentedVirtuality.manualAlignment;
    var realignmentStyle = _augmented_virtuality_tool["default"].btn;

    if (realignment) {
      realignmentStyle = _augmented_virtuality_tool["default"].btnBlink;
    }

    var hoverLevel = this.state.augmentedVirtuality.hoverLevel;
    var hoverImage = _Icon["default"].GLYPHS.arHover0; // Note: We use the image of the next level that we will be changing to, not the level the we are currently at.

    switch (hoverLevel) {
      case 0:
        hoverImage = _Icon["default"].GLYPHS.arHover0;
        break;

      case 1:
        hoverImage = _Icon["default"].GLYPHS.arHover1;
        break;

      case 2:
        hoverImage = _Icon["default"].GLYPHS.arHover2;
        break;
    }

    return this.props.terria.viewerMode !== _ViewerMode["default"].Leaflet ? _react["default"].createElement("div", {
      className: _augmented_virtuality_tool["default"].augmentedVirtualityTool
    }, _react["default"].createElement("button", {
      type: "button",
      className: toggleStyle,
      title: "augmented reality tool",
      onClick: this.handleClickAVTool
    }, _react["default"].createElement(_Icon["default"], {
      glyph: toggleImage
    })), enabled ? [_react["default"].createElement("button", {
      type: "button",
      className: _augmented_virtuality_tool["default"].btn,
      title: "toggle hover height",
      onClick: this.handleClickHover,
      key: "0"
    }, _react["default"].createElement(_Icon["default"], {
      glyph: hoverImage
    })), !this.state.augmentedVirtuality.manualAlignmentSet ? _react["default"].createElement("button", {
      type: "button",
      className: realignmentStyle,
      title: "toggle manual alignment",
      onClick: this.handleClickRealign,
      key: "1"
    }, _react["default"].createElement(_Icon["default"], {
      glyph: _Icon["default"].GLYPHS.arRealign
    })) : null, this.state.augmentedVirtuality.manualAlignmentSet && !realignment ? _react["default"].createElement("button", {
      type: "button",
      className: _augmented_virtuality_tool["default"].btn,
      title: "reset compass alignment",
      onClick: this.handleClickResetRealign,
      key: "2"
    }, _react["default"].createElement(_Icon["default"], {
      glyph: _Icon["default"].GLYPHS.arResetAlignment
    })) : null] : null) : null;
  }
});
module.exports = AugmentedVirtualityTool;

/***/ }),

/***/ "./packages/terriajs/lib/ReactViews/Map/Navigation/augmented_virtuality_tool.scss":
/*!****************************************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/Map/Navigation/augmented_virtuality_tool.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"btn":"tjs-augmented_virtuality_tool__btn tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-primary":"tjs-augmented_virtuality_tool__btn-primary tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btnPrimary":"tjs-augmented_virtuality_tool__btn-primary tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-blink":"tjs-augmented_virtuality_tool__btn-blink tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btnBlink":"tjs-augmented_virtuality_tool__btn-blink tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-primary--hover":"tjs-augmented_virtuality_tool__btn-primary--hover","btnPrimaryHover":"tjs-augmented_virtuality_tool__btn-primary--hover","blinker":"tjs-augmented_virtuality_tool__blinker","toolButton":"tjs-augmented_virtuality_tool__toolButton","augmentedVirtualityTool":"tjs-augmented_virtuality_tool__augmentedVirtualityTool tjs-tool_button__toolButton"};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVnbWVudGVkVmlydHVhbGl0eS5UZXJyaWFNYXAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvTW9kZWxzL0F1Z21lbnRlZFZpcnR1YWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGVycmlhanMvbGliL1JlYWN0Vmlld3MvTWFwL05hdmlnYXRpb24vQXVnbWVudGVkVmlydHVhbGl0eVRvb2wuanN4Iiwid2VicGFjazovLy8uL3BhY2thZ2VzL3RlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL01hcC9OYXZpZ2F0aW9uL2F1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2wuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9kZWZpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL2RlZmluZWRcIikpO1xuXG52YXIgX2RlZmF1bHRWYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9kZWZhdWx0VmFsdWVcIikpO1xuXG52YXIgX2tub2Nrb3V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9UaGlyZFBhcnR5L2tub2Nrb3V0XCIpKTtcblxudmFyIF9NYXRoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL01hdGguanNcIikpO1xuXG52YXIgX01hdHJpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9NYXRyaXgzLmpzXCIpKTtcblxudmFyIF9DYXJ0ZXNpYW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvQ2FydGVzaWFuMy5qc1wiKSk7XG5cbnZhciBfRWxsaXBzb2lkVGVycmFpblByb3ZpZGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL0VsbGlwc29pZFRlcnJhaW5Qcm92aWRlclwiKSk7XG5cbnZhciBfc2FtcGxlVGVycmFpbk1vc3REZXRhaWxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInRlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9zYW1wbGVUZXJyYWluTW9zdERldGFpbGVkXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogTWFuYWdlcyBzdGF0ZSBmb3IgQXVnbWVudGVkIFZpcnR1YWxpdHkgbW9kZS5cbiAqXG4gKiBUaGlzIG1vZGUgdXNlcyB0aGUgZGV2aWNlcyBvcmllbnRhdGlvbiBzZW5zb3JzIHRvIGNoYW5nZSB0aGUgdmlld2VycyB2aWV3cG9ydCB0byBtYXRjaCB0aGUgY2hhbmdlIGluIG9yaWVudGF0aW9uLlxuICpcbiAqIFRlcm0gQXVnbWVudGVkIFZpcnR1YWxpdHk6XG4gKiBcIlRoZSB1c2Ugb2YgcmVhbC13b3JsZCBzZW5zb3IgaW5mb3JtYXRpb24gKGUuZy4sIGd5cm9zY29wZXMpIHRvIGNvbnRyb2wgYSB2aXJ0dWFsIGVudmlyb25tZW50IGlzIGFuIGFkZGl0aW9uYWwgZm9ybVxuICogb2YgYXVnbWVudGVkIHZpcnR1YWxpdHksIGluIHdoaWNoIGV4dGVybmFsIGlucHV0cyBwcm92aWRlIGNvbnRleHQgZm9yIHRoZSB2aXJ0dWFsIHZpZXcuXCJcbiAqIHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NaXhlZF9yZWFsaXR5fVxuICpcbiAqIEBhbGlhcyBBdWdtZW50ZWRWaXJ0dWFsaXR5XG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIEF1Z21lbnRlZFZpcnR1YWxpdHkgPSBmdW5jdGlvbiBBdWdtZW50ZWRWaXJ0dWFsaXR5KHRlcnJpYSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHRoaXMuX3RlcnJpYSA9IHRlcnJpYTsgLy8gTm90ZTogV2UgY3JlYXRlIGEgcGVyc2lzdGFudCBvYmplY3QgYW5kIGRlZmluZSBhIHRyYW5zaWVudCBwcm9wZXJ0eSwgc2luY2Uga25vY2tvdXQgbmVlZHMgYSBwZXJzaXN0YW50IHZhcmlhYmxlXG4gIC8vICAgICAgIHRvIHRyYWNrLCBidXQgZm9yIHN0YXRlIHdlIHdhbnQgYSAnbWF5YmUnIGludGVydmFsSWQuXG5cbiAgdGhpcy5fZXZlbnRMb29wU3RhdGUgPSB7fTtcbiAgdGhpcy5fbWFudWFsQWxpZ25tZW50ID0gZmFsc2U7XG4gIHRoaXMuX21heGltdW1VcGRhdGVzUGVyU2Vjb25kID0gQXVnbWVudGVkVmlydHVhbGl0eS5ERUZBVUxUX01BWElNVU1fVVBEQVRFU19QRVJfU0VDT05EO1xuICB0aGlzLl9vcmllbnRhdGlvblVwZGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5fYWxwaGEgPSAwO1xuICB0aGlzLl9iZXRhID0gMDtcbiAgdGhpcy5fZ2FtbWEgPSAwO1xuICB0aGlzLl9yZWFsaWduQWxwaGEgPSAwO1xuICB0aGlzLl9yZWFsaWduSGVhZGluZyA9IDA7IC8vIFNldCB0aGUgZGVmYXVsdCBoZWlnaHQgdG8gYmUgdGhlIGxhc3QgaGVpZ2h0IHNvIHRoYXQgd2hlbiB3ZSBmaXJzdCB0b2dnbGUgKGFuZCBpbmNyZW1lbnQpIHdlIGN5Y2xlIGFuZCBnbyB0byB0aGUgZmlyc3QgaGVpZ2h0LlxuXG4gIHRoaXMuX2hvdmVyTGV2ZWwgPSBBdWdtZW50ZWRWaXJ0dWFsaXR5LlBSRVNFVF9IRUlHSFRTLmxlbmd0aCAtIDE7IC8vIEFsd2F5cyBydW4gdGhlIGRldmljZSBvcmllbnRhdGlvbiBldmVudCwgdGhpcyB3YXkgYXMgc29vbiBhcyB3ZSBlbmFibGUgd2Uga25vdyB3aGVyZSB3ZSBhcmUgYW5kIHNldCB0aGVcbiAgLy8gb3JpZW50YXRpb24gcmF0aGVyIHRoZW4gaGF2aW5nIHRvIHdhaXQgZm9yIHRoZSBuZXh0IHVwZGF0ZS5cbiAgLy8gVGhlIGZvbGxvd2luZyBpcyBkaXNhYmxlZCBiZWNhdXNlIGNocm9tZSBkb2VzIG5vdCBjdXJyZW50bHkgc3VwcG9ydCBkZXZpY2VvcmllbnRhdGlvbmFic29sdXRlIGNvcnJlY3RseTpcbiAgLy8gaWYgKCdvbmRldmljZW9yaWVudGF0aW9uYWJzb2x1dGUnIGluIHdpbmRvdylcbiAgLy8ge1xuICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uYWJzb2x1dGUnLCBmdW5jdGlvbihldmVudCkge3RoYXQuX29yaWVudGF0aW9uVXBkYXRlKGV2ZW50KTt9ICk7XG4gIC8vIH1cbiAgLy8gZWxzZVxuXG4gIGlmIChcIm9uZGV2aWNlb3JpZW50YXRpb25cIiBpbiB3aW5kb3cpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGhhdC5fc3RvcmVPcmllbnRhdGlvbihldmVudCk7XG4gICAgfSk7XG4gIH0gLy8gTWFrZSB0aGUgdmFyaWFibGVzIHVzZWQgYnkgdGhlIG9iamVjdCBwcm9wZXJ0aWVzIGtub2Nrb3V0IG9ic2VydmFibGUgc28gdGhhdCBjaGFuZ2VzIGluIHRoZSBzdGF0ZSBub3RpZnkgdGhlIFVJXG4gIC8vIGFuZCBjYXVzZSBhIFVJIHVwZGF0ZS4gTm90ZTogVGhlc2UgYXJlIGFsbCBvZiB0aGUgdmFyaWFibGVzIHVzZWQganVzdCBieSB0aGUgZ2V0dGVycyAobm90IHRoZSBzZXR0ZXJzKSwgc2luY2VcbiAgLy8gdGhlc2UgdW5xaXF1ZWx5IGRlZmluZSB3aGF0IHRoZSBjdXJyZW50IHN0YXRlIGlzIGFuZCBhcmUgdGhlIG9ubHkgdGhpbmdzIHRoYXQgY2FuIGVmZmVjdC9jYXVzZSB0aGUgc3RhdGUgdG8gY2hhbmdlXG4gIC8vIChub3RlOiBfZXZlbnRMb29wU3RhdGUgaXMgaGlkZGVuIGJlaGluZCAuX2V2ZW50TG9vcFJ1bm5pbmcoKSApLlxuXG5cbiAgX2tub2Nrb3V0W1wiZGVmYXVsdFwiXS50cmFjayh0aGlzLCBbXCJfZXZlbnRMb29wU3RhdGVcIiwgXCJfbWFudWFsQWxpZ25tZW50XCIsIFwiX21heGltdW1VcGRhdGVzUGVyU2Vjb25kXCIsIFwiX3JlYWxpZ25BbHBoYVwiLCBcIl9yZWFsaWduSGVhZGluZ1wiLCBcIl9ob3ZlckxldmVsXCJdKTsgLy8gTm90ZTogVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkIGFzIGtub2Nrb3V0IHByb3BlcnRpZXMgc28gdGhhdCB0aGV5IGNhbiBiZSB1c2VkIHRvIHRyaWdnZXIgdXBkYXRlcyBvbiB0aGUgVUkuXG5cbiAgLyoqXG4gICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIEF1Z21lbnRlZCBWaXJ0dWFsaXR5IG1vZGUgaXMgY3VycmVudGx5IGVuYWJsZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpLlxuICAgKlxuICAgKiBOb3RlOiBJZiB7QGxpbmsgQXVnbWVudGVkVmlydHVhbGl0eSNtYW51YWxBbGlnbm1lbnR9IGlzIGVuYWJsZWQgYW5kIHRoZSBzdGF0ZSBpcyBjaGFuZ2VkIGl0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBdWdtZW50ZWRWaXJ0dWFsaXR5LnByb3RvdHlwZVxuICAgKiBAbWVtYmVyIHtCb29sZWFufSBlbmFibGVkXG4gICAqL1xuXG5cbiAgX2tub2Nrb3V0W1wiZGVmYXVsdFwiXS5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuYWJsZWRcIiwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TG9vcFJ1bm5pbmcoKSB8fCB0aGlzLl9tYW51YWxBbGlnbm1lbnQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChlbmFibGUpIHtcbiAgICAgIGlmIChlbmFibGUgIT09IHRydWUpIHtcbiAgICAgICAgZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRBbGlnbm1lbnQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuYWJsZSAhPT0gdGhpcy5lbmFibGVkKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBjaGFuZ2luZyB0aGUgZW5hYmxlZCBzdGF0ZSB0aGVuIGRpc2FibGUgbWFudWFsIGFsaWdubWVudC5cbiAgICAgICAgLy8gV2Ugb25seSBkbyB0aGlzIGlmIHdlIGFyZSBjaGFuZ2luZyB0aGUgZW5hYmxlZCBzdGF0ZSBzbyB0aGF0IHRoZSBjbGllbnQgY2FuIHJlcGVhdGVkbHkgY2FsbCB0aGVcbiAgICAgICAgLy8gc2V0dGluZyB3aXRob3V0IGhhdmluZyBhbnkgZWZmZWN0IGlmIHRoZXkgYXJlbid0IGNoYW5naW5nIHRoZSBlbmFibGVkIHN0YXRlLCBidXQgc28gdGhhdCBldmVyeSB0aW1lXG4gICAgICAgIC8vIHRoYXQgdGhlIHN0YXRlIGlzIGNoYW5nZWQgdGhhdCB0aGUgbWFudWFsIGFsaWdubWVudCBpcyB0dXJuZWQgYmFjayBvZmYgaW5pdGFsbHkuXG4gICAgICAgIHRoaXMuX21hbnVhbEFsaWdubWVudCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3N0YXJ0RXZlbnRMb29wKGVuYWJsZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIG1hbnVhbCByZWFsaWdubWVudCBtb2RlIGlzIGN1cnJlbnRseSBlbmFibGVkICh0cnVlKSBvciBub3QgKGZhbHNlKS5cbiAgICpcbiAgICogQG1lbWJlck9mIEF1Z21lbnRlZFZpcnR1YWxpdHkucHJvdG90eXBlXG4gICAqIEBtZW1iZXIge0Jvb2xlYW59IG1hbnVhbEFsaWdubWVudFxuICAgKi9cblxuXG4gIF9rbm9ja291dFtcImRlZmF1bHRcIl0uZGVmaW5lUHJvcGVydHkodGhpcywgXCJtYW51YWxBbGlnbm1lbnRcIiwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldE1hbnVhbEFsaWdubWVudCgpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhcnRFbmQpIHtcbiAgICAgIHRoaXMuX3NldE1hbnVhbEFsaWdubWVudChzdGFydEVuZCk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIEdldHMgd2hldGhlciBhIG1hbnVhbCByZWFsaWdubWVudCBoYXMgYmVlbiBzcGVjaWZpZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGVcbiAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWFudWFsQWxpZ25tZW50U2V0XG4gICAqL1xuXG5cbiAgX2tub2Nrb3V0W1wiZGVmYXVsdFwiXS5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1hbnVhbEFsaWdubWVudFNldFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhbGlnbkFscGhhICE9PSAwLjAgfHwgdGhpcy5fcmVhbGlnbkhlYWRpbmcgIT09IDAuMDtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogR2V0cyB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaG92ZXIgbGV2ZWwuXG4gICAqXG4gICAqIFVzZSA8Y29kZT5BdWdtZW50ZWRWaXJ0dWFsaXR5LlBSRVNFVF9IRUlHSFRTLmxlbmd0aDwvY29kZT4gdG8gZmluZCB0aGUgdG90YWwgYXZhbGlhYmxlIGxldmVscy5cbiAgICpcbiAgICogQG1lbWJlck9mIEF1Z21lbnRlZFZpcnR1YWxpdHkucHJvdG90eXBlXG4gICAqIEBtZW1iZXIge2ludH0gaG92ZXJMZXZlbFxuICAgKi9cblxuXG4gIF9rbm9ja291dFtcImRlZmF1bHRcIl0uZGVmaW5lUHJvcGVydHkodGhpcywgXCJob3ZlckxldmVsXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ob3ZlckxldmVsO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBHZXRzIG9yIHNldHMgdGhlIHRoZSBtYXhpbXVtIG51bWJlciBvZiB0aW1lcyB0aGF0IHRoZSBjYW1lcmEgb3JpZW50YXRpb24gd2lsbCBiZSB1cGRhdGVkIHBlciBzZWNvbmQuIFRoaXMgaXNcbiAgICogdGhlIG51bWJlciBvZiBjYW1lcmEgb3JpZW50YXRpb24gdXBkYXRlcyBwZXIgc2Vjb25kcyBpcyBjYXBwZWQgdG8gKGV4cGxpY2l0bHkgdGhlIG51bWJlciBvZiB0aW1lcyB0aGVcbiAgICogb3JpZW50YXRpb24gaXMgdXBkYXRlZCBwZXIgc2Vjb25kIG1pZ2h0IGJlIGxlc3MgYnV0IGl0IHdvbid0IGJlIG1vcmUgdGhlbiB0aGlzIG51bWJlcikuIFdlIHdhbnQgdGhlIG51bWJlciBvZlxuICAgKiB0aW1lcyB0aGF0IHRoZSBvcmllbnRhdGlvbiBpcyB1cGRhdGVkIGNhcHBlZCBzbyB0aGF0IHdlIGRvbid0IGNvbnN1bWUgdG8gbXVjaCBiYXR0ZXJ5IGxpZmUgdXBkYXRpbmcgdG9cbiAgICogZnJlcXVlbnRseSwgYnV0IHJlc3BvbnNpdmVuZXNzIGlzIHN0aWxsIGFjY2VwdGFibGUuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBdWdtZW50ZWRWaXJ0dWFsaXR5LnByb3RvdHlwZVxuICAgKiBAbWVtYmVyIHtGbG9hdH0gbWF4aW11bVVwZGF0ZXNQZXJTZWNvbmRcbiAgICovXG5cblxuICBfa25vY2tvdXRbXCJkZWZhdWx0XCJdLmRlZmluZVByb3BlcnR5KHRoaXMsIFwibWF4aW11bVVwZGF0ZXNQZXJTZWNvbmRcIiwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21heGltdW1VcGRhdGVzUGVyU2Vjb25kO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobWF4aW11bVVwZGF0ZXNQZXJTZWNvbmQpIHtcbiAgICAgIHRoaXMuX21heGltdW1VcGRhdGVzUGVyU2Vjb25kID0gbWF4aW11bVVwZGF0ZXNQZXJTZWNvbmQ7IC8vIElmIHdlIGFyZSBjdXJyZW50bHkgZW5hYmxlZCByZXNldCB0byB1cGRhdGUgdGhlIHRpbWluZyBpbnRlcnZhbCB1c2VkLlxuXG4gICAgICBpZiAodGhpcy5fZXZlbnRMb29wUnVubmluZygpKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0RXZlbnRMb29wKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9zdGFydEV2ZW50TG9vcCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xufTtcbi8qKlxuICogR2V0cyB0aGUgdGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHRoYXQgdGhlIGNhbWVyYSBvcmllbnRhdGlvbiB3aWxsIGJlIHVwZGF0ZWQgcGVyIHNlY29uZCBieSBkZWZhdWx0LiBUaGlzIGlzIHRoZVxuICogbnVtYmVyIG9mIGNhbWVyYSBvcmllbnRhdGlvbiB1cGRhdGVzIHBlciBzZWNvbmRzIGlzIGNhcHBlZCB0byBieSBkZWZhdWx0IChleHBsaWNpdGx5IHRoZSBudW1iZXIgb2YgdGltZXMgdGhlXG4gKiBvcmllbnRhdGlvbiBpcyB1cGRhdGVkIHBlciBzZWNvbmQgbWlnaHQgYmUgbGVzcyBidXQgaXQgd29uJ3QgYmUgbW9yZSB0aGVuIHRoaXMgbnVtYmVyKS4gV2Ugd2FudCB0aGUgbnVtYmVyIG9mIHRpbWVzXG4gKiB0aGF0IHRoZSBvcmllbnRhdGlvbiBpcyB1cGRhdGVkIGNhcHBlZCBzbyB0aGF0IHdlIGRvbid0IGNvbnN1bWUgdG8gbXVjaCBiYXR0ZXJ5IGxpZmUgdXBkYXRpbmcgdG8gZnJlcXVlbnRseSwgYnV0XG4gKiByZXNwb25zaXZlbmVzcyBpcyBzdGlsbCBhY2NlcHRhYmxlLlxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5ERUZBVUxUX01BWElNVU1fVVBEQVRFU19QRVJfU0VDT05EID0gMTAuMDtcbi8qKlxuICogVGhlIG1pbmltdW0gaGVpZ2h0IHRoYXQgdGhlIHZpZXdlciBpcyBhbGxvd2VkIHRvIGhvdmVyIGF0LlxuICovXG5cbkF1Z21lbnRlZFZpcnR1YWxpdHkuTUlOSU1VTV9IT1ZFUl9IRUlHSFQgPSAyMC4wO1xuLyogVGhlc2UgYXJlIHRoZSBoZWlnaHRzIHRoYXQgd2UgY2FuIHRvZ2dsZSB0aHJvdWdoIChpbiBtZXRlcnMgLSBhYm92ZSB0aGUgc3VyZmFjZSBoZWlnaHQpLlxuICovXG5cbkF1Z21lbnRlZFZpcnR1YWxpdHkuUFJFU0VUX0hFSUdIVFMgPSBbMTAwMCwgMjUwLCAyMF07XG4vKipcbiAqIFRvZ2dsZXMgd2hldGhlciB0aGUgQXVnbWVudGVkVmlydXR1YWxpdHkgbW9kZSBpcyBlbmFibGVkIG9yIGRpc2FibGVkLlxuICovXG5cbkF1Z21lbnRlZFZpcnR1YWxpdHkucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW5hYmxlZCA9ICF0aGlzLmVuYWJsZWQ7XG59O1xuLyoqXG4gKiBUb2dnbGVzIHdoZXRoZXIgbWFudWFsIGFsaWduZW1lbnQgaXMgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAqL1xuXG5cbkF1Z21lbnRlZFZpcnR1YWxpdHkucHJvdG90eXBlLnRvZ2dsZU1hbnVhbEFsaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5tYW51YWxBbGlnbm1lbnQgPSAhdGhpcy5tYW51YWxBbGlnbm1lbnQ7XG59O1xuLyoqXG4gKiBSZXNldHMgdGhlIGFsaWdubWVudCBzbyB0aGF0IHRoZSBhbGlnbmVtZW50IG1hdGNoZXMgdGhlIGRldmljZXMgYWJzb2x1dGUgYWxpZ25tZW50LlxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUucmVzZXRBbGlnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX29yaWVudGF0aW9uVXBkYXRlZCA9IHRydWU7XG4gIHRoaXMuX3JlYWxpZ25BbHBoYSA9IDA7XG4gIHRoaXMuX3JlYWxpZ25IZWFkaW5nID0gMDtcbn07XG4vKipcbiAqIFRvZ2dsZXMgdGhlIHZpZXdlciBiZXR3ZWVuIGEgcmFuZ2Ugb2YgcHJlZGVmaW5lZCBoZWlnaHRzLCBzZXR0aW5nIHRoZSBjYW1lcmFzIG9yaWVudGF0aW9uIHNvIHRoYXQgaXQgbWF0Y2hlcyB0aGVcbiAqIGNvcnJlY3Qgb3JpZW50YXRpb24uXG4gKi9cblxuXG5BdWdtZW50ZWRWaXJ0dWFsaXR5LnByb3RvdHlwZS50b2dnbGVIb3ZlckhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5faG92ZXJMZXZlbCA9ICh0aGlzLl9ob3ZlckxldmVsICsgMSkgJSBBdWdtZW50ZWRWaXJ0dWFsaXR5LlBSRVNFVF9IRUlHSFRTLmxlbmd0aDtcbiAgdGhpcy5ob3ZlcihBdWdtZW50ZWRWaXJ0dWFsaXR5LlBSRVNFVF9IRUlHSFRTW3RoaXMuX2hvdmVyTGV2ZWxdKTtcbn07XG4vKipcbiAqIE1vdmVzIHRoZSB2aWV3ZXIgdG8gYSBzcGVjaWZpZWQgaGVpZ2h0LCBzZXR0aW5nIHRoZSBvcmllbnRhdGlvbiBzbyB0aGF0IGl0IG1hdGNoZXMgdGhlIGNvcnJlY3QgQXVnbWVudGVkIFZpcnR1YWxpdHlcbiAqIG9yaWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RmxvYXR9IGhlaWdodCBUaGUgaGVpZ2h0IGluIE1ldGVycyBhYm92ZSB0aGUgZ2xvYmUgc3VyZmFjZS4gTm90ZTogSWYgaGVpZ2h0IGlzIGJlbG93XG4gKiAgICAgICAgICAgICAgICAgICAgICAge0BsaW5rIEF1Z21lbnRlZFZpcnR1YWxpdHkuTUlOSU1VTV9IT1ZFUl9IRUlHSFR9IHRoZSBoZWlnaHQgd2lsbCBiZSBzZXQgdG9cbiAqICAgICAgICAgICAgICAgICAgICAgICB7QGxpbmsgQXVnbWVudGVkVmlydHVhbGl0eS5NSU5JTVVNX0hPVkVSX0hFSUdIVH0gdG8gYXZvaWQgdmlzdWFsIGFydGlmYWN0cyB3aGVuIHRoZSB2aWV3ZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICBiZWNvbWVzIHRvIGNsb3NlIHRvIHRoZSBzdXJmYWNlLlxuICogQHBhcmFtIHtDYXJ0b2dyYXBoaWN9IFtwb3NpdGlvbl0gVGhlIGxvY2F0aW9uIHRvIGhvdmVyIG92ZXIuIElmIG5vdCBzcGVjaWZpZWQgdGhlIGN1cnJlbnQgY2FtZXJhIGxvY2F0aW9uIHdpbGwgYmUgdXNlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZseVRvPXRydWVdIFdoZXRoZXIgdG8gZmx5IHRvIHRoZSBsb2NhdGlvbiAodHJ1ZSkgb3Igd2hldGhlciB0byBqdW1wIHRvIHRoZSBsb2NhdGlvbiAoZmFsc2UpLlxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUuaG92ZXIgPSBmdW5jdGlvbiAoaGVpZ2h0LCBwb3NpdGlvbiwgZmx5VG8pIHtcbiAgdmFyIHRoYXQgPSB0aGlzOyAvLyBHZXQgYWNjZXNzIHRvIHRoZSBjYW1lcmEuLi5pZiBpdCBpcyBub3QgYXZhbGlhYmxlIHdlIGNhbid0IHNldCB0aGUgbmV3IGhlaWdodCBzbyBqdXN0IHJldHVybiBub3cuXG5cbiAgaWYgKCEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtKSB8fCAhKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkodGhpcy5fdGVycmlhLmNlc2l1bS52aWV3ZXIpIHx8ICEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtLnZpZXdlci5jYW1lcmEpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNhbWVyYSA9IHRoaXMuX3RlcnJpYS5jZXNpdW0udmlld2VyLmNhbWVyYTtcblxuICBpZiAoISgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHBvc2l0aW9uKSkge1xuICAgIHBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uQ2FydG9ncmFwaGljLmNsb25lKCk7XG4gIH1cblxuICBmbHlUbyA9ICgwLCBfZGVmYXVsdFZhbHVlW1wiZGVmYXVsdFwiXSkoZmx5VG8sIHRydWUpOyAvLyBDbGFtcCB0aGUgbWluaW11bSBob3ZlciBoZWlnaHQgKGhlaWdodHMgYmVsb3cgdGhpcyB2YWx1ZSBjb3VsZCBsZWFkIHRvIHBvb3IgdmlzdWFsIGFydGlmYWN0cykuXG5cbiAgaWYgKGhlaWdodCA8IEF1Z21lbnRlZFZpcnR1YWxpdHkuTUlOSU1VTV9IT1ZFUl9IRUlHSFQpIHtcbiAgICBoZWlnaHQgPSBBdWdtZW50ZWRWaXJ0dWFsaXR5Lk1JTklNVU1fSE9WRVJfSEVJR0hUO1xuICB9IC8vIFJlc2V0IHRoZSB2aWV3ZXIgaGVpZ2h0LlxuXG5cbiAgZnVuY3Rpb24gZmx5VG9IZWlnaHQoc3VyZmFjZUhlaWdodCkge1xuICAgIGlmICgoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKShzdXJmYWNlSGVpZ2h0KSkge1xuICAgICAgaGVpZ2h0ICs9IHN1cmZhY2VIZWlnaHQ7XG4gICAgfVxuXG4gICAgdmFyIG5ld1Bvc2l0aW9uID0gX0NhcnRlc2lhbltcImRlZmF1bHRcIl0uZnJvbVJhZGlhbnMocG9zaXRpb24ubG9uZ2l0dWRlLCBwb3NpdGlvbi5sYXRpdHVkZSwgaGVpZ2h0KTtcblxuICAgIHZhciBwb3NlID0gdGhhdC5fZ2V0Q3VycmVudE9yaWVudGF0aW9uKCk7XG5cbiAgICBwb3NlLmRlc3RpbmF0aW9uID0gbmV3UG9zaXRpb247XG5cbiAgICBpZiAoZmx5VG8pIHtcbiAgICAgIGNhbWVyYS5mbHlUbyhwb3NlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FtZXJhLnNldFZpZXcocG9zZSk7XG4gICAgfSAvLyBOZWVkZWQgb24gbW9iaWxlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSByZW5kZXIgaXMgbWFya2VkIGFzIGRpcnR5IHNvIHRoYXQgb25jZSBBViBtb2RlIGhhcyBiZWVuIGRpc2FibGVkIGZvciBhXG4gICAgLy8gd2hpbGUgYW5kIHRoZW4gaXMgcmVlbmFibGVkIHRoZSAuc2V0VmlldygpIGZ1bmN0aW9uIHN0aWxsIGhhcyBlZmZlY3QgKG90aGVyd2lzZSBkaXNwaXRlIHRoZSBjYWxsIHRoZSAuc2V0VmlldygpXG4gICAgLy8gdGhlIHZpZXcgb3JpZW50YXRpb24gZG9lcyBub3QgdmlzdWFsbHkgdXBkYXRlIHVudGlsIHRoZSB1c2VyIG1hbnVhbHkgbW92ZXMgdGhlIGNhbWVyYSBwb3NpdGlvbikuXG5cblxuICAgIHRoYXQuX3RlcnJpYS5jdXJyZW50Vmlld2VyLm5vdGlmeVJlcGFpbnRSZXF1aXJlZCgpO1xuICB9IC8vIEdldCB0aGUgZ3JvdW5kIHN1cmZhY2UgaGVpZ2h0IGF0IHRoaXMgbG9jYXRpb24gYW5kIG9mZnNldCB0aGUgaGVpZ2h0IGJ5IGl0LlxuXG5cbiAgaWYgKCEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtKSB8fCAhKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkodGhpcy5fdGVycmlhLmNlc2l1bS5zY2VuZSkgfHwgISgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHRoaXMuX3RlcnJpYS5jZXNpdW0uc2NlbmUudGVycmFpblByb3ZpZGVyKSB8fCB0aGlzLl90ZXJyaWEuY2VzaXVtLnNjZW5lLnRlcnJhaW5Qcm92aWRlciBpbnN0YW5jZW9mIF9FbGxpcHNvaWRUZXJyYWluUHJvdmlkZXJbXCJkZWZhdWx0XCJdKSB7XG4gICAgLy8gSWYgd2UgY2FuJ3QgZ2V0IGFjY2VzcyB0byB0aGUgdGVycmFpbiBwcm92aWRlciBvciB3ZSBjYW4gZ2V0IGFjY2VzcyB0byB0aGUgdGVycmFpbiBwcm92aWRlciBhbmQgdGhlIHByb3ZpZGVyIGlzIGp1c3QgdGhlIEVsbGlwc29pZCB0aGVuIHVzZSB0aGUgaGVpZ2h0IG9mIDAuXG4gICAgZmx5VG9IZWlnaHQoMCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRlcnJhaW5Qcm92aWRlciA9IHRoaXMuX3RlcnJpYS5jZXNpdW0uc2NlbmUudGVycmFpblByb3ZpZGVyO1xuICAgICgwLCBfc2FtcGxlVGVycmFpbk1vc3REZXRhaWxlZFtcImRlZmF1bHRcIl0pKHRlcnJhaW5Qcm92aWRlciwgW3Bvc2l0aW9uXSkudGhlbihmdW5jdGlvbiAodXBkYXRlZFBvc2l0aW9uKSB7XG4gICAgICBmbHlUb0hlaWdodCh1cGRhdGVkUG9zaXRpb25bMF0uaGVpZ2h0KTtcbiAgICB9KTtcbiAgfVxufTtcbi8qKlxuICogTW92ZXMgdGhlIHZpZXdlciB0byBhIHNwZWNpZmllZCBsb2NhdGlvbiB3aGlsZSBtYWludGFpbmluZyB0aGUgY3VycmVudCBoZWlnaHQgYW5kIHRoZSBjb3JyZWN0IEF1Z21lbnRlZCBWaXJ0dWFsaXR5XG4gKiBvcmllbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0NhcnRvZ3JhcGhpY30gcG9zaXRpb24gVGhlIGxvY2F0aW9uIHRvIGhvdmVyIG1vdmUgdG8uXG4gKiBAcGFyYW0ge0Zsb2F0fSBbbWF4aW11bUhlaWdodF0gVGhlIG1heGltdW0gaGVpZ2h0IChpbiBtZXRlcnMpIHRvIGNhcCB0aGUgY3VycmVudCBjYW1lcmEgaGVpZ2h0IHRvIChpZiB0aGlzIHZhbHVlIGlzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWVkIGFuZCB0aGUgdmlld2VyIGlzIGFib3ZlIHRoaXMgaGVpZ2h0IHRoZSBjYW1lcmEgd2lsbCBiZSByZXN0cmljdGVkIHRvIHRoaXMgaGVpZ2h0KS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZseVRvXSBXaGV0aGVyIHRvIGZseSB0byB0aGUgbG9jYXRpb24gKHRydWUpIG9yIHdoZXRoZXIgdG8ganVtcCB0byB0aGUgbG9jYXRpb24gKGZhbHNlKS5cbiAqXG4gKiBXaGVuIHRoZSBtYW51YWwgYWxpZ25tZW50IGlzIGVuYWJsZWQgdGhpcyBmdW5jdGlvbiBoYXMgbm8gZWZmZWN0LlxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBtYXhpbXVtSGVpZ2h0LCBmbHlUbykge1xuICB2YXIgdGhhdCA9IHRoaXM7IC8vIElmIHdlIGFyZSBpbiBtYW51YWwgYWxpZ25tZW50IG1vZGUgd2UgZG9uJ3QgYWxsb3cgdGhlIHZpZXdlciB0byBtb3ZlIChzaW5jZSB0aGlzIHdvdWxkIGNyZWF0ZSBhIGphcmluZyBVWCBmb3IgbW9zdCB1c2UgY2FzZXMpLlxuXG4gIGlmICh0aGlzLl9tYW51YWxBbGlnbm1lbnQpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gR2V0IGFjY2VzcyB0byB0aGUgY2FtZXJhLi4uaWYgaXQgaXMgbm90IGF2YWxpYWJsZSB3ZSBjYW4ndCBnZXQgdGhlIGN1cnJlbnQgaGVpZ2h0IChvciBzZXQgdGhlIG5ldyBsb2NhdGlvbikgc28ganVzdCByZXR1cm4gbm93LlxuXG5cbiAgaWYgKCEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtKSB8fCAhKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkodGhpcy5fdGVycmlhLmNlc2l1bS52aWV3ZXIpIHx8ICEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtLnZpZXdlci5jYW1lcmEpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNhbWVyYSA9IHRoaXMuX3RlcnJpYS5jZXNpdW0udmlld2VyLmNhbWVyYTtcbiAgdmFyIGNhbWVyYVBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uQ2FydG9ncmFwaGljLmNsb25lKCk7XG4gIHZhciB2aWV3ZXJIZWlnaHQgPSBjYW1lcmFQb3NpdGlvbi5oZWlnaHQ7IC8vIFJlc2V0IHRoZSB2aWV3ZXIgaGVpZ2h0LlxuXG4gIGZ1bmN0aW9uIG1vdmVUb0xvY2F0aW9uKHN1cmZhY2VIZWlnaHQpIHtcbiAgICBpZiAoISgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHN1cmZhY2VIZWlnaHQpKSB7XG4gICAgICBzdXJmYWNlSGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgaG92ZXJIZWlnaHQgPSB2aWV3ZXJIZWlnaHQgLSBzdXJmYWNlSGVpZ2h0O1xuXG4gICAgaWYgKCgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKG1heGltdW1IZWlnaHQpICYmIGhvdmVySGVpZ2h0ID4gbWF4aW11bUhlaWdodCkge1xuICAgICAgaG92ZXJIZWlnaHQgPSBtYXhpbXVtSGVpZ2h0O1xuICAgIH1cblxuICAgIHRoYXQuaG92ZXIoaG92ZXJIZWlnaHQsIHBvc2l0aW9uLCBmbHlUbyk7XG4gIH0gLy8gR2V0IHRoZSBncm91bmQgc3VyZmFjZSBoZWlnaHQgYXQgdGhpcyBsb2NhdGlvbiBhbmQgb2Zmc2V0IHRoZSBoZWlnaHQgYnkgaXQuXG5cblxuICBpZiAoISgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHRoaXMuX3RlcnJpYS5jZXNpdW0pIHx8ICEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtLnNjZW5lKSB8fCAhKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkodGhpcy5fdGVycmlhLmNlc2l1bS5zY2VuZS50ZXJyYWluUHJvdmlkZXIpIHx8IHRoaXMuX3RlcnJpYS5jZXNpdW0uc2NlbmUudGVycmFpblByb3ZpZGVyIGluc3RhbmNlb2YgX0VsbGlwc29pZFRlcnJhaW5Qcm92aWRlcltcImRlZmF1bHRcIl0pIHtcbiAgICAvLyBJZiB3ZSBjYW4ndCBnZXQgYWNjZXNzIHRvIHRoZSB0ZXJyYWluIHByb3ZpZGVyIG9yIHdlIGNhbiBnZXQgYWNjZXNzIHRvIHRoZSB0ZXJyYWluIHByb3ZpZGVyIGFuZCB0aGUgcHJvdmlkZXIgaXMganVzdCB0aGUgRWxsaXBzb2lkIHRoZW4gdXNlIHRoZSBoZWlnaHQgb2YgMC5cbiAgICBtb3ZlVG9Mb2NhdGlvbih1bmRlZmluZWQpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0ZXJyYWluUHJvdmlkZXIgPSB0aGlzLl90ZXJyaWEuY2VzaXVtLnNjZW5lLnRlcnJhaW5Qcm92aWRlcjtcbiAgICAoMCwgX3NhbXBsZVRlcnJhaW5Nb3N0RGV0YWlsZWRbXCJkZWZhdWx0XCJdKSh0ZXJyYWluUHJvdmlkZXIsIFtjYW1lcmFQb3NpdGlvbl0pLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZWRQb3NpdGlvbikge1xuICAgICAgbW92ZVRvTG9jYXRpb24odXBkYXRlZFBvc2l0aW9uWzBdLmhlaWdodCk7XG4gICAgfSk7XG4gIH1cbn07XG4vKipcbiAqIFdoZXRoZXIgdGhlIHVzZXIgaXMgY3VycmVudGx5IHNldHRpbmcgYSBtYW51YWwgYWxpZ25tZW50LlxuICpcbiAqIFNlZSBhbHNvIHtAbGluayBBdWdtZW50ZWRWaXJ0dWFsaXR5I19zZXRNYW51YWxBbGlnbm1lbnR9LlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIHVzZXIgaXMgY3VycmVudGx5IHNldHRpbmcgYSBtYW51YWwgYWxpZ25tZW50ICh0cnVlKSBvciBub3QgKGZhbHNlKS5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5BdWdtZW50ZWRWaXJ0dWFsaXR5LnByb3RvdHlwZS5fZ2V0TWFudWFsQWxpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5lbmFibGVkICYmIHRoaXMuX21hbnVhbEFsaWdubWVudDtcbn07XG4vKipcbiAqIFN0YXJ0cyAvIHN0b3BzIG1hbnVhbCBhbGlnbm1lbnQuXG4gKlxuICogV2hlbiBtYW51YWwgcmVhbGlnbm1lbnQgaXMgZW5hYmxlZCBpdCBhbGxvd3MgdGhlIHVzZXIgdG8gc3BlY2lmeSBhIG5ldyBvcmlnaW4gZm9yIHRoZSBhbGlnbm1lbnQgYmV0d2VlbiB0aGUgZGV2aWNlc1xuICogcGh5c2ljYWwgYW5kIHZpcnR1YWwgYWxpZ25tZW50LiBXaGVuIG1hbnVhbCBhbGlnbm1lbnQgaXMgZW5hYmxlZCB0aGUgb3JpZW50YXRpb24gaXMgbG9ja2VkLCB0byBhbGxvdyB0aGUgdXNlciB0b1xuICogcmVhbGlnbiBhIHZpc3VhbCBsYW5kbWFyayB3aXRoIGEgcGh5c2ljYWwgbGFuZG1hcmsuXG4gKlxuICogTm90ZTogTWFudWFsIGFsaWdubWVudCBpcyBvbmx5IGRvbmUgZm9yIHRoZSBoZWFkaW5nIGF4aXMsIHRoaXMgaXMgYmVjYXVzZSBpbiBwcmFjdGljZSB3ZSBoYXZlIGZvdW5kIHRoYXQgdGhlIGhlYWRpbmdcbiAqIGF4aXMgaXMgb2Z0ZW4gb3V0IGFzIG1vYmlsZSBkZXZpY2VzIHNlZW0gdG8gaGF2ZSBkaWZmaWN1bHR5IG9idGFpbmluZyB0aGUgY29tcGFzcyBkaXJlY3Rpb24sIGJ1dCBzZWVtIHRvIHBlcmZvcm1cbiAqIHJlbGF0aXZlbHkgd2VsbCBpbiB0aGUgb3RoZXIgYXhlcy5cbiAqXG4gKiBOb3RlOiBSZWFsaWdubWVudCBpcyBvbmx5IHBvc3NpYmxlIHdoZW4gQXVnbWVudGVkVmlydHVhbGl0eSBpcyBlbmFibGVkLiBJZiBBdWdtZW50ZWRWaXJ0dWFsaXR5IGlzIGRpc2FibGVkIHdoaWxlXG4gKiAgICAgICBtYW51YWwgYWxpZ25tZW50IGlzIGluIHByb2dyZXNzIGl0IHdpbGwgYmUgY2FuY2VsbGVkLlxuICpcbiAqIFNlZSBhbHNvIHtAbGluayBBdWdtZW50ZWRWaXJ0dWFsaXR5I19nZXRNYW51YWxBbGlnbm1lbnR9LlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RhcnRFbmQgV2hldGhlciB0aGUgdXNlciBpcyBzdGFydGluZyAodHJ1ZSkgb3IgZW5kaW5nIChmYWxzZSkgdGhlIHJlYWxpZ25tZW50LlxuICogQHByaXZhdGVcbiAqL1xuXG5cbkF1Z21lbnRlZFZpcnR1YWxpdHkucHJvdG90eXBlLl9zZXRNYW51YWxBbGlnbm1lbnQgPSBmdW5jdGlvbiAoc3RhcnRFbmQpIHtcbiAgLy8gT25seSBhbGxvdyBtYW51YWwgYWxpZ25tZW50IGNoYW5nZXMgd2hlbiB0aGUgbW9kdWxlIGlzIGVuYWJsZWQuXG4gIGlmICh0aGlzLmVuYWJsZWQgIT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gU2FuaXRpc2UgdGhlIGlucHV0IHZhbHVlIHRvIGEgYm9vbGVhbi5cblxuXG4gIGlmIChzdGFydEVuZCAhPT0gdHJ1ZSkge1xuICAgIHN0YXJ0RW5kID0gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhcnRFbmQgPT09IGZhbHNlICYmICgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHRoaXMuX3RlcnJpYS5jZXNpdW0pICYmICgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHRoaXMuX3RlcnJpYS5jZXNpdW0udmlld2VyKSAmJiAoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtLnZpZXdlci5jYW1lcmEpKSB7XG4gICAgdGhpcy5fcmVhbGlnbkFscGhhID0gdGhpcy5fYWxwaGE7XG4gICAgdGhpcy5fcmVhbGlnbkhlYWRpbmcgPSBfTWF0aFtcImRlZmF1bHRcIl0udG9EZWdyZWVzKHRoaXMuX3RlcnJpYS5jZXNpdW0udmlld2VyLmNhbWVyYS5oZWFkaW5nKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9tYW51YWxBbGlnbm1lbnQgIT09IHN0YXJ0RW5kKSB7XG4gICAgdGhpcy5fbWFudWFsQWxpZ25tZW50ID0gc3RhcnRFbmQ7XG5cbiAgICB0aGlzLl9zdGFydEV2ZW50TG9vcCghdGhpcy5fbWFudWFsQWxpZ25tZW50KTtcbiAgfVxufTtcbi8qKlxuICogV2hldGhlciB0aGUgZXZlbnQgbG9vcCBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSBlbmFibGUgV2hldGhlciB0byBzdGFydCB0aGUgZXZlbnQgbG9vcCBpcyBjdXJyZW50bHkgcnVubmluZyAodHJ1ZSkgb3Igbm90IChmYWxzZSkuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUuX2V2ZW50TG9vcFJ1bm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl9ldmVudExvb3BTdGF0ZS5pbnRlcnZhbElkKTtcbn07XG4vKipcbiAqIFN0YXJ0IG9yIHN0b3AgdGhlIEF1Z21lbnRlZCBWaXJ1dHVhbGl0eSBtb2RlIGV2ZW50IGxvb3AuIFdoZW4gZW5hYmxlZCB0aGUgb3JpZW50YXRpb24gd2lsbCBlZmZlY3QgdGhlIGNhbWVyYXNcbiAqIHZpZXcgYW5kIHdoZW4gZGlzYWJsZWQgdGhlIGRldmljZSBvcmllbnRhdGlvbiB3aWxsIG5vdCBlZmZlY3QgdGhlIGNhbWVyYXMgdmlldy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVuYWJsZSBXaGV0aGVyIHRvIHN0YXJ0IHRoZSBldmVudCBsb29wICh0cnVlKSBvciBzdG9wIHRoZSBldmVudCBsb29wIChmYWxzZSkuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUuX3N0YXJ0RXZlbnRMb29wID0gZnVuY3Rpb24gKGVuYWJsZSkge1xuICAvLyBBcmUgd2UgYWN0dWFsbHkgY2hhbmdpbmcgdGhlIHN0YXRlP1xuICBpZiAodGhpcy5fZXZlbnRMb29wUnVubmluZygpICE9PSBlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlID09PSB0cnVlKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB0aGlzLl9vcmllbnRhdGlvblVwZGF0ZWQgPSB0cnVlO1xuICAgICAgdmFyIGludGVydmFsTXMgPSAxMDAwIC8gdGhpcy5fbWF4aW11bVVwZGF0ZXNQZXJTZWNvbmQ7XG4gICAgICB2YXIgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoYXQuX3VwZGF0ZU9yaWVudGF0aW9uKCk7XG4gICAgICB9LCBpbnRlcnZhbE1zKTtcbiAgICAgIHRoaXMuX2V2ZW50TG9vcFN0YXRlID0ge1xuICAgICAgICBpbnRlcnZhbElkOiBpZFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9ldmVudExvb3BTdGF0ZS5pbnRlcnZhbElkKTtcbiAgICAgIHRoaXMuX2V2ZW50TG9vcFN0YXRlID0ge307XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBEZXZpY2Ugb3JpZW50YXRpb24gdXBkYXRlIGV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uLiBTdG9yZXMgdGhlIHVwZGF0ZWQgb3JpZW50YXRpb24gaW50byB0aGUgb2JqZWN0IHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBDb250YWlucyB0aGUgdXBkYXRlZCBkZXZpY2Ugb3JpZW50YXRpb24gKGluIC5hbHBoYSwgLmJldGEsIC5nYW1tYSkuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUuX3N0b3JlT3JpZW50YXRpb24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5fYWxwaGEgPSBldmVudC5hbHBoYTtcbiAgdGhpcy5fYmV0YSA9IGV2ZW50LmJldGE7XG4gIHRoaXMuX2dhbW1hID0gZXZlbnQuZ2FtbWE7XG4gIHRoaXMuX29yaWVudGF0aW9uVXBkYXRlZCA9IHRydWU7XG59O1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgdGhlIGNhbWVyYXMgb3JpZW50YXRpb24gdXNpbmcgdGhlIGxhc3Qgb3JpZW50YXRpb24gcmVjb3JkZWQgYW5kIHRoZSBjdXJyZW50IHNjcmVlbiBvcmllbnRhdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUuX3VwZGF0ZU9yaWVudGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAvLyBDaGVjayBpZiB0aGUgc2NyZWVuIG9yaWVudGF0aW9uIGhhcyBjaGFuZ2VkIGFuZCBtYXJrIHRoZSBvcmllbnRhdGlvbiB1cGRhdGVkIGlmIGl0IGhhcy5cbiAgdmFyIHNjcmVlbk9yaWVudGF0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFNjcmVlbk9yaWVudGF0aW9uKCk7XG5cbiAgaWYgKHNjcmVlbk9yaWVudGF0aW9uICE9PSB0aGlzLl9sYXN0U2NyZWVuT3JpZW50YXRpb24pIHtcbiAgICB0aGlzLl9vcmllbnRhdGlvblVwZGF0ZWQgPSB0cnVlO1xuICB9XG5cbiAgdGhpcy5fbGFzdFNjcmVlbk9yaWVudGF0aW9uID0gc2NyZWVuT3JpZW50YXRpb247IC8vIE9wdG9taXNlIGJ5IG9ubHkgdXBkYXRpbmcgdGhlIGNhbWVyYSB2aWV3IGlmIHNvbWUgcGFydCBvZiB0aGUgb3JpZW50YXRpb24gY2FsY3VsYXRpb24gaGFzIGNoYW5nZWQuXG5cbiAgaWYgKCF0aGlzLl9vcmllbnRhdGlvblVwZGF0ZWQpIHtcbiAgICAvLyBUaGUgb3JpZW50YXRpb24gaGFzIG5vdCBiZWVuIHVwZGF0ZWQgc28gZG9uJ3Qgd2FzdGUgdGltZSBjaGFuZ2luZyB0aGUgb3JpZW50YXRpb24uXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fb3JpZW50YXRpb25VcGRhdGVkID0gZmFsc2U7IC8vIEdldCBhY2Nlc3MgdG8gdGhlIGNhbWVyYS4uLmlmIGl0IGlzIG5vdCBhdmFsaWFibGUgd2UgY2FuJ3Qgc2V0IHRoZSBvcmllbnRhdGlvbiBzbyBqdXN0IHJldHVybiBub3cuXG5cbiAgaWYgKCEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtKSB8fCAhKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkodGhpcy5fdGVycmlhLmNlc2l1bS52aWV3ZXIpIHx8ICEoMCwgX2RlZmluZWRbXCJkZWZhdWx0XCJdKSh0aGlzLl90ZXJyaWEuY2VzaXVtLnZpZXdlci5jYW1lcmEpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNhbWVyYSA9IHRoaXMuX3RlcnJpYS5jZXNpdW0udmlld2VyLmNhbWVyYTtcbiAgY2FtZXJhLnNldFZpZXcodGhpcy5fZ2V0Q3VycmVudE9yaWVudGF0aW9uKHNjcmVlbk9yaWVudGF0aW9uKSk7IC8vIE5lZWRlZCBvbiBtb2JpbGUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHJlbmRlciBpcyBtYXJrZWQgYXMgZGlydHkgc28gdGhhdCBvbmNlIEFWIG1vZGUgaGFzIGJlZW4gZGlzYWJsZWQgZm9yIGFcbiAgLy8gd2hpbGUgYW5kIHRoZW4gaXMgcmVlbmFibGVkIHRoZSAuc2V0VmlldygpIGZ1bmN0aW9uIHN0aWxsIGhhcyBlZmZlY3QgKG90aGVyd2lzZSBkaXNwaXRlIHRoZSBjYWxsIHRoZSAuc2V0VmlldygpXG4gIC8vIHRoZSB2aWV3IG9yaWVudGF0aW9uIGRvZXMgbm90IHZpc3VhbGx5IHVwZGF0ZSB1bnRpbCB0aGUgdXNlciBtYW51YWx5IG1vdmVzIHRoZSBjYW1lcmEgcG9zaXRpb24pLlxuXG4gIHRoaXMuX3RlcnJpYS5jdXJyZW50Vmlld2VyLm5vdGlmeVJlcGFpbnRSZXF1aXJlZCgpO1xufTtcbi8qKlxuICogR2V0cyB0aGUgY3VycmVudCBvcmllbnRhdGlvbiBzdG9yZWQgaW4gdGhlIG9iamVjdCBzdGF0ZSBhbmQgcmV0dXJucyB0aGUgcm9sbCwgcGl0Y2ggYW5kIGhlYWRpbmcgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc2V0IHRoZSBjYW1lcmFzIG9yaWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RmxvYXR9IHNjcmVlbk9yaWVudGF0aW9uIFRoZSBzY3JlZW4gb3JpZW50YXRpb24gaW4gZGVncmVlcy4gTm90ZTogVGhpcyBmaWVsZCBpcyBvcHRpb25hbCwgaWYgc3VwcGxpZWQgdGhpcyB2YWx1ZSB3aWxsIGJlIHVzZWQgZm9yIHRoZSBzY3JlZW4gb3JpZW50YXRpb24sIG90aGVyd2lzZSB0aGUgc2NyZWVuIG9yaWVudGF0aW9uIHdpbGwgYmUgb2J0YWluZWQgZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpcyBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBvYmplY3Qgd2l0aCB0aGUgcm9sbCwgcGl0Y2ggYW5kIGhlYWRpbmcgc3RvcmVkIGludG8gdGhlIG9yaWVudGF0aW9uLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbkF1Z21lbnRlZFZpcnR1YWxpdHkucHJvdG90eXBlLl9nZXRDdXJyZW50T3JpZW50YXRpb24gPSBmdW5jdGlvbiAoc2NyZWVuT3JpZW50YXRpb24pIHtcbiAgdmFyIGFscGhhID0gdGhpcy5fYWxwaGE7XG4gIHZhciBiZXRhID0gdGhpcy5fYmV0YTtcbiAgdmFyIGdhbW1hID0gdGhpcy5fZ2FtbWE7XG4gIHZhciByZWFsaWduQWxwaGEgPSB0aGlzLl9yZWFsaWduQWxwaGE7XG4gIHZhciByZWFsaWduSGVhZGluZyA9IHRoaXMuX3JlYWxpZ25IZWFkaW5nO1xuXG4gIGlmICghKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkoc2NyZWVuT3JpZW50YXRpb24pKSB7XG4gICAgc2NyZWVuT3JpZW50YXRpb24gPSB0aGlzLl9nZXRDdXJyZW50U2NyZWVuT3JpZW50YXRpb24oKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9jb21wdXRlVGVycmlhT3JpZW50YXRpb24oYWxwaGEsIGJldGEsIGdhbW1hLCBzY3JlZW5PcmllbnRhdGlvbiwgcmVhbGlnbkFscGhhLCByZWFsaWduSGVhZGluZyk7XG59O1xuLyoqXG4gKiBUdXJucyB0aGUgb3JpZW50YXRpb24gaW4gdGhlIGRldmljZSBmcmFtZSBvZiByZWZlcmVuY2UgaW50byBhbiBvcmllbnRhdGlvbiBzdWl0YWJsZSBmb3Igc3BlY2lmeWluZyB0aGUgVGVycmlhIGNhbWVyYSBvcmllbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Zsb2F0fSBhbHBoYSBUaGUgYWxwaGEgdmFsdWUgb2YgdGhlIGRldmljZSBvcmllbnRhdGlvbiBpbiBkZWdyZWVzICh0aGlzIGlzIHRoZSBhbHBoYSB2YWx1ZSBpbiB0aGUgZGV2aWNlJ3MgZnJhbWUgb2YgcmVmZXJlbmNlKS5cbiAqIEBwYXJhbSB7RmxvYXR9IGJldGEgIFRoZSBiZXRhICB2YWx1ZSBvZiB0aGUgZGV2aWNlIG9yaWVudGF0aW9uIGluIGRlZ3JlZXMgKHRoaXMgaXMgdGhlIGJldGEgIHZhbHVlIGluIHRoZSBkZXZpY2UncyBmcmFtZSBvZiByZWZlcmVuY2UpLlxuICogQHBhcmFtIHtGbG9hdH0gZ2FtbWEgVGhlIGdhbW1hIHZhbHVlIG9mIHRoZSBkZXZpY2Ugb3JpZW50YXRpb24gaW4gZGVncmVlcyAodGhpcyBpcyB0aGUgZ2FtbWEgdmFsdWUgaW4gdGhlIGRldmljZSdzIGZyYW1lIG9mIHJlZmVyZW5jZSkuXG4gKiBAcGFyYW0ge0Zsb2F0fSBzY3JlZW5PcmllbnRhdGlvbiBUaGUgc2NyZWVuIG9yaWVudGF0aW9uIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0ge0Zsb2F0fSByZWFsaWduQWxwaGEgICBUaGUgdmFsdWUgb2YgdGhlIGFscGhhICAgdmFsdWUgdGhlIGxhc3QgdGltZSByZWFsaWdubWVudCB3YXMgY29tcGxldGVkIChzdXBwbHkgemVybyBpZiByZWFsaWdubWVudCBpcyBub3Qgc3VwcG9ydGVkKS5cbiAqIEBwYXJhbSB7RmxvYXR9IHJlYWxpZ25IZWFkaW5nIFRoZSB2YWx1ZSBvZiB0aGUgaGVhZGluZyB2YWx1ZSB0aGUgbGFzdCB0aW1lIHJlYWxpZ25tZW50IHdhcyBjb21wbGV0ZWQgKHN1cHBseSB6ZXJvIGlmIHJlYWxpZ25tZW50IGlzIG5vdCBzdXBwb3J0ZWQpLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgcm9sbCwgcGl0Y2ggYW5kIGhlYWRpbmcgc3RvcmVkIGludG8gdGhlIG9yaWVudGF0aW9uLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbkF1Z21lbnRlZFZpcnR1YWxpdHkucHJvdG90eXBlLl9jb21wdXRlVGVycmlhT3JpZW50YXRpb24gPSBmdW5jdGlvbiAoYWxwaGEsIGJldGEsIGdhbW1hLCBzY3JlZW5PcmllbnRhdGlvbiwgcmVhbGlnbkFscGhhLCByZWFsaWduSGVhZGluZykge1xuICAvLyBOb3RlOiBUaGUgYWxnb3JpdGhtaWMgZm9ybXVsYXRpb24gaW4gdGhpcyBmdW5jdGlvbiBpcyBmb3Igc2ltcGxpY2l0eSBvZiBtYXRoZW1hdGljYWwgZXhwcmVzc2lvbiwgcmVhZGFiaWxpdHksXG4gIC8vICAgICAgIG1haW50YWluYWJpbGl0eSBhbmQgbW9kaWZpY2F0aW9uIChpLmUuIGl0IGlzIGVhc3kgdG8gdW5kZXJzdGFuZCBob3cgdG8gdXBkYXRlIG9yIGluc2VydCBuZXcgb2Zmc2V0cyBvciBmZWF0dXJlcykuXG4gIC8vICAgICAgIFRoaXMgaXMgbm90IHRoZSBzaW1wbGVzdCBmb3JtIHdoaWNoIGNsZWFybHkgZmxvd3MgZnJvbSB0aGUgY3VycmVudCBmb3JtdWxlYXRpb24gYW5kIGNsZWFybHkgc2ltcGxpZnkgdGhlXG4gIC8vICAgICAgIGxvZ2ljIGFuZCBvcGVyYXRpb25zIGJ1dCB3b3VsZCBpbmNyZWFzZSB0aGUgY29zdCBvZiBmdXR1cmUgbW9kaWZpY2F0aW9ucyBhbmQgcmVkdWNlIHRoZSByZWFkYWJpbGl0eSBvZiB0aGVcbiAgLy8gICAgICAgZXhwcmVzc2lvbi4gSXQgaXMgbm90IGFudGljaXBhdGVkIHRoYXQgdGhlIGN1cnJlbnQgdmVyYm9zZSBpbXBsZW1lbnRhdGlvbiB3b3VsZCBoYXZlIGEgc2lnbmlmaWNhbnQgaW1wYWN0XG4gIC8vICAgICAgIG9uIHBlcmZvcm1hbmNlIG9yIGFjY3VyYWN5LCBidXQgb2J2aW91c2x5IHRoZXJlIHdpbGwgYmUgc29tZSBpbXBhY3Qgb24gYm90aCBhbmQgaXQgY2FuIGJlIHNpbXBsaWZpZWQgaW5cbiAgLy8gICAgICAgZnV0dXJlIGlmIG5lZWRlZC5cbiAgdmFyIHJvdGF0aW9uID0gX01hdHJpeFtcImRlZmF1bHRcIl0uY2xvbmUoX01hdHJpeFtcImRlZmF1bHRcIl0uSURFTlRJVFksIHJvdGF0aW9uKTtcblxuICB2YXIgcm90YXRpb25JbmNyZW1lbnQ7IC8vIFJvbGwgLSBDb3VudGVyYWN0IHRoZSBjaGFuZ2UgaW4gdGhlIChvcmllbnRhdGlvbikgZnJhbWUgb2YgcmVmZXJlbmNlIHdoZW4gdGhlIHNjcmVlbiBpcyByb3RhdGVkIGFuZCB0aGVcbiAgLy8gICAgICAgIHJvdGF0aW9uIGxvY2sgaXMgbm90IG9uICh0aGUgYnJvd3NlciByZW9yaWVudHMgdGhlIGZyYW1lIG9mIHJlZmVyZW5jZSB0byBhbGlnbiB3aXRoIHRoZSBuZXcgc2NyZWVuXG4gIC8vICAgICAgICBvcmllbnRhdGlvbiAtIHdoZXJlIGFzIHdlIHdhbnQgaXQgb2YgdGhlIGRldmljZSByZWxhdGl2ZSB0byB0aGUgd29ybGQpLlxuXG4gIHJvdGF0aW9uSW5jcmVtZW50ID0gX01hdHJpeFtcImRlZmF1bHRcIl0uZnJvbVJvdGF0aW9uWihfTWF0aFtcImRlZmF1bHRcIl0udG9SYWRpYW5zKHNjcmVlbk9yaWVudGF0aW9uKSk7XG5cbiAgX01hdHJpeFtcImRlZmF1bHRcIl0ubXVsdGlwbHkocm90YXRpb24sIHJvdGF0aW9uSW5jcmVtZW50LCByb3RhdGlvbik7IC8vIFBpdGNoIC0gQWxpZ24gdGhlIGRldmljZSBvcmllbnRhdGlvbiBmcmFtZSB3aXRoIHRoZSBjZWFzaXVtIG9yaWVudGF0aW9uIGZyYW1lLlxuXG5cbiAgcm90YXRpb25JbmNyZW1lbnQgPSBfTWF0cml4W1wiZGVmYXVsdFwiXS5mcm9tUm90YXRpb25YKF9NYXRoW1wiZGVmYXVsdFwiXS50b1JhZGlhbnMoOTApKTtcblxuICBfTWF0cml4W1wiZGVmYXVsdFwiXS5tdWx0aXBseShyb3RhdGlvbiwgcm90YXRpb25JbmNyZW1lbnQsIHJvdGF0aW9uKTsgLy8gUm9sbCAtIEFwcGx5IHRoZSBkZWl2Y2Ugcm9sbC5cblxuXG4gIHJvdGF0aW9uSW5jcmVtZW50ID0gX01hdHJpeFtcImRlZmF1bHRcIl0uZnJvbVJvdGF0aW9uWihfTWF0aFtcImRlZmF1bHRcIl0udG9SYWRpYW5zKGdhbW1hKSk7XG5cbiAgX01hdHJpeFtcImRlZmF1bHRcIl0ubXVsdGlwbHkocm90YXRpb24sIHJvdGF0aW9uSW5jcmVtZW50LCByb3RhdGlvbik7IC8vIFBpdGNoIC0gQXBwbHkgdGhlIGRlaXZjZSBwaXRjaC5cblxuXG4gIHJvdGF0aW9uSW5jcmVtZW50ID0gX01hdHJpeFtcImRlZmF1bHRcIl0uZnJvbVJvdGF0aW9uWChfTWF0aFtcImRlZmF1bHRcIl0udG9SYWRpYW5zKC1iZXRhKSk7XG5cbiAgX01hdHJpeFtcImRlZmF1bHRcIl0ubXVsdGlwbHkocm90YXRpb24sIHJvdGF0aW9uSW5jcmVtZW50LCByb3RhdGlvbik7IC8vIEhlYWRpbmcgLSBBcHBseSB0aGUgaW5jcmVtZW50YWwgZGVpdmNlIGhlYWRpbmcgKGZyb20gd2hlbiBzdGFydCB3YXMgbGFzdCB0cmlnZ2VyZWQpLlxuXG5cbiAgcm90YXRpb25JbmNyZW1lbnQgPSBfTWF0cml4W1wiZGVmYXVsdFwiXS5mcm9tUm90YXRpb25ZKF9NYXRoW1wiZGVmYXVsdFwiXS50b1JhZGlhbnMoLShhbHBoYSAtIHJlYWxpZ25BbHBoYSkpKTtcblxuICBfTWF0cml4W1wiZGVmYXVsdFwiXS5tdWx0aXBseShyb3RhdGlvbiwgcm90YXRpb25JbmNyZW1lbnQsIHJvdGF0aW9uKTsgLy8gSGVhZGluZyAtIFVzZSB0aGUgb2Zmc2V0IHdoZW4gdGhlIG9yaWVudGF0aW9uIHdhcyBsYXN0IHN0YXJ0ZWQuXG4gIC8vICAgICAgICAgICBOb3RlOiBUaGlzIGlzIGxvZ2ljYWxseSBkaWZmZXJlbnQgZnJvbSB0aGUgYWxwaGEgdmFsdWUgYW5kIGNhbiBvbmx5IGJlIGFwcGxpZWQgaGVyZSBpbiB0aGUgc2FtZSB3YXlcbiAgLy8gICAgICAgICAgICAgICAgIHNpbmNlIENlc2l1bSBjYW1lcmEgaXMgUlBIIChIZWFkaW5nIGxhc3QgLSBtb3N0IGxvY2FsKS4gU2VlIENlc2l1bSBjYW1lcmEgcm90YXRpb24gZGVjb21wb3NpdGlvblxuICAvLyAgICAgICAgICAgICAgICAgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlIENlc2l1bSBjYW1lcmEgZm9ybXVsZWF0aW9uLlxuXG5cbiAgcm90YXRpb25JbmNyZW1lbnQgPSBfTWF0cml4W1wiZGVmYXVsdFwiXS5mcm9tUm90YXRpb25ZKF9NYXRoW1wiZGVmYXVsdFwiXS50b1JhZGlhbnMocmVhbGlnbkhlYWRpbmcpKTtcblxuICBfTWF0cml4W1wiZGVmYXVsdFwiXS5tdWx0aXBseShyb3RhdGlvbiwgcm90YXRpb25JbmNyZW1lbnQsIHJvdGF0aW9uKTsgLy8gRGVjb21wb3NlIHJvdGF0aW9uIG1hdHJpeCBpbnRvIHJvbGwsIHBpdGNoIGFuZCBoZWFkaW5nIHRvIHN1cHBseSB0byBDZXNpdW0gY2FtZXJhLlxuICAvL1xuICAvLyBVc2Ugbm90YXRpb246XG4gIC8vICAgICBSID0gUm9sbCwgUCA9IFBpdGNoLCBIID0gSGVhZGluZ1xuICAvLyAgICAgU0ggPSBTaW4oSGVhZGluZyksIENIID0gQ29zKEhlYWRpbmcpXG4gIC8vXG4gIC8vIENlYXNpdW0gY2FtZXJhIHJvdGF0aW9uID0gUlBIOlxuICAvLyAgICAgWyBDUiwgLVNSLCAgIDBdWyAgMSwgICAwLCAgIDBdWyBDSCwgICAwLCAgU0hdICAgW0NSQ0gtU1JTUFNILCAtU1JDUCwgQ1JTSC1TUlNQQ0hdXG4gIC8vICAgICBbIFNSLCAgQ1IsICAgMF1bICAwLCAgQ1AsICBTUF1bICAwLCAgIDEsICAgMF0gPSBbU1JDSC1DUlNQU0gsICBDUkNQLCBTUlNIK0NSU1BDSF1cbiAgLy8gICAgIFsgIDAsICAgMCwgICAxXVsgIDAsIC1TUCwgIENQXVstU0gsICAgMCwgIENIXSAgIFsgICAtQ1BTSCAgICwgICAtU1AsICAgIENQQ0ggICAgXVxuICAvLyAgICAgTm90ZTogVGhlIHNpZ24gZGlmZmVyZW5jZSBvZiB0aGUgU2luIHRlcm1zIGluIHBpdGNoIGlzIGRpZmZlcmVudCB0byB0aGUgc3RhbmRhcmQgcmlnaHQgaGFuZGVkIHJvdGF0aW9uIHNpbmNlXG4gIC8vICAgICAgICAgICBDZXNpdW0gcm90YXRlcyBwaXRjaCBpbiB0aGUgbGVmdCBoYW5kZWQgZGlyZWN0aW9uLiBCb3RoIGhlYWRpbmcgYW5kIHJvbGwgYXJlIHJpZ2h0IGhhbmRlZCByb3RhdGlvbnMuXG4gIC8vXG4gIC8vIFVzZSB0aGUgZm9sbG93aW5nIG5vdGF0aW9uIHRvIHJlZmVyIHRvIGVsZW1lbnRzIGluIHRoZSBDZXNpdW0gY2FtZXJhIHJvdGF0aW9uIG1hdHJpeDpcbiAgLy8gICAgIFtSMDAsIFIxMCwgUjIwXVxuICAvLyAgICAgW1IwMSwgUjExLCBSMjFdXG4gIC8vICAgICBbUjAyLCBSMTIsIFIyMl1cbiAgLy9cbiAgLy8gQWxzbyBub3RlOiBUYW4oWCkgPSBTaW4oWCkgLyBDb3MoWClcbiAgLy9cbiAgLy8gRGVjb21wb3NlIG1hdHJpeDpcbiAgLy8gICAgSCA9IEFUYW4oVGFuKEgpKSA9IEFUYW4oU2luKEgpL0NvcyhIKSkgPSBBVGFuIChTSCAvIENIKSA9IEFUYW4oQ1BTSC9DUENIKSA9IEFUYW4gKC1SMDIgLyBSMjIpXG4gIC8vICAgIFIgPSBBVGFuKFRhbihSKSkgPSBBVGFuKFNpbihSKS9Db3MoUikpID0gQVRhbiAoU1IgLyBDUikgPSBBVGFuKFNSQ1AvQ1JDUCkgPSBBVGFuICgtUjEwIC8gUjExKVxuICAvLyAgICBQID0gQVRhbihUYW4oUCkpID0gQVRhbihTaW4oUCkvQ29zKFApKSA9IEFUYW4gKFNQIC8gQ1ApXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1AgPSAtUjEyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVlZCB0byBmaW5kIENQOlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDUCA9IFNxcnQoQ1BeMilcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBTcXJ0KENQXjIqKENIXjIrU0heMikpICAgICAgICAgICAgICBTaW5jZTogKENvc0BeMiArIFNpbkBeMikgPSAxXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gU3FydCgoQ1BeMikqKENIXjIpICsgKENQXjIpKihTSF4yKSkgRXhwYW5kXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gU3FydCgoQ1BDSCleMiArIChDUFNIKV4yKSAgICAgICAgICAgU2luY2U6IE5eMipNXjIgPSAoTk0pXjJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBTcXJ0KFIyMl4yICsgKC1SMDIpXjIpICAgICAgICAgICAgICBTdWJzdGl0dXRlXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gU3FydChSMjJeMiArIFIwMl4yKSAgICAgICAgICAgICAgICAgU2luY2U6ICgtTileMiA9IE5eMlxuICAvLyAgU28gUCA9IEFUYW4gKC1SMTIgLyBTcXJ0KFIyMl4yICsgUjAyXjIpKVxuICAvLyBTaW1wbGlmeSBub3RhdGlvbiBmb3IgcmVhZGFiaWxpdHk6XG5cblxuICB2YXIgcjEwID0gcm90YXRpb25bX01hdHJpeFtcImRlZmF1bHRcIl0uQ09MVU1OMVJPVzBdO1xuICB2YXIgcjExID0gcm90YXRpb25bX01hdHJpeFtcImRlZmF1bHRcIl0uQ09MVU1OMVJPVzFdO1xuICB2YXIgcjAyID0gcm90YXRpb25bX01hdHJpeFtcImRlZmF1bHRcIl0uQ09MVU1OMFJPVzJdO1xuICB2YXIgcjEyID0gcm90YXRpb25bX01hdHJpeFtcImRlZmF1bHRcIl0uQ09MVU1OMVJPVzJdO1xuICB2YXIgcjIyID0gcm90YXRpb25bX01hdHJpeFtcImRlZmF1bHRcIl0uQ09MVU1OMlJPVzJdO1xuXG4gIHZhciBoZWFkaW5nID0gX01hdGhbXCJkZWZhdWx0XCJdLnRvRGVncmVlcyhNYXRoLmF0YW4yKC1yMDIsIHIyMikpO1xuXG4gIHZhciByb2xsID0gX01hdGhbXCJkZWZhdWx0XCJdLnRvRGVncmVlcyhNYXRoLmF0YW4yKC1yMTAsIHIxMSkpO1xuXG4gIHZhciBwaXRjaCA9IF9NYXRoW1wiZGVmYXVsdFwiXS50b0RlZ3JlZXMoTWF0aC5hdGFuMigtcjEyLCBNYXRoLnNxcnQocjAyICogcjAyICsgcjIyICogcjIyKSkpOyAvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIHJvbGwsIHBpdGNoIGFuZCBoZWFkaW5nIHdlIGp1c3QgY29tcHV0ZWQuXG5cblxuICByZXR1cm4ge1xuICAgIG9yaWVudGF0aW9uOiB7XG4gICAgICByb2xsOiBfTWF0aFtcImRlZmF1bHRcIl0udG9SYWRpYW5zKHJvbGwpLFxuICAgICAgcGl0Y2g6IF9NYXRoW1wiZGVmYXVsdFwiXS50b1JhZGlhbnMocGl0Y2gpLFxuICAgICAgaGVhZGluZzogX01hdGhbXCJkZWZhdWx0XCJdLnRvUmFkaWFucyhoZWFkaW5nKVxuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIEdldHMgdGhlIGN1cnJlbnQgc2NyZWVuIG9yaWVudGF0aW9uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGN1cnJlbnQgc2NyZWVuIG9yaWVudGF0aW9uIGluIGRlZ3JlZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuQXVnbWVudGVkVmlydHVhbGl0eS5wcm90b3R5cGUuX2dldEN1cnJlbnRTY3JlZW5PcmllbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHNjcmVlbi5vcmllbnRhdGlvbikgJiYgKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkoc2NyZWVuLm9yaWVudGF0aW9uLmFuZ2xlKSkge1xuICAgIHJldHVybiBzY3JlZW4ub3JpZW50YXRpb24uYW5nbGU7XG4gIH1cblxuICBpZiAoKDAsIF9kZWZpbmVkW1wiZGVmYXVsdFwiXSkod2luZG93Lm9yaWVudGF0aW9uKSkge1xuICAgIHJldHVybiB3aW5kb3cub3JpZW50YXRpb247XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXVnbWVudGVkVmlydHVhbGl0eTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9PYnNlcnZlTW9kZWxNaXhpbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL09ic2VydmVNb2RlbE1peGluXCIpKTtcblxudmFyIF9hdWdtZW50ZWRfdmlydHVhbGl0eV90b29sID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hdWdtZW50ZWRfdmlydHVhbGl0eV90b29sLnNjc3NcIikpO1xuXG52YXIgX0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9JY29uXCIpKTtcblxudmFyIF9WaWV3ZXJNb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vTW9kZWxzL1ZpZXdlck1vZGVcIikpO1xuXG52YXIgX2RlZmluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ0ZXJyaWFqcy1jZXNpdW0vU291cmNlL0NvcmUvZGVmaW5lZFwiKSk7XG5cbnZhciBfQXVnbWVudGVkVmlydHVhbGl0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL01vZGVscy9BdWdtZW50ZWRWaXJ0dWFsaXR5XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBBdWdtZW50ZWRWaXJ0dWFsaXR5VG9vbCA9ICgwLCBfY3JlYXRlUmVhY3RDbGFzc1tcImRlZmF1bHRcIl0pKHtcbiAgZGlzcGxheU5hbWU6IFwiQXVnbWVudGVkVmlydHVhbGl0eVRvb2xcIixcbiAgbWl4aW5zOiBbX09ic2VydmVNb2RlbE1peGluW1wiZGVmYXVsdFwiXV0sXG4gIHByb3BUeXBlczoge1xuICAgIHRlcnJpYTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdmlld1N0YXRlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBleHBlcmltZW50YWxXYXJuaW5nOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sXG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhdWdtZW50ZWRWaXJ0dWFsaXR5OiBuZXcgX0F1Z21lbnRlZFZpcnR1YWxpdHlbXCJkZWZhdWx0XCJdKHRoaXMucHJvcHMudGVycmlhKSxcbiAgICAgIGV4cGVyaW1lbnRhbFdhcm5pbmdTaG93bjogZmFsc2UsXG4gICAgICByZWFsaWduSGVscFNob3duOiBmYWxzZSxcbiAgICAgIHJlc2V0UmVhbGlnbkhlbHBTaG93bjogZmFsc2VcbiAgICB9O1xuICB9LFxuICBoYW5kbGVDbGlja0FWVG9vbDogZnVuY3Rpb24gaGFuZGxlQ2xpY2tBVlRvb2woKSB7XG4gICAgLy8gTWFrZSB0aGUgQXVnbWVudGVkVmlydHVhbGl0eSBtb2R1bGUgYXZhbGlhYmxlIGVsc2V3aGVyZS5cbiAgICB0aGlzLnByb3BzLnRlcnJpYS5hdWdtZW50ZWRWaXJ0dWFsaXR5ID0gdGhpcy5zdGF0ZS5hdWdtZW50ZWRWaXJ0dWFsaXR5O1xuXG4gICAgaWYgKCgwLCBfZGVmaW5lZFtcImRlZmF1bHRcIl0pKHRoaXMucHJvcHMuZXhwZXJpbWVudGFsV2FybmluZykgJiYgdGhpcy5wcm9wcy5leHBlcmltZW50YWxXYXJuaW5nICE9PSBmYWxzZSAmJiAhdGhpcy5zdGF0ZS5leHBlcmltZW50YWxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBleHBlcmltZW50YWxXYXJuaW5nU2hvd246IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy52aWV3U3RhdGUubm90aWZpY2F0aW9ucy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IFwiRXhwZXJpbWVudGFsIEZlYXR1cmU6IEF1Z21lbnRlZCBSZWFsaXR5XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiQXVnbWVudGVkIFJlYWxpdHkgbW9kZSBpcyBjdXJyZW50bHkgaW4gYmV0YS4gXCIgKyBcIlRoaXMgbW9kZSBpcyBvbmx5IGRlc2lnbmVkIGZvciB1c2Ugb24gdGhlIGxhdGVzdCBoaWdoIGVuZCBtb2JpbGUgZGV2aWNlcy4gXCIgKyBcIjxiciAvPjxiciAvPldBUk5JTkc6IFRoaXMgbW9kZSBjYW4gY29uc3VtZSBhIGxvdCBvZiBkYXRhLCBwbGVhc2UgYmUgbWluZGZ1bCBvZiBkYXRhIHVzYWdlIGNoYXJnZXMgZnJvbSB5b3VyIG5ldHdvcmsgcHJvdmlkZXIuIFwiICsgXCI8YnIgLz48YnIgLz5UaGUgYWNjdXJhY3kgb2YgdGhpcyBtb2RlIGRlcGVuZHMgb24gdGhlIGFjY3VyYWN5IG9mIHlvdXIgbW9iaWxlIGRldmljZXMgaW50ZXJuYWwgY29tcGFzcy5cIixcbiAgICAgICAgY29uZmlybVRleHQ6IFwiR290IGl0XCJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuYXVnbWVudGVkVmlydHVhbGl0eS50b2dnbGVFbmFibGVkKCk7XG4gIH0sXG4gIGhhbmRsZUNsaWNrUmVhbGlnbjogZnVuY3Rpb24gaGFuZGxlQ2xpY2tSZWFsaWduKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5yZWFsaWduSGVscFNob3duKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmVhbGlnbkhlbHBTaG93bjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLnZpZXdTdGF0ZS5ub3RpZmljYXRpb25zLnB1c2goe1xuICAgICAgICB0aXRsZTogXCJNYW51YWwgQWxpZ25tZW50XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiQWxpZ24geW91ciBtb2JpbGUgZGV2aWNlIHNvIHRoYXQgaXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgbWFwcyBjdXJyZW50IGFsaWdubWVudCwgdGhlbiBjbGljayB0aGUgYmxpbmtpbmcgY29tcGFzcy5cIiArIFwiIElmIG5vIGxhbmRtYXJrcyB0byBhbGlnbiB3aXRoIGFyZSBjdXJyZW50bHkgdmlzaWJsZSBvbiB0aGUgbWFwLCB5b3UgY2FuIG1vdmUgdGhlIG1hcCB1c2luZ1wiICsgXCIgZHJhZyBhbmQgcGluY2ggYWN0aW9ucyB1bnRpbCBhIHJlY29nbmlzYWJsZSBsYW5kbWFyayBpcyB2aXNpYmxlIGJlZm9yZSBhbGlnbmluZyB0aGUgZGV2aWNlIHdpdGggdGhlIG1hcC5cIiArICc8YnIgLz48ZGl2PjxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiLi9idWlsZC9UZXJyaWFKUy9pbWFnZXMvYXItcmVhbGlnbi1ndWlkZS5naWZcIiAvPjwvZGl2PicgKyBcIjxiciAvPlRpcDogVGhlIHN1biBvciBtb29uIGFyZSBvZnRlbiBnb29kIGxhbmRtYXJrcyB0byBhbGlnbiB3aXRoIGlmIHlvdSBhcmUgaW4gYSBsb2NhdGlvbiB5b3UgYXJlblxceDI3dCBmYW1pbGlhciB3aXRoIChiZSBjYXJlZnVsIG5vdCB0byBsb29rIGF0IHRoZSBzdW4gLSBpdCBjYW4gaHVydCB5b3VyIGV5ZXMpLlwiLFxuICAgICAgICBjb25maXJtVGV4dDogXCJHb3QgaXRcIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5hdWdtZW50ZWRWaXJ0dWFsaXR5LnRvZ2dsZU1hbnVhbEFsaWdubWVudCgpO1xuICB9LFxuICBoYW5kbGVDbGlja1Jlc2V0UmVhbGlnbjogZnVuY3Rpb24gaGFuZGxlQ2xpY2tSZXNldFJlYWxpZ24oKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnJlc2V0UmVhbGlnbkhlbHBTaG93bikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlc2V0UmVhbGlnbkhlbHBTaG93bjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLnZpZXdTdGF0ZS5ub3RpZmljYXRpb25zLnB1c2goe1xuICAgICAgICB0aXRsZTogXCJSZXNldCBBbGlnbm1lbnRcIixcbiAgICAgICAgbWVzc2FnZTogXCJSZXNldHRpbmcgdG8gY29tcGFzcyBhbGlnbm1lbnQuIElmIHRoZSBhbGlnbm1lbnQgZG9lc25cXHgyN3QgbWF0Y2ggdGhlIHJlYWwgd29ybGQgdHJ5IHdhdmluZ1wiICsgXCIgeW91ciBkZXZpY2UgaW4gYSBmaWd1cmUgOCBtb3Rpb24gdG8gcmVjYWxpYnJhdGUgZGV2aWNlLiBUaGlzIGNhbiBiZSBkb25lIGF0IGFueSB0aW1lLlwiICsgXCI8YnIgLz4gPGJyIC8+QXZvaWQgbG9jYXRpb25zIHdpdGggbWFnbmV0aWMgZmllbGRzIG9yIG1ldGFsIG9iamVjdHMgYXMgdGhlc2UgbWF5IGRpc29yaWVudCB0aGUgZGV2aWNlcyBjb21wYXNzLlwiLFxuICAgICAgICBjb25maXJtVGV4dDogXCJHb3QgaXRcIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5hdWdtZW50ZWRWaXJ0dWFsaXR5LnJlc2V0QWxpZ25tZW50KCk7XG4gIH0sXG4gIGhhbmRsZUNsaWNrSG92ZXI6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrSG92ZXIoKSB7XG4gICAgdGhpcy5zdGF0ZS5hdWdtZW50ZWRWaXJ0dWFsaXR5LnRvZ2dsZUhvdmVySGVpZ2h0KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBlbmFibGVkID0gdGhpcy5zdGF0ZS5hdWdtZW50ZWRWaXJ0dWFsaXR5LmVuYWJsZWQ7XG4gICAgdmFyIHRvZ2dsZUltYWdlID0gX0ljb25bXCJkZWZhdWx0XCJdLkdMWVBIUy5hck9mZjtcbiAgICB2YXIgdG9nZ2xlU3R5bGUgPSBfYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbFtcImRlZmF1bHRcIl0uYnRuO1xuXG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIHRvZ2dsZUltYWdlID0gX0ljb25bXCJkZWZhdWx0XCJdLkdMWVBIUy5hck9uO1xuICAgICAgdG9nZ2xlU3R5bGUgPSBfYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbFtcImRlZmF1bHRcIl0uYnRuUHJpbWFyeTtcbiAgICB9XG5cbiAgICB2YXIgcmVhbGlnbm1lbnQgPSB0aGlzLnN0YXRlLmF1Z21lbnRlZFZpcnR1YWxpdHkubWFudWFsQWxpZ25tZW50O1xuICAgIHZhciByZWFsaWdubWVudFN0eWxlID0gX2F1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2xbXCJkZWZhdWx0XCJdLmJ0bjtcblxuICAgIGlmIChyZWFsaWdubWVudCkge1xuICAgICAgcmVhbGlnbm1lbnRTdHlsZSA9IF9hdWdtZW50ZWRfdmlydHVhbGl0eV90b29sW1wiZGVmYXVsdFwiXS5idG5CbGluaztcbiAgICB9XG5cbiAgICB2YXIgaG92ZXJMZXZlbCA9IHRoaXMuc3RhdGUuYXVnbWVudGVkVmlydHVhbGl0eS5ob3ZlckxldmVsO1xuICAgIHZhciBob3ZlckltYWdlID0gX0ljb25bXCJkZWZhdWx0XCJdLkdMWVBIUy5hckhvdmVyMDsgLy8gTm90ZTogV2UgdXNlIHRoZSBpbWFnZSBvZiB0aGUgbmV4dCBsZXZlbCB0aGF0IHdlIHdpbGwgYmUgY2hhbmdpbmcgdG8sIG5vdCB0aGUgbGV2ZWwgdGhlIHdlIGFyZSBjdXJyZW50bHkgYXQuXG5cbiAgICBzd2l0Y2ggKGhvdmVyTGV2ZWwpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaG92ZXJJbWFnZSA9IF9JY29uW1wiZGVmYXVsdFwiXS5HTFlQSFMuYXJIb3ZlcjA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhvdmVySW1hZ2UgPSBfSWNvbltcImRlZmF1bHRcIl0uR0xZUEhTLmFySG92ZXIxO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBob3ZlckltYWdlID0gX0ljb25bXCJkZWZhdWx0XCJdLkdMWVBIUy5hckhvdmVyMjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGVycmlhLnZpZXdlck1vZGUgIT09IF9WaWV3ZXJNb2RlW1wiZGVmYXVsdFwiXS5MZWFmbGV0ID8gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogX2F1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2xbXCJkZWZhdWx0XCJdLmF1Z21lbnRlZFZpcnR1YWxpdHlUb29sXG4gICAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBjbGFzc05hbWU6IHRvZ2dsZVN0eWxlLFxuICAgICAgdGl0bGU6IFwiYXVnbWVudGVkIHJlYWxpdHkgdG9vbFwiLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja0FWVG9vbFxuICAgIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfSWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgIGdseXBoOiB0b2dnbGVJbWFnZVxuICAgIH0pKSwgZW5hYmxlZCA/IFtfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGNsYXNzTmFtZTogX2F1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2xbXCJkZWZhdWx0XCJdLmJ0bixcbiAgICAgIHRpdGxlOiBcInRvZ2dsZSBob3ZlciBoZWlnaHRcIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tIb3ZlcixcbiAgICAgIGtleTogXCIwXCJcbiAgICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX0ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICBnbHlwaDogaG92ZXJJbWFnZVxuICAgIH0pKSwgIXRoaXMuc3RhdGUuYXVnbWVudGVkVmlydHVhbGl0eS5tYW51YWxBbGlnbm1lbnRTZXQgPyBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGNsYXNzTmFtZTogcmVhbGlnbm1lbnRTdHlsZSxcbiAgICAgIHRpdGxlOiBcInRvZ2dsZSBtYW51YWwgYWxpZ25tZW50XCIsXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrUmVhbGlnbixcbiAgICAgIGtleTogXCIxXCJcbiAgICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX0ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICBnbHlwaDogX0ljb25bXCJkZWZhdWx0XCJdLkdMWVBIUy5hclJlYWxpZ25cbiAgICB9KSkgOiBudWxsLCB0aGlzLnN0YXRlLmF1Z21lbnRlZFZpcnR1YWxpdHkubWFudWFsQWxpZ25tZW50U2V0ICYmICFyZWFsaWdubWVudCA/IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgY2xhc3NOYW1lOiBfYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbFtcImRlZmF1bHRcIl0uYnRuLFxuICAgICAgdGl0bGU6IFwicmVzZXQgY29tcGFzcyBhbGlnbm1lbnRcIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tSZXNldFJlYWxpZ24sXG4gICAgICBrZXk6IFwiMlwiXG4gICAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9JY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgZ2x5cGg6IF9JY29uW1wiZGVmYXVsdFwiXS5HTFlQSFMuYXJSZXNldEFsaWdubWVudFxuICAgIH0pKSA6IG51bGxdIDogbnVsbCkgOiBudWxsO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gQXVnbWVudGVkVmlydHVhbGl0eVRvb2w7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJ0blwiOlwidGpzLWF1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2xfX2J0biB0anMtX2J1dHRvbnNfX2J0biB0anMtX2J1dHRvbnNfX2J0biB0anMtbmF2X19idG4gdGpzLV9idXR0b25zX19idG5cIixcImJ0bi1wcmltYXJ5XCI6XCJ0anMtYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbF9fYnRuLXByaW1hcnkgdGpzLV9idXR0b25zX19idG4gdGpzLV9idXR0b25zX19idG4gdGpzLW5hdl9fYnRuIHRqcy1fYnV0dG9uc19fYnRuXCIsXCJidG5QcmltYXJ5XCI6XCJ0anMtYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbF9fYnRuLXByaW1hcnkgdGpzLV9idXR0b25zX19idG4gdGpzLV9idXR0b25zX19idG4gdGpzLW5hdl9fYnRuIHRqcy1fYnV0dG9uc19fYnRuXCIsXCJidG4tYmxpbmtcIjpcInRqcy1hdWdtZW50ZWRfdmlydHVhbGl0eV90b29sX19idG4tYmxpbmsgdGpzLV9idXR0b25zX19idG4gdGpzLV9idXR0b25zX19idG4gdGpzLW5hdl9fYnRuIHRqcy1fYnV0dG9uc19fYnRuXCIsXCJidG5CbGlua1wiOlwidGpzLWF1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2xfX2J0bi1ibGluayB0anMtX2J1dHRvbnNfX2J0biB0anMtX2J1dHRvbnNfX2J0biB0anMtbmF2X19idG4gdGpzLV9idXR0b25zX19idG5cIixcImJ0bi1wcmltYXJ5LS1ob3ZlclwiOlwidGpzLWF1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2xfX2J0bi1wcmltYXJ5LS1ob3ZlclwiLFwiYnRuUHJpbWFyeUhvdmVyXCI6XCJ0anMtYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbF9fYnRuLXByaW1hcnktLWhvdmVyXCIsXCJibGlua2VyXCI6XCJ0anMtYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbF9fYmxpbmtlclwiLFwidG9vbEJ1dHRvblwiOlwidGpzLWF1Z21lbnRlZF92aXJ0dWFsaXR5X3Rvb2xfX3Rvb2xCdXR0b25cIixcImF1Z21lbnRlZFZpcnR1YWxpdHlUb29sXCI6XCJ0anMtYXVnbWVudGVkX3ZpcnR1YWxpdHlfdG9vbF9fYXVnbWVudGVkVmlydHVhbGl0eVRvb2wgdGpzLXRvb2xfYnV0dG9uX190b29sQnV0dG9uXCJ9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUpBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==