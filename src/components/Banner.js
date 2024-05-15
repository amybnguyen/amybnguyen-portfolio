
const Banner = () => {
    return (
        <div className="position-relative overflow-hidden p-3 p-sm-3 m-md-3 text-left" style={{ paddingBottom: 0 }}>
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-2 font-weight-normal" style={{color:'#0d6efd'}}>Hi, I'm Amy!</h1>
                <p className="lead font-weight-normal" style={{fontSize: 28}}><b>Software Engineer.</b> A self-taught developer who loves to create beautiful solutions to complex problems.</p>
                <p className="lead font-weight-normal" style={{fontSize: 28}}>I am currently looking for a developer role in tech.</p>
                <div className="intro-para-links-copy">
                    <a href="https://www.linkedin.com/in/nguyenamyb/" className="link-block-2 w-inline-block m-2">
                        <img src="images/linkedin.svg" loading="lazy" width="30" alt="" className="contact-image"/>
                    </a>
                    <a href="mailto:amy.nguyen@gmail.com" className="w-inline-block m-2">
                        <img src="images/envelope.svg" loading="lazy" width="30" alt="" className="contact-image"/>
                    </a>
                    <a href="https://github.com/amybnguyen" className="link-block-2 w-inline-block m-2">
                        <img src="images/github.svg" loading="lazy" width="30" alt="" className="contact-image"/>
                    </a>
                </div>
            </div>
            <div className="product-device box-shadow d-none d-md-block"></div>
            <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
    )
}

export default Banner;