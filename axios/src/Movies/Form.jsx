import React, { useState } from "react";
import axios from "axios";

const Form = ({ data, setData }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      
      if (res.status === 201) {
        setData([...data, res.data]); // Add new post to state
        setFormData({ title: "", body: "" }); // Clear form fields
      }
    } catch (error) {
      console.log("Error adding post:", error);
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default Form;
