import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  

  return (
    <TodoItemsContext.Provider value={todoItems}>
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
   <WelcomeMessage ></WelcomeMessage>
      <TodoItems
      
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
