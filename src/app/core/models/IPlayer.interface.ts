export interface IPlayerInterface {
    names: string,
    lastNames: string,
    fechaNacimiento: Date,
    nacionalidad: string,
    sueldo: number,
    posicion: IPosicionInterface,
}

export interface IPosicionInterface {
    name: string
}