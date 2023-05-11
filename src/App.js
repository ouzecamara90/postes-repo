
import {AjoutTache} from 'react';
import {Tache} from 'react';
import {ListeTache} from 'react';
import { useReducer } from 'react';
import {reducerRedux} from 'redux';
import {createStore} from 'reducer';
import './App.css';

// Composant "Ajouter une tâche"
class AddTask extends React.Component {
  state = {
    description: '',
    isDone: false
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleStatusChange = (event) => {
    this.setState({ isDone: event.target.checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { description, isDone } = this.state;
    // Appel à une action Redux pour ajouter la tâche
    this.props.addTask({ description, isDone });
    this.setState({ description: '', isDone: false });
  };

  render() {	 			
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          placeholder="Description de la tâche"
          required
        />
        <label>
          <input
            type="checkbox"
            checked={this.state.isDone}
            onChange={this.handleStatusChange}
          />
          Réalisé
        </label>
        <button type="submit">Ajouter</button>
      </form>
    );
  }
}

// Composant "Tâche"
const Task = ({ id, description, isDone, toggleTaskStatus, deleteTask }) => {
  const handleStatusChange = () => {
    toggleTaskStatus(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleStatusChange} />
      <span>{description}</span>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

// Composant "ListeTâche"
const TaskList = ({ tasks, toggleTaskStatus, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

