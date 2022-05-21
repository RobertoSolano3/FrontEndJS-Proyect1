
const container = document.querySelector("#pokeName")
const nameValidation = document.getElementById("name_validation")

async function getData(){
    try{
       
        const pokeNameInput = document.getElementById("pokeName");
        let pokeName = pokeNameInput.value;
        pokeName = pokeName.toLowerCase();

        const pokeImage = (url) => {
        const pokePhoto = document.getElementById("pokeImg");
        pokePhoto.src = url;
        }

        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        const data = await result.json()

        if(data.error){
            throw data.error
        }
        console.log(data);
            document.getElementById("nombrePokemon").innerText = data.name;
            document.getElementById("tipoPokemon").innerText = data.types[0].type.name;
            document.getElementById("vidaPokemon").innerText = data.stats[0].base_stat;
            document.getElementById("atkPokemon").innerText = data.stats[1].base_stat;
            document.getElementById("defPokemon").innerText = data.stats[2].base_stat;
            document.getElementById("atkespPokemon").innerText = data.stats[3].base_stat;
            document.getElementById("defespPokemon").innerText = data.stats[4].base_stat;
            document.getElementById("speedPokemon").innerText = data.stats[5].base_stat;
            document.getElementById("mov1Pokemon").innerText = data.moves[1].move.name;
            document.getElementById("mov2Pokemon").innerText = data.moves[24].move.name;
            document.getElementById("mov3Pokemon").innerText = data.moves[5].move.name;
            document.getElementById("mov4Pokemon").innerText = data.moves[10].move.name;
            
            let pokeImg = data.sprites.front_default;
            
            pokeImage(pokeImg);
            console.log(pokeImg);
    }catch(error){
        nameValidation.innerText = "Verifica el nombre del pokemon"
        container.classList.add("pulse")
        console.log(error)
        
    }
}

function Clear()
{
    document.getElementById("name_validation").innerText = "";
    container.classList.remove("pulse")
}

