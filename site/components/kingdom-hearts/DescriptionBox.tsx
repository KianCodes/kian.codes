import React from 'react'
import styles from 'styles/kh.module.scss'

interface IDescriptionBox {
  description: string
  selection: number
}

const DescriptionBox = ({ description, selection }: IDescriptionBox) => {
  return (
    <div className={selection != -1 ? styles.descriptionBox : styles.descriptionBoxDisabled}>
      {description}
    </div>
  )
}

export default DescriptionBox
