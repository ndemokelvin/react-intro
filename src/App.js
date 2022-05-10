import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { users } from "./data";
import DisplayUsers from "./components/DisplayUsers";
import CreateUser from "./components/NewUser";

const App = () => {
  const [persons, setPersons] = useState(users);

  return (
    <div>
      <DisplayUsers persons={persons} name="Kelvin" school="Moringa" />
      <CreateUser users={persons} setUsers={setPersons} />
    </div>
  );
};

export default App;
