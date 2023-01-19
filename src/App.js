
const App = () => {
    const Simpsons =[
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
            image:'https://static.wikia.nocookie.net/simpsons/images/b/bc/%D0%91%D0%B0%D1%80%D1%82.png'

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
            image:'https://funart.pro/uploads/posts/2021-04/1618524802_32-funart_pro-p-oboi-fon-meggi-simpson-35.jpg'

        },
    ]


    return (
        <div>
            {
                Simpsons.map(simpson => <Simpsons key={simpson.id} simpson={simpson}/>)

            }

        </div>
    );
};

export  {App};