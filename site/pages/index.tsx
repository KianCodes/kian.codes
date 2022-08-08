import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { AudioPlay } from '../util/audio/audio'
import Image from 'next/image'
import styles from '@styles/LandingPage.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  const [start, setStart] = useState(false)
  const playAudio = () => {
    AudioPlay('FFCursorSound.mp3')
  }

  return (
    <div className={styles.landingPage}>
      <Head>
        <title>Kian&apos;s Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Kian Codes</h1>

        {!start ? (
          <div>
            <p
              className={styles.clickToEnter}
              onClick={() => {
                setStart(true)
              }}
            >
              Click to Enter
            </p>
          </div>
        ) : (
          <ul>
            <Link href="About-Me">
              <li onMouseEnter={playAudio} onMouseDown={playAudio}>
                About Me
              </li>
            </Link>
            {/*<li onMouseEnter={playAudio} onMouseDown={playAudio}>
              Contact Me
            </li> */}
            <Link href="Projects">
              <li onMouseEnter={playAudio} onMouseDown={playAudio}>
                Projects
              </li>
            </Link>
            <a href="https://docs.kian.codes/">
              <li onMouseEnter={playAudio} onMouseDown={playAudio}>
                Documentation
              </li>
            </a>
            <Link href="Resume">
              <li onMouseEnter={playAudio} onMouseDown={playAudio}>
                Resume
              </li>
            </Link>
          </ul>
        )}
      </main>

      <footer>
        Powered by&nbsp;
        <Image src="/hunnysoft-pot.png" width={48} height={48} />
      </footer>
    </div>
  )
}

export default Home
