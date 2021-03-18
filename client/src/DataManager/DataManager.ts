import { Timescale } from "./Timescale";

export class DataManager{
    timescale: Timescale;
    constructor(){
        this.timescale = new Timescale();
    }
}