import HOC from "./components/HOC";
import "./App.css";

function App({ value, val2 }) {
  //console.log(value);
  return (
    <>
      <div>
        <h1>User Information</h1>
        <div>
          <h3>UserId: {val2}</h3>
          <h3>Name: {value.name.toUpperCase()}</h3>
          <h3>Age: {value.age}</h3>
          <h3>City: {value.city.toUpperCase()}</h3>
        </div>
      </div>
    </>
  );
}

export default HOC(App);
