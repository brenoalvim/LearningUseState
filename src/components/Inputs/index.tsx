import { useEffect } from 'react'
import { Div } from './styles'

interface inputProps {
  getName: (name: string) => void
  getGitHub: (github: string) => void
  getLocal: (local: string) => void
  getInstagram: (instagram: string) => void
}

export default function Input(props: inputProps) {
  function getName() {
    const name = document.querySelector('.inputName') as HTMLInputElement
    props.getName(name.value)
  }

  function getGitHub() {
    const github = document.querySelector('.inputGithub') as HTMLInputElement
    props.getGitHub(github.value)
  }

  function getLocal() {
    const local = document.querySelector('.inputLocal') as HTMLInputElement
    props.getLocal(local.value)
  }

  function getInstagram() {
    const instagram = document.querySelector(
      '.inputInstagram'
    ) as HTMLInputElement
    props.getInstagram(instagram.value)
  }

  // useEffect(() => {
  //   const name = document.querySelector('.inputName') as HTMLInputElement
  //   const github = document.querySelector('.inputGithub') as HTMLInputElement
  //   const local = document.querySelector('.inputLocal') as HTMLInputElement
  //   const instagram = document.querySelector(
  //     '.inputInstagram'
  //   ) as HTMLInputElement

  //   name.value = 'Breno Alvim'
  // }, [])

  return (
    <>
      <Div>
        <div className="container">
          <h2>Enter your information below</h2>

          <form>
            <div className="group">
              <input
                type="text"
                className="inputGithub"
                onChange={getGitHub}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Username Github</label>
            </div>
            <div className="group">
              <input
                type="text"
                className="inputName"
                onChange={getName}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>

            <div className="group">
              <input
                type="text"
                className="inputLocal"
                onChange={getLocal}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Localization</label>
            </div>

            <div className="group">
              <input
                type="text"
                className="inputInstagram"
                onChange={getInstagram}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Instagram (@)</label>
            </div>
          </form>
        </div>
      </Div>
    </>
  )
}
