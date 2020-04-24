import React, { Component } from 'react';
import countries from './countries.json'

function CountryDetail(props) {
    /**No longer having state */
    console.log(props.match.params.id)

    let country = countries.find(eachCountry => eachCountry.cca3 === props.match.params.id)

    return (
        <div>
            Functinoal  or stateless component
            <h1>{country?.name.common}</h1>

        </div>
    )
}


// class CountryDetail extends Component {
//     componentDidMount(){ //window.onload happens once when the components first mounts}
//         console.log(this.props.match.params.id)
//         //find method ... js find 
//         /**ENTER CODE HERE */

//     }
//     render() {
//         return (
//             <div>
//                 Country Detail
//             </div>
//         );
//     }
// }

export default CountryDetail;