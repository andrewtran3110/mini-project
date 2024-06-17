import React from 'react';

const AboutUs = () => {
    return (
        <div id="about-us" className="about-us py-5">
            <div className="container">
                <div className="title-container mb-4">
                    <div className="dash mr-3"></div>
                    <h2 className="text-center">ABOUT US</h2>
                    <div className="dash ml-3"></div>
                </div>
                <p className="text-center about-us-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book, It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </p>
                <div className="title-container d-flex justify-content-center my-5">
                    <h6 className="title-item px-2">SERVICES</h6>
                    <h6 className="title-item px-2">ABOUT CESIS</h6>
                    <h6 className="title-item px-2">PURCHASE NOW</h6>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className="d-flex aboutUs-item">
                            <div>
                                <i className="fa fa-bookmark icon"></i>
                            </div>
                            <div>
                                <div className="title_aboutUs_item mb-3">BRANDING</div>
                                <div className="text_aboutUs_item">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. Unchanged.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="d-flex aboutUs-item">
                            <div>
                                <i className="fas fa-desktop icon"></i>
                            </div>
                            <div>
                                <div className="title_aboutUs_item mb-3">WEB DESIGN</div>
                                <div className="text_aboutUs_item">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="d-flex aboutUs-item">
                            <div>
                                <i className="fas fa-toggle-off icon"></i>
                            </div>
                            <div>
                                <div className="title_aboutUs_item mb-3">WEB DEVELOPMENT</div>
                                <div className="text_aboutUs_item">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially unchanged.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="d-flex aboutUs-item">
                            <div>
                                <i className="fas fa-rocket icon"></i>
                            </div>
                            <div>
                                <div className="title_aboutUs_item mb-3">ONLINE MARKETING</div>
                                <div className="text_aboutUs_item">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially unchanged.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;