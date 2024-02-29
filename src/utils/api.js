import { processServerResponse } from "./utils";

const baseUrl = "http://localhost:3001";

const api ={
    baseUrl: baseUrl,
    getItems: () => {
        return fetch(`${baseUrl}/items`)
        .then(processServerResponse)
    },

    addItem: (name, imageUrl, weather) => {
        return fetch(`${baseUrl}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, imageUrl, weather }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to add item");
            }
            return response.json();
        })
    },

    deleteItem: (id) => {
        return fetch(`${baseUrl}/items/${id}`, {
            method: "DELETE",
        })
        .then((processServerResponse) => {
            if (!processServerResponse.ok) {
                throw new Error("Failed to delete item");
            }
            console.log("Item deleted successfully");
        })
    },
};

export default api;