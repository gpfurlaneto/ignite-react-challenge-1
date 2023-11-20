import { Check, Trash } from '@phosphor-icons/react'
import styles from './Item.module.css'
import { Task } from '../App'

interface ItemProps {
  task: Task
  handleRemoveTask: (id: number) => void
  handleConfirmTask: (id: number, value: boolean) => void
}

export function Item({ task, handleRemoveTask, handleConfirmTask }: ItemProps) {

  const checkboxCheckedClassname = task.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = task.isChecked
    ? styles['paragraph-checked']
    : ''
    
    return (
      <div className={styles.item}>
        <div>
          <label htmlFor="checkbox" onClick={() => handleConfirmTask(task.id, !task.isChecked)}>
            <input readOnly type="checkbox" checked={false} />
            <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
              {task.isChecked && <Check size={12} />}
            </span>
            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
              {task.description}
            </p>
          </label>
        </div>
        <button onClick={() => handleRemoveTask(task.id)}>
          <Trash size={16} color="#808080" />
        </button>
    </div>
    )
}