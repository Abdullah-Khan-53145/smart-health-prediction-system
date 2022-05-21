import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignOutAPI } from "../actions";
import Header from "./patientComponents/Header";
function Patient(props) {
  // for navigation
  const navigate = useNavigate();
  // functions
  const handleSignOut = () => {
    props.signOut();
    navigate("/login-patient");
  };
  const { user } = props;
  return (
    <div>
      <Header user={user} />
      <h1>
        Patient module (dummy just to check that the login and register is
        working properly)
      </h1>
      <h2>USER Credentials</h2>
      {user ? (
        <>
          <p>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "2px solid gray",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src="https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg"
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "2px solid gray",
                }}
              />
            )}
          </p>
          <p>
            <b>Name:</b>
            {user.displayName}
          </p>
          <p>
            <b>Email:</b>
            {user.email}
          </p>
          <button onClick={handleSignOut}>sign out</button>
        </>
      ) : (
        <h2 style={{ color: "red" }}>User not signed in</h2>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
});
const dispatchStateToProps = (dispatch) => ({
  signOut: () => dispatch(SignOutAPI()),
});

export default connect(mapStateToProps, dispatchStateToProps)(Patient);
