import React, { Component } from 'react';
import './App.css'; // eslint-disable-next-line
import Clarifai, { FACE_DETECT_MODEL } from "clarifai"; 
import Navigation from "../components/Navigation/Navigation"
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import Particles from 'react-particles-js';
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "9506441d3d9040a2bba6f5e6d487f78c"
})

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    } 
  }

  calculateFaceLocation = (resp) => {
    const clarifaiFace = resp.outputs[0].data.regions[0].region_info.bounding_box;
    const faceImage = document.getElementById("inputimage");
    const width = Number(faceImage.width);
    const height = Number(faceImage.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      rightCol: width - (clarifaiFace.right_col * width),
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - (clarifaiFace.bottom_row * height)
  
    }
  }
  
  displayFaceBox = (box) => {
    this.setState({box: box})
    console.log(box);
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className="particles"
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange = {this.onInputChange}
          onSubmit = {this.onSubmit}
        />
        <FaceRecognition 
          imageUrl={this.state.imageUrl}
          box={this.state.box}
        />  
      </div>
    );  
  }
}



export default App;
