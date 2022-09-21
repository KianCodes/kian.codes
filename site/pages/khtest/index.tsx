import React, { useState } from 'react'
import styles from 'styles/kh.module.scss'
import MainMenuButton from 'components/kingdom-hearts/MainMenuButton'
import DescriptionBox from 'components/kingdom-hearts/DescriptionBox'
import DevelopedBy from 'components/kingdom-hearts/DevelopedBy'
import Version from 'components/kingdom-hearts/Version'
import CornerButton from 'components/kingdom-hearts/CornerButton'
import BackgroundPooh from 'components/kingdom-hearts/BackgroundPooh'

const KHHome = () => {
  const [description, setDescription] = useState<string>('Learn more about me')
  const [selection, setSelection] = useState<number>(0)
  const menuButtons = [
    {
      label: 'ABOUT ME',
      description: 'Learn more about me.',
      external: false,
      url: 'About-Me',
    },
    {
      label: 'PROJECTS',
      description: 'Check out my projects.',
      external: false,
      url: 'Projects',
    },
    {
      label: 'DOCUMENTATION',
      description: 'Look at my notes and resources.',
      external: true,
      url: 'https://docs.kian.codes/',
    },
    {
      label: 'RESUME',
      description: 'View my resume.',
      external: false,
      url: 'Resume',
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
            external={button.external}
            url={button.url}
          >
            {button.label}
          </MainMenuButton>
        ))}
      </section>
      <DevelopedBy />
      <Version />
      <CornerButton />
      <BackgroundPooh />
      <DescriptionBox description={description} selection={selection} />
    </div>
  )
}

export default KHHome
