import Image from 'next/image'
import React from 'react'
import styles from 'styles/kh.module.scss'

const CornerButton = () => {
  return (
    <div className={styles.cornerButton}>
      <Image src='/hunnysoft-pot.png' width={36} height={36} />
      &nbsp; About This Site...
    </div>
  )
}

export default CornerButton
