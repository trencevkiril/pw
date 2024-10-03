import React from 'react';
import "./Button.scss";

export default function Button({ title, fontSize, onClick }) {
  return (
    <div className="button" style={{ fontSize }} onClick={onClick}>
      {title}
    </div>
  );
}