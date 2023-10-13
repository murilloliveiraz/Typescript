export class Empresa {
   public readonly nome: string;
   private readonly colaboradores: Colaborador[] = [];
   protected readonly cnpj: string;

   constructor(nome: string, cnpj: string) {
      this.nome = nome;
      this.cnpj = cnpj;
   }

   public adicionaColaborador(colaborador: Colaborador): void {
      this.colaboradores.push(colaborador);
   }

   public mostrarColaboradores(): void {
      for (const colaborador of this.colaboradores) {
         console.log(colaborador);
      }
   }
}

export class Colaborador {
   constructor(
      public readonly nome: string,
      public readonly sobrenome: string,
   ) {}
}

const empresa1 = new Empresa('Amazon', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Miranda');
const colaborador2 = new Colaborador('David', 'Murillo');
const colaborador3 = new Colaborador('Gustvao', 'Soares');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();
