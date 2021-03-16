import * as THREE from 'three';

export class CameraContainer{
    cam: THREE.Camera;
    constructor(cam : THREE.Camera, pos : THREE.Vector3){
        this.cam = cam;
        this.cam.position.copy(pos);
    }
    doTick(){
    }
    getCam(){
        return this.cam;
    }
    onKeyPress(event : KeyboardEvent){
        if(event.key === "w"){
            this.cam.translateZ(-.1);
        }
        if(event.key === "s"){
            this.cam.translateZ(.1);
        }
        if(event.key === "d"){
            this.cam.rotateOnAxis(
                new THREE.Vector3(0,1,0),
                -.05
            );
        }
        if(event.key === "a"){
            this.cam.rotateOnAxis(
                new THREE.Vector3(0,1,0),
                .05
            );
        }
    }
}