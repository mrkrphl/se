import nall_logo from "../images/nall_logo.png";
import nall_logo2 from "../images/nall_logo2.png"

function VioletPart(){
    return(
        <header className="p-4 text-white" style={{backgroundColor: "#2E052D"}}>
            <div className="container d-flex flex-wrap align-items-center justify-content-center">
                <div>
                    <img src={nall_logo} width="50" height="54" />
                </div>
                <div className="px-3 text-center text-white">Legal Education Board <br/>
                    Network of Academic Law Librarians, Inc.
                </div>
                <span>
                    <hr/>
                </span>
                <div>
                    <img src={nall_logo2} width="50" height="54" />
                </div>
            </div>
        </header>    
    );
}

export default VioletPart;