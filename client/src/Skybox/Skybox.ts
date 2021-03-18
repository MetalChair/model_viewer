import * as THREE from "three";
import { Scene } from "../Scene/Scene";

export class Skybox{
    /**
     * A class defining a skybox. Implemented by creating a simple cube mesh
     * within three.js and assigning a seamless texture to each face.
     */

    _file_array : string[];
    _sides : string[] = ["front", "back", "top", "bottom", "right", "left"];
    _type : string;
    _geom: THREE.BoxGeometry
    _mesh : THREE.Object3D;
    _materials : THREE.MeshBasicMaterial[];
    /**
     * Constructor for skybox intsance
     * @param path The path to a directory containing a file for each face of
     * the skybox
     * @param type The file type INCLUDING the period (.png)
     */
    constructor(path: string, type: string, scene: Scene){
        this._type = type;
        this._file_array = this._sides.map(side => {
            return path + side + this._type;
        })
        this._materials = [];
        //Yucky hardcoding but I don't know a better way to do this!
        this._geom = new THREE.BoxGeometry(1000,1000,1000);
        this._materials = this._file_array.map(image =>{
            let tex = new THREE.TextureLoader().load(image);
            tex.repeat.set(-1,1);
            tex.center.set(.5,.5);
            if(tex){
                return new THREE.MeshBasicMaterial({
                    side: THREE.BackSide,
                    map: tex
                })
            }else{
                return new THREE.MeshBasicMaterial({
                    color: new THREE.Color(255,0,0),
                    side: THREE.BackSide
                });
            }
        })
        this._mesh = new THREE.Mesh(this._geom, this._materials);
        scene.addObject(this._mesh);
        console.log("Created skybox", this)
    }
}