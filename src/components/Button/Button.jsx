import React from 'react';
import "./Button.scss";

export default function Button({ title, fontSize, onClick, width }) {
  return (
    <div className="button" style={{ fontSize, width }} onClick={onClick}>
      {title}
    </div>
  );
}