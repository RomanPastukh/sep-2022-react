import React from 'react';
import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            id:188,
            name:"Karen Entity",
            status:"Alive",
            species:"Alien",
            image:"https://rickandmortyapi.com/api/character/avatar/188.jpeg",
        },
        {
            id:488,
            name:"Colonial Rick",
            status:"Dead",
            species:"Human",
            image:"https://rickandmortyapi.com/api/character/avatar/488.jpeg",
        },
        {
            id:528,
            name:"MonogatronLeader",
            status:"Alive",
            species:"Alien",
            image:"https://rickandmortyapi.com/api/character/avatar/528.jpeg",

        },
        {
            id:532,
            name:"Tony’s Wife",
            status:"Dead",
            species:"Alien",
            image:"https://rickandmortyapi.com/api/character/avatar/532.jpeg",
        },
        {
            id:572,
            name:"Robot Snake",
            status:"unknown",
            species:"Robot",
            image:"https://rickandmortyapi.com/api/character/avatar/572.jpeg",

        },
        {
            id:756,
            name:"Franklin D. Roosevelt",
            status:"Dead",
            species:"Humanoid",
            image:"https://rickandmortyapi.com/api/character/avatar/756.jpeg"
        }
    ]
    return (
        <div>
            {
                characters.map(character=><Character key={character.id} character={character}/>)
            }
        </div>
    );
};

export  {Characters};