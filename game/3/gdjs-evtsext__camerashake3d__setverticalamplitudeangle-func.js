
if (typeof gdjs.evtsExt__CameraShake3D__SetVerticalAmplitudeAngle !== "undefined") {
  gdjs.evtsExt__CameraShake3D__SetVerticalAmplitudeAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake3D__SetVerticalAmplitudeAngle = {};


gdjs.evtsExt__CameraShake3D__SetVerticalAmplitudeAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setString(eventsFunctionContext.getArgument("NewLayerName"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("NewLayerName") == "");
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setString("__BaseLayer");
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).getAsString()).getChild("AmplitudeAngleX").setNumber(eventsFunctionContext.getArgument("Value"));
}}

}


};

gdjs.evtsExt__CameraShake3D__SetVerticalAmplitudeAngle.func = function(runtimeScene, Value, NewLayerName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake3D"),
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
if (argName === "NewLayerName") return NewLayerName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake3D__SetVerticalAmplitudeAngle.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake3D__SetVerticalAmplitudeAngle.registeredGdjsCallbacks = [];