import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from 'react';
import blogs from "../data/blogs.json";


const PAGE_SIZES = [15, 25, 50, 100];
const DEFAULT_ROWS_PER_PAGE = 15;

function BlogList() {
  const [currentPaginationData, setCurrentPaginationData] = useState(blogs.posts.slice(0, DEFAULT_ROWS_PER_PAGE));
  const [page,setPage] = useState(1)
  const [rowsPerPage,setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE)
  // const currentPaginationData = blogs.posts.slice(0, 15);

  const updateRowsPerPage = (val) => {
    setRowsPerPage(val)
    setPage(1)
    setCurrentPaginationData(blogs.posts.slice(0, val))
    // setCurrentPaginationData(blogs.posts.slice((page-1)*val, page*val))
  };
  const updatePage = (val) => {
    setPage(val);
    setCurrentPaginationData(blogs.posts.slice((val-1)*rowsPerPage, val*rowsPerPage));
  };

  return (
    <div>

      <Pagination
        currentPage={page}
        totalCount={blogs.posts.length}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
