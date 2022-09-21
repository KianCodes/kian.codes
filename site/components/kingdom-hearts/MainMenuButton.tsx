import Link from 'next/link'
import React from 'react'
import styles from 'styles/kh.module.scss'

interface IMainMenuButton {
  children?: React.ReactNode
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  setSelection: React.Dispatch<React.SetStateAction<number>>
  index: number
  selection: number
  external: boolean
  url: string
}

const MainMenuButton = ({
  children,
  description,
  index,
  setDescription,
  setSelection,
  selection,
  external,
  url,
}: IMainMenuButton) => {
  const onHover = () => {
    setSelection(index)
    setDescription(description)
  }
  return (
    <>
      {external ? (
        <a href={url}>
          <div
            className={selection === index ? styles.buttonSelected : styles.button}
            onMouseOver={onHover}
          >
            <span className={styles.buttonText}>{children}</span>
            <hr />
          </div>
        </a>
      ) : (
        <Link href={url}>
          <a>
            <div
              className={selection === index ? styles.buttonSelected : styles.button}
              onMouseOver={onHover}
            >
              <span className={styles.buttonText}>{children}</span>
              <hr />
            </div>
          </a>
        </Link>
      )}
    </>
  )
}

export default MainMenuButton
