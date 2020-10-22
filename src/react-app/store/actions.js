import FuzzySearch from 'fuzzy-search';

const actions = (store) => ({
  searchTasksByTitle: ({tasks, searchResults }, text) => {
    const entries = Object.values(tasks);
    if (entries && entries.length) {
      const searcher = new FuzzySearch(entries, ['title'], { caseSensitive: false });
      const results = searcher.search(text).map(({id}) => id )
      return { searchResults: { ...searchResults, tasks: [...results] } }
    }
  },
})

export default actions;
