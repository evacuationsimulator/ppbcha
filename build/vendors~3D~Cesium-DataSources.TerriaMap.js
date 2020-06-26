((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([["vendors~3D~Cesium-DataSources"],{

/***/ "./node_modules/terriajs-cesium/Source/Core/CornerType.js":
/*!****************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Core/CornerType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ./freezeObject */ "./node_modules/terriajs-cesium/Source/Core/freezeObject.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(
        freezeObject) {
    'use strict';

    /**
     * Style options for corners.
     *
     * @demo The {@link https://cesiumjs.org/Cesium/Apps/Sandcastle/index.html?src=Corridor.html&label=Geometries|Corridor Demo}
     * demonstrates the three corner types, as used by {@link CorridorGraphics}.
     *
     * @exports CornerType
     */
    var CornerType = {
        /**
         * <img src="Images/CornerTypeRounded.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner has a smooth edge.
         * @type {Number}
         * @constant
         */
        ROUNDED : 0,

        /**
         * <img src="Images/CornerTypeMitered.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner point is the intersection of adjacent edges.
         * @type {Number}
         * @constant
         */
        MITERED : 1,

        /**
         * <img src="Images/CornerTypeBeveled.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner is clipped.
         * @type {Number}
         * @constant
         */
        BEVELED : 2
    };

    return freezeObject(CornerType);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/CompositePositionProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/CompositePositionProperty.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../Core/defaultValue */ "./node_modules/terriajs-cesium/Source/Core/defaultValue.js"),
        __webpack_require__(/*! ../Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"),
        __webpack_require__(/*! ../Core/defineProperties */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js"),
        __webpack_require__(/*! ../Core/DeveloperError */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js"),
        __webpack_require__(/*! ../Core/Event */ "./node_modules/terriajs-cesium/Source/Core/Event.js"),
        __webpack_require__(/*! ../Core/ReferenceFrame */ "./node_modules/terriajs-cesium/Source/Core/ReferenceFrame.js"),
        __webpack_require__(/*! ./CompositeProperty */ "./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js"),
        __webpack_require__(/*! ./Property */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(
        defaultValue,
        defined,
        defineProperties,
        DeveloperError,
        Event,
        ReferenceFrame,
        CompositeProperty,
        Property) {
    'use strict';

    /**
     * A {@link CompositeProperty} which is also a {@link PositionProperty}.
     *
     * @alias CompositePositionProperty
     * @constructor
     *
     * @param {ReferenceFrame} [referenceFrame=ReferenceFrame.FIXED] The reference frame in which the position is defined.
     */
    function CompositePositionProperty(referenceFrame) {
        this._referenceFrame = defaultValue(referenceFrame, ReferenceFrame.FIXED);
        this._definitionChanged = new Event();
        this._composite = new CompositeProperty();
        this._composite.definitionChanged.addEventListener(CompositePositionProperty.prototype._raiseDefinitionChanged, this);
    }

    defineProperties(CompositePositionProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.  A property is considered
         * constant if getValue always returns the same result for the current definition.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return this._composite.isConstant;
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever setValue is called with data different
         * than the current value.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the interval collection.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {TimeIntervalCollection}
         */
        intervals : {
            get : function() {
                return this._composite.intervals;
            }
        },
        /**
         * Gets or sets the reference frame which this position presents itself as.
         * Each PositionProperty making up this object has it's own reference frame,
         * so this property merely exposes a "preferred" reference frame for clients
         * to use.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {ReferenceFrame}
         */
        referenceFrame : {
            get : function() {
                return this._referenceFrame;
            },
            set : function(value) {
                this._referenceFrame = value;
            }
        }
    });

    /**
     * Gets the value of the property at the provided time in the fixed frame.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositePositionProperty.prototype.getValue = function(time, result) {
        return this.getValueInReferenceFrame(time, ReferenceFrame.FIXED, result);
    };

    /**
     * Gets the value of the property at the provided time and in the provided reference frame.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {ReferenceFrame} referenceFrame The desired referenceFrame of the result.
     * @param {Cartesian3} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Cartesian3} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositePositionProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        

        var innerProperty = this._composite._intervals.findDataForIntervalContainingDate(time);
        if (defined(innerProperty)) {
            return innerProperty.getValueInReferenceFrame(time, referenceFrame, result);
        }
        return undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    CompositePositionProperty.prototype.equals = function(other) {
        return this === other || //
               (other instanceof CompositePositionProperty && //
                this._referenceFrame === other._referenceFrame && //
                this._composite.equals(other._composite, Property.equals));
    };

    /**
     * @private
     */
    CompositePositionProperty.prototype._raiseDefinitionChanged = function() {
        this._definitionChanged.raiseEvent(this);
    };

    return CompositePositionProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"),
        __webpack_require__(/*! ../Core/defineProperties */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js"),
        __webpack_require__(/*! ../Core/DeveloperError */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js"),
        __webpack_require__(/*! ../Core/Event */ "./node_modules/terriajs-cesium/Source/Core/Event.js"),
        __webpack_require__(/*! ../Core/EventHelper */ "./node_modules/terriajs-cesium/Source/Core/EventHelper.js"),
        __webpack_require__(/*! ../Core/TimeIntervalCollection */ "./node_modules/terriajs-cesium/Source/Core/TimeIntervalCollection.js"),
        __webpack_require__(/*! ./Property */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(
        defined,
        defineProperties,
        DeveloperError,
        Event,
        EventHelper,
        TimeIntervalCollection,
        Property) {
    'use strict';

    function subscribeAll(property, eventHelper, definitionChanged, intervals) {
        function callback() {
            definitionChanged.raiseEvent(property);
        }
        var items = [];
        eventHelper.removeAll();
        var length = intervals.length;
        for (var i = 0; i < length; i++) {
            var interval = intervals.get(i);
            if (defined(interval.data) && items.indexOf(interval.data) === -1) {
                eventHelper.add(interval.data.definitionChanged, callback);
            }
        }
    }

    /**
     * A {@link Property} which is defined by a {@link TimeIntervalCollection}, where the
     * data property of each {@link TimeInterval} is another Property instance which is
     * evaluated at the provided time.
     *
     * @alias CompositeProperty
     * @constructor
     *
     *
     * @example
     * var constantProperty = ...;
     * var sampledProperty = ...;
     *
     * //Create a composite property from two previously defined properties
     * //where the property is valid on August 1st, 2012 and uses a constant
     * //property for the first half of the day and a sampled property for the
     * //remaining half.
     * var composite = new Cesium.CompositeProperty();
     * composite.intervals.addInterval(Cesium.TimeInterval.fromIso8601({
     *     iso8601 : '2012-08-01T00:00:00.00Z/2012-08-01T12:00:00.00Z',
     *     data : constantProperty
     * }));
     * composite.intervals.addInterval(Cesium.TimeInterval.fromIso8601({
     *     iso8601 : '2012-08-01T12:00:00.00Z/2012-08-02T00:00:00.00Z',
     *     isStartIncluded : false,
     *     isStopIncluded : false,
     *     data : sampledProperty
     * }));
     *
     * @see CompositeMaterialProperty
     * @see CompositePositionProperty
     */
    function CompositeProperty() {
        this._eventHelper = new EventHelper();
        this._definitionChanged = new Event();
        this._intervals = new TimeIntervalCollection();
        this._intervals.changedEvent.addEventListener(CompositeProperty.prototype._intervalsChanged, this);
    }

    defineProperties(CompositeProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.  A property is considered
         * constant if getValue always returns the same result for the current definition.
         * @memberof CompositeProperty.prototype
         *
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return this._intervals.isEmpty;
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever setValue is called with data different
         * than the current value.
         * @memberof CompositeProperty.prototype
         *
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the interval collection.
         * @memberof CompositeProperty.prototype
         *
         * @type {TimeIntervalCollection}
         */
        intervals : {
            get : function() {
                return this._intervals;
            }
        }
    });

    /**
     * Gets the value of the property at the provided time.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositeProperty.prototype.getValue = function(time, result) {
        

        var innerProperty = this._intervals.findDataForIntervalContainingDate(time);
        if (defined(innerProperty)) {
            return innerProperty.getValue(time, result);
        }
        return undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    CompositeProperty.prototype.equals = function(other) {
        return this === other || //
               (other instanceof CompositeProperty && //
                this._intervals.equals(other._intervals, Property.equals));
    };

    /**
     * @private
     */
    CompositeProperty.prototype._intervalsChanged = function() {
        subscribeAll(this, this._eventHelper, this._definitionChanged, this._intervals);
        this._definitionChanged.raiseEvent(this);
    };

    return CompositeProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/ReferenceProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/ReferenceProperty.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"),
        __webpack_require__(/*! ../Core/defineProperties */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js"),
        __webpack_require__(/*! ../Core/DeveloperError */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js"),
        __webpack_require__(/*! ../Core/Event */ "./node_modules/terriajs-cesium/Source/Core/Event.js"),
        __webpack_require__(/*! ../Core/RuntimeError */ "./node_modules/terriajs-cesium/Source/Core/RuntimeError.js"),
        __webpack_require__(/*! ./Property */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(
        defined,
        defineProperties,
        DeveloperError,
        Event,
        RuntimeError,
        Property) {
    'use strict';

    function resolveEntity(that) {
        var entityIsResolved = true;
        if (that._resolveEntity) {
            var targetEntity = that._targetCollection.getById(that._targetId);

            if (defined(targetEntity)) {
                targetEntity.definitionChanged.addEventListener(ReferenceProperty.prototype._onTargetEntityDefinitionChanged, that);
                that._targetEntity = targetEntity;
                that._resolveEntity = false;
            } else {
                //The property has become detached.  It has a valid value but is not currently resolved to an entity in the collection
                targetEntity = that._targetEntity;
                entityIsResolved = false;
            }

            if (!defined(targetEntity)) {
                throw new RuntimeError('target entity "' + that._targetId + '" could not be resolved.');
            }
        }
        return entityIsResolved;
    }

    function resolve(that) {
        var targetProperty = that._targetProperty;

        if (that._resolveProperty) {
            var entityIsResolved = resolveEntity(that);

            var names = that._targetPropertyNames;
            targetProperty = that._targetEntity;
            var length = names.length;
            for (var i = 0; i < length && defined(targetProperty); i++) {
                targetProperty = targetProperty[names[i]];
            }

            if (defined(targetProperty)) {
                that._targetProperty = targetProperty;
                that._resolveProperty = !entityIsResolved;
            } else if (!defined(that._targetProperty)) {
                throw new RuntimeError('targetProperty "' + that._targetId + '.' + names.join('.') + '" could not be resolved.');
            }
        }

        return targetProperty;
    }

    /**
     * A {@link Property} which transparently links to another property on a provided object.
     *
     * @alias ReferenceProperty
     * @constructor
     *
     * @param {EntityCollection} targetCollection The entity collection which will be used to resolve the reference.
     * @param {String} targetId The id of the entity which is being referenced.
     * @param {String[]} targetPropertyNames The names of the property on the target entity which we will use.
     *
     * @example
     * var collection = new Cesium.EntityCollection();
     *
     * //Create a new entity and assign a billboard scale.
     * var object1 = new Cesium.Entity({id:'object1'});
     * object1.billboard = new Cesium.BillboardGraphics();
     * object1.billboard.scale = new Cesium.ConstantProperty(2.0);
     * collection.add(object1);
     *
     * //Create a second entity and reference the scale from the first one.
     * var object2 = new Cesium.Entity({id:'object2'});
     * object2.model = new Cesium.ModelGraphics();
     * object2.model.scale = new Cesium.ReferenceProperty(collection, 'object1', ['billboard', 'scale']);
     * collection.add(object2);
     *
     * //Create a third object, but use the fromString helper function.
     * var object3 = new Cesium.Entity({id:'object3'});
     * object3.billboard = new Cesium.BillboardGraphics();
     * object3.billboard.scale = Cesium.ReferenceProperty.fromString(collection, 'object1#billboard.scale');
     * collection.add(object3);
     *
     * //You can refer to an entity with a # or . in id and property names by escaping them.
     * var object4 = new Cesium.Entity({id:'#object.4'});
     * object4.billboard = new Cesium.BillboardGraphics();
     * object4.billboard.scale = new Cesium.ConstantProperty(2.0);
     * collection.add(object4);
     *
     * var object5 = new Cesium.Entity({id:'object5'});
     * object5.billboard = new Cesium.BillboardGraphics();
     * object5.billboard.scale = Cesium.ReferenceProperty.fromString(collection, '\\#object\\.4#billboard.scale');
     * collection.add(object5);
     */
    function ReferenceProperty(targetCollection, targetId, targetPropertyNames) {
        

        this._targetCollection = targetCollection;
        this._targetId = targetId;
        this._targetPropertyNames = targetPropertyNames;
        this._targetProperty = undefined;
        this._targetEntity = undefined;
        this._definitionChanged = new Event();
        this._resolveEntity = true;
        this._resolveProperty = true;

        targetCollection.collectionChanged.addEventListener(ReferenceProperty.prototype._onCollectionChanged, this);
    }

    defineProperties(ReferenceProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.
         * @memberof ReferenceProperty.prototype
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return Property.isConstant(resolve(this));
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever the referenced property's definition is changed.
         * @memberof ReferenceProperty.prototype
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the reference frame that the position is defined in.
         * This property is only valid if the referenced property is a {@link PositionProperty}.
         * @memberof ReferenceProperty.prototype
         * @type {ReferenceFrame}
         * @readonly
         */
        referenceFrame : {
            get : function() {
                return resolve(this).referenceFrame;
            }
        },
        /**
         * Gets the id of the entity being referenced.
         * @memberof ReferenceProperty.prototype
         * @type {String}
         * @readonly
         */
        targetId : {
            get : function() {
                return this._targetId;
            }
        },
        /**
         * Gets the collection containing the entity being referenced.
         * @memberof ReferenceProperty.prototype
         * @type {EntityCollection}
         * @readonly
         */
        targetCollection : {
            get : function() {
                return this._targetCollection;
            }
        },
        /**
         * Gets the array of property names used to retrieve the referenced property.
         * @memberof ReferenceProperty.prototype
         * @type {String[]}
         * @readonly
         */
        targetPropertyNames : {
            get : function() {
                return this._targetPropertyNames;
            }
        },
        /**
         * Gets the resolved instance of the underlying referenced property.
         * @memberof ReferenceProperty.prototype
         * @type {Property}
         * @readonly
         */
        resolvedProperty : {
            get : function() {
                return resolve(this);
            }
        }
    });

    /**
     * Creates a new instance given the entity collection that will
     * be used to resolve it and a string indicating the target entity id and property.
     * The format of the string is "objectId#foo.bar", where # separates the id from
     * property path and . separates sub-properties.  If the reference identifier or
     * or any sub-properties contains a # . or \ they must be escaped.
     *
     * @param {EntityCollection} targetCollection
     * @param {String} referenceString
     * @returns {ReferenceProperty} A new instance of ReferenceProperty.
     *
     * @exception {DeveloperError} invalid referenceString.
     */
    ReferenceProperty.fromString = function(targetCollection, referenceString) {
        

        var identifier;
        var values = [];

        var inIdentifier = true;
        var isEscaped = false;
        var token = '';
        for (var i = 0; i < referenceString.length; ++i) {
            var c = referenceString.charAt(i);

            if (isEscaped) {
                token += c;
                isEscaped = false;
            } else if (c === '\\') {
                isEscaped = true;
            } else if (inIdentifier && c === '#') {
                identifier = token;
                inIdentifier = false;
                token = '';
            } else if (!inIdentifier && c === '.') {
                values.push(token);
                token = '';
            } else {
                token += c;
            }
        }
        values.push(token);

        return new ReferenceProperty(targetCollection, identifier, values);
    };

    /**
     * Gets the value of the property at the provided time.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    ReferenceProperty.prototype.getValue = function(time, result) {
        return resolve(this).getValue(time, result);
    };

    /**
     * Gets the value of the property at the provided time and in the provided reference frame.
     * This method is only valid if the property being referenced is a {@link PositionProperty}.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {ReferenceFrame} referenceFrame The desired referenceFrame of the result.
     * @param {Cartesian3} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Cartesian3} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    ReferenceProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        return resolve(this).getValueInReferenceFrame(time, referenceFrame, result);
    };

    /**
     * Gets the {@link Material} type at the provided time.
     * This method is only valid if the property being referenced is a {@link MaterialProperty}.
     *
     * @param {JulianDate} time The time for which to retrieve the type.
     * @returns {String} The type of material.
     */
    ReferenceProperty.prototype.getType = function(time) {
        return resolve(this).getType(time);
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    ReferenceProperty.prototype.equals = function(other) {
        if (this === other) {
            return true;
        }

        var names = this._targetPropertyNames;
        var otherNames = other._targetPropertyNames;

        if (this._targetCollection !== other._targetCollection || //
            this._targetId !== other._targetId || //
            names.length !== otherNames.length) {
            return false;
        }

        var length = this._targetPropertyNames.length;
        for (var i = 0; i < length; i++) {
            if (names[i] !== otherNames[i]) {
                return false;
            }
        }

        return true;
    };

    ReferenceProperty.prototype._onTargetEntityDefinitionChanged = function(targetEntity, name, value, oldValue) {
        if (this._targetPropertyNames[0] === name) {
            this._resolveProperty = true;
            this._definitionChanged.raiseEvent(this);
        }
    };

    ReferenceProperty.prototype._onCollectionChanged = function(collection, added, removed) {
        var targetEntity = this._targetEntity;
        if (defined(targetEntity)) {
            if (removed.indexOf(targetEntity) !== -1) {
                targetEntity.definitionChanged.removeEventListener(ReferenceProperty.prototype._onTargetEntityDefinitionChanged, this);
                this._resolveEntity = true;
                this._resolveProperty = true;
            } else if (this._resolveEntity) {
                //If targetEntity is defined but resolveEntity is true, then the entity is detached
                //and any change to the collection needs to incur an attempt to resolve in order to re-attach.
                //without this if block, a reference that becomes re-attached will not signal definitionChanged
                resolve(this);
                if (!this._resolveEntity) {
                    this._definitionChanged.raiseEvent(this);
                }
            }
        }
    };

    return ReferenceProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/ScaledPositionProperty.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/ScaledPositionProperty.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../Core/defined */ "./node_modules/terriajs-cesium/Source/Core/defined.js"),
        __webpack_require__(/*! ../Core/defineProperties */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js"),
        __webpack_require__(/*! ../Core/DeveloperError */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js"),
        __webpack_require__(/*! ../Core/Ellipsoid */ "./node_modules/terriajs-cesium/Source/Core/Ellipsoid.js"),
        __webpack_require__(/*! ../Core/Event */ "./node_modules/terriajs-cesium/Source/Core/Event.js"),
        __webpack_require__(/*! ../Core/ReferenceFrame */ "./node_modules/terriajs-cesium/Source/Core/ReferenceFrame.js"),
        __webpack_require__(/*! ./Property */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(
        defined,
        defineProperties,
        DeveloperError,
        Ellipsoid,
        Event,
        ReferenceFrame,
        Property) {
    'use strict';

    /**
     * This is a temporary class for scaling position properties to the WGS84 surface.
     * It will go away or be refactored to support data with arbitrary height references.
     * @private
     */
    function ScaledPositionProperty(value) {
        this._definitionChanged = new Event();
        this._value = undefined;
        this._removeSubscription = undefined;
        this.setValue(value);
    }

    defineProperties(ScaledPositionProperty.prototype, {
        isConstant : {
            get : function() {
                return Property.isConstant(this._value);
            }
        },
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        referenceFrame : {
            get : function() {
                return defined(this._value) ? this._value.referenceFrame : ReferenceFrame.FIXED;
            }
        }
    });

    ScaledPositionProperty.prototype.getValue = function(time, result) {
        return this.getValueInReferenceFrame(time, ReferenceFrame.FIXED, result);
    };

    ScaledPositionProperty.prototype.setValue = function(value) {
        if (this._value !== value) {
            this._value = value;

            if (defined(this._removeSubscription)) {
                this._removeSubscription();
                this._removeSubscription = undefined;
            }

            if (defined(value)) {
                this._removeSubscription = value.definitionChanged.addEventListener(this._raiseDefinitionChanged, this);
            }
            this._definitionChanged.raiseEvent(this);
        }
    };

    ScaledPositionProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        

        if (!defined(this._value)) {
            return undefined;
        }

        result = this._value.getValueInReferenceFrame(time, referenceFrame, result);
        return defined(result) ? Ellipsoid.WGS84.scaleToGeodeticSurface(result, result) : undefined;
    };

    ScaledPositionProperty.prototype.equals = function(other) {
        return this === other || (other instanceof ScaledPositionProperty && this._value === other._value);
    };

    ScaledPositionProperty.prototype._raiseDefinitionChanged = function() {
        this._definitionChanged.raiseEvent(this);
    };

    return ScaledPositionProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc34zRH5DZXNpdW0tRGF0YVNvdXJjZXMuVGVycmlhTWFwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9Db3JuZXJUeXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXJyaWFqcy1jZXNpdW0vU291cmNlL0RhdGFTb3VyY2VzL0NvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvQ29tcG9zaXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvUmVmZXJlbmNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoW1xuICAgICAgICAnLi9mcmVlemVPYmplY3QnXG4gICAgXSwgZnVuY3Rpb24oXG4gICAgICAgIGZyZWV6ZU9iamVjdCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIFN0eWxlIG9wdGlvbnMgZm9yIGNvcm5lcnMuXG4gICAgICpcbiAgICAgKiBAZGVtbyBUaGUge0BsaW5rIGh0dHBzOi8vY2VzaXVtanMub3JnL0Nlc2l1bS9BcHBzL1NhbmRjYXN0bGUvaW5kZXguaHRtbD9zcmM9Q29ycmlkb3IuaHRtbCZsYWJlbD1HZW9tZXRyaWVzfENvcnJpZG9yIERlbW99XG4gICAgICogZGVtb25zdHJhdGVzIHRoZSB0aHJlZSBjb3JuZXIgdHlwZXMsIGFzIHVzZWQgYnkge0BsaW5rIENvcnJpZG9yR3JhcGhpY3N9LlxuICAgICAqXG4gICAgICogQGV4cG9ydHMgQ29ybmVyVHlwZVxuICAgICAqL1xuICAgIHZhciBDb3JuZXJUeXBlID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogPGltZyBzcmM9XCJJbWFnZXMvQ29ybmVyVHlwZVJvdW5kZWQucG5nXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIHdpZHRoPVwiMTg2XCIgaGVpZ2h0PVwiMTg5XCIgLz5cbiAgICAgICAgICpcbiAgICAgICAgICogQ29ybmVyIGhhcyBhIHNtb290aCBlZGdlLlxuICAgICAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAgICAgKiBAY29uc3RhbnRcbiAgICAgICAgICovXG4gICAgICAgIFJPVU5ERUQgOiAwLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiA8aW1nIHNyYz1cIkltYWdlcy9Db3JuZXJUeXBlTWl0ZXJlZC5wbmdcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCIgd2lkdGg9XCIxODZcIiBoZWlnaHQ9XCIxODlcIiAvPlxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JuZXIgcG9pbnQgaXMgdGhlIGludGVyc2VjdGlvbiBvZiBhZGphY2VudCBlZGdlcy5cbiAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICogQGNvbnN0YW50XG4gICAgICAgICAqL1xuICAgICAgICBNSVRFUkVEIDogMSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogPGltZyBzcmM9XCJJbWFnZXMvQ29ybmVyVHlwZUJldmVsZWQucG5nXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIHdpZHRoPVwiMTg2XCIgaGVpZ2h0PVwiMTg5XCIgLz5cbiAgICAgICAgICpcbiAgICAgICAgICogQ29ybmVyIGlzIGNsaXBwZWQuXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICAgICAqIEBjb25zdGFudFxuICAgICAgICAgKi9cbiAgICAgICAgQkVWRUxFRCA6IDJcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZyZWV6ZU9iamVjdChDb3JuZXJUeXBlKTtcbn0pO1xuIiwiZGVmaW5lKFtcbiAgICAgICAgJy4uL0NvcmUvZGVmYXVsdFZhbHVlJyxcbiAgICAgICAgJy4uL0NvcmUvZGVmaW5lZCcsXG4gICAgICAgICcuLi9Db3JlL2RlZmluZVByb3BlcnRpZXMnLFxuICAgICAgICAnLi4vQ29yZS9EZXZlbG9wZXJFcnJvcicsXG4gICAgICAgICcuLi9Db3JlL0V2ZW50JyxcbiAgICAgICAgJy4uL0NvcmUvUmVmZXJlbmNlRnJhbWUnLFxuICAgICAgICAnLi9Db21wb3NpdGVQcm9wZXJ0eScsXG4gICAgICAgICcuL1Byb3BlcnR5J1xuICAgIF0sIGZ1bmN0aW9uKFxuICAgICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICAgIGRlZmluZWQsXG4gICAgICAgIGRlZmluZVByb3BlcnRpZXMsXG4gICAgICAgIERldmVsb3BlckVycm9yLFxuICAgICAgICBFdmVudCxcbiAgICAgICAgUmVmZXJlbmNlRnJhbWUsXG4gICAgICAgIENvbXBvc2l0ZVByb3BlcnR5LFxuICAgICAgICBQcm9wZXJ0eSkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIEEge0BsaW5rIENvbXBvc2l0ZVByb3BlcnR5fSB3aGljaCBpcyBhbHNvIGEge0BsaW5rIFBvc2l0aW9uUHJvcGVydHl9LlxuICAgICAqXG4gICAgICogQGFsaWFzIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVmZXJlbmNlRnJhbWV9IFtyZWZlcmVuY2VGcmFtZT1SZWZlcmVuY2VGcmFtZS5GSVhFRF0gVGhlIHJlZmVyZW5jZSBmcmFtZSBpbiB3aGljaCB0aGUgcG9zaXRpb24gaXMgZGVmaW5lZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5KHJlZmVyZW5jZUZyYW1lKSB7XG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUZyYW1lID0gZGVmYXVsdFZhbHVlKHJlZmVyZW5jZUZyYW1lLCBSZWZlcmVuY2VGcmFtZS5GSVhFRCk7XG4gICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkID0gbmV3IEV2ZW50KCk7XG4gICAgICAgIHRoaXMuX2NvbXBvc2l0ZSA9IG5ldyBDb21wb3NpdGVQcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLl9jb21wb3NpdGUuZGVmaW5pdGlvbkNoYW5nZWQuYWRkRXZlbnRMaXN0ZW5lcihDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5fcmFpc2VEZWZpbml0aW9uQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgZGVmaW5lUHJvcGVydGllcyhDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZSwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgaWYgdGhpcyBwcm9wZXJ0eSBpcyBjb25zdGFudC4gIEEgcHJvcGVydHkgaXMgY29uc2lkZXJlZFxuICAgICAgICAgKiBjb25zdGFudCBpZiBnZXRWYWx1ZSBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSByZXN1bHQgZm9yIHRoZSBjdXJyZW50IGRlZmluaXRpb24uXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBpc0NvbnN0YW50IDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvc2l0ZS5pc0NvbnN0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgZXZlbnQgdGhhdCBpcyByYWlzZWQgd2hlbmV2ZXIgdGhlIGRlZmluaXRpb24gb2YgdGhpcyBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAgICAgKiBUaGUgZGVmaW5pdGlvbiBpcyBjaGFuZ2VkIHdoZW5ldmVyIHNldFZhbHVlIGlzIGNhbGxlZCB3aXRoIGRhdGEgZGlmZmVyZW50XG4gICAgICAgICAqIHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RXZlbnR9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5pdGlvbkNoYW5nZWQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBpbnRlcnZhbCBjb2xsZWN0aW9uLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1RpbWVJbnRlcnZhbENvbGxlY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnZhbHMgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9zaXRlLmludGVydmFscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyB0aGUgcmVmZXJlbmNlIGZyYW1lIHdoaWNoIHRoaXMgcG9zaXRpb24gcHJlc2VudHMgaXRzZWxmIGFzLlxuICAgICAgICAgKiBFYWNoIFBvc2l0aW9uUHJvcGVydHkgbWFraW5nIHVwIHRoaXMgb2JqZWN0IGhhcyBpdCdzIG93biByZWZlcmVuY2UgZnJhbWUsXG4gICAgICAgICAqIHNvIHRoaXMgcHJvcGVydHkgbWVyZWx5IGV4cG9zZXMgYSBcInByZWZlcnJlZFwiIHJlZmVyZW5jZSBmcmFtZSBmb3IgY2xpZW50c1xuICAgICAgICAgKiB0byB1c2UuXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7UmVmZXJlbmNlRnJhbWV9XG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2VGcmFtZSA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VGcmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUZyYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBhdCB0aGUgcHJvdmlkZWQgdGltZSBpbiB0aGUgZml4ZWQgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0p1bGlhbkRhdGV9IHRpbWUgVGhlIHRpbWUgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Jlc3VsdF0gVGhlIG9iamVjdCB0byBzdG9yZSB0aGUgdmFsdWUgaW50bywgaWYgb21pdHRlZCwgYSBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgcmV0dXJuZWQuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG1vZGlmaWVkIHJlc3VsdCBwYXJhbWV0ZXIgb3IgYSBuZXcgaW5zdGFuY2UgaWYgdGhlIHJlc3VsdCBwYXJhbWV0ZXIgd2FzIG5vdCBzdXBwbGllZC5cbiAgICAgKi9cbiAgICBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHRpbWUsIHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUodGltZSwgUmVmZXJlbmNlRnJhbWUuRklYRUQsIHJlc3VsdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBhdCB0aGUgcHJvdmlkZWQgdGltZSBhbmQgaW4gdGhlIHByb3ZpZGVkIHJlZmVyZW5jZSBmcmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SnVsaWFuRGF0ZX0gdGltZSBUaGUgdGltZSBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7UmVmZXJlbmNlRnJhbWV9IHJlZmVyZW5jZUZyYW1lIFRoZSBkZXNpcmVkIHJlZmVyZW5jZUZyYW1lIG9mIHRoZSByZXN1bHQuXG4gICAgICogQHBhcmFtIHtDYXJ0ZXNpYW4zfSBbcmVzdWx0XSBUaGUgb2JqZWN0IHRvIHN0b3JlIHRoZSB2YWx1ZSBpbnRvLCBpZiBvbWl0dGVkLCBhIG5ldyBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJucyB7Q2FydGVzaWFuM30gVGhlIG1vZGlmaWVkIHJlc3VsdCBwYXJhbWV0ZXIgb3IgYSBuZXcgaW5zdGFuY2UgaWYgdGhlIHJlc3VsdCBwYXJhbWV0ZXIgd2FzIG5vdCBzdXBwbGllZC5cbiAgICAgKi9cbiAgICBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUgPSBmdW5jdGlvbih0aW1lLCByZWZlcmVuY2VGcmFtZSwgcmVzdWx0KSB7XG4gICAgICAgIFxuXG4gICAgICAgIHZhciBpbm5lclByb3BlcnR5ID0gdGhpcy5fY29tcG9zaXRlLl9pbnRlcnZhbHMuZmluZERhdGFGb3JJbnRlcnZhbENvbnRhaW5pbmdEYXRlKHRpbWUpO1xuICAgICAgICBpZiAoZGVmaW5lZChpbm5lclByb3BlcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGlubmVyUHJvcGVydHkuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lKHRpbWUsIHJlZmVyZW5jZUZyYW1lLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbXBhcmVzIHRoaXMgcHJvcGVydHkgdG8gdGhlIHByb3ZpZGVkIHByb3BlcnR5IGFuZCByZXR1cm5zXG4gICAgICogPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhleSBhcmUgZXF1YWwsIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5fSBbb3RoZXJdIFRoZSBvdGhlciBwcm9wZXJ0eS5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgbGVmdCBhbmQgcmlnaHQgYXJlIGVxdWFsLCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzID09PSBvdGhlciB8fCAvL1xuICAgICAgICAgICAgICAgKG90aGVyIGluc3RhbmNlb2YgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eSAmJiAvL1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUZyYW1lID09PSBvdGhlci5fcmVmZXJlbmNlRnJhbWUgJiYgLy9cbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wb3NpdGUuZXF1YWxzKG90aGVyLl9jb21wb3NpdGUsIFByb3BlcnR5LmVxdWFscykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLl9yYWlzZURlZmluaXRpb25DaGFuZ2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5O1xufSk7XG4iLCJkZWZpbmUoW1xuICAgICAgICAnLi4vQ29yZS9kZWZpbmVkJyxcbiAgICAgICAgJy4uL0NvcmUvZGVmaW5lUHJvcGVydGllcycsXG4gICAgICAgICcuLi9Db3JlL0RldmVsb3BlckVycm9yJyxcbiAgICAgICAgJy4uL0NvcmUvRXZlbnQnLFxuICAgICAgICAnLi4vQ29yZS9FdmVudEhlbHBlcicsXG4gICAgICAgICcuLi9Db3JlL1RpbWVJbnRlcnZhbENvbGxlY3Rpb24nLFxuICAgICAgICAnLi9Qcm9wZXJ0eSdcbiAgICBdLCBmdW5jdGlvbihcbiAgICAgICAgZGVmaW5lZCxcbiAgICAgICAgZGVmaW5lUHJvcGVydGllcyxcbiAgICAgICAgRGV2ZWxvcGVyRXJyb3IsXG4gICAgICAgIEV2ZW50LFxuICAgICAgICBFdmVudEhlbHBlcixcbiAgICAgICAgVGltZUludGVydmFsQ29sbGVjdGlvbixcbiAgICAgICAgUHJvcGVydHkpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmVBbGwocHJvcGVydHksIGV2ZW50SGVscGVyLCBkZWZpbml0aW9uQ2hhbmdlZCwgaW50ZXJ2YWxzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudChwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGV2ZW50SGVscGVyLnJlbW92ZUFsbCgpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gaW50ZXJ2YWxzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGludGVydmFsID0gaW50ZXJ2YWxzLmdldChpKTtcbiAgICAgICAgICAgIGlmIChkZWZpbmVkKGludGVydmFsLmRhdGEpICYmIGl0ZW1zLmluZGV4T2YoaW50ZXJ2YWwuZGF0YSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRIZWxwZXIuYWRkKGludGVydmFsLmRhdGEuZGVmaW5pdGlvbkNoYW5nZWQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEge0BsaW5rIFByb3BlcnR5fSB3aGljaCBpcyBkZWZpbmVkIGJ5IGEge0BsaW5rIFRpbWVJbnRlcnZhbENvbGxlY3Rpb259LCB3aGVyZSB0aGVcbiAgICAgKiBkYXRhIHByb3BlcnR5IG9mIGVhY2gge0BsaW5rIFRpbWVJbnRlcnZhbH0gaXMgYW5vdGhlciBQcm9wZXJ0eSBpbnN0YW5jZSB3aGljaCBpc1xuICAgICAqIGV2YWx1YXRlZCBhdCB0aGUgcHJvdmlkZWQgdGltZS5cbiAgICAgKlxuICAgICAqIEBhbGlhcyBDb21wb3NpdGVQcm9wZXJ0eVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBjb25zdGFudFByb3BlcnR5ID0gLi4uO1xuICAgICAqIHZhciBzYW1wbGVkUHJvcGVydHkgPSAuLi47XG4gICAgICpcbiAgICAgKiAvL0NyZWF0ZSBhIGNvbXBvc2l0ZSBwcm9wZXJ0eSBmcm9tIHR3byBwcmV2aW91c2x5IGRlZmluZWQgcHJvcGVydGllc1xuICAgICAqIC8vd2hlcmUgdGhlIHByb3BlcnR5IGlzIHZhbGlkIG9uIEF1Z3VzdCAxc3QsIDIwMTIgYW5kIHVzZXMgYSBjb25zdGFudFxuICAgICAqIC8vcHJvcGVydHkgZm9yIHRoZSBmaXJzdCBoYWxmIG9mIHRoZSBkYXkgYW5kIGEgc2FtcGxlZCBwcm9wZXJ0eSBmb3IgdGhlXG4gICAgICogLy9yZW1haW5pbmcgaGFsZi5cbiAgICAgKiB2YXIgY29tcG9zaXRlID0gbmV3IENlc2l1bS5Db21wb3NpdGVQcm9wZXJ0eSgpO1xuICAgICAqIGNvbXBvc2l0ZS5pbnRlcnZhbHMuYWRkSW50ZXJ2YWwoQ2VzaXVtLlRpbWVJbnRlcnZhbC5mcm9tSXNvODYwMSh7XG4gICAgICogICAgIGlzbzg2MDEgOiAnMjAxMi0wOC0wMVQwMDowMDowMC4wMFovMjAxMi0wOC0wMVQxMjowMDowMC4wMFonLFxuICAgICAqICAgICBkYXRhIDogY29uc3RhbnRQcm9wZXJ0eVxuICAgICAqIH0pKTtcbiAgICAgKiBjb21wb3NpdGUuaW50ZXJ2YWxzLmFkZEludGVydmFsKENlc2l1bS5UaW1lSW50ZXJ2YWwuZnJvbUlzbzg2MDEoe1xuICAgICAqICAgICBpc284NjAxIDogJzIwMTItMDgtMDFUMTI6MDA6MDAuMDBaLzIwMTItMDgtMDJUMDA6MDA6MDAuMDBaJyxcbiAgICAgKiAgICAgaXNTdGFydEluY2x1ZGVkIDogZmFsc2UsXG4gICAgICogICAgIGlzU3RvcEluY2x1ZGVkIDogZmFsc2UsXG4gICAgICogICAgIGRhdGEgOiBzYW1wbGVkUHJvcGVydHlcbiAgICAgKiB9KSk7XG4gICAgICpcbiAgICAgKiBAc2VlIENvbXBvc2l0ZU1hdGVyaWFsUHJvcGVydHlcbiAgICAgKiBAc2VlIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb21wb3NpdGVQcm9wZXJ0eSgpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIZWxwZXIgPSBuZXcgRXZlbnRIZWxwZXIoKTtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnQoKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxzID0gbmV3IFRpbWVJbnRlcnZhbENvbGxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxzLmNoYW5nZWRFdmVudC5hZGRFdmVudExpc3RlbmVyKENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZS5faW50ZXJ2YWxzQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgZGVmaW5lUHJvcGVydGllcyhDb21wb3NpdGVQcm9wZXJ0eS5wcm90b3R5cGUsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIGlmIHRoaXMgcHJvcGVydHkgaXMgY29uc3RhbnQuICBBIHByb3BlcnR5IGlzIGNvbnNpZGVyZWRcbiAgICAgICAgICogY29uc3RhbnQgaWYgZ2V0VmFsdWUgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgcmVzdWx0IGZvciB0aGUgY3VycmVudCBkZWZpbml0aW9uLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RhbnQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxzLmlzRW1wdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBldmVudCB0aGF0IGlzIHJhaXNlZCB3aGVuZXZlciB0aGUgZGVmaW5pdGlvbiBvZiB0aGlzIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICAgICAqIFRoZSBkZWZpbml0aW9uIGlzIGNoYW5nZWQgd2hlbmV2ZXIgc2V0VmFsdWUgaXMgY2FsbGVkIHdpdGggZGF0YSBkaWZmZXJlbnRcbiAgICAgICAgICogdGhhbiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICogQG1lbWJlcm9mIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RXZlbnR9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5pdGlvbkNoYW5nZWQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBpbnRlcnZhbCBjb2xsZWN0aW9uLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtUaW1lSW50ZXJ2YWxDb2xsZWN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJ2YWxzIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVydmFscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGF0IHRoZSBwcm92aWRlZCB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtKdWxpYW5EYXRlfSB0aW1lIFRoZSB0aW1lIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtyZXN1bHRdIFRoZSBvYmplY3QgdG8gc3RvcmUgdGhlIHZhbHVlIGludG8sIGlmIG9taXR0ZWQsIGEgbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHJldHVybmVkLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtb2RpZmllZCByZXN1bHQgcGFyYW1ldGVyIG9yIGEgbmV3IGluc3RhbmNlIGlmIHRoZSByZXN1bHQgcGFyYW1ldGVyIHdhcyBub3Qgc3VwcGxpZWQuXG4gICAgICovXG4gICAgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24odGltZSwgcmVzdWx0KSB7XG4gICAgICAgIFxuXG4gICAgICAgIHZhciBpbm5lclByb3BlcnR5ID0gdGhpcy5faW50ZXJ2YWxzLmZpbmREYXRhRm9ySW50ZXJ2YWxDb250YWluaW5nRGF0ZSh0aW1lKTtcbiAgICAgICAgaWYgKGRlZmluZWQoaW5uZXJQcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbm5lclByb3BlcnR5LmdldFZhbHVlKHRpbWUsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29tcGFyZXMgdGhpcyBwcm9wZXJ0eSB0byB0aGUgcHJvdmlkZWQgcHJvcGVydHkgYW5kIHJldHVybnNcbiAgICAgKiA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGV5IGFyZSBlcXVhbCwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvcGVydHl9IFtvdGhlcl0gVGhlIG90aGVyIHByb3BlcnR5LlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiBsZWZ0IGFuZCByaWdodCBhcmUgZXF1YWwsIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzID09PSBvdGhlciB8fCAvL1xuICAgICAgICAgICAgICAgKG90aGVyIGluc3RhbmNlb2YgQ29tcG9zaXRlUHJvcGVydHkgJiYgLy9cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcnZhbHMuZXF1YWxzKG90aGVyLl9pbnRlcnZhbHMsIFByb3BlcnR5LmVxdWFscykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZS5faW50ZXJ2YWxzQ2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdWJzY3JpYmVBbGwodGhpcywgdGhpcy5fZXZlbnRIZWxwZXIsIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLCB0aGlzLl9pbnRlcnZhbHMpO1xuICAgICAgICB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZC5yYWlzZUV2ZW50KHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29tcG9zaXRlUHJvcGVydHk7XG59KTtcbiIsImRlZmluZShbXG4gICAgICAgICcuLi9Db3JlL2RlZmluZWQnLFxuICAgICAgICAnLi4vQ29yZS9kZWZpbmVQcm9wZXJ0aWVzJyxcbiAgICAgICAgJy4uL0NvcmUvRGV2ZWxvcGVyRXJyb3InLFxuICAgICAgICAnLi4vQ29yZS9FdmVudCcsXG4gICAgICAgICcuLi9Db3JlL1J1bnRpbWVFcnJvcicsXG4gICAgICAgICcuL1Byb3BlcnR5J1xuICAgIF0sIGZ1bmN0aW9uKFxuICAgICAgICBkZWZpbmVkLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzLFxuICAgICAgICBEZXZlbG9wZXJFcnJvcixcbiAgICAgICAgRXZlbnQsXG4gICAgICAgIFJ1bnRpbWVFcnJvcixcbiAgICAgICAgUHJvcGVydHkpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlRW50aXR5KHRoYXQpIHtcbiAgICAgICAgdmFyIGVudGl0eUlzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhhdC5fcmVzb2x2ZUVudGl0eSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEVudGl0eSA9IHRoYXQuX3RhcmdldENvbGxlY3Rpb24uZ2V0QnlJZCh0aGF0Ll90YXJnZXRJZCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbmVkKHRhcmdldEVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRFbnRpdHkuZGVmaW5pdGlvbkNoYW5nZWQuYWRkRXZlbnRMaXN0ZW5lcihSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuX29uVGFyZ2V0RW50aXR5RGVmaW5pdGlvbkNoYW5nZWQsIHRoYXQpO1xuICAgICAgICAgICAgICAgIHRoYXQuX3RhcmdldEVudGl0eSA9IHRhcmdldEVudGl0eTtcbiAgICAgICAgICAgICAgICB0aGF0Ll9yZXNvbHZlRW50aXR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vVGhlIHByb3BlcnR5IGhhcyBiZWNvbWUgZGV0YWNoZWQuICBJdCBoYXMgYSB2YWxpZCB2YWx1ZSBidXQgaXMgbm90IGN1cnJlbnRseSByZXNvbHZlZCB0byBhbiBlbnRpdHkgaW4gdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICB0YXJnZXRFbnRpdHkgPSB0aGF0Ll90YXJnZXRFbnRpdHk7XG4gICAgICAgICAgICAgICAgZW50aXR5SXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWRlZmluZWQodGFyZ2V0RW50aXR5KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoJ3RhcmdldCBlbnRpdHkgXCInICsgdGhhdC5fdGFyZ2V0SWQgKyAnXCIgY291bGQgbm90IGJlIHJlc29sdmVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHlJc1Jlc29sdmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmUodGhhdCkge1xuICAgICAgICB2YXIgdGFyZ2V0UHJvcGVydHkgPSB0aGF0Ll90YXJnZXRQcm9wZXJ0eTtcblxuICAgICAgICBpZiAodGhhdC5fcmVzb2x2ZVByb3BlcnR5KSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5SXNSZXNvbHZlZCA9IHJlc29sdmVFbnRpdHkodGhhdCk7XG5cbiAgICAgICAgICAgIHZhciBuYW1lcyA9IHRoYXQuX3RhcmdldFByb3BlcnR5TmFtZXM7XG4gICAgICAgICAgICB0YXJnZXRQcm9wZXJ0eSA9IHRoYXQuX3RhcmdldEVudGl0eTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBuYW1lcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aCAmJiBkZWZpbmVkKHRhcmdldFByb3BlcnR5KTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRQcm9wZXJ0eVtuYW1lc1tpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkZWZpbmVkKHRhcmdldFByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHRoYXQuX3RhcmdldFByb3BlcnR5ID0gdGFyZ2V0UHJvcGVydHk7XG4gICAgICAgICAgICAgICAgdGhhdC5fcmVzb2x2ZVByb3BlcnR5ID0gIWVudGl0eUlzUmVzb2x2ZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFkZWZpbmVkKHRoYXQuX3RhcmdldFByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoJ3RhcmdldFByb3BlcnR5IFwiJyArIHRoYXQuX3RhcmdldElkICsgJy4nICsgbmFtZXMuam9pbignLicpICsgJ1wiIGNvdWxkIG5vdCBiZSByZXNvbHZlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRQcm9wZXJ0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHtAbGluayBQcm9wZXJ0eX0gd2hpY2ggdHJhbnNwYXJlbnRseSBsaW5rcyB0byBhbm90aGVyIHByb3BlcnR5IG9uIGEgcHJvdmlkZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogQGFsaWFzIFJlZmVyZW5jZVByb3BlcnR5XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VudGl0eUNvbGxlY3Rpb259IHRhcmdldENvbGxlY3Rpb24gVGhlIGVudGl0eSBjb2xsZWN0aW9uIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZXNvbHZlIHRoZSByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRhcmdldElkIFRoZSBpZCBvZiB0aGUgZW50aXR5IHdoaWNoIGlzIGJlaW5nIHJlZmVyZW5jZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdGFyZ2V0UHJvcGVydHlOYW1lcyBUaGUgbmFtZXMgb2YgdGhlIHByb3BlcnR5IG9uIHRoZSB0YXJnZXQgZW50aXR5IHdoaWNoIHdlIHdpbGwgdXNlLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgY29sbGVjdGlvbiA9IG5ldyBDZXNpdW0uRW50aXR5Q29sbGVjdGlvbigpO1xuICAgICAqXG4gICAgICogLy9DcmVhdGUgYSBuZXcgZW50aXR5IGFuZCBhc3NpZ24gYSBiaWxsYm9hcmQgc2NhbGUuXG4gICAgICogdmFyIG9iamVjdDEgPSBuZXcgQ2VzaXVtLkVudGl0eSh7aWQ6J29iamVjdDEnfSk7XG4gICAgICogb2JqZWN0MS5iaWxsYm9hcmQgPSBuZXcgQ2VzaXVtLkJpbGxib2FyZEdyYXBoaWNzKCk7XG4gICAgICogb2JqZWN0MS5iaWxsYm9hcmQuc2NhbGUgPSBuZXcgQ2VzaXVtLkNvbnN0YW50UHJvcGVydHkoMi4wKTtcbiAgICAgKiBjb2xsZWN0aW9uLmFkZChvYmplY3QxKTtcbiAgICAgKlxuICAgICAqIC8vQ3JlYXRlIGEgc2Vjb25kIGVudGl0eSBhbmQgcmVmZXJlbmNlIHRoZSBzY2FsZSBmcm9tIHRoZSBmaXJzdCBvbmUuXG4gICAgICogdmFyIG9iamVjdDIgPSBuZXcgQ2VzaXVtLkVudGl0eSh7aWQ6J29iamVjdDInfSk7XG4gICAgICogb2JqZWN0Mi5tb2RlbCA9IG5ldyBDZXNpdW0uTW9kZWxHcmFwaGljcygpO1xuICAgICAqIG9iamVjdDIubW9kZWwuc2NhbGUgPSBuZXcgQ2VzaXVtLlJlZmVyZW5jZVByb3BlcnR5KGNvbGxlY3Rpb24sICdvYmplY3QxJywgWydiaWxsYm9hcmQnLCAnc2NhbGUnXSk7XG4gICAgICogY29sbGVjdGlvbi5hZGQob2JqZWN0Mik7XG4gICAgICpcbiAgICAgKiAvL0NyZWF0ZSBhIHRoaXJkIG9iamVjdCwgYnV0IHVzZSB0aGUgZnJvbVN0cmluZyBoZWxwZXIgZnVuY3Rpb24uXG4gICAgICogdmFyIG9iamVjdDMgPSBuZXcgQ2VzaXVtLkVudGl0eSh7aWQ6J29iamVjdDMnfSk7XG4gICAgICogb2JqZWN0My5iaWxsYm9hcmQgPSBuZXcgQ2VzaXVtLkJpbGxib2FyZEdyYXBoaWNzKCk7XG4gICAgICogb2JqZWN0My5iaWxsYm9hcmQuc2NhbGUgPSBDZXNpdW0uUmVmZXJlbmNlUHJvcGVydHkuZnJvbVN0cmluZyhjb2xsZWN0aW9uLCAnb2JqZWN0MSNiaWxsYm9hcmQuc2NhbGUnKTtcbiAgICAgKiBjb2xsZWN0aW9uLmFkZChvYmplY3QzKTtcbiAgICAgKlxuICAgICAqIC8vWW91IGNhbiByZWZlciB0byBhbiBlbnRpdHkgd2l0aCBhICMgb3IgLiBpbiBpZCBhbmQgcHJvcGVydHkgbmFtZXMgYnkgZXNjYXBpbmcgdGhlbS5cbiAgICAgKiB2YXIgb2JqZWN0NCA9IG5ldyBDZXNpdW0uRW50aXR5KHtpZDonI29iamVjdC40J30pO1xuICAgICAqIG9iamVjdDQuYmlsbGJvYXJkID0gbmV3IENlc2l1bS5CaWxsYm9hcmRHcmFwaGljcygpO1xuICAgICAqIG9iamVjdDQuYmlsbGJvYXJkLnNjYWxlID0gbmV3IENlc2l1bS5Db25zdGFudFByb3BlcnR5KDIuMCk7XG4gICAgICogY29sbGVjdGlvbi5hZGQob2JqZWN0NCk7XG4gICAgICpcbiAgICAgKiB2YXIgb2JqZWN0NSA9IG5ldyBDZXNpdW0uRW50aXR5KHtpZDonb2JqZWN0NSd9KTtcbiAgICAgKiBvYmplY3Q1LmJpbGxib2FyZCA9IG5ldyBDZXNpdW0uQmlsbGJvYXJkR3JhcGhpY3MoKTtcbiAgICAgKiBvYmplY3Q1LmJpbGxib2FyZC5zY2FsZSA9IENlc2l1bS5SZWZlcmVuY2VQcm9wZXJ0eS5mcm9tU3RyaW5nKGNvbGxlY3Rpb24sICdcXFxcI29iamVjdFxcXFwuNCNiaWxsYm9hcmQuc2NhbGUnKTtcbiAgICAgKiBjb2xsZWN0aW9uLmFkZChvYmplY3Q1KTtcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSZWZlcmVuY2VQcm9wZXJ0eSh0YXJnZXRDb2xsZWN0aW9uLCB0YXJnZXRJZCwgdGFyZ2V0UHJvcGVydHlOYW1lcykge1xuICAgICAgICBcblxuICAgICAgICB0aGlzLl90YXJnZXRDb2xsZWN0aW9uID0gdGFyZ2V0Q29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5fdGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0UHJvcGVydHlOYW1lcyA9IHRhcmdldFByb3BlcnR5TmFtZXM7XG4gICAgICAgIHRoaXMuX3RhcmdldFByb3BlcnR5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90YXJnZXRFbnRpdHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkID0gbmV3IEV2ZW50KCk7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVFbnRpdHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXNvbHZlUHJvcGVydHkgPSB0cnVlO1xuXG4gICAgICAgIHRhcmdldENvbGxlY3Rpb24uY29sbGVjdGlvbkNoYW5nZWQuYWRkRXZlbnRMaXN0ZW5lcihSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuX29uQ29sbGVjdGlvbkNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGRlZmluZVByb3BlcnRpZXMoUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyBpZiB0aGlzIHByb3BlcnR5IGlzIGNvbnN0YW50LlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RhbnQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvcGVydHkuaXNDb25zdGFudChyZXNvbHZlKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGV2ZW50IHRoYXQgaXMgcmFpc2VkIHdoZW5ldmVyIHRoZSBkZWZpbml0aW9uIG9mIHRoaXMgcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgICAgICogVGhlIGRlZmluaXRpb24gaXMgY2hhbmdlZCB3aGVuZXZlciB0aGUgcmVmZXJlbmNlZCBwcm9wZXJ0eSdzIGRlZmluaXRpb24gaXMgY2hhbmdlZC5cbiAgICAgICAgICogQG1lbWJlcm9mIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKiBAdHlwZSB7RXZlbnR9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5pdGlvbkNoYW5nZWQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSByZWZlcmVuY2UgZnJhbWUgdGhhdCB0aGUgcG9zaXRpb24gaXMgZGVmaW5lZCBpbi5cbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHZhbGlkIGlmIHRoZSByZWZlcmVuY2VkIHByb3BlcnR5IGlzIGEge0BsaW5rIFBvc2l0aW9uUHJvcGVydHl9LlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtSZWZlcmVuY2VGcmFtZX1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2VGcmFtZSA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMpLnJlZmVyZW5jZUZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgaWQgb2YgdGhlIGVudGl0eSBiZWluZyByZWZlcmVuY2VkLlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0SWQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0SWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBjb2xsZWN0aW9uIGNvbnRhaW5pbmcgdGhlIGVudGl0eSBiZWluZyByZWZlcmVuY2VkLlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtFbnRpdHlDb2xsZWN0aW9ufVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldENvbGxlY3Rpb24gOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0Q29sbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIHVzZWQgdG8gcmV0cmlldmUgdGhlIHJlZmVyZW5jZWQgcHJvcGVydHkuXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICogQHR5cGUge1N0cmluZ1tdfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldFByb3BlcnR5TmFtZXMgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0UHJvcGVydHlOYW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIHJlc29sdmVkIGluc3RhbmNlIG9mIHRoZSB1bmRlcmx5aW5nIHJlZmVyZW5jZWQgcHJvcGVydHkuXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICogQHR5cGUge1Byb3BlcnR5fVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIHJlc29sdmVkUHJvcGVydHkgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBnaXZlbiB0aGUgZW50aXR5IGNvbGxlY3Rpb24gdGhhdCB3aWxsXG4gICAgICogYmUgdXNlZCB0byByZXNvbHZlIGl0IGFuZCBhIHN0cmluZyBpbmRpY2F0aW5nIHRoZSB0YXJnZXQgZW50aXR5IGlkIGFuZCBwcm9wZXJ0eS5cbiAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgXCJvYmplY3RJZCNmb28uYmFyXCIsIHdoZXJlICMgc2VwYXJhdGVzIHRoZSBpZCBmcm9tXG4gICAgICogcHJvcGVydHkgcGF0aCBhbmQgLiBzZXBhcmF0ZXMgc3ViLXByb3BlcnRpZXMuICBJZiB0aGUgcmVmZXJlbmNlIGlkZW50aWZpZXIgb3JcbiAgICAgKiBvciBhbnkgc3ViLXByb3BlcnRpZXMgY29udGFpbnMgYSAjIC4gb3IgXFwgdGhleSBtdXN0IGJlIGVzY2FwZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VudGl0eUNvbGxlY3Rpb259IHRhcmdldENvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcmVmZXJlbmNlU3RyaW5nXG4gICAgICogQHJldHVybnMge1JlZmVyZW5jZVByb3BlcnR5fSBBIG5ldyBpbnN0YW5jZSBvZiBSZWZlcmVuY2VQcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBleGNlcHRpb24ge0RldmVsb3BlckVycm9yfSBpbnZhbGlkIHJlZmVyZW5jZVN0cmluZy5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2VQcm9wZXJ0eS5mcm9tU3RyaW5nID0gZnVuY3Rpb24odGFyZ2V0Q29sbGVjdGlvbiwgcmVmZXJlbmNlU3RyaW5nKSB7XG4gICAgICAgIFxuXG4gICAgICAgIHZhciBpZGVudGlmaWVyO1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICAgICAgdmFyIGluSWRlbnRpZmllciA9IHRydWU7XG4gICAgICAgIHZhciBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRva2VuID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVmZXJlbmNlU3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHJlZmVyZW5jZVN0cmluZy5jaGFyQXQoaSk7XG5cbiAgICAgICAgICAgIGlmIChpc0VzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiArPSBjO1xuICAgICAgICAgICAgICAgIGlzRXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICBpc0VzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbklkZW50aWZpZXIgJiYgYyA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgaWRlbnRpZmllciA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGluSWRlbnRpZmllciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRva2VuID0gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpbklkZW50aWZpZXIgJiYgYyA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIHRva2VuID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRva2VuICs9IGM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzLnB1c2godG9rZW4pO1xuXG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlUHJvcGVydHkodGFyZ2V0Q29sbGVjdGlvbiwgaWRlbnRpZmllciwgdmFsdWVzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGF0IHRoZSBwcm92aWRlZCB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtKdWxpYW5EYXRlfSB0aW1lIFRoZSB0aW1lIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtyZXN1bHRdIFRoZSBvYmplY3QgdG8gc3RvcmUgdGhlIHZhbHVlIGludG8sIGlmIG9taXR0ZWQsIGEgbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHJldHVybmVkLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtb2RpZmllZCByZXN1bHQgcGFyYW1ldGVyIG9yIGEgbmV3IGluc3RhbmNlIGlmIHRoZSByZXN1bHQgcGFyYW1ldGVyIHdhcyBub3Qgc3VwcGxpZWQuXG4gICAgICovXG4gICAgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24odGltZSwgcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMpLmdldFZhbHVlKHRpbWUsIHJlc3VsdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBhdCB0aGUgcHJvdmlkZWQgdGltZSBhbmQgaW4gdGhlIHByb3ZpZGVkIHJlZmVyZW5jZSBmcmFtZS5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvbmx5IHZhbGlkIGlmIHRoZSBwcm9wZXJ0eSBiZWluZyByZWZlcmVuY2VkIGlzIGEge0BsaW5rIFBvc2l0aW9uUHJvcGVydHl9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtKdWxpYW5EYXRlfSB0aW1lIFRoZSB0aW1lIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtSZWZlcmVuY2VGcmFtZX0gcmVmZXJlbmNlRnJhbWUgVGhlIGRlc2lyZWQgcmVmZXJlbmNlRnJhbWUgb2YgdGhlIHJlc3VsdC5cbiAgICAgKiBAcGFyYW0ge0NhcnRlc2lhbjN9IFtyZXN1bHRdIFRoZSBvYmplY3QgdG8gc3RvcmUgdGhlIHZhbHVlIGludG8sIGlmIG9taXR0ZWQsIGEgbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHJldHVybmVkLlxuICAgICAqIEByZXR1cm5zIHtDYXJ0ZXNpYW4zfSBUaGUgbW9kaWZpZWQgcmVzdWx0IHBhcmFtZXRlciBvciBhIG5ldyBpbnN0YW5jZSBpZiB0aGUgcmVzdWx0IHBhcmFtZXRlciB3YXMgbm90IHN1cHBsaWVkLlxuICAgICAqL1xuICAgIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUgPSBmdW5jdGlvbih0aW1lLCByZWZlcmVuY2VGcmFtZSwgcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMpLmdldFZhbHVlSW5SZWZlcmVuY2VGcmFtZSh0aW1lLCByZWZlcmVuY2VGcmFtZSwgcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUge0BsaW5rIE1hdGVyaWFsfSB0eXBlIGF0IHRoZSBwcm92aWRlZCB0aW1lLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgdmFsaWQgaWYgdGhlIHByb3BlcnR5IGJlaW5nIHJlZmVyZW5jZWQgaXMgYSB7QGxpbmsgTWF0ZXJpYWxQcm9wZXJ0eX0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0p1bGlhbkRhdGV9IHRpbWUgVGhlIHRpbWUgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSB0eXBlLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSB0eXBlIG9mIG1hdGVyaWFsLlxuICAgICAqL1xuICAgIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24odGltZSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzKS5nZXRUeXBlKHRpbWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb21wYXJlcyB0aGlzIHByb3BlcnR5IHRvIHRoZSBwcm92aWRlZCBwcm9wZXJ0eSBhbmQgcmV0dXJuc1xuICAgICAqIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZXkgYXJlIGVxdWFsLCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9wZXJ0eX0gW290aGVyXSBUaGUgb3RoZXIgcHJvcGVydHkuXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IDxjb2RlPnRydWU8L2NvZGU+IGlmIGxlZnQgYW5kIHJpZ2h0IGFyZSBlcXVhbCwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgaWYgKHRoaXMgPT09IG90aGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYW1lcyA9IHRoaXMuX3RhcmdldFByb3BlcnR5TmFtZXM7XG4gICAgICAgIHZhciBvdGhlck5hbWVzID0gb3RoZXIuX3RhcmdldFByb3BlcnR5TmFtZXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RhcmdldENvbGxlY3Rpb24gIT09IG90aGVyLl90YXJnZXRDb2xsZWN0aW9uIHx8IC8vXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRJZCAhPT0gb3RoZXIuX3RhcmdldElkIHx8IC8vXG4gICAgICAgICAgICBuYW1lcy5sZW5ndGggIT09IG90aGVyTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5fdGFyZ2V0UHJvcGVydHlOYW1lcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuYW1lc1tpXSAhPT0gb3RoZXJOYW1lc1tpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuX29uVGFyZ2V0RW50aXR5RGVmaW5pdGlvbkNoYW5nZWQgPSBmdW5jdGlvbih0YXJnZXRFbnRpdHksIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0UHJvcGVydHlOYW1lc1swXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZVByb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLl9vbkNvbGxlY3Rpb25DaGFuZ2VkID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICAgICAgdmFyIHRhcmdldEVudGl0eSA9IHRoaXMuX3RhcmdldEVudGl0eTtcbiAgICAgICAgaWYgKGRlZmluZWQodGFyZ2V0RW50aXR5KSkge1xuICAgICAgICAgICAgaWYgKHJlbW92ZWQuaW5kZXhPZih0YXJnZXRFbnRpdHkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldEVudGl0eS5kZWZpbml0aW9uQ2hhbmdlZC5yZW1vdmVFdmVudExpc3RlbmVyKFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZS5fb25UYXJnZXRFbnRpdHlEZWZpbml0aW9uQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUVudGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZVByb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmVzb2x2ZUVudGl0eSkge1xuICAgICAgICAgICAgICAgIC8vSWYgdGFyZ2V0RW50aXR5IGlzIGRlZmluZWQgYnV0IHJlc29sdmVFbnRpdHkgaXMgdHJ1ZSwgdGhlbiB0aGUgZW50aXR5IGlzIGRldGFjaGVkXG4gICAgICAgICAgICAgICAgLy9hbmQgYW55IGNoYW5nZSB0byB0aGUgY29sbGVjdGlvbiBuZWVkcyB0byBpbmN1ciBhbiBhdHRlbXB0IHRvIHJlc29sdmUgaW4gb3JkZXIgdG8gcmUtYXR0YWNoLlxuICAgICAgICAgICAgICAgIC8vd2l0aG91dCB0aGlzIGlmIGJsb2NrLCBhIHJlZmVyZW5jZSB0aGF0IGJlY29tZXMgcmUtYXR0YWNoZWQgd2lsbCBub3Qgc2lnbmFsIGRlZmluaXRpb25DaGFuZ2VkXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3Jlc29sdmVFbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlZmVyZW5jZVByb3BlcnR5O1xufSk7XG4iLCJkZWZpbmUoW1xuICAgICAgICAnLi4vQ29yZS9kZWZpbmVkJyxcbiAgICAgICAgJy4uL0NvcmUvZGVmaW5lUHJvcGVydGllcycsXG4gICAgICAgICcuLi9Db3JlL0RldmVsb3BlckVycm9yJyxcbiAgICAgICAgJy4uL0NvcmUvRWxsaXBzb2lkJyxcbiAgICAgICAgJy4uL0NvcmUvRXZlbnQnLFxuICAgICAgICAnLi4vQ29yZS9SZWZlcmVuY2VGcmFtZScsXG4gICAgICAgICcuL1Byb3BlcnR5J1xuICAgIF0sIGZ1bmN0aW9uKFxuICAgICAgICBkZWZpbmVkLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzLFxuICAgICAgICBEZXZlbG9wZXJFcnJvcixcbiAgICAgICAgRWxsaXBzb2lkLFxuICAgICAgICBFdmVudCxcbiAgICAgICAgUmVmZXJlbmNlRnJhbWUsXG4gICAgICAgIFByb3BlcnR5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhIHRlbXBvcmFyeSBjbGFzcyBmb3Igc2NhbGluZyBwb3NpdGlvbiBwcm9wZXJ0aWVzIHRvIHRoZSBXR1M4NCBzdXJmYWNlLlxuICAgICAqIEl0IHdpbGwgZ28gYXdheSBvciBiZSByZWZhY3RvcmVkIHRvIHN1cHBvcnQgZGF0YSB3aXRoIGFyYml0cmFyeSBoZWlnaHQgcmVmZXJlbmNlcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNjYWxlZFBvc2l0aW9uUHJvcGVydHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnQoKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZGVmaW5lUHJvcGVydGllcyhTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZSwge1xuICAgICAgICBpc0NvbnN0YW50IDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5LmlzQ29uc3RhbnQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWZpbml0aW9uQ2hhbmdlZCA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXJlbmNlRnJhbWUgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzLl92YWx1ZSkgPyB0aGlzLl92YWx1ZS5yZWZlcmVuY2VGcmFtZSA6IFJlZmVyZW5jZUZyYW1lLkZJWEVEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHRpbWUsIHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUodGltZSwgUmVmZXJlbmNlRnJhbWUuRklYRUQsIHJlc3VsdCk7XG4gICAgfTtcblxuICAgIFNjYWxlZFBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGRlZmluZWQodGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9uID0gdmFsdWUuZGVmaW5pdGlvbkNoYW5nZWQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9yYWlzZURlZmluaXRpb25DaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lID0gZnVuY3Rpb24odGltZSwgcmVmZXJlbmNlRnJhbWUsIHJlc3VsdCkge1xuICAgICAgICBcblxuICAgICAgICBpZiAoIWRlZmluZWQodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fdmFsdWUuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lKHRpbWUsIHJlZmVyZW5jZUZyYW1lLCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gZGVmaW5lZChyZXN1bHQpID8gRWxsaXBzb2lkLldHUzg0LnNjYWxlVG9HZW9kZXRpY1N1cmZhY2UocmVzdWx0LCByZXN1bHQpIDogdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gb3RoZXIgfHwgKG90aGVyIGluc3RhbmNlb2YgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eSAmJiB0aGlzLl92YWx1ZSA9PT0gb3RoZXIuX3ZhbHVlKTtcbiAgICB9O1xuXG4gICAgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuX3JhaXNlRGVmaW5pdGlvbkNoYW5nZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudCh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNjYWxlZFBvc2l0aW9uUHJvcGVydHk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3BWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=