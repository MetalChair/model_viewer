import * as THREE from 'three';
import { TickableMaterialModel } from '../TickableMaterialModel/TickableMaterialModel';

export class Scene{
    _threeScene: THREE.Scene
    _tickables: any[];
    constructor(){
        console.log("Created a new scene object");
        this._threeScene = new THREE.Scene();
        this._tickables = [];
    }
    addObject(toAdd: any): THREE.Mesh{
        console.log("Adding new model to scene");
        console.log(toAdd);
        if(toAdd instanceof TickableMaterialModel){
            console.log("Adding dotick func");
            this._tickables.push(toAdd.do_tick);
            this._threeScene.add(toAdd.mesh);
        }else{
            this._threeScene.add(toAdd);
        }
        return toAdd;
    }
    getScene(): THREE.Scene{
        return this._threeScene;
    }
    doTicks(){
        this._tickables.forEach(tick => {
            tick()
        });
    }
}