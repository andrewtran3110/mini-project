import React from 'react';

const Blog = () => {
    return (
        <div id="blog" className="row">
            <div className="col-md-6 bg-left-section p-0">
                <div className="content_blog">
                    <div>
                        <button className="button_featured_post">FEATURED POST</button>
                    </div>
                    <div className="ml-5">
                        <h6 className="mx-5 custom-text">MARCH 27, 2024</h6>
                        <h5 className="mx-5">How to improve your designs?</h5>
                        <p className="mx-5 custom-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com-modo consequat.
                            Duis aute irure dolor in reprehenderit...<br />
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.</p>
                        <button className="btn ml-5 button_read_more">READ MORE</button>
                    </div>

                </div>
            </div>
            <div className="col-md-6 right-section p-0">
                <div className="bg-top-right-section">
                    <div className="content_blog">
                        <div>
                            <button className="button_popular">POPULAR</button>
                        </div>
                        <div className="mx-5 mb-5">
                            <h6 className="mx-5 custom-text">MARCH 27, 2024</h6>
                            <h5 className="mx-5 mb-5">How to make your design better?</h5>
                        </div>
                    </div>
                </div>
                <div className="bottom-right-section">
                    <div className="text-center">
                        <h5>KILALA Resource</h5>
                        <div className="d-flex justify-content-center w-100 my-4">
                            <div className="line"></div>
                        </div>
                        <div className="d-flex justify-content-center w-100">
                            <p className="custom_text_kilala_resource">From nationally recognized brands to your favorite local shops, kilala is
                            trusted by many brands you know and love.</p>
                        </div>
                        
                        <button className="btn button_all_artciles mt-4">ALL ARTCILES  <i className="fas fa-arrow-right ml-2"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;