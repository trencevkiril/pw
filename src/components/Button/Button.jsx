import React from 'react';
import "./Button.scss";

export default function Button({ title, fontSize, onClick, width }) {
  return (
    <div className="button" style={{ fontSize, width, marginTop: "1rem" }} onClick={onClick}>
      {title}
    </div>
  );
}