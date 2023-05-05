export function AdminProfile() {
    return(
        <div className="container text-center mt-4" id="admin-page">
            <div className="row">
                <div className="col-12">
                    <h1 className="top-text">Profile</h1><br />
                </div>
                <div className="col-md-3">
                    <nav className="nav nav-pills flex-column">
                        <button className="basic-button"><a href="purchase-history.html">Purchase history</a></button>
                        <button className="basic-button"><a href="#">Favourites</a></button>
                        <button className="basic-button"><a href="adding-ticket.html">Add new ticket</a></button>
                        <button className="basic-button"><a href="#">User listing</a></button>
                        <button className="basic-button my-3" id="logout-btn">Log Out</button>
                    </nav>
                </div>
                <div className="col-md-9">
                    <table className="user-info">
                        <tr>
                            <td>Name</td>
                            <td id="name">Ann</td>
                        </tr>
                        <tr>
                            <td>Surname</td>
                            <td id="surname">Smith</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td id="email">lol@ticket.com</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td id="user-status">Admin</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>Kyiv</td>
                        </tr>
                    </table>
                    <button className="basic-button"><a href="profile-update.html">Edit</a></button>
                </div>
            </div>
        </div>
    )
}