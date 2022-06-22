import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";

const PAGE_SIZES = [15, 25, 50, 100];


blogs.posts.splice(1000, blogs.posts.length)
function BlogList() {
  
//useState variables set currentPage and pageSize with defaults. 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15)

//This logic essentially adds pageSize to current page number to ensure viewer sees the next set of blog posts rather than the same ones. 
  const currentPaginationData = blogs.posts.slice((currentPage - 1) * pageSize, ((currentPage - 1) * pageSize) + pageSize);

//On updating rows per page, sets pageSize state, and sets current page back to 1.
  const updateRowsPerPage = (updatedPageSize) => {
    setPageSize(updatedPageSize)
    setCurrentPage(1)
    };


  const updatePage = (updatedPageNumber) => {setCurrentPage(updatedPageNumber)};



  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
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
