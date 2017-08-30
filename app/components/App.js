import { h } from 'preact'
import PlayerList from './Player'

const App = (props) => {
  return (
    <PlayerList players={props.players} />
  )
}

export default App
