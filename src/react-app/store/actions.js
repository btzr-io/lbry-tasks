import FuzzySearch from "fuzzy-search";
import { UniqueID } from "@app/utils";
import { TASK_STATUS } from "@app/constants/types";
const actions = (store) => ({
  searchTasksByTitle: ({ tasks, searchResults }, text) => {
    const entries = Object.values(tasks);
    if (entries && entries.length) {
      if (text && text.length) {
        const searcher = new FuzzySearch(entries, ["title"], {
          caseSensitive: false,
        });
        const results = searcher.search(text).map(({ id }) => id);
        return { searchResults: { ...searchResults, tasks: [...results] } };
      }
      // If input search is empty show everything
      return { searchResults: { ...searchResults, tasks: "show_all" } };
    }
  },

  createNewTask({ tasks }, title = "New task") {
    const task = {
      title,
      id: UniqueID(),
      status: TASK_STATUS.INACTIVE,
    };
    return { tasks: { ...tasks, [task.id]: task } };
  },
});

export default actions;
