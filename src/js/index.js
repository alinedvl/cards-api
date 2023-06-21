
document.getElementById("tirar-carta").addEventListener("click", ()=>{
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhadoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}
criarBaralhadoEmbaralhado()


async function tirarUmaCarta(deck_id){
    const url =`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}


async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhadoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById("carta").src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()
