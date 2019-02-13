import React from "react";
import ReactDOM from "react-dom";
import ImageCarousel from './carousel';
import Modal from './modal';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: []
    }
    this.getImageUrls = this.getImageUrls.bind(this);
  }

  componentDidMount() {
    this.getImageUrls()
  }

  getImageUrls() {
    axios.get('/api/item/2/')
      .then((response) => {
        this.setState({ urls: response.data })
      })
  }

  render() {
    return (
      <div>
        <div className='carousel-container'>
          <Modal />
          <ImageCarousel urls={this.state.urls}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("carousel"));