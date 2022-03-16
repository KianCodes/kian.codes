export const AudioPlay = (file: string) => {
  const audio = new Audio(`/${file}`)
  audio.volume = 0.1
  audio.play() //under folder public
}
