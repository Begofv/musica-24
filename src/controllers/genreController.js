
async function getAll(){
    return "Mostramos todos los generos";
}

async function getById(id){
    return `Mostramos generos con id ${id}`;
}
async function create(genreData){
    const {name} = genreData;
    return `Los datos para generos nuevo son: nombre: ${name}`;
}
async function update(id,genreData){
    const {name, creation_date} = genreData;
    return `Los nuevos datos para generos con id ${id} son: nombre: ${name}`;
}

async function remove(id){
    return `Borramos generos con id ${id}`;
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