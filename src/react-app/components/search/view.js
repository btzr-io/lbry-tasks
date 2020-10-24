import React from "react";
import Icon from "@mdi/react";
import CreationMenu from "@app/components/creationMenu";
import { TASK_STATUS, TASK_STATUS_TYPES } from "@app/constants/types";

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

function SearchResultItem({ name, status }) {
  return (
    <div className="panel_item" tabIndex={0}>
      <div className="item_data">
        <div className="item_title">
          <StatusButton status={status} />
          <span>{name}</span>
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
        const item = entries[id];
        if (item) {
          const { id, ...itemData } = item;
          return <SearchResultItem key={id} {...itemData} />;
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
        <CreationMenu />
      </div>
      <SearchResults entries={tasks} results={searchResults.tasks} />
    </div>
  );
}

export default Search;
