import { Div } from './styles'

import Card from '../Card/'

import Input from '../Inputs'

import { useState } from 'react'

export default function Homepage() {
  const [name, setName] = useState('')
  const [local, setLocal] = useState('')
  const [instagram, setInstagram] = useState('')
  const [github, setGithub] = useState('')

  return (
    <>
      <Div>
        <div className="input">
          <Input
            getName={setName}
            getLocal={setLocal}
            getGitHub={setGithub}
            getInstagram={setInstagram}
          />
        </div>
        <div className="card">
          <Card
            name={name}
            local={local}
            github={github}
            instagram={instagram}
          />
        </div>
      </Div>
    </>
  )
}
