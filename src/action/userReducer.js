// Actions Redux
const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task
    };
  };
  
  const toggleTaskStatus = (taskId) => {
    return {
      type: 'TOGGLE_TASK_STATUS',
      payload: taskId
    };
  };
  
  const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId
    };
  };
     