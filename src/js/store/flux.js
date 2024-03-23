const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                
                {
                    title: "Paco Martinez Soria",
                    background: "white",
                    initial: "white"
                }
            ],
            contacts:[]
        },
        actions: {
            // crear un nuevo contacto
            getAllContacts: function () {
                fetch('https://playground.4geeks.com/apis/fake/contact/agenda/alvaro')
                .then((response)=>response.json())
                .then((data)=>setStore({contacts: data}))
                .catch((error)=>console.log(error))
            },
            
            
        }
    }  
            
};

export default getState;



/* EXPLICACION DE LA FALLA 

Cuando se llama a createContact con un nuevo contacto, 
se envía una solicitud POST al servidor para crear el contacto en la API.

Una vez que la solicitud es exitosa y tengo la respuesta del servidor en formato JSON, 
el contacto recién creado se agrega al array contacts del estado global. 

Esto se hace obteniendo el estado actual del almacenamiento global a través de getStore(), 
creando un nuevo array que incluye el nuevo contacto utilizando la sintaxis de propagación (...store.contacts, data), 
y luego actualizando el estado global con el nuevo array de contactos utilizando setStore({ contacts: updatedContacts }). */