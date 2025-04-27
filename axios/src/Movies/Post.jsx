import React, { useEffect, useState } from "react";
import { deletePost, movieData } from "./FullApplication";
import "./Post.css";
import Form from "./Form"; // Ensure the correct path

const Post = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null); // Track which post is being edited
  const [editText, setEditText] = useState("");

  // Function to handle delete action
  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      
      // Correctly check the response status
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => curPost.id !== id);
        setData(newUpdatedPosts); // Update state only if successful
      }
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  // Function to enable editing mode
  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  // Function to save the edited post
  const handleSave = (id) => {
    const updatedPosts = data.map((post) =>
      post.id === id ? { ...post, title: editText } : post
    );
    setData(updatedPosts);
    setEditId(null); // Exit edit mode
  };

  // Fetch posts
  const fetchingData = async () => {
    try {
      const res = await movieData();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log("This is Error:", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <section>
        <Form data={data} setData={setData} />
      </section>
      <div>
        <section>
          <ul>
            {data.map((curEle) => (
              <li key={curEle.id}>
                {editId === curEle.id ? (
                  // Show input field when editing
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => handleSave(curEle.id)}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </>
                ) : (
                  // Show normal post when not editing
                  <>
                    <p>Title: {curEle.title}</p>
                    <p>Body: {curEle.body}</p>
                    <button onClick={() => handleEdit(curEle.id, curEle.title)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(curEle.id)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Post;
