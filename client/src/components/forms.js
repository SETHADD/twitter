import React from "react";

export default function forms({ handlePost, forms }) {
  return (
    <div>
      <form>
        <input placeholder="Enter your id">ID</input>
        <input placeholder="Enter your username">Username</input>
        <input placeholder="How many trophies?">Trophy</input>
        <button type="button" onClick={handlePost}>
          submit
        </button>
      </form>
    </div>
  );
}
