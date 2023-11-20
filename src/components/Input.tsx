import styles from './Input.module.css'

export function Input(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
	return (
		<input 
			{...props} 
			className={styles.container} 
			placeholder="Adicione uma nova tarefa"
		/>
	)
}