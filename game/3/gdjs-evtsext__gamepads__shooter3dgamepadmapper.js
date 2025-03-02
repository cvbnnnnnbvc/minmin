
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper || {};

/**
 * Behavior generated from 3D shooter gamepad mapper
 */
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper = class Shooter3DGamepadMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.GamepadIdentifier = behaviorData.GamepadIdentifier !== undefined ? behaviorData.GamepadIdentifier : Number("1") || 0;
    this._behaviorData.WalkStick = behaviorData.WalkStick !== undefined ? behaviorData.WalkStick : "Left";
    this._behaviorData.CameraStick = behaviorData.CameraStick !== undefined ? behaviorData.CameraStick : "Right";
    this._behaviorData.JumpButton = behaviorData.JumpButton !== undefined ? behaviorData.JumpButton : "A or Cross";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PhysicsCharacter3D !== newBehaviorData.PhysicsCharacter3D)
      this._behaviorData.PhysicsCharacter3D = newBehaviorData.PhysicsCharacter3D;
    if (oldBehaviorData.GamepadIdentifier !== newBehaviorData.GamepadIdentifier)
      this._behaviorData.GamepadIdentifier = newBehaviorData.GamepadIdentifier;
    if (oldBehaviorData.WalkStick !== newBehaviorData.WalkStick)
      this._behaviorData.WalkStick = newBehaviorData.WalkStick;
    if (oldBehaviorData.CameraStick !== newBehaviorData.CameraStick)
      this._behaviorData.CameraStick = newBehaviorData.CameraStick;
    if (oldBehaviorData.JumpButton !== newBehaviorData.JumpButton)
      this._behaviorData.JumpButton = newBehaviorData.JumpButton;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    GamepadIdentifier: this._behaviorData.GamepadIdentifier,
    WalkStick: this._behaviorData.WalkStick,
    CameraStick: this._behaviorData.CameraStick,
    JumpButton: this._behaviorData.JumpButton,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.GamepadIdentifier !== undefined)
      this._behaviorData.GamepadIdentifier = networkSyncData.props.GamepadIdentifier;
    if (networkSyncData.props.WalkStick !== undefined)
      this._behaviorData.WalkStick = networkSyncData.props.WalkStick;
    if (networkSyncData.props.CameraStick !== undefined)
      this._behaviorData.CameraStick = networkSyncData.props.CameraStick;
    if (networkSyncData.props.JumpButton !== undefined)
      this._behaviorData.JumpButton = networkSyncData.props.JumpButton;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getGamepadIdentifier() {
    return this._behaviorData.GamepadIdentifier !== undefined ? this._behaviorData.GamepadIdentifier : Number("1") || 0;
  }
  _setGamepadIdentifier(newValue) {
    this._behaviorData.GamepadIdentifier = newValue;
  }
  _getWalkStick() {
    return this._behaviorData.WalkStick !== undefined ? this._behaviorData.WalkStick : "Left";
  }
  _setWalkStick(newValue) {
    this._behaviorData.WalkStick = newValue;
  }
  _getCameraStick() {
    return this._behaviorData.CameraStick !== undefined ? this._behaviorData.CameraStick : "Right";
  }
  _setCameraStick(newValue) {
    this._behaviorData.CameraStick = newValue;
  }
  _getJumpButton() {
    return this._behaviorData.JumpButton !== undefined ? this._behaviorData.JumpButton : "A or Cross";
  }
  _setJumpButton(newValue) {
    this._behaviorData.JumpButton = newValue;
  }
}

/**
 * Shared data generated from 3D shooter gamepad mapper
 */
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.SharedData = class Shooter3DGamepadMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Gamepads_Shooter3DGamepadMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Gamepads_Shooter3DGamepadMapperSharedData = new gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._Gamepads_Shooter3DGamepadMapperSharedData;
}

// Methods:
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWalkStick(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateStick(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWalkStick(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__Gamepads__StickForce.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWalkStick(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "A or Cross" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "B or Circle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "X or Square" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "Y or Triangle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "LB or L1" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "LB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "RB or R1" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "RB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "LT or L2" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "LT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton() == "RT or R2" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "RT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).simulateJumpKey();
}
}}

}


};gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gamepads"),
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

gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}


gdjs.registerBehavior("Gamepads::Shooter3DGamepadMapper", gdjs.evtsExt__Gamepads__Shooter3DGamepadMapper.Shooter3DGamepadMapper);
