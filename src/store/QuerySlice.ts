import { createSlice } from '@reduxjs/toolkit';

interface QueryState {
  // The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub.

  // rails language:javascript matches repositories with the word "rails" that are written in JavaScript.
  ex: `repogitoryname language: javascript `;
  q: string;

  // Sorts the results of your query by number of stars, forks, or help-wanted-issues or how recently the items were updated.
  // Default: best match
  // Can be one of: stars, forks, help - wanted - issues, updated
  sort: string;

  // Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide sort.
  // Default: desc
  order: string;

  // The number of results per page (max 100). Default: 30
  per_page: number;

  // Page number of the results to fetch. Default: 1
  page: number;
}

// if I want to find repogitory filter query, the query form is
const params = {
  q: `repogitory_name language: javascript`,
  sort: `best match`,
  order: `desc`,
  per_page: 30,
  page: 1,
};
