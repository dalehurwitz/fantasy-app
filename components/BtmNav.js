import { h } from "preact";

const positions = [
  { label: "All", value: "" },
  { label: "QB", value: "QB" },
  { label: "RB", value: "RB" },
  { label: "WR", value: "WR" },
  { label: "TE", value: "TE" },
  { label: "K", value: "K" },
  { label: "DEF", value: "DEF" }
];

const BtmNav = props => (
  <nav className="btm-nav">
    <div className="btm-nav__positions">
      {positions.map(pos => {
        const className = [
          "btm-nav__btn-pos",
          pos.value === props.pos ? "btm-nav__btn-pos--active" : ""
        ]
          .join(" ")
          .trim();
        return (
          <button
            className={className}
            data-pos={pos.value}
            onClick={props.changePos}
          >
            {pos.label}
          </button>
        );
      })}
    </div>
    <button class="btm-nav__search-toggle">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="#323232"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
    </button>
    <button className="btm-nav__menu" onClick={props.showSplash} />
    <div class="btm-nav__search-container">
      <form>
        <input
          class="btm-nav__search-input"
          type="text"
          placeholder="Search..."
        />
      </form>
    </div>
  </nav>
);

export default BtmNav;
