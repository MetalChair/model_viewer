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
    wireframe?: boolean | null,
    roughnessMap?: Texture | null
}

export class MaterialModel{
    _mat: MeshStandardMaterial;
    _opts: StandardMaterialOptions | null;
    mesh: THREE.Mesh;

    constructor(_opts : StandardMaterialOptions, geom : THREE.BufferGeometry){
        this._opts = _opts;
        this._mat = new MeshStandardMaterial();
        this.setup_mat();
        this.mesh = new Mesh(geom, this._mat);
    }

    get_material() : MeshStandardMaterial{
        return this._mat;
    }

    setup_mat(){
        if(this._opts){
            if(this._opts.alphaMap) this._mat.alphaMap = this._opts.alphaMap
            if(this._opts.aoMap) this._mat.aoMap = this._opts.aoMap
            if(this._opts.aoMapIntensity) this._mat.aoMapIntensity = this._opts.aoMapIntensity
            if(this._opts.bumpMap) this._mat.bumpMap = this._opts.bumpMap
            if(this._opts.color) this._mat.color = this._opts.color
            if(this._opts.displacementMap) this._mat.displacementMap = this._opts.displacementMap
            if(this._opts.displacementBias) this._mat.displacementBias = this._opts.displacementBias
            if(this._opts.displacementScale) this._mat.displacementScale = this._opts.displacementScale
            if(this._opts.emissiveMap) this._mat.emissiveMap = this._opts.emissiveMap
            if(this._opts.emissiveIntensity) this._mat.emissiveIntensity = this._opts.emissiveIntensity
            if(this._opts.envMap) this._mat.envMap = this._opts.envMap
            if(this._opts.flatShading) this._mat.flatShading = this._opts.flatShading
            if(this._opts.lightMap) this._mat.lightMap = this._opts.lightMap
            if(this._opts.lightMapIntensity) this._mat.lightMapIntensity = this._opts.lightMapIntensity
            if(this._opts.map) this._mat.map = this._opts.map
            if(this._opts.metalness) this._mat.metalness = this._opts.metalness
            if(this._opts.metalnessMap) this._mat.metalnessMap = this._opts.metalnessMap
            if(this._opts.normalMap) this._mat.normalMap = this._opts.normalMap
            if(this._opts.normalMapType) this._mat.normalMapType = this._opts.normalMapType
            if(this._opts.wireframe) this._mat.wireframe = this._opts.wireframe
            if(this._opts.roughnessMap) this._mat.roughnessMap = this._opts.roughnessMap
            console.log("Created new texture", this._mat.wireframe, this._opts.wireframe)
        }
    }
}