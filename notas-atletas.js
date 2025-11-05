
function ordenaNotas (a,b){ // criamos a função para comparar numero seguinte com o o coparador e por em ordem 
    return a - b 
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


atletas.forEach(atleta =>{  // fizemos um foreach mais poderimos usar o map para cria um array apenas para notas ou com ate o nome mesmo mais para ajusta em rapidez apenas modificamos o oroginal 
    atleta.notas.sort(ordenaNotas) // aqui passamos o index que sera cada 1 atleta e colocamos para cada atleta recebe o metodo sort e dentro do metedo passamos o paramentro que e a função de verificação pq se nao mesmo assim ficaria desordenado 
})

console.log(atletas)
 // agora iremos fazer a soma das 3 que iremos somar e fazer a media 

 atletas.forEach(atleta =>{
    let notasMeioParaMedia = atleta.notas.slice(1,4); // aqui usamemos o slice para pega as notas ele tem um paramentro estranho mais etendendo da para levar ele usa o idex então 1 ele fala que inicar no idex 1 e o ultimo paramentro e o exclusivo que no caso e o index 4 que e o ultimo então ele vai pegar o index 1,2,3 e vai excluir o index 0 e 4 sendo assim termos as 3 notas que precisasmos 
    let somaDasNotas = notasMeioParaMedia.reduce((total,nota)=> total + nota,0); // aqui fazemos a operação de calculo do reduce que ele percorrer e faz uma redundancia somando todos os intem do array 3 nos dando a soma 
    let mediaDasNotas = somaDasNotas / notasMeioParaMedia.length;

    atleta.mediaDasNotas = mediaDasNotas.toFixed(2); //aqui vamos empurrar no objeto o array media para sair no console
 })

atletas.forEach(atleta => {
  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas: ${atleta.notas}`);
  console.log(`Média: ${atleta.mediaDasNotas}`);
  console.log("----------------------");
});





