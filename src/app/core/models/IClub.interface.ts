import { IEntranadorInterface } from "./IEntranador.interface";
import { IEstadioInterface } from "./IEstadio.interface";
import { ILigaInterface } from "./ILiga.interface";

export interface Results {
    results:IClubInterface[];
}

export interface IClubInterface {
    clubId:number,
    nombre:string,
    historia:string,
    fundador:string,
    propietario:string,
    fechaFundacion:Date,
    estadio:IEstadioInterface,
    entrenadorActual:IEntranadorInterface,
    liga:ILigaInterface,
    imgEscudo:string
}