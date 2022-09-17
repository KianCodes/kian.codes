import React from 'react'
import styles from 'styles/kh.module.scss'

interface IMainMenuButton {
  children?: React.ReactNode
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  setSelection: React.Dispatch<React.SetStateAction<number>>
  index: number
  selection: number
}

const MainMenuButton = ({
  children,
  description,
  index,
  setDescription,
  setSelection,
  selection,
}: IMainMenuButton) => {
  const onHover = () => {
    setSelection(index)
    setDescription(description)
  }

  return (
    <div
      className={selection === index ? styles.buttonSelected : styles.button}
      onMouseOver={onHover}
    >
      <span className={styles.buttonText}>{children}</span>
      <hr />
    </div>
  )
}

export default MainMenuButton
