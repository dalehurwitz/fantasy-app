import { h, Component } from 'preact'

class Player extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render (props) {
    const { rank, name, team, pos, adp, bye, injury } = props.player
    return (
      <li className='player'>
        <div className='player__stacked'>
          <span>{rank}. {name}</span>
          <span className='player__component'>
            <strong>{pos}</strong> - {team}
          </span>
        </div>
        <div className='player__stacked'>
          <span><strong>ADP</strong></span>
          <span>{adp}</span>
        </div>
        <div className='player__stacked player__stacked--push-right'>
          <span><strong>BYE</strong></span>
          <span>{bye}</span>
        </div>
        {this.state.menuOpen &&
          <div className='player__menu'>
            <div className='player__menu__buttons'>
              <button>Draft</button>
              <button>Taken</button>
            </div>
            <button onClick={this.toggleMenu}>Close</button>
          </div>
        }
      </li>
    )
  }
}

const PlayerList = (props) => (
  <ul className='player-list'>
    {props.players.map(player => <Player player={player} /> )}
  </ul>
)

export default PlayerList
