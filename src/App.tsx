//make a task list

import { useState } from "react";

const initialTasks = [
  {
    title: 'Task 1',
    description: 'wash dish',
    completed: true
  },
  {
    title: 'Task 2',
    description: 'clean dish',
    completed: true
  },
  {
    title: 'Task 3',
    description: 'dry dish',
    completed: false
  },
];



//map takes callback function (equivalent to foreach)
function TaskList() {
  // This is a destructuring and it's how useState returns its arguments
  // useState returns an array, where the first value is the state and the second
  // value is a function that sets the state to a new value
  const [tasks, setTasks] = useState(initialTasks)

  // The point of an argument (index) is to provide dynamic data to "answer a question"
  // In this case it's "which task?" - which is indicated by the index number in the array
  const toggleTask = (index: number) => {
    // get the task
    const oldTask = tasks[index];

    // create a new task that is the same as the old task, but a different state
    // ... The spread operator copies all of the key value pairs from the old task to the new task
    const newTask = { ...oldTask, completed: !oldTask.completed }

    // replace the old task with the new task - make a new list of tasks with the updated task (newTask)
    const newTasklist = tasks.map((task, idx) => {
      // if it's the old task (the index matches idx)
      if (idx === index) {
        return newTask
      } else
        return task
    })
    // update the state (tasks) - THIS NEEDS A NEW LIST OF TASKS
    setTasks(newTasklist)
  }

  //why do we need to pass both task and index? 
  // VV this is the map callback function. map will pass an array, index, and something else, but we dont need to use it
  function mapTasktoTaskComponent(task, index: number) {
    return (
      <div className={`${task.completed ? "bg-green-200 border border-green-500" : "bg-white border border-black"} p-4 m-2 max-w-sm flex align-center rounded-md`}>
        <button onClick={() => toggleTask(index)} className={`${task.completed ? "bg-green-800 border border-green-900" : "bg-white border border-black"} h-4 w-4 border border-black rounded-sm mr-4`}></button>
        <div>
          <div>
            {task.title}
          </div>
          <div className="text-gray-400">
            {task.description}
          </div>
        </div>
      </div>
    )
  }



  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      {tasks.map(mapTasktoTaskComponent)}
    </div>
  )
}

export default TaskList