import React from "react";

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: [],
      captionImages: [],
      imgIndex: 0
    }
    this.mapCarouselItem = this.mapCarouselItem.bind(this);
    this.renderCaptionImages = this.renderCaptionImages.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.handleSlides = this.handleSlides.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleSlides.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleSlides.bind(this));
  }      

  componentDidUpdate(prevProps) {
    if (this.props.urls !== prevProps.urls) {
      this.mapCarouselItem();
      this.renderCaptionImages();
    }
  }

  renderCaptionImages() {
    var urls = this.props.urls;
    var storage = urls.map((item, index) => {
      return <img onClick={this.handleSlides} className="caption-image" data-index={index} src={item.img_url}/>
    })
    this.setState({captionImages: storage});
  }

  mapCarouselItem() {
    var storage = [];
    for (var i = 0; i < this.props.urls.length; i++) {
      var slide = (
        <div className="image-slide">
          <img className="image" data-index={i} src={this.props.urls[i].img_url}/>
        </div>
      )
      storage.push(slide);
    }
    this.setState(() => {
      return {storage: storage}
    });
  }

  handleSlides(e) {
    var index = this.state.imgIndex
    var arrLength = this.state.storage.length
    if(e.target.className === 'prev' || e.keyCode === 37) {
      if (index === 0) {
        this.setState({imgIndex: arrLength - 1})
      } else {
        this.setState({imgIndex: parseInt(index) - 1})
      }
    } else if (e.target.className === 'next' || e.keyCode === 39) {
      if (index === (arrLength - 1)) {
        this.setState({imgIndex: 0})
      } else {
        this.setState({imgIndex: parseInt(index) + 1})
      }
    } else if (e.target.dataset.index) {
      console.log(e.target.dataset.index);
      var target = e.target.dataset.index;
      this.setState({imgIndex: target})
    }
  }

  render() {
    var index = parseInt(this.state.imgIndex) + 1
    return (
      <React.Fragment>
        {this.props.urls.length !== 0 ? this.state.storage[this.state.imgIndex] : "Please wait.."}
        <span className="image-number">{index} of {this.state.storage.length}</span>
        <div className="caption-image-container">
            {this.state.captionImages}
        </div>
        <a className="prev" onKeyDown={this.handleSlides} onClick={this.handleSlides}>&#10094;</a>
        <a className="next" onKeyDown={this.handleSlides} onClick={this.handleSlides}>&#10095;</a>
      </React.Fragment>
      );
  }
}

export default ImageCarousel;
