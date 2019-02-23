import React from "react";
import ImageCarousel from "./carousel.jsx";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portalIndex: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.urls !== prevProps.urls) {
      this.imgRender();
    }
  }    

  imgRender() {
    return (
      <div className="portal">
        <div className="portal-container" onClick={this.modalHandler} id="myBtn" data-index={0}>
          <div className="search-icon">
            <span className="fa fa-search"></span>
          </div>
          <img className="modal-portal" src={this.props.urls[0].img_url}/>
        </div>
      </div>
    );
  }

  modalHandler() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close_button")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    };
    span.onclick = function() {
      modal.style.display = "none";
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    window.onkeydown = function(event) {
      if (event.keyCode === 27) {
        modal.style.display = "none";
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.urls.length !== 0 ? this.imgRender() : "Please wait.."}
        <div id="myModal" className="carousel_modal_container">
          <div className="modal-content">
            <span className="close_button">&times;</span>
            <div className='carousel-container'>
              <ImageCarousel urls={this.props.urls} portalIndex = {this.state.portalIndex}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
