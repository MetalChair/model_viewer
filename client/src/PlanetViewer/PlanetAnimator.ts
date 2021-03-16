import * as THREE from 'three';
import { CameraContainer } from '../CameraContainer/CameraContainer';
import { Scene } from '../Scene/Scene';
import { StandardMaterialModel, StandardMaterialOptions } from '../StandardMaterialModel/StandardMaterialModel';
import "../TextureFactory/TextureFactory";
import { TextureFactory } from '../TextureFactory/TextureFactory';
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
    addCube(){
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.addObject(cube);

        TextureFactory.createTextureFromImage(
            "/earth_texture.jpg"
        ).then((tex) =>{
            console.log("Texture",tex);
            let matOpts:StandardMaterialOptions = {
                color: new THREE.Color(255,0,0),
                map: tex,
                bumpMap: tex,
                metalness: 5,
            };
            console.log("PEEP");
            const sgeometry = new THREE.SphereGeometry();
            const matthing = new StandardMaterialModel(matOpts, sgeometry);
            const sphere = new THREE.Mesh( sgeometry, matthing.getMaterial() );
            sphere.position.set(0, 2, 0);
            console.log(sphere);
            this.scene.addObject(sphere);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    doTick(){
        this.camera.doTick();
        requestAnimationFrame(this.doTick);
        this.renderer.render( this.scene.getScene(), this.camera.getCam() );
    }
    onKeyPress(event: KeyboardEvent){
        this.camera.onKeyPress(event);
    }
}