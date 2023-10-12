
function victory(vitoria, derrota){

var vic = vitoria - derrota

let nome = 'Pedrinho primeiro'

let nivel = ''

if (vitoria < 10) {
    nivel = 'Ferro';
} else if (vitoria >= 11 && vitoria <= 20) {
    nivel = 'Bronze';
} else if (vitoria >= 21 && vitoria <= 50) {
    nivel = 'Prata';
} else if (vitoria >= 51 && vitoria <= 80) {
    nivel = 'Ouro';
} else if (vitoria >= 81 && vitoria <= 90) {
    nivel = 'Diamante';
} else if (vitoria >= 91 && vitoria <= 100) {
    nivel = 'Lendário';
} else if (vitoria >= 101) {
    nivel = 'Imortal';
}
console.log(`O héroi de nome ${nome} possui ${vic} vitórias! está no nível ${nivel}!`)
}

victory(5, 1)

