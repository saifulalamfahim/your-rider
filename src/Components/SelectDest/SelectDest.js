import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import fakePlace from '../../FakePlace/FakePlace'
const SelectDest = () => {

    const { veh } = useParams();

    

    const [placeFrom, setPlaceFrom] = useState("");
    const [placeTo, setPlaceTo] = useState("");

    const handlePlaceFrom = (e) => {
        const placeValue = e.target.value
        setPlaceFrom(placeValue)
    }
    console.log(placeFrom)
    const handlePlaceTo = (e) => {
        const placeValue = e.target.value
        setPlaceTo(placeValue)
    }
    console.log(placeTo)
    // if(placeFrom == placeTo){
    //     document.getElementById("placeMatch").innerHTML = "Please Select different places"
    // }
    return (
        
        <div className="row">
            <div className="col-md-4 card cardStyle">
                <p className="mb-0 mt-3">Pick from</p>
                <select onChange={handlePlaceFrom} value={placeFrom} name="category" id="">
                    <option value="">Please Select</option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}>{place.name}</option>
                        ))
                    }
                </select>
                <p className="mb-0 mt-3">Drop</p>
                <select onChange={handlePlaceTo} value={placeTo} name="category" id="">
                    <option value="">Please Select</option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}>{place.name}</option>
                            
                        ))
                    }
                    
                </select>
                <br/>
                <br/>
                <input type="date" id="myDate" value="2014-02-09"></input>
                <br /><br />
                {
                    (placeFrom == placeTo) && <p class="text-danger">Please Select different places</p>
                }
                <br /> <br />
                {
                    (placeFrom != placeTo) && <Link to={`/destination/${veh}/${placeFrom}/${placeTo}`}><button className="text-center bg-danger mb-5">Search</button></Link>
                }
                
            </div>
            

            <div className="col-md-7">
                <div>
                    <img className="img" src={map} alt="" />
                    
                    
                </div>
            </div>
        </div>
        
    );
};

export default SelectDest;