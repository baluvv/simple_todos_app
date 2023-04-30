import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props

  const {title, id} = todoDetails

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="list-item-container">
      <p className="todo-name">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
