
if (typeof gdjs.evtsExt__Shadow__Cast !== "undefined") {
  gdjs.evtsExt__Shadow__Cast.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Shadow__Cast = {};
gdjs.evtsExt__Shadow__Cast.GDShadowObjects1= [];
gdjs.evtsExt__Shadow__Cast.GDShadowObjects2= [];
gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1= [];
gdjs.evtsExt__Shadow__Cast.GDCharacterObjects2= [];
gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects1= [];
gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects2= [];


gdjs.evtsExt__Shadow__Cast.mapOfGDgdjs_9546evtsExt_9595_9595Shadow_9595_9595Cast_9546GDShadowReceiverObjects1Objects = Hashtable.newFrom({"ShadowReceiver": gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects1});
gdjs.evtsExt__Shadow__Cast.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Shadow"), gdjs.evtsExt__Shadow__Cast.GDShadowObjects1);
{for(var i = 0, len = gdjs.evtsExt__Shadow__Cast.GDShadowObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Shadow__Cast.GDShadowObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(-(1000));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Character"), gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ShadowReceiver"), gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.func(runtimeScene, gdjs.evtsExt__Shadow__Cast.mapOfGDgdjs_9546evtsExt_9595_9595Shadow_9595_9595Cast_9546GDShadowReceiverObjects1Objects, (( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getX()), (( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getY()), (( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()), (( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getX()), (( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getY()), (( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) - 1000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Shadow"), gdjs.evtsExt__Shadow__Cast.GDShadowObjects1);
{for(var i = 0, len = gdjs.evtsExt__Shadow__Cast.GDShadowObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Shadow__Cast.GDShadowObjects1[i].setAngle((( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.evtsExt__Shadow__Cast.GDShadowObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Shadow__Cast.GDShadowObjects1[i].setCenterPositionInScene((( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getX()),(( gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Shadow__Cast.GDShadowObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Shadow__Cast.GDShadowObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtsExt__Raycaster3D__IntersectionZ.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + 2);
}
}}

}


};

gdjs.evtsExt__Shadow__Cast.func = function(runtimeScene, Shadow, Object3D, Character, Object3D, ShadowReceiver, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Shadow": Shadow
, "Character": Character
, "ShadowReceiver": ShadowReceiver
},
  _objectArraysMap: {
"Shadow": gdjs.objectsListsToArray(Shadow)
, "Character": gdjs.objectsListsToArray(Character)
, "ShadowReceiver": gdjs.objectsListsToArray(ShadowReceiver)
},
  _behaviorNamesMap: {
"Object3D": Object3D
, "Object3D": Object3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Shadow"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Shadow"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Shadow__Cast.GDShadowObjects1.length = 0;
gdjs.evtsExt__Shadow__Cast.GDShadowObjects2.length = 0;
gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length = 0;
gdjs.evtsExt__Shadow__Cast.GDCharacterObjects2.length = 0;
gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects1.length = 0;
gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects2.length = 0;

gdjs.evtsExt__Shadow__Cast.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Shadow__Cast.GDShadowObjects1.length = 0;
gdjs.evtsExt__Shadow__Cast.GDShadowObjects2.length = 0;
gdjs.evtsExt__Shadow__Cast.GDCharacterObjects1.length = 0;
gdjs.evtsExt__Shadow__Cast.GDCharacterObjects2.length = 0;
gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects1.length = 0;
gdjs.evtsExt__Shadow__Cast.GDShadowReceiverObjects2.length = 0;


return;
}

gdjs.evtsExt__Shadow__Cast.registeredGdjsCallbacks = [];