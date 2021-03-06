import React, {useState} from 'react'
import TodoForm from './TodoForm'
import{RiCloseCircleLine} from 'react-icons/ri'
import{TiEdit} from 'react-icons/ti'
import{AiFillCheckCircle} from 'react-icons/ai'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm 
    edit={edit} 
    onSubmit= {submitUpdate}/>;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key = {index}
      >
      <div key={todo.id} >
        {todo.text}
      </div>

      <div className='icons'>
        <RiCloseCircleLine //boton para eliminar tarea
          title='eliminar tarea'
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit //boton para editar tarea
          title='Editar tarea'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <AiFillCheckCircle //boton para marcar o desmarcar la tarea finalizada        
          title='Tarea terminada'
          onClick={() => completeTodo(todo.id)}/>
      </div>
    </div>
  ));

};
export default Todo


