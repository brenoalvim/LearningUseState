import { Div } from './styles'

import Card from '../Card/'

import Input from '../Inputs'

import { useState } from 'react'

export default function Homepage() {
  const [name, setName] = useState('')
  const [userGithub, setUserGithub] = useState('')
  const [local, setLocal] = useState('')
  const [instagram, setInstagram] = useState('')

  return (
    <>
      <Div>
        <div className="input">
          <Input getName={setName} getGitHub={setUserGithub} getLocal={setLocal} getInstagram={setInstagram} />
        </div>
        <div className="card">
          <Card name={name} github={userGithub} local={local} instagram={instagram} />
        </div>
      </Div>
    </>
  )
}
