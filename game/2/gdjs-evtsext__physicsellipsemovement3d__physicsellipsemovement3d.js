
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D || {};

/**
 * Behavior generated from 3D ellipse movement
 */
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D = class PhysicsEllipseMovement3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.Physics3D = behaviorData.Physics3D !== undefined ? behaviorData.Physics3D : "";
    this._behaviorData.Width = behaviorData.Width !== undefined ? behaviorData.Width : Number("100") || 0;
    this._behaviorData.Height = behaviorData.Height !== undefined ? behaviorData.Height : Number("0") || 0;
    this._behaviorData.Plane = behaviorData.Plane !== undefined ? behaviorData.Plane : "Z";
    this._behaviorData.LoopDuration = behaviorData.LoopDuration !== undefined ? behaviorData.LoopDuration : Number("6") || 0;
    this._behaviorData.InitialTurningLeft = behaviorData.InitialTurningLeft !== undefined ? behaviorData.InitialTurningLeft : false;
    this._behaviorData.InitialDirectionAngle = behaviorData.InitialDirectionAngle !== undefined ? behaviorData.InitialDirectionAngle : Number("0") || 0;
    this._behaviorData.ShouldRotate = behaviorData.ShouldRotate !== undefined ? behaviorData.ShouldRotate : false;
    this._behaviorData.RotationOffset = behaviorData.RotationOffset !== undefined ? behaviorData.RotationOffset : Number("0") || 0;
    this._behaviorData.CenterV = Number("0") || 0;
    this._behaviorData.CenterH = Number("0") || 0;
    this._behaviorData.MovementAngle = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Object3D !== newBehaviorData.Object3D)
      this._behaviorData.Object3D = newBehaviorData.Object3D;
    if (oldBehaviorData.Physics3D !== newBehaviorData.Physics3D)
      this._behaviorData.Physics3D = newBehaviorData.Physics3D;
    if (oldBehaviorData.Width !== newBehaviorData.Width)
      this._behaviorData.Width = newBehaviorData.Width;
    if (oldBehaviorData.Height !== newBehaviorData.Height)
      this._behaviorData.Height = newBehaviorData.Height;
    if (oldBehaviorData.Plane !== newBehaviorData.Plane)
      this._behaviorData.Plane = newBehaviorData.Plane;
    if (oldBehaviorData.LoopDuration !== newBehaviorData.LoopDuration)
      this._behaviorData.LoopDuration = newBehaviorData.LoopDuration;
    if (oldBehaviorData.InitialTurningLeft !== newBehaviorData.InitialTurningLeft)
      this._behaviorData.InitialTurningLeft = newBehaviorData.InitialTurningLeft;
    if (oldBehaviorData.InitialDirectionAngle !== newBehaviorData.InitialDirectionAngle)
      this._behaviorData.InitialDirectionAngle = newBehaviorData.InitialDirectionAngle;
    if (oldBehaviorData.ShouldRotate !== newBehaviorData.ShouldRotate)
      this._behaviorData.ShouldRotate = newBehaviorData.ShouldRotate;
    if (oldBehaviorData.RotationOffset !== newBehaviorData.RotationOffset)
      this._behaviorData.RotationOffset = newBehaviorData.RotationOffset;
    if (oldBehaviorData.CenterV !== newBehaviorData.CenterV)
      this._behaviorData.CenterV = newBehaviorData.CenterV;
    if (oldBehaviorData.CenterH !== newBehaviorData.CenterH)
      this._behaviorData.CenterH = newBehaviorData.CenterH;
    if (oldBehaviorData.MovementAngle !== newBehaviorData.MovementAngle)
      this._behaviorData.MovementAngle = newBehaviorData.MovementAngle;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    Physics3D: this._behaviorData.Physics3D,
    Width: this._behaviorData.Width,
    Height: this._behaviorData.Height,
    Plane: this._behaviorData.Plane,
    LoopDuration: this._behaviorData.LoopDuration,
    InitialTurningLeft: this._behaviorData.InitialTurningLeft,
    InitialDirectionAngle: this._behaviorData.InitialDirectionAngle,
    ShouldRotate: this._behaviorData.ShouldRotate,
    RotationOffset: this._behaviorData.RotationOffset,
    CenterV: this._behaviorData.CenterV,
    CenterH: this._behaviorData.CenterH,
    MovementAngle: this._behaviorData.MovementAngle,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.Physics3D !== undefined)
      this._behaviorData.Physics3D = networkSyncData.props.Physics3D;
    if (networkSyncData.props.Width !== undefined)
      this._behaviorData.Width = networkSyncData.props.Width;
    if (networkSyncData.props.Height !== undefined)
      this._behaviorData.Height = networkSyncData.props.Height;
    if (networkSyncData.props.Plane !== undefined)
      this._behaviorData.Plane = networkSyncData.props.Plane;
    if (networkSyncData.props.LoopDuration !== undefined)
      this._behaviorData.LoopDuration = networkSyncData.props.LoopDuration;
    if (networkSyncData.props.InitialTurningLeft !== undefined)
      this._behaviorData.InitialTurningLeft = networkSyncData.props.InitialTurningLeft;
    if (networkSyncData.props.InitialDirectionAngle !== undefined)
      this._behaviorData.InitialDirectionAngle = networkSyncData.props.InitialDirectionAngle;
    if (networkSyncData.props.ShouldRotate !== undefined)
      this._behaviorData.ShouldRotate = networkSyncData.props.ShouldRotate;
    if (networkSyncData.props.RotationOffset !== undefined)
      this._behaviorData.RotationOffset = networkSyncData.props.RotationOffset;
    if (networkSyncData.props.CenterV !== undefined)
      this._behaviorData.CenterV = networkSyncData.props.CenterV;
    if (networkSyncData.props.CenterH !== undefined)
      this._behaviorData.CenterH = networkSyncData.props.CenterH;
    if (networkSyncData.props.MovementAngle !== undefined)
      this._behaviorData.MovementAngle = networkSyncData.props.MovementAngle;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getPhysics3D() {
    return this._behaviorData.Physics3D !== undefined ? this._behaviorData.Physics3D : "";
  }
  _setPhysics3D(newValue) {
    this._behaviorData.Physics3D = newValue;
  }
  _getWidth() {
    return this._behaviorData.Width !== undefined ? this._behaviorData.Width : Number("100") || 0;
  }
  _setWidth(newValue) {
    this._behaviorData.Width = newValue;
  }
  _getHeight() {
    return this._behaviorData.Height !== undefined ? this._behaviorData.Height : Number("0") || 0;
  }
  _setHeight(newValue) {
    this._behaviorData.Height = newValue;
  }
  _getPlane() {
    return this._behaviorData.Plane !== undefined ? this._behaviorData.Plane : "Z";
  }
  _setPlane(newValue) {
    this._behaviorData.Plane = newValue;
  }
  _getLoopDuration() {
    return this._behaviorData.LoopDuration !== undefined ? this._behaviorData.LoopDuration : Number("6") || 0;
  }
  _setLoopDuration(newValue) {
    this._behaviorData.LoopDuration = newValue;
  }
  _getInitialTurningLeft() {
    return this._behaviorData.InitialTurningLeft !== undefined ? this._behaviorData.InitialTurningLeft : false;
  }
  _setInitialTurningLeft(newValue) {
    this._behaviorData.InitialTurningLeft = newValue;
  }
  _toggleInitialTurningLeft() {
    this._setInitialTurningLeft(!this._getInitialTurningLeft());
  }
  _getInitialDirectionAngle() {
    return this._behaviorData.InitialDirectionAngle !== undefined ? this._behaviorData.InitialDirectionAngle : Number("0") || 0;
  }
  _setInitialDirectionAngle(newValue) {
    this._behaviorData.InitialDirectionAngle = newValue;
  }
  _getShouldRotate() {
    return this._behaviorData.ShouldRotate !== undefined ? this._behaviorData.ShouldRotate : false;
  }
  _setShouldRotate(newValue) {
    this._behaviorData.ShouldRotate = newValue;
  }
  _toggleShouldRotate() {
    this._setShouldRotate(!this._getShouldRotate());
  }
  _getRotationOffset() {
    return this._behaviorData.RotationOffset !== undefined ? this._behaviorData.RotationOffset : Number("0") || 0;
  }
  _setRotationOffset(newValue) {
    this._behaviorData.RotationOffset = newValue;
  }
  _getCenterV() {
    return this._behaviorData.CenterV !== undefined ? this._behaviorData.CenterV : Number("0") || 0;
  }
  _setCenterV(newValue) {
    this._behaviorData.CenterV = newValue;
  }
  _getCenterH() {
    return this._behaviorData.CenterH !== undefined ? this._behaviorData.CenterH : Number("0") || 0;
  }
  _setCenterH(newValue) {
    this._behaviorData.CenterH = newValue;
  }
  _getMovementAngle() {
    return this._behaviorData.MovementAngle !== undefined ? this._behaviorData.MovementAngle : Number("0") || 0;
  }
  _setMovementAngle(newValue) {
    this._behaviorData.MovementAngle = newValue;
  }
}

