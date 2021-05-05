import { useState } from 'react';
import AddTask from './component/AddTask';
import Header from './component/Header';
import Tasks from './component/Tasks';

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'May 03 at 2:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'Attend Classes',
        day: 'May 03 at 2:30',
        reminder: true,
      },
      {
        id: 3,
        text: 'Take Medicines',
        day: 'May 03 at 2:30',
        reminder: true,
      },
    ]
  )

  //Add Tasks Function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = {id, ...task}

    setTasks({...tasks, newTask});
  }

  //Delete Tasks.
  const deleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Reminder Function
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )};

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <AddTask onAdd={addTask} />
      {tasks.length > 0
        ?
        <Tasks tasks={tasks} deleteTask={deleteTask} onToggle={toggleReminder} />
        :
        'No Tasks To Show'}
    </div>
  );
}

export default App;