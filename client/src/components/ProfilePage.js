import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Palauk tevai</h1>;
  }

  const { name, picture, email } = user;

  return (
    <div>
      <img src={picture} alt="Profile picture" style={{ maxHeight: "100px" }} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
};

export default ProfilePage;
