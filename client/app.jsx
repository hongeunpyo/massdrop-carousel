import React from "react";
import Modal from './modal';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [],
      isMassdropMade: null
    }
    this.getImageUrls = this.getImageUrls.bind(this);
  }

  componentDidMount() {
    this.getImageUrls()
    this.getItemInfo();
  }

  getImageUrls() {
    axios.get('/api/item/2/')
      .then((response) => {
        this.setState({ urls: response.data })
      })
  }

  getItemInfo() {
    axios.get('/api/info/2/')
      .then((response) => {
        // console.log(!!response.data[0].isMassdropMade);
        this.setState({ isMassdropMade: !!response.data[0].isMassdropMade})
      }) 
  }

  render() {
    return (
      <React.Fragment>
          <Modal urls={this.state.urls}/>
          {this.state.isMassdropMade === true? <div className="massdrop-made-message">IN STOCK: <span className="massdrop-made-submessage">This product is ready to ship in 1 business day.</span></div> : <></>}
      </React.Fragment>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById("carousel"));
export default App;