import React from 'react';

function Footer() {
    return (
        <footer id="footer" className="footer footer_bg_gray pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="https://kilala.com.vn/data/images/loading_logo_kilala.png" 
                        alt="Image" className="img-fluid mb-3 img_kilala_footer" />
                        <h5>KILALA COMMUNICATION</h5>
                        <p>3rd Floor, Copac Square Building, 12 Ton Dan, Ward 13, District 4, HCMC, Vietnam</p>
                        <p>(+84) 902 767 595</p>
                        <p>test-frontend@dev.kilala</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className='mt-5'>RELATED LINKS</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://kilala.vn/cam-nang-nhat-ban.html">kilala.vn</a></li>
                            <li><a href="https://biz.feeljapan.vn/">biz.feeljapan.vn</a></li>
                            <li><a href="http://ww25.kilalashop.com/?subid1=20240617-0010-39e3-91b4-3e82f4faa98d">www.kilalashop.com</a></li>
                            <li><a href="https://awards.kilala.vn/">awards.kilala.vn</a></li>
                            <li><a href="https://japanguide.kilala.vn/">japanguide.kilala.vn</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Dwayne Johnson" />
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Example@gmail.com" 
                                    required 
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                />
                                <i className="fas fa-envelope"></i>
                                <div className="invalid-feedback">
                                    Please enter a valid email address.
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="3" placeholder="Your Message" 
                                style={{ resize: 'none' }}></textarea>
                                <i className="fas fa-comment" style={{top: '15%'}}></i>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 button_submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

