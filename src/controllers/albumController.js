
async function getAll(){
    return "Mostramos todos los albums";
}

async function getById(id){
    return `Mostramos album con id ${id}`;
}
async function create(albumData){
    const {title, realease_year, band_id} = albumData;
    return `Los datos para album nuevo son: titulo: ${title}, año de lanzamiento: ${realease_year} y el id de la banda: ${band_id}`;
}
async function update(id,albumData){
    const {name, creation_date} = albumData;
    return `Los nuevos datos para album con id ${id} son: titulo: ${title}, año de lanzamiento: ${realease_year} y el id de la banda: ${band_id}`;
}

async function remove(id){
    return `Borramos album con id ${id}`;
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