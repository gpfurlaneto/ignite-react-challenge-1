import { Header } from './Header'
import { Input } from './Input'
import { Header as TaskListHeader } from './TaskList/Header'
import { Item as  TaskListItem } from './TaskList/Item'

import styles from './App.module.css'
import '../global.css'
import { Button } from './Button'
import { PlusCircle } from '@phosphor-icons/react'
import { EmptyList } from './TaskList/EmptyList'
import { useMemo, useState } from 'react'

export interface Task {
  id: number
  isChecked: boolean,
  description: string
}

function App() {

  const [description, setDescription] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])


  const totalDone = useMemo(() => {
    return tasks.reduce((acc, task) => {
      if (task.isChecked) {
        return acc + 1
      }
      return acc
    }, 0)
  
  }, [tasks])


  function  handleCreateTask() {
    setTasks(prev => [
      ...prev, 
      { id: new Date().getTime(), isChecked: false, description}
    ])
    setDescription('')
  }

  function handleRemoveTask(id: number) {
    if(!confirm("Deseja realmente remover a tarefa?")){
      return
    }

    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleConfirmTask(id: number, value: boolean) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          isChecked: value
        }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskDetailsInfo}>
          <Input value={description} onChange={(e) => setDescription(e.target.value)}/>
          <Button onClick={handleCreateTask} disabled={!description.length}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.taskList}>
          <TaskListHeader totalDone={totalDone} totalTasks={tasks.length}/>
          {tasks.length ? (
            <div>
              {tasks.map(task => (
                  <TaskListItem task={task} handleRemoveTask={handleRemoveTask} handleConfirmTask={handleConfirmTask}/>
                )
              )}
            </div>
          ) : <EmptyList />}
        </div>
      </section>
    </main>
  )
}

export default App
