import React from 'react'
import styles from 'styles/kh.module.scss'
import MainMenuButton from 'components/kingdom-hearts/MainMenuButton'

const index = () => {
  return (
    <div className = {styles.root}>
        <section className={styles.buttonContainer}>
            <MainMenuButton>ABOUT ME</MainMenuButton>
            <MainMenuButton>PROJECTS</MainMenuButton>
            <MainMenuButton>DOCUMENTATION</MainMenuButton>
            <MainMenuButton>RESUME</MainMenuButton>
        </section>
    </div>
  )
}

export default index