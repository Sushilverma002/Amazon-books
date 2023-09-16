import React from "react";
import "./App.css";
function App() {
  return (
    <>
      {/* <div className="bestSeller">
        <div className="heading">
          <h1>Amazone Best Seller</h1>
        </div>
        <div className="masterClass">
          <div className="collectionBooks">
            <img src={"/image/daa.png"} alt="" />
            <h3>Algorithum</h3>
            <h4>Behroz A.forz</h4>
          </div>
          <div className="collectionBooks">
            <img src={"/image/eloquent_js.png"} alt="" />
            <h3>Eloquent</h3>
            <h4>Margin Haverbreak</h4>
          </div>
          <div className="collectionBooks">
            <img src={"/image/reactthirty.png"} alt="" />
            <h3>30Dayes Of React</h3>
            <h4>Full Stack</h4>
          </div>
        </div>
      </div> */}
      <Books/>
      <Books/>
      <Books/>
    </>
  );
}

const Books = () =>{
  return(
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => <img src="/image/daa.png" alt="book1" />
const Title = () =>{
  return (
    <h2>Book title</h2>
  );
};
const Author = () =>{
  return (
    <h4>Author Name</h4>
  );
};
export default App;
