import React from "react";
import "./App.css";

// const title = "ram ram ji";
// const author = "sushil ";
// const images = "/image/daa.png";

// set up for dyanmically provide data
// const firstBook = {
//   title: "Algorithum",
//   author: "Behroz A.forz",
//   images: "/image/daa.png",
//   id:1,
// };
// const secondBook = {
//   title: "Eloquent",
//   author: "Margin Haverbreak",
//   images: "/image/eloquent_js.png",
//   id:2,
// };

// const thirdBook = {
//   title: "30Dayes Of React",
//   author: "Full Stack",
//   images: "/image/reactthirty.png",
//   id:3,
// };
const books = [
  {
    title: "Algorithum",
    author: "Behroz A.forz",
    images: "/image/daa.png",
    id: 1,
  },
  {
    title: "Eloquent",
    author: "Margin Haverbreak",
    images: "/image/eloquent_js.png",
    id: 2,
  },

  {
    title: "30Dayes Of React",
    author: "Full Stack",
    images: "/image/reactthirty.png",
    id: 3,
  },
];
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
      {/* <h1 className="heading">Amazone Best Book Seller</h1>
      <section className="booklist">
        <Books
          title={firstBook.title}
          author={firstBook.author}
          images={firstBook.images}
        >
          <button>ram</button>
        </Books>
        <Books
          title={secondBook.title}
          author={secondBook.author}
          images={secondBook.images}
        />
        <Books
          title={thirdBook.title}
          author={thirdBook.author}
          images={thirdBook.images}
        />
      </section> */}
      <section className="booklist">
        <EventExample />
        {books.map((books) => {
          return <Books {...books} key={books.id} />;
        })}
      </section>
    </>
  );
}

//Event basics
const EventExample = () => {
  const handelInputFrom = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log("handle input form");
  };
  const handelOnclick = () => {
    alert("handel button");
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("form submission");
  };
  return (
    <section>
      <form onSubmit={handleSubmission}>
        <h2>Typical Forms</h2>
        <input
          type="text"
          name="example"
          onChange={handelInputFrom}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handelOnclick}>click me</button>
    </section>
  );
};

// METHOD 3 FOR PROPS SO  you can directly provide the props to function.
// const Boooks = ({title , images , author}) => {} after that console.log will not redefined

//childrens
const Books = (props) => {
  const { title, images, author, childern } = props;
  console.log(props);
  return (
    // multiple method of accessing props
    // const {title , images, author} = props;
    <article className="book">
      {/* <Image />
      <Title />
      <Author /> */}
      {/* <img src={props.images} alt="book1" />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
      {childern} */}
      {/* second method for props */}
      {childern}
      <img src={images} alt="book1" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

// const Image = () => <img className="" src="/image/daa.png" alt="book1" />;
// const Title = () => {
//   return <h2>Book title</h2>;
// };
// const Author = () => {
//   return <h4>Author Name</h4>;
// };
export default App;
