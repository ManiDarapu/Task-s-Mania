import {useState} from 'react'
import {FaTrash, FaEdit, FaArrowLeft} from 'react-icons/fa'
import './index.css'

const ListItem = props => {
  const {id, name, description, status, checkboxes, onDelete, onEdit} = props
  const [editMode, setEditMode] = useState(false)
  const [editValue, setEditValue] = useState(name)
  const [editDescribe, setEditDescribe] = useState(description)
  const [editStatus, setEditStatus] = useState(status)
  const [taskClicked, setTaskClicked] = useState(false)

  const handleEditChange = e => {
    setEditValue(e.target.value)
  }

  const handleEditDescribe = e => {
    setEditDescribe(e.target.value)
  }

  const handleEditStatus = e => {
    setEditStatus(e.target.value)
  }

  const handleEditSubmit = () => {
    onEdit(id, editValue, editDescribe, editStatus)
    setEditMode(false)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  const onClickTask = () => {
    setTaskClicked(true)
  }

  const onClickLeftArrow = () => {
    setTaskClicked(false)
  }

  return (
    <li className={taskClicked ? 'liClicked' : 'li'}>
      {editMode ? (
        <div className="editMode">
          <input type="text" value={editValue} onChange={handleEditChange} />
          <textarea
            rows="4"
            placeholder="Describe Your Task"
            value={editDescribe}
            onChange={handleEditDescribe}
          />
          <select value={editStatus} onChange={handleEditStatus}>
            <option value="start">Start</option>
            <option value="inprogress">On It</option>
            <option value="completed">Completed</option>
          </select>
          <button type="button" onClick={handleEditSubmit}>
            Save
          </button>
        </div>
      ) : (
        taskClicked && (
          <>
            <div className="itemDiv1">
              <FaArrowLeft onClick={onClickLeftArrow} />
              <h5 className="title">Title: {name}</h5>
              <h6 className="title">Status: {status}</h6>
              <FaTrash onClick={() => onClickDelete(id)} />
            </div>
            <p className="describe">Description: {description}</p>

            <ul className="asigneesUl">
              <p>Assigned To:</p>
              {Object.entries(checkboxes).map(([checkboxName, checked]) =>
                checked ? (
                  <li className="asigneesLi" key={checkboxName}>
                    {checkboxName}
                  </li>
                ) : null,
              )}
            </ul>
            <button
              type="button"
              className="icons"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          </>
        )
      )}
      {!editMode && !taskClicked && (
        <>
          <p onClick={onClickTask} className="titlePara">
            Title: {name}
          </p>

          <button
            type="button"
            className="icons"
            onClick={() => onClickDelete(id)}
          >
            <FaTrash />
          </button>
        </>
      )}
    </li>
  )
}

export default ListItem
