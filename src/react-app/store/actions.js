import FuzzySearch from 'fuzzy-search';

const actions = (store) => ({
  searchTasksByTitle: ({tasks, searchResults }, text) => {
    if (tasks && tasks.length) {
      const searcher = new FuzzySearch(tasks, ['title'], { caseSensitive: false });
      const results = searcher.search(text);
      console.info(results, text)
      return { searchResults: { ...searchResults, tasks: [...results] } }
    }
  },
})

export default actions;
