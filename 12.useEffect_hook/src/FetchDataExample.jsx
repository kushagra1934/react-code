import React, { useEffect, useState } from "react";
import User from "./User";
const URL = "https://jsonplaceholder.typicode.com/users";

//strict mode

//on component mount
//effect run
//cleanup function 
//effect run

function FetchDataExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      const response = await fetch(URL, { signal: signal });
      if (!(response.status >= 200 && response.status < 300)) {
        setIsError(true);
        setErrorMessage(response.status);
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setIsLoading(false);
    }
    fetchData();
    return () => {
      console.log("aborting request.....");
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Something went wrong: {errorMessage}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
}

export default FetchDataExample;
