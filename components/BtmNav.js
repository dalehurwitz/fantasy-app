import { h } from 'preact'

const positions = [
  { label: 'All', value: ''},
  { label: 'QB', value: 'QB'},
  { label: 'RB', value: 'RB'},
  { label: 'WR', value: 'WR'},
  { label: 'TE', value: 'TE'},
  { label: 'K', value: 'K'},
  { label: 'DEF', value: 'DEF'}
]

const BtmNav = (props) => (
  <nav className='btm-nav'>
    <div className='btm-nav__positions'>
      {positions.map(pos => {
        const className = ['btm-nav__btn-pos', pos.value === props.pos ? 'btm-nav__btn-pos--active' : ''].join(' ').trim()
        return (
          <button
            className={className}
            data-pos={pos.value}
            onClick={props.changePos}
          >
            {pos.label}
          </button>
        )
      })}
    </div>
    <button className='btm-nav__menu' onClick={props.showSplash}></button>
  </nav>
)

export default BtmNav
