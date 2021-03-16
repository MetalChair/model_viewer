import { TextureLoader } from "three";

export module TextureFactory{
    let loader = new TextureLoader();
    export function createTextureFromImage(
        path: string
    ):Promise<THREE.Texture|null>{
        return new Promise((resolve, reject) =>{
            loader.load(path, 
                function(newTex){
                    resolve(newTex);
                },
                undefined,
                function(err){
                    reject(err);
                }
            );
        })
    }
}