/**
 * Shared data generated from 3D ellipse movement
 */
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.SharedData = class PhysicsEllipseMovement3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PhysicsEllipseMovement3D_PhysicsEllipseMovement3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PhysicsEllipseMovement3D_PhysicsEllipseMovement3DSharedData = new gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.SharedData(
      initialData
    );
  }
  return instanceContainer._PhysicsEllipseMovement3D_PhysicsEllipseMovement3DSharedData;
}

// Methods:
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialTurningLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() * (-(1)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialDirectionAngle() + 90);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialDirectionAngle() - 90);
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlane() == "Z" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterV((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaH((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterH((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaV((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlane() == "Y" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterV((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaH((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterH((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaV((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlane() == "X" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterV((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaH((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterH((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaV((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityX(-(Math.sin(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()))) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityY(Math.cos(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle())) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setAngularVelocityZ(360 / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].setPosition(gdjs.evtTools.common.clamp((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterV() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterV() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2),gdjs.evtTools.common.clamp((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterH() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterH() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2));
}
}}

}


};gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityY(-(Math.sin(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()))) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityZ(Math.cos(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle())) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setAngularVelocityX(360 / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtTools.common.clamp((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterV() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterV() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtTools.common.clamp((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterH() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterH() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2));
}
}}

}


};gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityX(-(Math.sin(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()))) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityZ(Math.cos(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle())) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setAngularVelocityX(360 / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(gdjs.evtTools.common.clamp((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterV() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterV() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtTools.common.clamp((gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterH() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterH() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2));
}
}}

}


};gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18318068);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlane() == "Z" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlane() == "Y" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlane() == "X" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle() + (360 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration()));
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setLinearVelocityZ(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setAngularVelocityX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setAngularVelocityY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3D")).setAngularVelocityZ(0);
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.IsTurningLeftContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("TurnLeft") : false);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("TurnLeft") : false);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1_1final, gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeft = function(TurnLeft, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "TurnLeft") return TurnLeft;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetTurningLeftContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterV(2 * (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterV((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterH(2 * (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterH((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle() + (180));
}
}{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() * (-(1)));
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.ToggleTurningLeftContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle(); }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.MovementAngleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngle = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetMovementAngleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterV(); }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterV = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterVContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterH(); }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterH = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.CenterHContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth(); }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.Width = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.WidthContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWidth(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidth = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetWidthContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight(); }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.Height = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.HeightContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeight(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetHeightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration()); }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.LoopDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration(-(eventsFunctionContext.getArgument("Value")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.SetLoopDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.cos(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle())) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth() / 2; }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaH = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaHContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.sin(gdjs.toRad(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle())) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeight() / 2; }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaV = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DeltaVContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext = {};
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle() + 90; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle() - 90; }}}

}


};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Object3D": this._getObject3D()
, "Physics3D": this._getPhysics3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PhysicsEllipseMovement3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PhysicsEllipseMovement3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D.prototype.DirectionAngleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("PhysicsEllipseMovement3D::PhysicsEllipseMovement3D", gdjs.evtsExt__PhysicsEllipseMovement3D__PhysicsEllipseMovement3D.PhysicsEllipseMovement3D);
