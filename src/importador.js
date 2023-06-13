import { Empresa } from "./empresa.js";

export class Importador extends Empresa {
  constructor(nombre, rut, rubro, tamano) {
    super(nombre, rut);
    this._rubro = rubro;
    this._tamano = tamano;
  }

  get rubro() {
    return this._rubro;
  }

  set rubro(rubro) {
    this._rubro = rubro;
  }

  get tamano() {
    return this._tamano;
  }

  set tamano(tamano) {
    this._tamano = tamano;
  }
}
