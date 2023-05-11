// Composant "Tâche"
const Task = ({ id, description, isDone, toggleTaskStatus, deleteTask }) => {
    const handleStatusChange = () => {
      toggleTaskStatus(id);
    };
    }