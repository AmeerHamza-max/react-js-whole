import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import "./FetchRQ.css";
import { useNavigate } from "react-router-dom";

// Function to fetch posts dynamically based on pageNumber
const getPostsData = async (pageNumber) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${pageNumber * 3}&_limit=3`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};

// Function to delete a post
const deletePost = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return id; // Return the deleted post ID
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("Failed to delete post");
  }
};

// Function to update a post
const updatePost = async ({ id, title }) => {
  try {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { title } // Only updating the title for simplicity
    );
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Failed to update post");
  }
};

const FetchRQ = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(0);
  const [editPostId, setEditPostId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  // Fetch posts using React Query with dynamic page number
  const { data: posts = [], isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => getPostsData(pageNumber),
    // keepPreviousData: true,
  });

  // Mutation for deleting a post
  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (id) => {
      await queryClient.cancelQueries(["posts", pageNumber]);

      const previousPosts = queryClient.getQueryData(["posts", pageNumber]);

      queryClient.setQueryData(["posts", pageNumber], (oldPosts) =>
        oldPosts ? oldPosts.filter((post) => post.id !== id) : []
      );

      return { previousPosts };
    },
    onError: (err, id, context) => {
      console.error("Delete failed:", err);
      queryClient.setQueryData(["posts", pageNumber], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["posts", pageNumber]);
    },
  });

  // Mutation for updating a post
  const updateMutation = useMutation({
    mutationFn: updatePost,
    onMutate: async ({ id, title }) => {
      await queryClient.cancelQueries(["posts", pageNumber]);

      const previousPosts = queryClient.getQueryData(["posts", pageNumber]);

      queryClient.setQueryData(["posts", pageNumber], (oldPosts) =>
        oldPosts
          ? oldPosts.map((post) =>
              post.id === id ? { ...post, title } : post
            )
          : []
      );

      return { previousPosts };
    },
    onError: (err, variables, context) => {
      console.error("Update failed:", err);
      queryClient.setQueryData(["posts", pageNumber], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["posts", pageNumber]);
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            {/* Only allow the card to navigate when "View" button is clicked */}
            <p>{post.id}</p>
            {editPostId === post.id ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={{ width: "100%", padding: "5px" }}
              />
            ) : (
              <h3>{post.title}</h3>
            )}
            <p>{post.body}</p>
            
            {/* Edit button triggers edit mode */}
            {editPostId === post.id ? (
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  updateMutation.mutate({ id: post.id, title: newTitle });
                  setEditPostId(null);
                }}
                style={{
                  backgroundColor: "green",
                  padding: "10px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  setEditPostId(post.id);
                  setNewTitle(post.title);
                }}
                style={{
                  backgroundColor: "orange",
                  padding: "10px",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginRight: "5px",
                }}
              >
                Edit
              </button>
            )}

            {/* View button to navigate to post details */}
            <button
              onClick={() => navigate(`/rq/${post.id}`)}
              style={{
                backgroundColor: "purple",
                padding: "10px",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              View
            </button>

            {/* Delete button */}
            <button
              onClick={() => deleteMutation.mutate(post.id)}
              style={{
                backgroundColor: "blue",
                padding: "10px",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: pageNumber === 0 ? "gray" : "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: pageNumber === 0 ? "not-allowed" : "pointer",
            margin: "5px",
          }}
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
          disabled={pageNumber === 0}
        >
          Previous
        </button>

        <h2 style={{ display: "inline-block", margin: "0 10px" }}>
          Page {pageNumber + 1}
        </h2>

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: posts.length < 3 ? "gray" : "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: posts.length < 3 ? "not-allowed" : "pointer",
            margin: "5px",
          }}
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={posts.length < 3}
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default FetchRQ;
