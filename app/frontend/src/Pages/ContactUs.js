import NavBar from "../components/NavBar";
import VioletPart from "../components/VioletPart";
import Footer from "../components/Footer";

function ContactUs(){
    return(
        <div>
            <NavBar/>
            <VioletPart/>
            <section className="bgimage">
                <div className="container-fluid">
                    <h5> Contact Us</h5>
                </div>
            </section>
            <div className="container contact mt-5 mb-5">
                <dl className="row ">
                    <dt className="col-6">Nall FB Page:</dt>
                    <dd className="col-6">@nallph.org</dd>

                    <dt className="col-6">NALL Email Address:</dt>
                    <dd className="col-6">@nallph.org</dd>

                    <dt className="col-6">LEB FB Page:</dt>
                    <dd className="col-6">@legal.education.board</dd>

                    <dt className="col-6">LEB Website:</dt>
                    <dd className="col-6">https://leb.gov.ph/</dd>

                    <dt className="col-6">LEB Email Address:</dt>
                    <dd className="col-6">contact@leb.gov.ph</dd>
                </dl>

            </div>
            <Footer/>
        </div>
    );
}

export default ContactUs;