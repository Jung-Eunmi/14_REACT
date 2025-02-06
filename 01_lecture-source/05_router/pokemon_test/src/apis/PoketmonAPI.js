export async function getPoketmonList() {

    return await fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json());
}

export async function getMonsterById(id) {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response);
    
    const data = await response.json();
    console.log(data)


    
    return data;
}