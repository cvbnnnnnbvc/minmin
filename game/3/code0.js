gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.GDWallObjects1= [];
gdjs.GameSceneCode.GDWallObjects2= [];
gdjs.GameSceneCode.GDWallObjects3= [];
gdjs.GameSceneCode.GDWallObjects4= [];
gdjs.GameSceneCode.GDBarrierObjects1= [];
gdjs.GameSceneCode.GDBarrierObjects2= [];
gdjs.GameSceneCode.GDBarrierObjects3= [];
gdjs.GameSceneCode.GDBarrierObjects4= [];
gdjs.GameSceneCode.GDFloorObjects1= [];
gdjs.GameSceneCode.GDFloorObjects2= [];
gdjs.GameSceneCode.GDFloorObjects3= [];
gdjs.GameSceneCode.GDFloorObjects4= [];
gdjs.GameSceneCode.GDCameraObjects1= [];
gdjs.GameSceneCode.GDCameraObjects2= [];
gdjs.GameSceneCode.GDCameraObjects3= [];
gdjs.GameSceneCode.GDCameraObjects4= [];
gdjs.GameSceneCode.GDWalkJoystickObjects1= [];
gdjs.GameSceneCode.GDWalkJoystickObjects2= [];
gdjs.GameSceneCode.GDWalkJoystickObjects3= [];
gdjs.GameSceneCode.GDWalkJoystickObjects4= [];
gdjs.GameSceneCode.GDCrosshairObjects1= [];
gdjs.GameSceneCode.GDCrosshairObjects2= [];
gdjs.GameSceneCode.GDCrosshairObjects3= [];
gdjs.GameSceneCode.GDCrosshairObjects4= [];
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects1= [];
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects2= [];
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects3= [];
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects4= [];
gdjs.GameSceneCode.GDJumpButtonObjects1= [];
gdjs.GameSceneCode.GDJumpButtonObjects2= [];
gdjs.GameSceneCode.GDJumpButtonObjects3= [];
gdjs.GameSceneCode.GDJumpButtonObjects4= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects1= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects2= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects3= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects4= [];
gdjs.GameSceneCode.GDNew3DBoxObjects1= [];
gdjs.GameSceneCode.GDNew3DBoxObjects2= [];
gdjs.GameSceneCode.GDNew3DBoxObjects3= [];
gdjs.GameSceneCode.GDNew3DBoxObjects4= [];
gdjs.GameSceneCode.GDposter2Objects1= [];
gdjs.GameSceneCode.GDposter2Objects2= [];
gdjs.GameSceneCode.GDposter2Objects3= [];
gdjs.GameSceneCode.GDposter2Objects4= [];


gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.GameSceneCode.GDWalkJoystickObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkJoystickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDWalkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkJoystickObjects1[i].ActivateControl(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "TouchControls", 0, 0, 0);
}
{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects1Objects = Hashtable.newFrom({"WalkJoystick": gdjs.GameSceneCode.GDWalkJoystickObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects2Objects = Hashtable.newFrom({"WalkJoystick": gdjs.GameSceneCode.GDWalkJoystickObjects2});
gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameSceneCode.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.GameSceneCode.GDWalkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects2Objects, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDJumpButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDJumpButtonObjects2[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDJumpButtonObjects2[k] = gdjs.GameSceneCode.GDJumpButtonObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDJumpButtonObjects2.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Crosshair"), gdjs.GameSceneCode.GDCrosshairObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDCrosshairObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCrosshairObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "Crosshair", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "Crosshair", 0));
}
}}

}


};gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.GameSceneCode.GDCameraObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCameraObjects1[i].hide();
}
}{gdjs.evtsExt__CameraShake3D__SetLayerShakable.func(runtimeScene, false, "MobileUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.GameSceneCode.GDWalkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects1Objects, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDWalkJoystickObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkJoystickObjects1[i].TeleportAndPress((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDWallObjects1.length = 0;
gdjs.GameSceneCode.GDWallObjects2.length = 0;
gdjs.GameSceneCode.GDWallObjects3.length = 0;
gdjs.GameSceneCode.GDWallObjects4.length = 0;
gdjs.GameSceneCode.GDBarrierObjects1.length = 0;
gdjs.GameSceneCode.GDBarrierObjects2.length = 0;
gdjs.GameSceneCode.GDBarrierObjects3.length = 0;
gdjs.GameSceneCode.GDBarrierObjects4.length = 0;
gdjs.GameSceneCode.GDFloorObjects1.length = 0;
gdjs.GameSceneCode.GDFloorObjects2.length = 0;
gdjs.GameSceneCode.GDFloorObjects3.length = 0;
gdjs.GameSceneCode.GDFloorObjects4.length = 0;
gdjs.GameSceneCode.GDCameraObjects1.length = 0;
gdjs.GameSceneCode.GDCameraObjects2.length = 0;
gdjs.GameSceneCode.GDCameraObjects3.length = 0;
gdjs.GameSceneCode.GDCameraObjects4.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects1.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects2.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects3.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects4.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects1.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects2.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects3.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects4.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects1.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects2.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects3.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects4.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects4.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects3.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects4.length = 0;
gdjs.GameSceneCode.GDposter2Objects1.length = 0;
gdjs.GameSceneCode.GDposter2Objects2.length = 0;
gdjs.GameSceneCode.GDposter2Objects3.length = 0;
gdjs.GameSceneCode.GDposter2Objects4.length = 0;

gdjs.GameSceneCode.eventsList4(runtimeScene);
gdjs.GameSceneCode.GDWallObjects1.length = 0;
gdjs.GameSceneCode.GDWallObjects2.length = 0;
gdjs.GameSceneCode.GDWallObjects3.length = 0;
gdjs.GameSceneCode.GDWallObjects4.length = 0;
gdjs.GameSceneCode.GDBarrierObjects1.length = 0;
gdjs.GameSceneCode.GDBarrierObjects2.length = 0;
gdjs.GameSceneCode.GDBarrierObjects3.length = 0;
gdjs.GameSceneCode.GDBarrierObjects4.length = 0;
gdjs.GameSceneCode.GDFloorObjects1.length = 0;
gdjs.GameSceneCode.GDFloorObjects2.length = 0;
gdjs.GameSceneCode.GDFloorObjects3.length = 0;
gdjs.GameSceneCode.GDFloorObjects4.length = 0;
gdjs.GameSceneCode.GDCameraObjects1.length = 0;
gdjs.GameSceneCode.GDCameraObjects2.length = 0;
gdjs.GameSceneCode.GDCameraObjects3.length = 0;
gdjs.GameSceneCode.GDCameraObjects4.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects1.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects2.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects3.length = 0;
gdjs.GameSceneCode.GDCrosshairObjects4.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects1.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects2.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects3.length = 0;
gdjs.GameSceneCode.GDSelectionParticleEmitterObjects4.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects1.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects2.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects3.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects4.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects4.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects3.length = 0;
gdjs.GameSceneCode.GDNew3DBoxObjects4.length = 0;
gdjs.GameSceneCode.GDposter2Objects1.length = 0;
gdjs.GameSceneCode.GDposter2Objects2.length = 0;
gdjs.GameSceneCode.GDposter2Objects3.length = 0;
gdjs.GameSceneCode.GDposter2Objects4.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
