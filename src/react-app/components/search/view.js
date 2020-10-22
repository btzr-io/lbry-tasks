import React from "react";
import Icon from "@mdi/react";
import { TASK_STATUS, TASK_STATUS_TYPES } from "@app/constants/types";
import { mdiPlusCircleOutline, mdiPlusCircle } from "@mdi/js";

function StatusButton({ status }) {
  const { icon, color } = TASK_STATUS_TYPES[status];
  return (
    <button className="button button--status">
      <Icon
        path={icon}
        data-color={color}
        size={1}
        className={"status_icon"}
        spin={status === TASK_STATUS.RUNING && 0.64}
      />
    </button>
  );
}

function AddItemButton() {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const handleHover = () => {
    setHover(true);
  };

  const handleNotHover = () => {
    setHover(false);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleNotFocus = () => {
    setFocus(false);
  };

  return (
    <button
      className="button button--add"
      onMouseEnter={handleHover}
      onFocus={handleFocus}
      onBlur={handleNotFocus}
      onMouseLeave={handleNotHover}
    >
      <Icon
        path={!hover && !focus ? mdiPlusCircleOutline : mdiPlusCircle}
        size={1.2}
        className={"icon--button"}
      />
    </button>
  );
}

function SearchResultItem({ title, status }) {
  return (
    <div className="panel_item" tabIndex={0}>
      <div className="item_data">
        <div className="item_title">
          <StatusButton status={status} />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

function SearchResults({ entries, results }) {
  const items = results === "show_all" ? Object.keys(entries) : results;
  return (
    <div className="panel_items">
      {items.map((id) => {
        const task = entries[id];
        if (task) {
          const { id, title, status } = task;
          return <SearchResultItem key={id} title={title} status={status} />;
        }
      })}
    </div>
  );
}

function SearchInput({ onChange }) {
  const [text, setText] = React.useState("");
  const [focus, setFocus] = React.useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setText(value);
    onChange(value);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div className={"search_input"} data-focus={focus}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
      />
    </div>
  );
}

function Search({ tasks, searchTasksByTitle, searchResults }) {
  return (
    <div>
      <div className="panel_header">
        <SearchInput onChange={searchTasksByTitle} />
        <AddItemButton />
      </div>
      <SearchResults entries={tasks} results={searchResults.tasks} />
    </div>
  );
}

export default Search;
