import styles from './Header.module.css'

interface HeaderProps {
	totalTasks: number
	totalDone: number
}
export function Header({ totalDone = 0, totalTasks = 0 }: HeaderProps) {
  const totalDoneLabel = totalTasks ? `${totalDone} de ${totalTasks}` : 0
  return (
		<header className={styles.header}>
			<aside><p className={styles.createdtasks}>Tarefas criadas</p><span>{totalTasks}</span></aside>
			<aside><p className={styles.concludedTasks}>Concluídas</p><span>{totalDoneLabel}</span></aside>
		</header>
	)
}