import React from 'react';

const Banner = () => {
    return (
        <div id="banner" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#banner" data-slide-to="0" className="active"></li>
                <li data-target="#banner" data-slide-to="1"></li>
                <li data-target="#banner" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://kilala.com.vn/data/images/service/kilala-magazine/Hinh-KLL-Mag-1.jpg" className="d-block w-100 h-100" alt="Slide 1"></img>
                </div>
                <div className="carousel-item">
                    <img src="https://kilala.com.vn/data/images/service/consulting/banner.jpg" className="d-block w-100 h-100" alt="Slide 2"></img>
                </div>
                <div className="carousel-item">
                    <img src="https://kilala.com.vn/data/images/service/consulting/consulting_02.jpg?v=1.0.3" className="d-block w-100 h-100" alt="Slide 3"></img>
                </div>
                <div className="carousel-caption d-none d-md-block text-center">
                    <h1 className="display-3">WE ARE KILALA DESIGN</h1>
                    <p className="lead">SUPER EASY TO BUILD YOUR DESIGN</p>
                    <button className="btn btn-primary btn-lg">PURCHASE NOW</button>
                </div>
            </div>
            <a className="carousel-control-prev" href="#banner" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#banner" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Banner;