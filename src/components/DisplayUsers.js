import React from "react";

const UserCard = ({ user }) => {
  return <div>{user.name}</div>;
};

const DisplayUsers = (props) => {
  return (
    <div>
      {props.persons.map((person) => (
        <UserCard user={person} key={person.name} />
      ))}
    </div>
  );
};

export default DisplayUsers;
