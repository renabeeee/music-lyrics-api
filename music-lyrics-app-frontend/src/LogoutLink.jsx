import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div id="logout" className="logout_link">
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}
