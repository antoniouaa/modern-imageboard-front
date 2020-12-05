import React from "react";

import "./Styles.css";

export default function MakePost({ onFormPost }) {
  const URL = "https://modern-imageboard.herokuapp.com/newpost";

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    const [name, content, images] = event.target;
    name.value
      ? formData.append("name", name.value)
      : formData.append("name", "anon");
    if (images) {
      formData.append("images", [...images.files]);
    }
    formData.append("content", content.value);
    fetch(URL, {
      method: "POST",
      body: formData,
    }).then(() => {
      clearForm();
      onFormPost();
    });
  };

  const clearForm = () => {
    document.querySelector("#post-form").reset();
  };

  return (
    <div>
      <form
        id="post-form"
        className="Form"
        encType="multipart/form-data"
        onSubmit={handleFormSubmit}>
        <div className="Form-Text-Input">
          <h3 className="MakePost-Header">Make a new Post</h3>
          <input type="text" id="name" name="name" placeholder="Name" />
          <textarea
            className="Form-TextArea"
            rows="5"
            cols="40"
            id="content"
            placeholder="What's on your mind..."
            required
            name="content"></textarea>
          <input
            className="Form-Files"
            type="file"
            id="images"
            name="images[]"
            multiple
          />
        </div>
        <input className="Form-Button" type="submit" value="Post" />
      </form>
    </div>
  );
}
