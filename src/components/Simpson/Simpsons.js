import React from 'react';

const Simpsons = () => {
    return (
        <div>
            
        </div>
    );
};

export default Simpsons;

const Simpson = (props) => {
   const {simpson}= props;
    return (
        <div>
            <div>
                <div>name: {simpson.name}</div>
                <div>surname {simpson.surname}</div>
                <img src={simpson.image} alt= {simpson.name}/>
            </div>

        </div>
    );
};
export {Simpson};