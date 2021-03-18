import * as THREE from 'three';
import { CameraContainer } from '../CameraContainer/CameraContainer';
import { Scene } from '../Scene/Scene';
import { MaterialModel, StandardMaterialOptions } from '../MaterialModel/MaterialModel';
import "../TextureFactory/TextureFactory";
import { TextureFactory } from '../TextureFactory/TextureFactory';
import { TickableMaterialModel } from '../TickableMaterialModel/TickableMaterialModel';
import { Skybox } from '../Skybox/Skybox';
import { TextureLoader } from 'three';
export class PlanetAnimator{
    scene: Scene;
    camera: CameraContainer;
    renderer: THREE.Renderer;
    constructor(container : HTMLElement){
        this.scene = new Scene();
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
    setupEarth(){
        let skybox = new Skybox(
            "/spacebox2/",".png", this.scene
        );
        let tex = new TextureLoader().load("/earth.png")
        let rough = new TextureLoader().load("/earth_rough.png")
        console.log("Texture:",tex);
        let matOpts:StandardMaterialOptions = {
            map: tex,
            roughnessMap: rough
        };
        const sgeometry = new THREE.SphereGeometry(
            1, 32, 32
        );
        const obj = new TickableMaterialModel(matOpts, sgeometry);
        obj.mesh.rotateOnAxis(
            new THREE.Vector3(0,0,1),
            0.4712389
        );
        obj.tick_function = (obj : MaterialModel) =>{
            obj.mesh.rotateOnAxis(
                new THREE.Vector3(0, 1, 0),
                .0005
            );
        }
        console.log("Sphere",obj);
        const light = new THREE.SpotLight(0xffffff, 1, 250, 50);
        light.position.set(0,5,5);
        this.scene.addObject(
            light.clone()
        );
        this.scene.addObject(obj);
    }
    doTick(){
        this.camera.doTick();
        this.scene.doTicks();
        requestAnimationFrame(this.doTick);
        this.renderer.render( this.scene.getScene(), this.camera.getCam() );
    }
    onKeyPress(event: KeyboardEvent){
        this.camera.onKeyPress(event);
    }
}