import { h } from 'preact'

const items = ['Fave', 'Remaining', 'Taken', 'Team']

const TopNav = (props) => {
  const className = ['top-nav__link',]
  return (
    <nav className='top-nav'>
      <div className='top-nav__left'>
        <button className='top-nav__btn-pick' onClick={props.decreasePick}>-</button>
        <span className='top-nav__pick-info'>R{props.round} P{props.pick}</span>
        <button className='top-nav__btn-pick' onClick={props.increasePick}>+</button>
      </div>
      <div className='top-nav__right'>
        {items.map(item => {
          const className = ['top-nav__link', item === props.active ? 'top-nav__link--active' : ''].join(' ').trim()
          return <a className={className} data-page={item} onClick={props.changePage}>
            {item}
          </a>
        })}
      </div>
    </nav>
  )
}

export default TopNav
