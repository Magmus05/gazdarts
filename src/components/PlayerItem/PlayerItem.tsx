import './PlayerItem.css'
type Props= {
itemNumber: number;
active?: boolean;
score: number;
}
export const PlayerItem = ({itemNumber, active, score}: Props) => {
  return (
      <div className={`player-item ${active && 'player-item_active'}`}>
          <div className="player-item__score">{score}</div>
          <div className="player-item__name">player {itemNumber}</div>
          <div className="player-item__mpr">MPR: 0.0</div>
        </div>
  )
}
