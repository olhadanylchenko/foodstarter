function App() {
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return <div></div>;
}

export default App;
