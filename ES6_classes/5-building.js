export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    
    // Check if the class is Building itself or a subclass
    if (this.constructor !== Building) {
      // Check if the subclass has implemented evacuationWarningMessage
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
