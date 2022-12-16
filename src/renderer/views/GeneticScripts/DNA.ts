import util from './Util';

class DNA {
  private readonly genes: any[];
  private fitness: number;
  constructor(num: any,  language: number){
    // The genetic sequence
    this.genes = [];
    this.fitness = 0;

    // Random DNA generated from characters
    this.genes = Array(num).fill(null);
    this.genes = this.genes.map(() => util.newChar(language));
  }
  // Converts character array to a String
  getPhrase() {
    return this.genes.join('');
  }

  // Fitness function (returns floating point % of "correct" characters)
  calcFitness(target: string) {
    let score = 0;

    this.genes.forEach((gene, i) => {
      if (gene === target.charAt(i)) score += 1;
    });

    this.fitness = score / target.length;
  }
  // Cross DNA with partner to produce child
  crossover(partner: { genes: any[]; }, language: number) {

    // Initialise new child
    const child = new DNA(this.genes.length, language);
    const midpoint = util.randomInt(0, this.genes.length - 1);

    // Cross DNA from two parents from each side of midpoint
    this.genes.forEach((gene, i) => {
      if (i > midpoint) {
        child.genes[i] = this.genes[i];
      } else {
        child.genes[i] = partner.genes[i];
      }
    });
    return child;
  }
  // picks a new random character based on a mutation probability
  mutate(mutationRate: number, language: number) {
    this.genes.forEach((gene, i) => {

      if (Math.random() < mutationRate) {
        this.genes[i] = util.newChar(language);
      }
    });
  }
}

export default DNA;
