import { h, Component } from "preact";
import { List, WindowScroller } from "react-virtualized";

class Player extends Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  getPlayerClasses() {
    const { pick } = this.props;
    const { adp, injury } = this.props.player;
    const classes = ["player"];

    if (pick) {
      let adpClass = "";
      const diff = pick - adp;
      if (diff >= 5) {
        adpClass = "player--adp-3";
      } else if (diff >= 3) {
        adpClass = "player--adp-2";
      } else if (diff >= 1) {
        adpClass = "player--adp-1";
      }
      classes.push(adpClass);
    }

    if (injury) {
      if (injury === "Que") {
        classes.push("player--injured-que");
      } else if (injury === "Sus" || injury === " Out") {
        classes.push("player--injured-out");
      }
    }

    return classes.join(" ").trim();
  }

  render(props) {
    const {
      add,
      taken,
      remove,
      toggleFavourite,
      isFavourite,
      player: { name, team, pos, adp, bye, injury, id }
    } = props;

    const index = props.index + 1;
    const className = this.getPlayerClasses();
    const menuClassName = [
      "player__menu",
      injury ? "player__menu--injured" : ""
    ]
      .join(" ")
      .trim();
    return (
      <div className={className}>
        <button className="player__menu-toggle" onClick={this.toggleMenu} />
        <div className="player__stacked player__name">
          <span className="player__name-field">
            {index}. {name}
          </span>
          <span className="player__component">
            <strong>{pos}</strong>
            {pos !== "DEF" && <span> - {team}</span>}
          </span>
        </div>
        <div className="player__stacked">
          <span>
            <strong>ADP</strong>
          </span>
          <span>{adp}</span>
        </div>
        <div className="player__stacked player__stacked--push-right">
          <span>
            <strong>BYE</strong>
          </span>
          <span>{bye}</span>
        </div>
        <button
          data-name={id}
          onClick={toggleFavourite}
          className={[
            "player__button player__button--favourite",
            isFavourite ? "player__button--favourite--active" : ""
          ]
            .join(" ")
            .trim()}
        >
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              className="player__button--favourite-fill"
              fill="#000000"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            />
          </svg>
        </button>
        {this.state.menuOpen && (
          <div className={menuClassName}>
            <div className="player__menu__name">
              <div className="player__stacked">
                <span className="player__name-field">
                  {index}. {name}
                </span>
                <span className="player__component">
                  <strong>{pos}</strong>
                  {pos !== "DEF" && <span> - {team}</span>}
                </span>
              </div>
            </div>
            <div className="player__menu__buttons">
              {taken && (
                <button
                  className="player__button player__button--remove"
                  onClick={taken}
                  data-name={id}
                >
                  Taken
                </button>
              )}
              {add && (
                <button
                  className="player__button player__button--draft"
                  onClick={add}
                  data-name={id}
                >
                  Draft
                </button>
              )}
              {remove && (
                <button
                  className="player__button player__button--remove"
                  onClick={remove}
                  data-name={id}
                >
                  Remove
                </button>
              )}
            </div>
            <button
              className="player__button player__button--close"
              onClick={this.toggleMenu}
            >
              X
            </button>
          </div>
        )}
      </div>
    );
  }
}

class PlayerList extends Component {
  rowRenderer = ({
    index, // Index of row within collection
    style // Style object to be applied to row (to position it)
  }) => {
    const { players, favourites, ...props } = this.props;
    const player = players[index];
    return (
      <div key={player.id} style={style}>
        <Player
          player={player}
          isFavourite={favourites.indexOf(player.id) > -1}
          index={index}
          {...props}
        />
      </div>
    );
  };

  render(props) {
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
            pos={props.pos}
            favourites={props.favourites}
          />
        )}
      </WindowScroller>
    );
  }
}

export default PlayerList;
