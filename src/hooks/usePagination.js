export const DOTS = "...";

function usePagination({currentPage,totalCount,pageSize}) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */
  let arr =[1]
  let totalPages = Math.ceil(totalCount/pageSize)

  if (currentPage == 1){
    if (totalPages>1){
      arr.push(2)
    }
    if (totalPages > 2){
      if (totalPages!=3){
        arr.push(3)
      }
      arr.push(DOTS)
    }
  } else if (currentPage == 2){
    arr.push(2)
    if (totalPages>2){
      arr.push(3)
      if (totalPages>3){
        arr.push(DOTS)
      }
    }
  } else if (currentPage == totalPages-1){
    arr.push(DOTS)
    arr.push(currentPage-1)
    arr.push(currentPage)

  } else if (currentPage == totalPages){
    arr.push(DOTS)
    arr.push(currentPage-2)
    arr.push(currentPage-1)
  } 
  
  else  {
    arr.push(DOTS)
    arr.push(currentPage-1)
    arr.push(currentPage)
    arr.push(currentPage+1)
    arr.push(DOTS)
  }

  if (totalPages != 1){
    arr.push(totalPages)
  }


  return arr;
}

export default usePagination;
