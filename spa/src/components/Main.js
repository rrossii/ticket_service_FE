export function Main() {
    return(
        <>
            <div className="container-fluid" id="main">
                <div className="row">
                    <div className="col">
                        <a href="#">
                            <h1 className="main-poster-text">28 APRIL, FRIDAY</h1><br>
                            <h1 className="main-poster-text">UKRAINIAN FUNK MUSIC: 70s-80s</h1></br>
                            <h1 className="main-poster-text">!FESTREPUBLIC</h1>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5" id="top-events">
                <div className="row">
                    <div className="col-12">
                        <h1 className="top-text">Top Events</h1><br/>
                    </div>
                    <div className="col col-md-5 col-lg-3 mx-4">
                        <div className="event-item">
                            <a href="event-page.html">
                                <img src={process.env.PUBLIC_URL + "/images/template.png"} alt="concert-image" width="250" height="200"/>
                                    <p className="event-main-text-info">Concert 1</p>
                            </a>
                        </div>
                    </div>
                    <div className="col col-md-5 col-lg-3 mx-4">
                        <div className="event-item">
                            <a href="event-page.html">
                                <img src={process.env.PUBLIC_URL + "/images/template.png"} alt="concert-image" width="250" height="200"/>
                                    <p className="event-main-text-info">Concert 2</p>
                            </a>
                        </div>
                    </div>
                    <div className="col col-md-5 col-lg-3 mx-4">
                        <div className="event-item">
                            <a href="event-page.html">
                                <img src={process.env.PUBLIC_URL + "/images/template.png"} alt="concert-image" width="250" height="200"/>
                                    <p className="event-main-text-info">Concert 3</p>
                            </a>
                        </div>
                    </div>
                    <div className="col col-md-5 col-lg-3 mx-4">
                        <div className="event-item">
                            <a href="event-page.html">
                                <img src={process.env.PUBLIC_URL + "/images/template.png"} alt="concert-image" width="250" height="200"/>
                                    <p className="event-main-text-info">Concert 4</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}