import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

function App() {
  return (
    <div style={{ margin: 0, padding: 0, overflowX: "hidden", width: "100vw" }}>
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}

export default App;
