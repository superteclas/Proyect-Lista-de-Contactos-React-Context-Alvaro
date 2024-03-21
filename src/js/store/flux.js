const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    id: 1,
                    title: "Paco Martinez Soria",
                    background: "white",
                    initial: "white"
                }
            ],
            contacts: [] // array para almacenar los contactos
        },
        actions: {
            // crear un nuevo contacto
            createContact: (contacts) => {
                fetch("https://playground.4geeks.com/apis/fake/contact/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contacts)
                })
                .then(response => response.json())
                .then(data => getActions().loadContacts())
                .catch(error => console.error("Error creating contact:", error));
            },

            // cargar todos los contactos desde la API
            loadContacts: () => {
                fetch("https://playground.4geeks.com/apis/fake/contact/agenda/{agenda_slug}", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => setStore({ contacts: data }))
                .catch(error => console.error("Error loading contacts:", error));
            },

            // actualizar un contacto 
            updateContact: (contactId, updatedContact) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/{contactId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedContact)
                })
                .then(response => response.json())
                .then(data => getActions().loadContacts(updatedContact.agenda_slug))
                .catch(error => console.error("Error updating contact:", error));
            },

            // eliminar un contacto
            deleteContact: (contactId, agendaSlug) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/{contactId}`, {
                    method: "DELETE"
                })
                .then(response => response.json())
                .then(data => getActions().loadContacts(agendaSlug))
                .catch(error => console.error("Error deleting contact:", error));
            }
        }
    };
};

export default getState;
