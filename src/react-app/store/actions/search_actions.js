import FuzzySearch from "fuzzy-search";

const Actions = (store) => ({
  searchTasksByName: ({ tasks, searchResults }, text) => {
    const entries = Object.values(tasks);
    if (entries && entries.length) {
      if (text && text.length) {
        const searcher = new FuzzySearch(entries, ["name"], {
          sort: true,
          caseSensitive: false,
        });
        const results = searcher.search(text).map(({ id }) => id);
        return { searchResults: { ...searchResults, tasks: [...results] } };
      }
      // If input search is empty show everything
      return { searchResults: { ...searchResults, tasks: "show_all" } };
    }
  },
});

export default Actions;
