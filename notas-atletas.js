// ------------------------
// Classe Atleta
// ------------------------
class Atleta {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    // Retorna uma cópia das notas ordenadas
    getNotasOrdenadas() {
        return this.notas.slice().sort((a, b) => a - b);
    }

    // Remove menor e maior e retorna as notas válidas
    getNotasValdias() {
        const ordenadas = this.getNotasOrdenadas();
        return ordenadas.slice(1, 4);
    }

    // Calcula a média das notas válidas
    calcularMedia() {
        const notasValidas = this.getNotasValdias();
        const soma = notasValidas.reduce((total, nota) => total + nota, 0);
        return soma / notasValidas.length;
    }

    // Exibe todos os dados do atleta
    exibirResultado() {
        const ordenadas = this.getNotasOrdenadas().join(", ");
        const media = this.calcularMedia().toFixed(5);

        console.log(`Atleta: ${this.nome}`);
        console.log(`Notas Obtidas: ${ordenadas}`);
        console.log(`Média Válida: ${media}`);
        console.log("-----------------------------------")
    }
}

// ------------------------
// Classe Competicao
// ------------------------

class Competicao {
    constructor(listarAtletas) {
        this.atletas = listarAtletas.map(
            a => new Atleta(a.nome, a.notas)
        );
    }

    //Executa avaliação de todos
    avaliarTodos() {
        this.atletas.forEach(atleta => atleta.exibirResultado());
    }
}

// ------------------------
// Entrada de dados
// ------------------------

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// ------------------------
// Execução
// ------------------------
const competicao = new Competicao(atletas);
competicao.avaliarTodos();