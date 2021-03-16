import { request } from 'https';
import * as THREE from 'three';
import { Vector3 } from 'three';

class CameraContainer{
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
        if(event.key == "w"){
            this.cam.translateZ(-.1);
        }
        if(event.key == "s"){
            this.cam.translateZ(.1);
        }
        if(event.key == "d"){
            this.cam.rotateOnAxis(
                new THREE.Vector3(0,1,0),
                -.05
            );
        }
        if(event.key == "a"){
            this.cam.rotateOnAxis(
                new THREE.Vector3(0,1,0),
                .05
            );
        }
    }
}
export class PlanetAnimator{
    scene: THREE.Scene;
    camera: CameraContainer;
    renderer: THREE.Renderer;
    constructor(container : HTMLElement){
        this.scene = new THREE.Scene();
        this.camera = new CameraContainer(
            new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
            new THREE.Vector3(0,0,5)
        );
        this.renderer = new THREE.WebGLRenderer();
        if(container){
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(this.renderer.domElement);
            this.doTick = this.doTick.bind(this);
        }
    }
    addCube(){
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );
    }
    doTick(){
        this.camera.doTick();
        requestAnimationFrame(this.doTick);
        this.renderer.render( this.scene, this.camera.getCam() );
    }
    onKeyPress(event: KeyboardEvent){
        this.camera.onKeyPress(event);
    }
}