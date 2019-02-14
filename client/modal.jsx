import React from "react";
import ImageCarousel from "./carousel.jsx";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.urls !== prevProps.urls) {
      this.imgRender();
    }
  }

  imgRender() {
    return (
    <div className="portal-container" onClick={this.modalHandler} id="myBtn" data-index={0}>
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>
      <img className="modal-portal" src={this.props.urls[0].img_url}/>
    </div>
    );
  }

  modalHandler() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
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
  }

  render() {
    return (
      <React.Fragment>
        {this.props.urls.length !== 0 ? this.imgRender() : "Please wait.."}
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <div className='carousel-container'>
              <ImageCarousel urls={this.props.urls}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
