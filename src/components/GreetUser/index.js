import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [user, setUser] = useState('Rahul')

  console.log('Component re-rendered')
  console.log(user)

  const onChangeUser = event => setUser(event.target.value)

  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        value={user}
        onChange={onChangeUser}
      />
      <MsgContent>
        Hello <NameText>{user}</NameText>
      </MsgContent>
    </MainContainer>
  )
}
export default GreetUser
