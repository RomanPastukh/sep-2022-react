import React, {useEffect, useState} from 'react';
import {albumsRequest} from "../../api/request/albumsRequest";
import {Albums} from "../../componets/albums/Albums";

export  const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsRequest.getAll().then(({data}) => setAlbums([...data]))
    })
    return (
        <div style={{width:'100%', margin: '0 auto'}}>
           <h1>Albums</h1>
            <Albums albums={albums}/>
        </div>
    );
};

