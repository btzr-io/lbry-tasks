import React from 'react';
import Icon from "@mdi/react";
import clsx from 'clsx';
import CARD_TYPES  from "@app/constants/types.js";


function ConnectionPoint({ direction, active }) {
  return(<div data-active={active} className={clsx("card_connection", direction && `card_connection--${direction}`)} />)
}

function Card ({ type = "WAIT" }) {
    const connections = {
      "top": false,
      "left": false,
      "right": false,
      "bottom": true,
    }

    const { icon, color, title } = CARD_TYPES[type]


    return (
        <div className="card" data-color={color}>
          <div className="card_header">
            <div className="card_header_data">
             <div className="card_header_title">{title || "Task"}</div>
              <div className="card_header_subtitle">on publish</div>
             </div>
            <Icon path={icon} size={1.2} className={"icon--card"} />
          </div>
          { Object.entries(connections).map(([direction, active]) => (
            !active ? null : <ConnectionPoint key={direction} direction={direction} active={active} />
          ))}

        </div>
    );
}

export default Card;
