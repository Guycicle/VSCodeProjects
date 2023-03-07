// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector(`#container`)
const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`



for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement(`div`)
    pokemon.classList = `pokemon`
    const label = document.createElement(`span`)
    label.innerText = `#${i}`
    const newImg = document.createElement(`img`)
    newImg.src = `${baseURL}${i}.png`
    container.appendChild(pokemon)
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
}