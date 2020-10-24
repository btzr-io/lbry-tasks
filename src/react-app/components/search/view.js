import React from "react";
import TaskMenu from "@app/components/taskMenu";
import TaskStatusButton from "@app/components/taskStatusButton";
import CreationMenu from "@app/components/creationMenu";

function SearchResultItem({ id, name, status }) {
  return (
    <div className="panel_item" tabIndex={0}>
      <div className="item_data">
        <div className="item_title">
          <TaskStatusButton id={id} status={status} />
          <span>{name}</span>
        </div>
        <TaskMenu id={id} />
      </div>
    </div>
  );
}

function SearchResults({ entries, results }) {
  const items = results === "show_all" ? Object.keys(entries) : results;
  return (
    <div className="panel_items">
      {items.map((id) => {
        const itemData = entries[id];
        if (itemData) {
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

function Search({ tasks, searchTasksByName, searchResults }) {
  return (
    <div>
      <div className="panel_header">
        <SearchInput onChange={searchTasksByName} />
        <CreationMenu />
      </div>
      <SearchResults entries={tasks} results={searchResults.tasks} />
    </div>
  );
}

export default Search;
