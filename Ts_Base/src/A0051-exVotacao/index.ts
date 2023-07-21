type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {}

  addvotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOption(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);

      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
      console.log();
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem de programação favorita?');
votation1.addvotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addvotationOption({ option: 'Java', numberOfVotes: 0 });
votation1.addvotationOption({ option: 'Typescript', numberOfVotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(2);
votation1.vote(2);

const votation2 = new Votation('Quem é o melhor do mundo em 2023?');
votation2.addvotationOption({ option: 'Messi', numberOfVotes: 0 });
votation2.addvotationOption({ option: 'Haaland', numberOfVotes: 0 });
votation2.addvotationOption({ option: 'Mbappe', numberOfVotes: 0 });
votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(0);
votation2.vote(0);
votation2.vote(2);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
