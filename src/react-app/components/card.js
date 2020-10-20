import React from 'react';
import Icon from "@mdi/react";
import { mdiDog } from "@mdi/js";

console.info(Icon, mdiDog)

function Card () {
    return (
        <div className="card">
          <div className="card_header">
            <div className="card_title">Title</div>
            { /* }<Icon path={mdiDog} /> */ }
          </div>
          <div className="connection" />
        </div>
    );
}

export default Card;
