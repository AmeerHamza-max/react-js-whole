import React from "react";
// import { fetchInvPost } from "../../../Pages/FetchRQ";
import { useParams, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Fetchind = () => {
  const { id } = useParams();

  // Ensure fetchInvPost is used correctly inside queryFn
  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchInvPost(pageNumber), // Fix: Ensure it's a function reference
    
  });

  // Debugging logs
  console.log("Post Data:", post);
  console.log("Loading:", isLoading);
  console.log("Error:", isError, error);

  if (isLoading) return <p>Loading...</p>;
  if (isError || error) return <p>Error fetching data</p>;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px auto",
        width: "300px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      {post ? (
        <>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>ID: {post.id}</p>
          <h3 style={{ color: "#333" }}>Title: {post.title}</h3>
          <p style={{ color: "#555" }}>Body: {post.body}</p>
        </>
      ) : (
        <p>No Data Found</p>
      )}

      {/* Go Back Button */}
      <NavLink
        to="/rq" // Ensure this is your actual path
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        Go Back
      </NavLink>
    </div>
  );
};

export default Fetchind;
