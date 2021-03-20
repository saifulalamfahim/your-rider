import React from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import fakedata from "../../FakeData/FakeData"
import fakePlace from '../../FakePlace/FakePlace';

const Destination = () => {
    const {veh, placeFrom, placeTo} = useParams();
    const {info} = fakedata.find(vehicle => vehicle.type === veh);
    const {gMap} = fakePlace.find(place => place.name === placeFrom);

    // console.log(place)
    return (
        <div className="row">
            <div className="col-md-4 card cardStyle">
            <p className="mb-0 mt-3">Pick from</p>
            <input type="text" placeholder="location"/>
            <p className="mb-0 mt-3">Drop</p>
            <input type="text" placeholder="location"/>
            <br/><br/>
            <button className="text-center bg-danger mb-5">Search</button>
            </div>

<div className="col-md-4 card cardStyle">
            <p className="mb-0 mt-3">From: {placeFrom}</p>
            <p className="mb-0 mt-3">To: {placeTo}</p>
            <br/><br/>

            

            {info.map(vehicleName => <ul><li>{vehicleName.driverName}</li></ul>)}
            </div>
            <div className="col-md-7">
<div>
<iframe src={gMap} width="400px" height="400px" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            </div>

            
        </div>
    );
};

export default Destination;