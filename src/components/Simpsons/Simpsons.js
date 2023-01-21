import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons= [
        {
            id: 1,
            name:'Homer',
            surname:'Simpson',
            image:'  https://static.wikia.nocookie.net/simpsons/images/c/c7/Homersimpson.png'

        },
        {
            id:2,
            name:'Marge',
            surname:'Simpson',
            image:' https://www.segodnya.ua/img/forall/users/532/53203/marge_simpson.jpg'

        },
        {
            id:3,
            name:'Bart',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'

        },
        {
            id:4,
            name:'Lisa',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/640px-Lisasmiling.png'

        },
        {
            id:5,
            name:'Maggie',
            surname:'Simpson',
            image:'https://c0.cprnt.com/storage/i/95/f1/78/7a/418f48f6b92c167e0f7e1dd4/a9542fb9d60517f15a8055605761f521.png '

        } ,
    ]


    return (

        <div>
            {
            /*simpsons.map(simpson=><Simpson key={simpson.id} name={simpson.name} surname={simpson.surname} image={simpson.image}/>)*/
            simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/> )
}
        </div>


    );
};

export  {Simpsons};