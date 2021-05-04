import { useState } from 'react';
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

  //Delete Tasks.
  const deleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) =>  task.id !== id));
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
