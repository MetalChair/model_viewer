import * as THREE from 'three';
import { Material, Mesh } from 'three';
import {StandardMaterialModel} from '../StandardMaterialModel/StandardMaterialModel'

export class Scene{
    _threeScene: THREE.Scene
    constructor(){
        console.log("Created a new scene object");
        this._threeScene = new THREE.Scene();
    }
    addObject(toAdd: THREE.Mesh): void;
    addObject(toAdd: StandardMaterialModel): void;
    addObject(toAdd: any): THREE.Mesh{
        console.log("Adding new model to scene");
        this._threeScene.add(toAdd);
        return toAdd;
    }
    getScene(): THREE.Scene{
        return this._threeScene;
    }
}