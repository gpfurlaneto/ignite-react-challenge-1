import styles from './EmptyList.module.css'

export function EmptyList() {
	return <div className={styles.emptyList}>
		<img src='/clipboard.svg'/>
			<p>
				<strong>Você ainda não tem tarefas cadastradas</strong>
				Crie tarefas e organize seus itens a fazer
			</p>
	</div>
}