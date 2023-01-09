import styles from '../styles/PersonalInfo.module.scss'

const PersonalInfo = () => {
	return ( 
		<form>
			<p className={styles.Form_title} >Personal info</p>
			<p className={styles.Form_explanation}>
				Please your name, email address and phone number.
			</p>
		</form>
	 );
}
 
export default PersonalInfo;