import React from 'react';
import Icon from "@mdi/react";
import { TASK_STATUS, TASK_STATUS_TYPES } from '@app/constants/types';


function SearchResultItem({title, status}) {
  const { icon, color } = TASK_STATUS_TYPES[status]
  return(
    <div className="panel_item" tabIndex={0}>
      <div className="item_data">
        <div className="item_title">
         <Icon path={icon} data-color={color} size={1} className={"status_icon"} spin={status === TASK_STATUS.RUNING && 0.64} />
         <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

function SearchResults({ results }) {
  return (
    <div className="panel_items">
     { results.tasks.map(({title, status }) => <SearchResultItem key={title} title={title} status={status} />) }
    </div>
  )
}

function SearchInput({ onChange }) {
  const [text, setText] = React.useState('');
  const [focus, setFocus] = React.useState(false);

  const handleInputChange = event => {
    const value = event.target.value;
    setText(value);
    onChange(value);
  }

  const handleFocus = () => {
    setFocus(true);
  }

  const handleBlur = () => {
    setFocus(false)
  }

  return (
    <div className={"search_input"} data-focus={focus}>
     <input type="text" value={text} onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="Search..."/>
    </div>
  )
}

function Search({ searchTasksByTitle, searchResults }) {
  return (
    <div>
      <SearchInput onChange={searchTasksByTitle} />
      <SearchResults results={searchResults} />
    </div>
  )
}

export default Search;
