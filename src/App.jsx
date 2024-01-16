import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useReducer, useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currentTodoItems,action) => {
  let newTodoItems=currentTodoItems;
  if(action.type==='NEW_ITEM'){
    newTodoItems=[
      ...currentTodoItems,
      { name:action.payload.itemName,dueDate: action.payload.itemDueDate},
    ];

  }
  else if(action.type==='DELETE_ITEM'){
   newTodoItems=currentTodoItems.filter((item)=>item.name!==action.payload.todoItemName);
  }
  return newTodoItems;
};

function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems,dispatchTodoItems]=useReducer(todoItemsReducer,[]);                                   

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        itemName,
        itemDueDate,
      }
    };
    dispatchTodoItems(newItemAction);
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
  };

  const deleteItem = (todoItemName) => {
    // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        itemName:todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  

  return (
    <TodoItemsContext.Provider value={{
todoItems,
addNewItem,
deleteItem,

    }}
    >
    <center className="todo-container">
      <AppName />
      <AddTodo  />
   <WelcomeMessage ></WelcomeMessage>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
