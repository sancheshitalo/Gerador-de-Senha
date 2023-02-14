export default function geraSenha(qtd, numeros, maiusculas, minusculas, simbolos){
    const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const geraNumero = () => String.fromCharCode(rand(48, 58))
    const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
    const geraMinuscula = () => String.fromCharCode(rand(97, 123))
    const geraSymbol = () => String.fromCharCode(rand(33, 44))
    
    
    const senhaArray = [];
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++){
        numeros && senhaArray.push(geraNumero())
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinuscula())
        simbolos && senhaArray.push(geraSymbol())
    }

    return (senhaArray.join('').slice(0, qtd))
}

// }


