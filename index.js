import './style/index.scss';
import { Component } from 'preact';
import PlayerList from './components/Player'
import BtmNav from './components/BtmNav'
import TopNav from './components/TopNav'
import Splash from './components/Splash'
import localStorage from './lib/localStorage'

export default class Fantasy extends Component {
  state = {
    draftName: null,
    loading: true,
    showSplash: true,
    activePage: 'Remaining',
    playersArr: null,
    playersObj: null,
    filterPos: '',
    filterTeam: '',
    remaining: [],
    taken: [],
    team: [],
    pick: 1,
    round: 1,
    leaguePlayers: 12
  }

  updateState (newState) {
    this.setState(newState, () => {
      const { remaining, taken, team, pick, round } = this.state
      localStorage.updateStorage(this.state.draftName, {
        remaining,
        taken,
        team,
        pick,
        round
      })
    })
  }

  createDraft = (name) => {
    this.updateState({
      activePage: 'Remaining',
      draftName: name,
      showSplash: false,
      remaining: this.state.playersArr.slice(),
      taken: [],
      team: [],
      pick: 1,
      round: 1
    })
  }

  loadDraft = (name, data) => {
    this.setState({
      draftName: name,
      showSplash: false,
      loading: false,
      activePage: 'Remaining',
      ...data
    })
  }

  loadActiveDraft () {
    const { activeDraft, drafts } = localStorage.getStorage()
    if (activeDraft && drafts[activeDraft]) {
      this.loadDraft(activeDraft, drafts[activeDraft])
      return
    }
    this.setState({
      loading: false
    })
  }

  filterPos (player) {
    return player.pos === this.state.filterPos
  }

  filterTeam ({ team }) {
    return team === this.state.filterTeam
  }

  changePage = ({ target }) => {
    this.setState({
      activePage: target.dataset.page
    })
  }

  changePos = ({ target }) => {
    this.updateState({
      filterPos: target.dataset.pos
    })
    window.scroll(0, 0)
  }

  increasePick = () => {
    let { pick, leaguePlayers } = this.state
    const newPick = pick + 1
    this.updateState({
      pick: newPick,
      round: 1 + (Math.floor(pick / leaguePlayers))
    })
  }

  decreasePick = () => {
    let { pick, leaguePlayers } = this.state
    const newPick = pick === 1 ? 1 : pick - 1
    this.updateState({
      pick: newPick,
      round: 1 + (Math.floor(newPick / ++leaguePlayers))
    })
  }

  removePlayer (name, list) {
    const newList = list.slice()
    newList.splice(list.indexOf(name), 1)
    return newList
  }

  addPlayer (name, list) {
    return [
      ...list,
      name
    ]
  }

  addPlayerToTeam = ({ target }) => {
    const { name } = target.dataset
    this.updateState({
      team: this.addPlayer(name, this.state.team),
      remaining: this.removePlayer(name, this.state.remaining)
    })
    this.increasePick()
  }

  addPlayerToTaken = ({ target }) => {
    const { name } = target.dataset
    this.updateState({
      taken: this.addPlayer(name, this.state.taken),
      remaining: this.removePlayer(name, this.state.remaining)
    })
    this.increasePick()
  }

  removePlayerFromTaken = ({ target }) => {
    const { name } = target.dataset
    this.updateState({
      taken: this.removePlayer(name, this.state.taken),
      remaining: this.addPlayer(name, this.state.remaining)
    })
    this.decreasePick()
  }

  removePlayerFromTeam = ({ target }) => {
    const { name } = target.dataset
    this.updateState({
      team: this.removePlayer(name, this.state.team),
      remaining: this.addPlayer(name, this.state.remaining)
    })
    this.decreasePick()
  }

  getFilteredPlayers (players) {
    const { filterPos, filterTeam, playersObj } = this.state
    let filters = []

    if (filterPos) {
      filters[filters.length] = this.filterPos
    }

    if (filterTeam) {
      filters[filters.length] = this.filterTeam
    }

    return players
      .filter(name => {
        const player = playersObj[name]
        if (filters.length) {
          return filters.every(filter => {
            return filter.call(this, player)
          })
        }
        return true
      })
      .map(name => playersObj[name])
      .sort((a, b) => a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0)
  }

  componentDidMount () {
    fetch('data/rankings.json')
      .then(response => response.json())
      .then(response => {
        this.setState({
          playersArr: response.array.slice(),
          playersObj: response.object
        });
        this.loadActiveDraft()
      });
  }

  getPlayerList () {
    switch (this.state.activePage) {
      case 'Team':
        return this.state.team
      case 'Taken':
        return this.state.taken
      default:
        return this.state.remaining
    }
  }

  showSplash = () => {
    this.setState({
      showSplash: true
    })
  }

  render() {
    if (this.state.loading) return (
      <div className='loading'>
        <span>Loading...</span>
      </div>
    );

    const { activePage, showSplash } = this.state
    const players = this.getPlayerList()
    const filteredPlayers = this.getFilteredPlayers(players)

    const topNavProps = {
      active: activePage,
      changePage: this.changePage,
      pick: this.state.pick,
      round: this.state.round,
      increasePick: this.increasePick,
      decreasePick: this.decreasePick
    }

    const btmNavProps = {
      changePos: this.changePos,
      pos: this.state.filterPos,
      showSplash: this.showSplash
    }

    const playerListProps = {
      players: filteredPlayers,
      page: this.state.activePage,
      pos: this.state.filterPos,
      ...(activePage === 'Remaining'
        ? {
          add: this.addPlayerToTeam,
          taken: this.addPlayerToTaken,
          pick: this.state.pick
        }
        : activePage === 'Taken'
        ? {
          remove: this.removePlayerFromTaken
        }
        : activePage === 'Team'
        ? {
          remove: this.removePlayerFromTeam
        } : {}
      )
    }

    return (
      <div class='app'>
        {showSplash
          ? <Splash onSubmit={this.createDraft} loadDraft={this.loadDraft} />
          : (
            <div>
              <TopNav {...topNavProps} />
              <PlayerList {...playerListProps} />
              <BtmNav {...btmNavProps} />
            </div>
          )
        }
      </div>
    );
  }
}
