import React, { useState } from 'react';
import FavBtn from './FavBtn';
import { UserService } from '../utils/API';
// import 'bootstrap/dist/css/bootstrap.min.css';

const FavCard = (props) => {


    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="<img src={props.imgSmall} alt={'trail pic'} />" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Trail: {props.name}</h5>
                <p class="card-text">{props.summary}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Location: {props.location}</li>
                <li class="list-group-item">Difficulty: {props.difficulty}</li>
                <li class="list-group-item">Length: {props.length}</li>
                <li class="list-group-item">Ascent: {props.ascent}</li>
                <li class="list-group-item">Hiker Rating: {props.stars}</li>
                <li class="list-group-item">Hiker Votes: {props.starVotes}</li>
            </ul>
            <div class="card-body">
                <a className="fav-icon"><FavBtn /></a>
            </div>
        </div>

    );
}

export default FavCard;   