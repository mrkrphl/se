import NavBar from "../components/NavBar";
import banner from "../images/banner.JPG";
import nall_logo from "../images/nall_logo.png";
import nall_logo2 from "../images/nall_logo2.png";

const styles={
    aboutp: {
        fontFamily: 'Open Sans',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "15px",
        lineHeight: "20px",
        textAlign: "justify"
      
      },
      
    abouth3: {
        fontFamily: 'Open Sans',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "27px",
        color: "#2E052D"
      }
}
function AboutUs(){
    return(
        <div  className="d-flex flex-column min-vh-100">
            <NavBar/>
            <header class="p-4 text-white" style={{backgroundColor: '#2E052D'}}>
                <div class="container d-flex flex-wrap align-items-center justify-content-center">
                    <div>
                        <img src={nall_logo} width="50" height="54" />
                    </div>
                    <div class="px-3 text-center text-white">Legal Education Board <br/>
                        Network of Academic Law Librarians, Inc.
                    </div>
                    <span>
                        <hr/></span>
                    <div>
                        <img src={nall_logo2} width="50" height="54" />
                    </div>
                </div>
            </header>
            <div className="container about">
                <h1 className="p-3 mb-3 mt-3"> About Us </h1>

                <div className="container p-3">
                    <h3> History </h3>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed accumsan cursus, mi
                        turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero, fermentum at eleifend quis,
                        cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum mauris ac sem finibus, in convallis
                        purus malesuada. Mauris ligula metus, ultrices quis augue eu, sagittis ultricies tellus. Quisque
                        finibus, nisl nec ornare mattis, ipsum lacus elementum neque, vestibulum bibendum mi magna ut orci. Sed
                        porta auctor ante. Mauris commodo, velit vitae venenatis euismod, enim nulla dignissim nisi, quis
                        lacinia lorem ligula a ante. Nunc et magna egestas risus tempor volutpat. Orci varius natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque laoreet purus.
                        Etiam semper hendrerit ex, ut pretium dui sollicitudin vel. </p>
                </div>

                <div className="container flex">
                    <div className="row px-0">
                        <div className="col-6 border-end border-secondary">
                            <h3 style={{textAlign: "center"}}> Mission </h3>
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed
                                accumsan cursus, mi turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero,
                                fermentum at eleifend quis, cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum
                                mauris ac sem finibus, in convallis purus malesuada. </p>
                        </div>
                        <div className="col-6">
                            <h3 style={{textAlign: "center"}}> Vision </h3>
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed
                                accumsan cursus, mi turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero,
                                fermentum at eleifend quis, cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum
                                mauris ac sem finibus, in convallis purus malesuada. </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h3> Objectives </h3>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed accumsan cursus, mi
                        turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero, fermentum at eleifend quis,
                        cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum mauris ac sem finibus, in convallis
                        purus malesuada. Mauris ligula metus, ultrices quis augue eu, sagittis ultricies tellus. Quisque
                        finibus, nisl nec ornare mattis, ipsum lacus elementum neque, vestibulum bibendum mi magna ut orci. Sed
                        porta auctor ante. Mauris commodo, velit vitae venenatis euismod, enim nulla dignissim nisi, quis
                        lacinia lorem ligula a ante. Nunc et magna egestas risus tempor volutpat. Orci varius natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque laoreet purus.
                        Etiam semper hendrerit ex, ut pretium dui sollicitudin vel. </p>
                </div>

            </div>
            
            <footer className="footer mt-auto py-3 fixed-bottom footer-style">
                <div className="container text-center">
                    <p> &#169; 2022 A Gateway to Open Access Legal Resources in the Philippines All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default AboutUs;