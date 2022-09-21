import Image from 'next/image'
import React from 'react'
import styles from 'styles/kh.module.scss'
const BackgroundPooh = () => {
  return (
    <div className={styles.backgroundPooh}>
      <Image src='/pooh-balloon.png' width={700} height={700} />
    </div>
  )
}

export default BackgroundPooh
