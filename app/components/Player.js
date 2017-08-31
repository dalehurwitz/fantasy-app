import { h, Component } from 'preact'
import { List, WindowScroller } from 'react-virtualized'

class Player extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  getPlayerClasses () {
    const { pick } = this.props
    const { adp, injury } = this.props.player
    const classes = ['player']

    if (pick) {
      let adpClass = ''
      const diff = pick - adp
      if (diff >= 10) {
        adpClass = 'player--adp-3'
      } else if (diff >= 5) {
        adpClass = 'player--adp-2'
      } else if (diff >= 3) {
        adpClass = 'player--adp-1'
      }
      classes.push(adpClass)
    }

    if (injury) {
      if (injury === 'Que') {
        classes.push('player--injured-que')
      } else if (injury === 'Sus' || injury === ' Out') {
        classes.push('player--injured-out')
      }
    }

    return classes.join(' ').trim()
  }

  render (props) {
    const { rank, name, team, pos, adp, bye, injury, id } = props.player
    const { add } = props
    const className = this.getPlayerClasses()
    return (
      <div className={className}>
        <button className='player__menu-toggle' onClick={this.toggleMenu} />
        <div className='player__stacked player__name'>
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
            <div className='player__menu__name'>
              <div className='player__stacked'>
                <span>{name}</span>
                <span className='player__component'>
                  <strong>{pos}</strong> - {team}
                </span>
              </div>
            </div>
            <div className='player__menu__buttons'>
              {props.taken && (
                <button className='player__button player__button--remove' onClick={props.taken} data-name={id}>Taken</button>
              )}
              {props.add && (
                <button className='player__button player__button--draft' onClick={props.add} data-name={id}>Draft</button>
              )}
              {props.remove && (
                <button className='player__button player__button--remove' onClick={props.remove} data-name={id}>Remove</button>
              )}
            </div>
            <button className='player__button player__button--close' onClick={this.toggleMenu}>X</button>
          </div>
        }
      </div>
    )
  }
}

class PlayerList extends Component {
  rowRenderer = ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) => {
    const { players, ...props } = this.props
    const player = players[index]
    return (
      <div key={player.id} style={style}>
        <Player
          player={player}
          {...props} />
      </div>
    )
  }

  render (props) {
    return (
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <List
            autoHeight
            height={height}
            isScrolling={isScrolling}
            onScroll={onChildScroll}
            rowCount={props.players.length}
            rowHeight={64}
            rowRenderer={this.rowRenderer}
            scrollTop={scrollTop}
            width={document.body.clientWidth}
            pick={props.pick}
            page={props.page}
          />
        )}
      </WindowScroller>
    )
  }
}

export default PlayerList
