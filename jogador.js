var jogador = {
    nome: "Neymar",
    classe: "Guerreiro",
    nivel: 25,
    forca: 18,
    agilidade: 12
};

for(var atributo in jogador){
    console.log("O atributo" + atributo + "Tem valor" + jogador[atributo]);
}