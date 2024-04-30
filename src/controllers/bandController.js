
async function getAll(){
    return "Mostramos todos las bandas";
}

async function getById(id){
    return `Mostramos band con id ${id}`;
}
async function create(bandData){
    const {name, creation_date} = bandData;
    return `Los datos para band nuevo son: nombre: ${name} y fecha de creación: ${creation_date}`;
}
async function update(id,bandData){
    const {name, creation_date} = bandData;
    return `Los nuevos datos para band con id ${id} son: nombre: ${name} y fecha de creación: ${creation_date}`;
}

async function remove(id){
    return `Borramos band con id ${id}`;
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