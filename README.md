# 🏆 Desafio Final – Cálculo de Média de Atletas (JavaScript + POO)

Este projeto foi desenvolvido como solução para o desafio final do curso de JavaScript.
O objetivo é criar uma aplicação capaz de receber o nome e as notas de atletas, calcular a média válida e exibir os resultados formatados ao usuário, aplicando conceitos de Programação Orientada a Objetos (POO) e boas práticas de código.

# 📘 Descrição do Desafio

Em uma competição de ginástica artística, cada atleta recebe cinco notas, atribuídas por jurados que avaliam critérios distintos:

- Tempo de apresentação

- Originalidade

- Postura

- Dificuldade das acrobacias

- Sincronismo

A regra da competição determina que:

- Cada nota varia de 1 a 10

- A maior e a menor nota devem ser descartadas

- A média é calculada com base nas três notas restantes

O programa deve:

1. Receber uma lista de atletas e suas notas

2. Ordenar as notas

3. Eliminar maior e menor

4. Calcular a média válida

5. Exibir:

    - Nome do atleta

    - Notas obtidas (ordenadas)

    - Média válida calculada

# 🧠 Objetivos de Aprendizado do Curso

Este desafio foi projetado para reforçar:

- Manipulação de arrays (sort, slice, reduce)

- Estruturas de repetição

- Funções e modularização

- Boas práticas de código

- Uso de template strings

- Aplicação de Programação Orientada a Objetos (POO)

    - Classes

    - Objetos

    - Métodos

    - Encapsulamento de lógica

# 🏗️ Estrutura do Projeto

🔹 Classe Atleta

Responsável por modelar um atleta e realizar todas as operações individuais:

- Ordena as notas

- Remove maior e menor

- Calcula média válida

- Exibe o resultado formatado

🔹 Classe Competicao

Gerencia a lista de atletas e executa a avaliação geral.

    class Atleta {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    getNotasOrdenadas() {
        return this.notas.slice().sort((a, b) => a - b);
    }

    getNotasValidas() {
        const ordenadas = this.getNotasOrdenadas();
        return ordenadas.slice(1, 4);
    }

    calcularMedia() {
        const notasValidas = this.getNotasValidas();
        const soma = notasValidas.reduce((total, nota) => total + nota, 0);
        return soma / notasValidas.length;
    }

    exibirResultado() {
        const ordenadas = this.getNotasOrdenadas().join(", ");
        const media = this.calcularMedia().toFixed(5);

        console.log(`Atleta: ${this.nome}`);
        console.log(`Notas Obtidas: ${ordenadas}`);
        console.log(`Média Válida: ${media}`);
        console.log("-----------------------------------");
    }
    }

    class Competicao {
    constructor(listaAtletas) {
        this.atletas = listaAtletas.map(
        a => new Atleta(a.nome, a.notas)
        );
    }

    avaliarTodos() {
        this.atletas.forEach(atleta => atleta.exibirResultado());
    }
    }

    let atletas = [
        {
            nome: "Cesar Abascal",
            notas: [10, 9.34, 8.42, 10, 7.88]
        },
        {
            nome: "Fernando Puntel",
            notas:  [8, 10, 10, 7, 9.33]
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

const competicao = new Competicao(atletas);

competicao.avaliarTodos();

# 🏁 Conclusão

Este projeto demonstra:

✔ A prática dos principais recursos básicos do JavaScript

✔ Organizar código usando POO

✔ Manipulação de arrays e cálculos matemáticos

✔ Criar um fluxo completo de entrada → processamento → saída

✔ Dominar passo a passo um desafio realista de lógica