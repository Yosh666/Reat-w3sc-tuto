import React from 'react';
import Car from './Car';
const carname = "batman et Robin";
class Garage extends React.Component{
    render(){
        return(
            <div className= "uk-card uk-card-default uk-card-body">
                <p>Je suis un démon</p>
                <Car brand={carname}
                    day="la nuit le jour"
                    color= "turquoise" 
                    image="https://i.pinimg.com/originals/79/a3/52/79a3521d3ef93167d41417a55b216b00.jpg"
                    />
            </div>
        )
    }
}
export default Garage 