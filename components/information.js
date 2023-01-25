import styles from '../styles/PersonalInfo.module.scss'
import { useRef , useEffect } from 'react';
import gsap from 'gsap';

const PersonalInfo = () => {

	const infoForm = useRef(null);

	const submitHandler = (e) => {
		alert("I WILL NOT SUBMIT!");
		e.preventDefault();
	}

	useEffect(() => {

		let ctx = gsap.context(() => {

			gsap.from("label[for='name']",{opacity:0,x:25},2);
			gsap.from("input[name='name']",{opacity:0,x:25},2);

			gsap.from("label[for='email']",{opacity:0,x:25},2.5);
			gsap.from("input[name='email']",{opacity:0,x:25},2.5);

			gsap.from("label[for='phone']",{opacity:0,x:25},3);
			gsap.from("input[name='phone']",{opacity:0,x:25},3);

		},infoForm);

		return () => {
			ctx.revert();
		};

	},[]) 

	return ( 
		<form className={styles.info_form} ref={infoForm} >
			<p className={styles.form_title} >Personal info</p>
			<p className={styles.form_explanation}>
				Please your name, email address and phone number.
			</p>
			<label for="name" >
				Name
			</label>
			<input type="text" id="name" name="name" required/>
			<label for="email">
				Email Address
			</label>
			<input type="email" id="email" name="email" required/>
			<label for="phone">
				Phone Number
			</label>
			<input type="tel" id="phone" name="phone" required/>
			<input className={styles.submit_form} type="submit" value="Next Step" onClick={submitHandler}/>
		</form>
	 );
}
 
export default PersonalInfo;