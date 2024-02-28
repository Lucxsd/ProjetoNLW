const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um estilo de design web"
        ],
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 2
    },
    {
        pergunta: "Como se realiza um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "# Comentário",
            "/* Comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Document Object Model",
            "Data Object Model",
            "Design Object Model"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log.console()"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Um objeto",
            "Um bloco de código reutilizável"
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para comparar valores e tipos em JavaScript?",
        respostas: [
            "==",
            "===",
            "!="
        ],
        correta: 1
    },
    {
        pergunta: "Como se cria um loop 'for' em JavaScript?",
        respostas: [
            "para (i = 0; i < 10; i++)",
            "for (i = 0; i < 10; i--)",
            "loop.for (i = 0; i < 10; i++)"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para converter uma string em número em JavaScript?",
        respostas: [
            "parseString()",
            "stringToNumber()",
            "parseInt()"
        ],
        correta: 2
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "JavaScript Online Network",
            "JavaScript Object Notation",
            "JavaScript Operator Navigator"
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {   

            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }




        quizItem.querySelector('dl').appendChild(dt)


    }

    //remove a opção "Resposta A"
    quizItem.querySelector('dl dt').remove()


    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}

