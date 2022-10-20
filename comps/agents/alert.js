import React from "react";

export default function AlertSuccessful() {
  return (
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">
        &times;
      </span>
      <strong>Success!</strong> Agent was successfully added
    </div>
  );
}
