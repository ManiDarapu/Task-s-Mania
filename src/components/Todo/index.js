import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListItem from '../ListItem'
import './index.css'

class Todo extends Component {
  state = {
    taskInput: '',
    description: '',
    status: 'start',
    checkboxes: {
      m1: false,
      m2: false,
      m3: false,
      m4: false,
      m5: false,
    },
    tasks: [],
  }

  onChangeInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeDescribe = event => {
    this.setState({description: event.target.value})
  }

  onChangeStatus = event => {
    this.setState({status: event.target.value})
  }

  onChangeCheckbox = checkboxName => {
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [checkboxName]: !prevState.checkboxes[checkboxName],
      },
    }))
  }

  addTask = () => {
    const {taskInput, description, status, checkboxes} = this.state

    const taskId = uuidv4() // Generate unique task id
    if (taskInput.trim() === '' || description.trim() === '') {
      alert('Title and Description are mandatory fields')
    } else {
      this.setState(prevState => ({
        tasks: [
          ...prevState.tasks,
          {id: taskId, name: taskInput, description, status, checkboxes},
        ],
      }))
    }
    this.setState({
      taskInput: '',
      description: '',
      status: 'start',
      checkboxes: {
        m1: false,
        m2: false,
        m3: false,
        m4: false,
        m5: false,
      },
    })
  }

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id),
    }))
  }

  editTask = (id, editValue, editDescribe, editStatus) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            name: editValue,
            description: editDescribe,
            status: editStatus,
          }
        }
        return task
      }),
    }))
  }

  render() {
    const {taskInput, tasks, description, checkboxes} = this.state
    return (
      <div className="div1">
        <img
          src="https://cdn.dribbble.com/users/398490/screenshots/3169752/wishlist.gif"
          alt="todo img"
          className="image"
        />
        <div className="div2">
          <h1 className="h1">TASK's</h1>
          <div className="div3">
            <form className="form">
              <input
                type="text"
                value={taskInput}
                onChange={this.onChangeInput}
                placeholder="Add a task"
                className="input"
              />
              <textarea
                value={description}
                className="textarea"
                rows="4"
                placeholder="Describe Your Task"
                onChange={this.onChangeDescribe}
              />
              <div className="statusDiv1">
                <h5 className="heading">Set Status</h5>

                <select
                  className="statusDiv2"
                  id="status"
                  onChange={this.onChangeStatus}
                >
                  <option value="start">Start</option>
                  <option value="inprogress">On It</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="checkboxDiv1">
                <label className="heading" htmlFor="people">
                  Assign task to
                </label>
                <div className="checkboxDiv2">
                  <label className="checkboxInput">
                    <input
                      type="checkbox"
                      checked={checkboxes.m1}
                      onChange={() => this.onChangeCheckbox('m1')}
                    />
                    Mem 1
                  </label>
                  <label className="checkboxInput">
                    <input
                      type="checkbox"
                      checked={checkboxes.m2}
                      onChange={() => this.onChangeCheckbox('m2')}
                    />
                    Mem 2
                  </label>
                  <label className="checkboxInput">
                    <input
                      type="checkbox"
                      checked={checkboxes.m3}
                      onChange={() => this.onChangeCheckbox('m3')}
                    />
                    Mem 3
                  </label>
                  <label className="checkboxInput">
                    <input
                      type="checkbox"
                      checked={checkboxes.m4}
                      onChange={() => this.onChangeCheckbox('m4')}
                    />
                    Mem 4
                  </label>
                  <label className="checkboxInput">
                    <input
                      type="checkbox"
                      checked={checkboxes.m5}
                      onChange={() => this.onChangeCheckbox('m5')}
                    />
                    Mem 5
                  </label>
                </div>
              </div>
              <button type="button" onClick={this.addTask} className="addBtn">
                Add Task
              </button>
            </form>
            <ul className="todoUl">
              {tasks.map(task => (
                <ListItem
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  description={task.description}
                  checkboxes={task.checkboxes}
                  status={task.status}
                  onDelete={() => this.deleteTask(task.id)}
                  onEdit={(id, newName) => this.editTask(task.id, newName)}
                />
              ))}
            </ul>
          </div>
        </div>
        <img
          src="https://cdn.dribbble.com/users/398490/screenshots/3169752/wishlist.gif"
          alt="todo img"
          className="image"
        />
      </div>
    )
  }
}

export default Todo
