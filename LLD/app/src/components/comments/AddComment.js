import React, { useState } from "react";

const AddComment = ({ onAdd }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    onAdd(comment);
    setComment("");
  };

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post a comment.."
          className="bg-gray-200 px-3 h-9 rounded w-64"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className={`text-sm bg-purple-700 text-purple-100 px-4 h-9 rounded ml-2 hover:bg-purple-800`}
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
