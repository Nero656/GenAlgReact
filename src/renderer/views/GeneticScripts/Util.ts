const util = {
  map: function(value: number, low1: number, high1: number, low2: number, high2: number) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  },

  randomInt: function(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  newChar: function(language: number){
    if(language === 0){
      let c = this.randomInt(1038, 1103);

      if (c === 1038) c = 32;
      if (c === 1039) c = 46;

      return String.fromCharCode(c);
    }

    if(language === 1){
      let c = this.randomInt(63, 122 - 1);

      if (c === 63) c = 32;
      if (c === 64) c = 46;

      return String.fromCharCode(c);
    }
  }
}

export default util;
