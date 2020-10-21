import React from 'react';
import Icon from "@mdi/react";
import { mdiImport } from "@mdi/js";


function Card () {
    return (
        <div className="card">
          <div className="card_header">
            <div className="card_header_data">
             <div className="card_header_title">Tweet publish</div>
              <div className="card_header_subtitle">on publish</div>
             </div>
            <Icon path={mdiImport} size={1.2} className={"icon--card"} />
          </div>
          <div className="connection" />
        </div>
    );
}

export default Card;
