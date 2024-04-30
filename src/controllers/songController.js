
async function getAll(){
    return "Mostramos todos las canciones";
}

async function getById(id){
    return `Mostramos canciones con id ${id}`;
}
async function create(songData){
    const {title, length, composer_id, genre_id} = songData;
    return `Los datos para canciones nuevo son: titulo de la cancion: ${title}, duración: ${length}, id del compositor:${composer_id} y el id del genero es: ${genre_id}`;
}
async function update(id,songData){
    const {name, creation_date} = songData;
    return `Los nuevos datos para canciones con id ${id} son: titulo de la cancion: ${title}, duración: ${length}, id del compositor:${composer_id} y el id del genero es: ${genre_id}`;
}

async function remove(id){
    return `Borramos canciones con id ${id}`;
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};