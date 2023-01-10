import styles from '../styles/PersonalInfo.module.scss'

const PersonalInfo = () => {
	return ( 
		<form className={styles.info_form} >
			<p className={styles.Form_title} >Personal info</p>
			<p className={styles.Form_explanation}>
				Please your name, email address and phone number.
			</p>
			<label for="name" >
				Name
			</label>
			<input type="text" id="name" name="name" />
			<label for="email">
				Email Address
			</label>
			<input type="email" id="email" name="email" />
			<label for="phone">
				Phone Number
			</label>
			<input type="tel" id="phone" name="phone">
			</input>
		</form>
	 );
}
 
export default PersonalInfo;