
if (typeof gdjs.evtsExt__Crab__Flatten !== "undefined") {
  gdjs.evtsExt__Crab__Flatten.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Crab__Flatten = {};
gdjs.evtsExt__Crab__Flatten.GDCrabObjects1= [];
gdjs.evtsExt__Crab__Flatten.GDCrabObjects2= [];
gdjs.evtsExt__Crab__Flatten.GDCrabObjects3= [];
gdjs.evtsExt__Crab__Flatten.GDCrabObjects4= [];


gdjs.evtsExt__Crab__Flatten.asyncCallback17769284 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Crab"), gdjs.evtsExt__Crab__Flatten.GDCrabObjects4);

{for(var i = 0, len = gdjs.evtsExt__Crab__Flatten.GDCrabObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Crab__Flatten.GDCrabObjects4[i].activateBehavior(eventsFunctionContext.getBehaviorName("PhysicsEllipseMovement3D"), true);
}
}{for(var i = 0, len = gdjs.evtsExt__Crab__Flatten.GDCrabObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Crab__Flatten.GDCrabObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).resumeAnimation();
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Crab__Flatten.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Crab__Flatten.GDCrabObjects3) asyncObjectsList.addObject("Crab", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.evtsExt__Crab__Flatten.asyncCallback17769284(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Crab__Flatten.asyncCallback17768884 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Crab"), gdjs.evtsExt__Crab__Flatten.GDCrabObjects3);

{for(var i = 0, len = gdjs.evtsExt__Crab__Flatten.GDCrabObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Crab__Flatten.GDCrabObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeModel3D")).Shake(0.75, 0.125, 0.75, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Crab__Flatten.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Crab__Flatten.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Crab__Flatten.GDCrabObjects2) asyncObjectsList.addObject("Crab", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.125), (runtimeScene) => (gdjs.evtsExt__Crab__Flatten.asyncCallback17768884(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Crab__Flatten.asyncCallback17768444 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Crab"), gdjs.evtsExt__Crab__Flatten.GDCrabObjects2);

{for(var i = 0, len = gdjs.evtsExt__Crab__Flatten.GDCrabObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Crab__Flatten.GDCrabObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).TweenStretchZ("Stretch", 1, 2, "elastic", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Crab__Flatten.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Crab__Flatten.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Crab__Flatten.GDCrabObjects1) asyncObjectsList.addObject("Crab", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.evtsExt__Crab__Flatten.asyncCallback17768444(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Crab__Flatten.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Crab"), gdjs.evtsExt__Crab__Flatten.GDCrabObjects1);
{for(var i = 0, len = gdjs.evtsExt__Crab__Flatten.GDCrabObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Crab__Flatten.GDCrabObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("PhysicsEllipseMovement3D"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__Crab__Flatten.GDCrabObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Crab__Flatten.GDCrabObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__Crab__Flatten.GDCrabObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Crab__Flatten.GDCrabObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3D")).TweenStretchZ("Stretch", 0.3, 0.5, "easeOutCubic", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Crab__Flatten.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Crab__Flatten.func = function(runtimeScene, Crab, Animation, PhysicsEllipseMovement3D, ShakeModel3D, Tween3D, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Crab": Crab
},
  _objectArraysMap: {
"Crab": gdjs.objectsListsToArray(Crab)
},
  _behaviorNamesMap: {
"Animation": Animation
, "PhysicsEllipseMovement3D": PhysicsEllipseMovement3D
, "ShakeModel3D": ShakeModel3D
, "Tween3D": Tween3D
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Crab"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Crab"),
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

gdjs.evtsExt__Crab__Flatten.GDCrabObjects1.length = 0;
gdjs.evtsExt__Crab__Flatten.GDCrabObjects2.length = 0;
gdjs.evtsExt__Crab__Flatten.GDCrabObjects3.length = 0;
gdjs.evtsExt__Crab__Flatten.GDCrabObjects4.length = 0;

gdjs.evtsExt__Crab__Flatten.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Crab__Flatten.GDCrabObjects1.length = 0;
gdjs.evtsExt__Crab__Flatten.GDCrabObjects2.length = 0;
gdjs.evtsExt__Crab__Flatten.GDCrabObjects3.length = 0;
gdjs.evtsExt__Crab__Flatten.GDCrabObjects4.length = 0;


return;
}

gdjs.evtsExt__Crab__Flatten.registeredGdjsCallbacks = [];