import React from 'react';

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand:props.brand,
        color: props.color,
        day: props.day,
        image:props.image
      }
    }
    changeColore=()=>{
      this.setState({color:"canari" });
    }
    componentDidMount(){
      setTimeout(()=>{      
      this.setState({image:"https://static.teteamodeler.com/media/cache/thumb_400/girafe-explication-tete-a-modeler-du-mot-girafe.jpeg"})
      },4000)
    }
    shouldComponentUpdate(){
      //si on marque false ça bloque toute la page 
      return true
    }
    changeImage=()=>{
      this.setState({image:"https://images-na.ssl-images-amazon.com/images/I/61lc9rPMGWL._AC_SX522_.jpg"})
    }
    render() {
      return (
        <div>
          <li> Je vroume {this.state.day} en {this.state.brand} {this.state.color} !</li>
         
          <button type="button"
          onClick={this.changeColore}>
          Changer la couleur</button>
           <img src={this.state.image} uk-img alt="le cycle de la girafe"></img>
          <button type="button"
          onClick={this.changeImage}>10 ans plus tard</button>
        </div>
      )
    
    }
  }
  export default Car
  
  