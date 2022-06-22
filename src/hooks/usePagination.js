export const DOTS = "...";
//usePagination hook maps out logic for pagination display. Goes through a series of if statements to handle small
//numbers of pages manually, proceeding to 4 pages on up, which is all generated programatically. 
//Takes as parameters an object that containers totalCount of blog posts, pageSize (or number of results per page),
//and currentPage, and returns pagination array. 

function usePagination(pages) {
  const numPages = Math.ceil(pages.totalCount / pages.pageSize);
  const currentPageSibs = [
    pages.currentPage - 1,
    pages.currentPage,
    pages.currentPage + 1,
  ];

  if (pages.totalCount <= pages.pageSize) {
    return [1];
  }
  
  if (numPages === 2){
    return [1, 2]
  }

  if (numPages === 3){
    if (pages.currentPage === 1){
      return [1, 2, DOTS, 3]
    }
    else if (pages.currentPage  === 2){
      return [1, 2, 3]
    }
    else if (pages.currentPage === 3){
      return [1, DOTS, 2, 3]
    }
  }

  if (pages.currentPage === 1 || pages.currentPage === 2) {
    return [1, 2, 3, DOTS, numPages];
  }

  if (pages.currentPage === numPages || pages.currentPage === numPages - 1) {
    return [1, DOTS, numPages - 2, numPages - 1, numPages];
  }
  return [1, DOTS, ...currentPageSibs, DOTS, numPages];
}
export default usePagination;
