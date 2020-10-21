import React from 'react';
import Icon from "@mdi/react";
import { mdiImport } from "@mdi/js";

import clsx from 'clsx';

function ConnectionPoint({ direction, active }) {
  return(<div data-active={active} className={clsx("card_connection", direction && `card_connection--${direction}`)} />)
}

function Card () {
    const connections = {
      "top": false,
      "left": false,
      "right": false,
      "bottom": true,
    }
    return (
        <div className="card">
          <div className="card_header">
            <div className="card_header_data">
             <div className="card_header_title">Tweet publish</div>
              <div className="card_header_subtitle">on publish</div>
             </div>
            <Icon path={mdiImport} size={1.2} className={"icon--card"} />
          </div>
          { Object.entries(connections).map(([direction, active]) => (
            !active ? null : <ConnectionPoint key={direction} direction={direction} active={active} />
          ))}

        </div>
    );
}

export default Card;
