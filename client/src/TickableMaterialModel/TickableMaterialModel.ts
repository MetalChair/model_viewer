import { MaterialModel, StandardMaterialOptions } from "../MaterialModel/MaterialModel";

/**
 * A class representing a material'd mesh. "Tickable" provides a class variable
 * called "tick_function" that, when set, will cause that function to run every
 * frame. This can be used for manipulating the object over time.
 */
export class TickableMaterialModel extends MaterialModel{
    constructor(_opts : StandardMaterialOptions, geom : THREE.BufferGeometry){
        super(_opts, geom);
        this.do_tick = this.do_tick.bind(this);
    }
    /**
     * A function that runs every tick if defined.
     * Has access to obj which will be 'this'
    */
     tick_function?: (obj: MaterialModel) => void;

    /**
     * Run the tick function. (Provides "this" context and calls tick_function)
     */
    do_tick() : void{
        if(this.tick_function)
            this.tick_function(this);
    }
}