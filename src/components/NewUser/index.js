import React, { useState } from "react";

const CreateUser = (props) => {
  const { setUsers } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      age,
    };
    const newUsers = [...props.users, user];
    setUsers(newUsers);
    setAge("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <input value={age} onChange={(event) => setAge(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
