import React, { Component } from 'react';
import axios from 'axios'

class API extends Component {

    state = {
        image: '',
        breakingBadCharacters: []
    }

    async componentDidMount(){ //window.onload happens once when the components first mounts
        
        let res = await axios.get("https://breakingbadapi.com/api/characters") //Waits until this is finished 
        this.setState({breakingBadCharacters: res.data})


        axios.get("https://dog.ceo/api/breeds/image/random").then(cucumber=>{ //then waits until it comes back so THEN you can use it 
            this.setState({image:cucumber.data.message})
        })



        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { name: 'Colatti', description: 'Fine Italian Pale Ale'}).then(res => {
            console.log(res)

            axios.get("https://ih-beers-api2.herokuapp.com/beers").then(res => {
                console.log(res)
            })
        })





        //Get pulls from the API &&& POST sends info to the API 
       
      

    
    }
    showBBCharacters = () => {
        return this.state.breakingBadCharacters.map(eachGuy => {
            return (
                <li>
                    <h4>{eachGuy.name}</h4>
                    <img src={eachGuy.img} />
                </li>
            )
        })
    }


    render() {
        return (
            <div>
                <h2>Welcome to API and Axios</h2>

                <img src={this.state.image} />
                
                {this.showBBCharacters()}
                
            </div>
        );
    }
}

export default API;