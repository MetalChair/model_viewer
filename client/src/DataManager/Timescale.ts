export class Timescale{
    _timescale: number;
    constructor(){
        this._timescale = 0;
    }
    add(val: number){
        this._timescale += val;
    }
    subtract(val: number){
        this._timescale -= val;
    }
    set(val: number){
        this._timescale = val;
    }
}