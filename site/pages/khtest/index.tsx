import React, { useState } from 'react'
import styles from 'styles/kh.module.scss'
import MainMenuButton from 'components/kingdom-hearts/MainMenuButton'
import DescriptionBox from 'components/kingdom-hearts/DescriptionBox'
import DevelopedBy from 'components/kingdom-hearts/DevelopedBy'
const KHHome = () => {
  const [description, setDescription] = useState<string>('Learn more about me')
  const [selection, setSelection] = useState<number>(0)
  const menuButtons = [
    {
      label: 'ABOUT ME',
      description: 'Learn more about me.',
    },
    {
      label: 'PROJECTS',
      description: 'Check out my projects.',
    },
    {
      label: 'DOCUMENTATION',
      description: 'Look at my notes and resources.',
    },
    {
      label: 'RESUME',
      description: 'View my resume.',
    },
  ]
  return (
    <div className={styles.root}>
      <section className={styles.buttonContainer}>
        {menuButtons.map((button, idx) => (
          <MainMenuButton
            key={button.label}
            index={idx}
            description={button.description}
            selection={selection}
            setDescription={setDescription}
            setSelection={setSelection}
          >
            {button.label}
          </MainMenuButton>
        ))}
      </section>
      <DevelopedBy />
      <footer>
        <DescriptionBox description={description} selection={selection} />
      </footer>
    </div>
  )
}

export default KHHome
