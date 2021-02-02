import React, { Component } from 'react';
import './App.css'; // eslint-disable-next-line
import Navigation from "../components/Navigation/Navigation"
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register"
import Particles from 'react-particles-js';
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";


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


const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
} 

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (resp) => {
    const clarifaiFace = resp.outputs[0].data.regions[0].region_info.bounding_box;
    const faceImage = document.getElementById("inputimage");
    const width = Number(faceImage.width);
    const height = Number(faceImage.height);
    // console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      rightCol: width - (clarifaiFace.right_col * width),
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onImageSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://pacific-savannah-75565.herokuapp.com/imageurl", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("https://pacific-savannah-75565.herokuapp.com/image", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
          .catch(err => console.log(err));
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch((err) => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }


  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;

    return (
      <div className="App">
        
        <Particles 
          className="particles"
          params={particlesOptions}
        />
        <Navigation 
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}/>

        { this.state.route === "home" 
          ? <div>
              <Logo />
              <Rank 
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm 
                onInputChange = {this.onInputChange}
                onImageSubmit = {this.onImageSubmit}
              />
              <FaceRecognition 
                imageUrl={imageUrl}
                box={box}
              />  

          </div>
          : (
            route === "signin"
              ? <SignIn 
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange} 
                />
              : <Register 
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange} 
                />
          )
        }
      </div>
    );  
  }
}



export default App;
