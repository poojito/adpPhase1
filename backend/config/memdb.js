const items = [
    {
        "id" : 0, 
        "name": "Mike Johnson",
        "email": "mikej@adp.com",
        "password": "mikej"
    },
    {
        "id": 1,
        "name": "Cindy Smiths",
        "email": "cinds@adp.com",
        "password": "cinds"
    },
    {
        "name": "Julio Martins",
        "email": "julin@adp.com",
        "password": "julim"
    }
]

export function getAll(){
    return items;
}

export function get(id){
    let result = null;
    for(let item of items){
        if(item.id === id){
            result = item;
        }
    }
    return result;
}

export function deleteById(id){
    let arrayIndex = getArrayIndexForId(id);
    if(arrayIndex >= 0 && arrayIndex < items.length){
        items.splice(arrayIndex, 1);
    }
}

export function post(item){
    let nextid = getNextId();
    item.id = nextid;
    items[items.length] = item;
}

export function put(id, item){
    for(let i = 0; i < items.length; i++){
        if(items[i].id === id){
            items[i] = item;
            return;
        }
    }
}

function getArrayIndexForId(id){
    for(let i = 0; i < items.length; i++){
        if(items[i].id === id){
            return i;
        }
    }
}

function getNextId(){
    let maxid = 0;
    for(let item of items){
        maxid = (item.id > maxid)?item.id:maxid;
    }
    return maxid + 1;
}

