export class Prohibicion {
  static contador = 0;
  static prohibiciones = [];
  constructor(mercancia, organizmo) {
    this._id = Prohibicion.contador++;
    this._mercancia = mercancia;
    this._organizmo = organizmo;
    Prohibicion.prohibiciones.push(this);
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get mercancia() {
    return this._mercancia;
  }
  set mercancia(value) {
    this._mercancia = value;
  }
  get organizmo() {
    return this._organizmo;
  }
  set organizmo(value) {
    this._organizmo = value;
  }

  getById(id) {
    for (let i = 0; i < Prohibicion.prohibiciones.length; i++) {
      if (Prohibicion.prohibiciones[i]._id == id) {
        return Prohibicion.prohibiciones[i]._organizmo;
      }
    
    }
  }

  getArray() {
    return Prohibicion.prohibiciones;
  }

}
