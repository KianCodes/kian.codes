import React from 'react'
import styles from '@styles/ff14.module.scss'

const index = () => {
  return (
    <div className={styles.container}>
        
       <div className={styles.tabContainer}>
        <button className={styles.tabButtonLeft}>1</button>
        <button className={styles.tabButtonMiddle}>2</button>
        <button className={styles.tabButtonRight}>3</button>
       </div>
        
    </div>
  )
}

export default index