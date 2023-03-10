import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useEffect, useRef, useLayoutEffect } from 'react'
import PersonalInfo from '../components/information'
import { gsap } from "gsap"


export default function Home() {

  const mainPage = useRef();
  const formchoice = useRef();

  let rendercounter = useRef(0);
  rendercounter.current = rendercounter.current + 1;

  useEffect(() => {
    
    const ctx = gsap.context(() => { 
      gsap.fromTo(mainPage.current,{opacity:0,y:50},{opacity:1,y:0,duration:1.5,});
      gsap.fromTo(formchoice.current,{opacity:0,x:25},{opacity:1,x:0,duration:2,delay:1})
      
    });

    return () => ctx.revert();
    
  },[]);

  

  return (
    <>
      <Head>
        <title>Multi-step-form: {rendercounter.current}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.form} ref={mainPage} >
          <div className={styles.form_choice} ref={formchoice} >
            <div className={styles.choice} >
              <span className={styles.circle}>
                1
              </span>
              <div>
                <p>
                  STEP 1
                </p>
                <p>
                  YOUR INFO
                </p>
              </div>
            </div>
            <div className={styles.choice} >
              <span className={styles.circle}>
                2
              </span>
              <div>
                <p>
                  STEP 2
                </p>
                <p>
                  SELECT PLAN
                </p>
              </div>
            </div>
            <div className={styles.choice}>
              <span className={styles.circle}>
                3
              </span>
              <div>
                <p>
                  STEP 3
                </p>
                <p>
                  ADD-ONS
                </p>
              </div>
            </div>
            <div className={styles.choice}>
              <span className={styles.circle}>
                4
              </span>
              <div>
                <p>
                  STEP 4
                </p>
                <p>
                  SUMMARY
                </p>
              </div>
            </div>
          </div>
          <div className={styles.form_documents}>
            <PersonalInfo />
          </div>
        </div>
      </main>
    </>
  )
}
