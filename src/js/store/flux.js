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
            // Método para crear un nuevo contacto
            createContact: (newContact) => {
                fetch("https://playground.4geeks.com/apis/fake/contact/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newContact)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to create contact.");
                    }
                    return response.json();
                })
                .then(data => {
                    // Recargamos los contactos después de crear uno nuevo
                    getActions().loadContacts();
                })
                .catch(error => {
                    console.error("Error creating contact:", error);
                    // Si ocurre un error, guarda el contacto localmente en lugar de enviarlo a la API
                    const store = getStore();
                    const updatedContacts = [...store.contacts, newContact];
                    setStore({ contacts: updatedContacts });
                });
            },

            // Método para cargar todos los contactos desde la API
            loadContacts: () => {
                fetch("https://playground.4geeks.com/apis/fake/contact/")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to load contacts.");
                    }
                    return response.json();
                })
                .then(data => {
                    // Actualiza el estado de los contactos en la tienda
                    setStore({ contacts: data });
                })
                .catch(error => {
                    console.error("Error loading contacts:", error);
                });
            },

            // Método para actualizar un contacto existente
            updateContact: (contactId, updatedContact) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedContact)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to update contact.");
                    }
                    return response.json();
                })
                .then(data => {
                    // Recargamos los contactos después de actualizar uno
                    getActions().loadContacts(updatedContact.agenda_slug);
                })
                .catch(error => {
                    console.error("Error updating contact:", error);
                });
            },

            // Método para eliminar un contacto
            deleteContact: (contactId, agendaSlug) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                    method: "DELETE"
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to delete contact.");
                    }
                    return response.json();
                })
                .then(data => {
                    // Recargamos los contactos después de eliminar uno
                    getActions().loadContacts(agendaSlug);
                })
                .catch(error => {
                    console.error("Error deleting contact:", error);
                });
            }
        }
    };
};

export default getState;
