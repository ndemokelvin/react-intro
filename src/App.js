import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { users } from "./data";
import DisplayUsers from "./components/DisplayUsers";
import DisplayPosts from "./components/DisplayPosts";
import CreateUser from "./components/NewUser";

const App = () => {
  const [persons, setPersons] = useState(users);
  const [posts, setPosts] = useState([]);

  //dependency is empty it means it will run once after the first render
  // useEffect(() => {
  //   // fetch("https://api.github.com/users")
  //   //   .then((response) => response.json())
  //   //   .then((data) => {});

  //   const asyncActions = async () => {
  //     const response = await fetch("https://api.github.com/users");
  //     const users = await response.json();
  //     setGithubUsers(users);
  //   };
  //   asyncActions();
  // }, []);

  useEffect(() => {
    const asyncActions = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const responsePosts = await response.json();
        setPosts(responsePosts);
      } catch (error) {
        //TODO: log error to something like sentry
        throw new Error(error);
      }
    };

    //call the function
    asyncActions();
  }, []);

  return (
    <div>
      {/* <DisplayUsers persons={persons} name="Kelvin" school="Moringa" />
      <CreateUser users={persons} setUsers={setPersons} /> */}
      <DisplayPosts posts={posts} />
    </div>
  );
};

export default App;
