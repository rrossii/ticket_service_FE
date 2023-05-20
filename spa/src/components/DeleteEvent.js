export function DeleteEvent(eventId) {
    const authToken = localStorage.getItem('token');


    const url = `http://127.0.0.1:5000/tickets/${eventId}`

    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${authToken}`
        }
    })
        .then(async response => {
            if (!response.ok) {
                const json_data = await response.json();
                throw new Error(json_data.message);
            }
        })
        .catch(error => alert(error));
}