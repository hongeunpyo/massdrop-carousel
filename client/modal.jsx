import React from "react";
import ImageCarousel from "./carousel.jsx";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  modalHandler() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.modalHandler} id="myBtn">Open Modal</button>
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            {/* <ImageCarousel urls={this.props.urls}/> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
