import React from "react";
<<<<<<< HEAD
import { useAuth0 } from "@auth0/auth0-react";
=======
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
>>>>>>> 633946a15bef039afe801e3447ac2e0d48619b25

const ProfilePage = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Palauk tevai</h1>;
  }

  const { name, picture, email } = user;

  return (
    <div>
<<<<<<< HEAD
      <img src={picture} alt="Profile" style={{ maxHeight: "100px" }} />
=======
      <img src={picture} alt="Profile picture" style={{ maxHeight: "100px" }} />
>>>>>>> 633946a15bef039afe801e3447ac2e0d48619b25
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
};

export default ProfilePage;
