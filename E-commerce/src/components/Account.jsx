import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Account() {
  const { user } = useContext(UserContext);

  return (
    <div
      id="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
        width: "auto",
        height: "20px",
        backgroundColor: "black",
        padding: "10px 0px",
      }}
    >
      {user.isLogin ? (
        <p style={{ color: "#969696" }}>
          Welcome
          <span style={{ color: "#e3e3e3", paddingLeft: "10px", fontSize: "18px" }}>
            "{user.email}"
          </span>
        </p>
      ) : (
        <p style={{ color: "#CCCCCC" }}>Create your Account</p>
      )}
    </div>
  );
}

export default Account;
