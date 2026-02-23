import "./Button.scss";

export default function Button({ title, fontSize, onClick, width, type = "button" }) {
  const handleClick = (e) => {
    if (type === "submit") {
      const form = e.target.closest("form");
      if (form) form.requestSubmit();
    }
    if (onClick) onClick(e);
  };

  return (
    <div className="button" style={{ fontSize, width, marginTop: "1rem" }} onClick={handleClick}>
      {title}
    </div>
  );
}