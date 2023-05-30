export function CancelBooking(purchaseId, userId) {
    purchaseId = parseInt(purchaseId, 10);
    userId = parseInt(userId, 10);

    const url = `http://127.0.0.1:5000/tickets/book/${purchaseId}/${userId}`

    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error cancelling booking");
            }
            if (response.status === 204) {
                alert("Booking cancelled successfully");
            }
        })
        .catch(error => {
            alert(error.message);
        });
}