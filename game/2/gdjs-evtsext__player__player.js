
gdjs.evtsExt__Player__Player = gdjs.evtsExt__Player__Player || {};

/**
 * Behavior generated from Player
 */
gdjs.evtsExt__Player__Player.Player = class Player extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Player__Player.Player.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.Tween3D = behaviorData.Tween3D !== undefined ? behaviorData.Tween3D : "";
    this._behaviorData.ThirdPersonCamera = behaviorData.ThirdPersonCamera !== undefined ? behaviorData.ThirdPersonCamera : "";
    this._behaviorData.Respawn3D = behaviorData.Respawn3D !== undefined ? behaviorData.Respawn3D : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Object3D !== newBehaviorData.Object3D)
      this._behaviorData.Object3D = newBehaviorData.Object3D;
    if (oldBehaviorData.PhysicsCharacter3D !== newBehaviorData.PhysicsCharacter3D)
      this._behaviorData.PhysicsCharacter3D = newBehaviorData.PhysicsCharacter3D;
    if (oldBehaviorData.Tween3D !== newBehaviorData.Tween3D)
      this._behaviorData.Tween3D = newBehaviorData.Tween3D;
    if (oldBehaviorData.ThirdPersonCamera !== newBehaviorData.ThirdPersonCamera)
      this._behaviorData.ThirdPersonCamera = newBehaviorData.ThirdPersonCamera;
    if (oldBehaviorData.Respawn3D !== newBehaviorData.Respawn3D)
      this._behaviorData.Respawn3D = newBehaviorData.Respawn3D;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    Tween3D: this._behaviorData.Tween3D,
    ThirdPersonCamera: this._behaviorData.ThirdPersonCamera,
    Respawn3D: this._behaviorData.Respawn3D,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.Tween3D !== undefined)
      this._behaviorData.Tween3D = networkSyncData.props.Tween3D;
    if (networkSyncData.props.ThirdPersonCamera !== undefined)
      this._behaviorData.ThirdPersonCamera = networkSyncData.props.ThirdPersonCamera;
    if (networkSyncData.props.Respawn3D !== undefined)
      this._behaviorData.Respawn3D = networkSyncData.props.Respawn3D;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getTween3D() {
    return this._behaviorData.Tween3D !== undefined ? this._behaviorData.Tween3D : "";
  }
  _setTween3D(newValue) {
    this._behaviorData.Tween3D = newValue;
  }
  _getThirdPersonCamera() {
    return this._behaviorData.ThirdPersonCamera !== undefined ? this._behaviorData.ThirdPersonCamera : "";
  }
  _setThirdPersonCamera(newValue) {
    this._behaviorData.ThirdPersonCamera = newValue;
  }
  _getRespawn3D() {
    return this._behaviorData.Respawn3D !== undefined ? this._behaviorData.Respawn3D : "";
  }
  _setRespawn3D(newValue) {
    this._behaviorData.Respawn3D = newValue;
  }
}

/**
 * Shared data generated from Player
 */
gdjs.evtsExt__Player__Player.Player.SharedData = class PlayerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Player__Player.Player.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Player_PlayerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Player_PlayerSharedData = new gdjs.evtsExt__Player__Player.Player.SharedData(
      initialData
    );
  }
  return instanceContainer._Player_PlayerSharedData;
}

// Methods:
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.asyncCallback17229548 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).TweenStretchZ("Stretch", 1, 0.25, "easeInOutCubic", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1) asyncObjectsList.addObject("Object", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.125), (runtimeScene) => (gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.asyncCallback17229548(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.asyncCallback17230964 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).TweenStretchZ("Stretch", 1, 0.2, "easeInOutCubic", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1) asyncObjectsList.addObject("Object", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.asyncCallback17230964(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.asyncCallback17233892 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).TweenStretchZ("Unstrentch", 1, 1, "elastic", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1) asyncObjectsList.addObject("Object", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.0625), (runtimeScene) => (gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.asyncCallback17233892(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17229364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).TweenStretchZ("Stretch", 0.67, 0.125, "easeOutCubic", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17230548);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).TweenStretchZ("Stretch", 1.5, 0.15, "easeOutCubic", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() > -(100) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera"), true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() < -(100) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ThirdPersonCamera"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() < -(800) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Respawn3D")).Respawn((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).SetStretchZ(8, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
, "Tween3D": this._getTween3D()
, "ThirdPersonCamera": this._getThirdPersonCamera()
, "Respawn3D": this._getRespawn3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Player"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Player"),
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

gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__Player.Player.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Player::Player", gdjs.evtsExt__Player__Player.Player);
