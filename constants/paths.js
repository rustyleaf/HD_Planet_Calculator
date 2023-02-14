class Paths {
  constructor() {
    this.folders = {
      admin: './ADMIN',
      astrology: './ASTROLOGY',
      bodygraph: './BODYGRAPH',
      codons: './CODONS',
      gk: './GK',
      iching: './ICHING',
      wheel: './WHEEL',
    };
    this.loadMoreFolders();
  }
  getPath = (p) => this[p];
  loadMoreFolders = () => {
    this.folders.planets = `${this.folders.astrology}/PLANETS`;
    this.folders.channels = `${this.folders.bodygraph}/CHANNELS`;
    this.folders.circuits = `${this.folders.bodygraph}/CIRCUITS`;
    this.folders.dreamarc = `${this.folders.gk}/DREAMARC`;
    this.folders.keys = `${this.folders.gk}/KEYS`;
    this.folders.seals = `${this.folders.gk}/SEALS`;
    this.folders.bigrams = `${this.folders.wheel}/BIGRAMS`;
    this.folders.trigrams = `${this.folders.wheel}/TRIGRAMS`;
    this.folders.quarters = `${this.folders.wheel}/QUARTERS`;
    this.folders.lines = `${this.folders.wheel}/LINES`;
    this.folders.hexagrams = `${this.folders.wheel}/HEXAGRAMS`;
    this.folders.crosses = `${this.folders.wheel}/CROSSES`;
  };
}
module.exports = Paths;
