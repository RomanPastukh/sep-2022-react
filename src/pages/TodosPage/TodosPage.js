import React, {useEffect, useState} from 'react';
import {todosRequest} from "../../api/request/todosRequest";
import {TodosList} from "../../componets/todos_list/TodosList";


 export  const TodosPage = () => {
   const [todosList, setTodosList] =useState([]);
     useEffect(() =>{
         todosRequest.getAll().then(({data})=> setTodosList([...data]))
     },[])
    return (
        <div style={{width:'100%', margin: '0 auto'}}>
            <h1>Todos Page</h1>
            <TodosList todosList={todosList}/>
        </div>
    );
};

