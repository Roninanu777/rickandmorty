import React from 'react';
import './card.css';
import cover from '../asset/rickandmorty.jpeg';

export const Card = ({episode}) => {

    return (
        <div className="col animate mt-4">
            <div className="cardimage">
                <img src={cover} alt="cover" />
            </div>
            <div className="cardinfo">
                <h4>{episode.name}</h4>
                <h6 className="text-muted m-0">Aired on: {episode.air_date}</h6>
                <h6 className="text-muted m-0">Episode code: {episode.episode}</h6>
            </div>
        </div>
    )
}
