import { h, Component } from 'preact'
import localStorage from '../lib/localStorage'

class Splash extends Component {
  state = {
    name: '',
    cache: localStorage.getStorage()
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { name, cache } = this.state

    if (!name || cache && cache[name]) return

    this.props.onSubmit(name)
  }

  onUpdateName = ({ target }) => {
    this.setState({
      name: target.value
    })
  }

  deleteDraft = ({ target }) => {
    const name = target.dataset.name
    this.setState({
      cache: localStorage.deleteDraft(name)
    })
  }

  loadDraft = ({ target }) => {
    const name = target.dataset.name
    const draft = this.state.cache[name]
    this.props.onLoad(name, draft)
  }

  renderCachedDrafts () {
    return Object.keys(this.state.cache).map(name => (
      <li className='splash__list-item'>
        <button className='splash__delete' data-name={name} onClick={this.deleteDraft}>X</button>
        <a className='splash__link' data-name={name} onClick={this.loadDraft}>{name}</a>
      </li>
    ))
  }

  render (props) {
    return (
      <div className='splash'>
        <h1>The Milky Way</h1>
        <form className='splash__form' onSubmit={this.onSubmit}>
          <input type='text' placeholder='Enter a draft name' value={this.state.name} onInput={this.onUpdateName} />
          <button type='submit'>Go</button>
        </form>
        <ul className='splash__list'>
          {this.renderCachedDrafts()  }
        </ul>
      </div>
    )
  }
}

export default Splash
