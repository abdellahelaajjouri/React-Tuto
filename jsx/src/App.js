// Importing Css file
// import "./Custom.css";

function App() {
  // Storing styles in data object
  const converted = {
    innerdiv: {
      textAlign: "center",
      margin: "auto",
      width: "60%",
      border: "3px solid black",
      backgroundColor: "#73ad21",
      padding: "70px 0",
    },
    outerdiv: { padding: "70px 0", backgroundColor: "red" },
  };

  // Storing Jsx element to variable
  const someDiv = <div style={{ backgroundColor: "white" }}> someText </div>;

  return (
    // Using inline Css for styling
    <div style={converted.outerdiv}>
      <div style={converted.innerdiv}>{someDiv}</div>
    </div>
  );
}

export default App;
