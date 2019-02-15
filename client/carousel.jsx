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
          <img className="image" data-index={i} src={this.props.urls[i].img_url}/>
      )
      storage.push(slide);
    }
    this.setState(() => {
      return {storage: storage}
    });
  }

  handleSlides(e) {
    var index = parseInt(this.state.imgIndex)
    var arrLength = this.state.storage.length
    if(e.target.className === 'prev' || e.keyCode === 37) {
      if (index === 0) {
        this.setState({imgIndex: arrLength - 1})
        document.getElementsByClassName('image-slide')[0].style.transform = `translate(${(arrLength - 1) * -1200}px, 0)`;
        document.getElementsByClassName('caption-image-container')[0].style.transform = `translate(${(arrLength - 1) * -120}px, 0)`;
      } else {
        this.setState({imgIndex: index - 1})
        document.getElementsByClassName('image-slide')[0].style.transform = `translate(${(index - 1) * -1200}px, 0)`;
        document.getElementsByClassName('caption-image-container')[0].style.transform = `translate(${(index - 1) * -120}px, 0)`;
      }
    } else if (e.target.className === 'next' || e.keyCode === 39) {
      if (index === (arrLength - 1)) {
        this.setState({imgIndex: 0})
        document.getElementsByClassName('image-slide')[0].style.transform = `translate(0, 0)`;
        document.getElementsByClassName('caption-image-container')[0].style.transform = `translate(0, 0)`;
      } else {
        this.setState({imgIndex: index + 1})
        document.getElementsByClassName('image-slide')[0].style.transform = `translate(${(index + 1) * -1200}px, 0)`;
        document.getElementsByClassName('caption-image-container')[0].style.transform = `translate(${(index + 1) * -120}px, 0)`;
      }
    } else if (e.target.dataset.index) {
      var target = e.target.dataset.index;
      this.setState({imgIndex: target});
      var x = (target * -120)
      document.getElementsByClassName('image-slide')[0].style.transform = `translate(${target * -1200}px, 0)`;
      document.getElementsByClassName('caption-image-container')[0].style.transform = `translate(${x}px, 0)`;
    } else {
      this.setState({imgIndex: this.props.portalIndex})
      document.getElementsByClassName('image-slide')[0].style.transform = `translate(${(this.props.portalIndex) * -1200}px, 0)`;
      document.getElementsByClassName('caption-image-container')[0].style.transform = `translate(${(this.props.portalIndex) * -120}px, 0)`;
    }
  }

  render() {
    var index = parseInt(this.state.imgIndex) + 1
    return (
      <React.Fragment>
        <div className="image-container">
          <div className="image-slide">
            {this.props.urls.length !== 0 ? this.state.storage : "Please wait.."}
          </div>
        </div>
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
