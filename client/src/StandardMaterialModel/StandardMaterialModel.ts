import { Color, MeshStandardMaterial, Texture, Mesh } from "three";

export interface StandardMaterialOptions{
    alphaMap?: THREE.Texture | null,
    aoMap?: THREE.Texture | null,
    aoMapIntensity?: number | null,
    bumpMap?: Texture | null,
    color?: Color | null,
    displacementMap?: Texture | null,
    displacementBias?: number | null,
    displacementScale?: number | null,
    emissiveMap?: Texture | null,
    emissiveIntensity?: number | null,
    envMap?: Texture | null,
    flatShading?: boolean | null,
    lightMap?: Texture | null,
    lightMapIntensity?: number | null,
    map?: Texture | null,
    metalness?: number | null,
    metalnessMap?: Texture | null,
    normalMap?: Texture | null,
    normalMapType?: number | null,
    wireframe?: boolean | null
}

export class StandardMaterialModel{
    mat: MeshStandardMaterial;
    opts: StandardMaterialOptions | null;
    mesh: THREE.Mesh;
    constructor(opts : StandardMaterialOptions, geom : THREE.BufferGeometry){
        this.opts = opts;
        this.mat = new MeshStandardMaterial();
        this.setupMat();
        this.mesh = new Mesh(geom, this.mat);
    }

    getMaterial() : MeshStandardMaterial{
        return this.mat;
    }

    setupMat(){
        if(this.opts){
            if(this.opts.alphaMap) this.mat.alphaMap = this.opts.alphaMap
            if(this.opts.aoMap) this.mat.aoMap = this.opts.aoMap
            if(this.opts.aoMapIntensity) this.mat.aoMapIntensity = this.opts.aoMapIntensity
            if(this.opts.bumpMap) this.mat.bumpMap = this.opts.bumpMap
            if(this.opts.color) this.mat.color = this.opts.color
            if(this.opts.displacementMap) this.mat.displacementMap = this.opts.displacementMap
            if(this.opts.displacementBias) this.mat.displacementBias = this.opts.displacementBias
            if(this.opts.displacementScale) this.mat.displacementScale = this.opts.displacementScale
            if(this.opts.emissiveMap) this.mat.emissiveMap = this.opts.emissiveMap
            if(this.opts.emissiveIntensity) this.mat.emissiveIntensity = this.opts.emissiveIntensity
            if(this.opts.envMap) this.mat.envMap = this.opts.envMap
            if(this.opts.flatShading) this.mat.flatShading = this.opts.flatShading
            if(this.opts.lightMap) this.mat.lightMap = this.opts.lightMap
            if(this.opts.lightMapIntensity) this.mat.lightMapIntensity = this.opts.lightMapIntensity
            if(this.opts.map) this.mat.map = this.opts.map
            if(this.opts.metalness) this.mat.metalness = this.opts.metalness
            if(this.opts.metalnessMap) this.mat.metalnessMap = this.opts.metalnessMap
            if(this.opts.normalMap) this.mat.normalMap = this.opts.normalMap
            if(this.opts.normalMapType) this.mat.normalMapType = this.opts.normalMapType
            if(this.opts.wireframe) this.mat.wireframe = this.opts.wireframe
            console.log("Created new texture", this.mat)
        }
    }
}