import React from 'react'
import styles from 'styles/kh.module.scss'

interface IMainMenuButton {
    children?: React.ReactNode;
}

const MainMenuButton = ({children} : IMainMenuButton) => {
  return (
    <div className={styles.button}>
        <span className={styles.buttonText}>{children}</span>
        <hr/>
    </div>
  )
}

export default MainMenuButton