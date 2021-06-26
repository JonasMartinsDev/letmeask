import copyImg from "../../assets/images/copy.svg";

import "./styles.scss";

export function RoomCode() {
  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #300000000333333</span>
    </button>
  );
}
