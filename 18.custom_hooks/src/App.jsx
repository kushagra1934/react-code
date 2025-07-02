import useFetch from "./hooks/useFetch";

//usually we fetch data using the useEffect hook and making a request to an api
//we can create a custom hook to fetch data from an api

function App() {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (isPending) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      {data &&
        data.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </>
  );
}

export default App;
