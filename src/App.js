import React from "react";
import ReactCardSlider from "./slider";

function App() {
  const slides = [
    {
      image: "https://mohitvaswani.netlify.app/images/jobsearch.png",
      title: "First Website",
      description: "This is a 1st description",
      link: "1"
    },
    {
      image: "https://mohitvaswani.netlify.app/images/Movie.png",
      title: "Second Website",
      description: "This is a 2nd description",
      link: "2"
    },
    {
      image: "https://mohitvaswani.netlify.app/images/text.png",
      title: "Third Website",
      description: "This is a 3rd description",
      link: "3"
    },
    {
      image: "https://mohitvaswani.netlify.app/images/grocery.png",
      title: "Fourth Website",
      description: "This is a 4th description",
      link: "4"
    },
    {
      image: "https://mohitvaswani.netlify.app/images/podcast.png",
      title: "Fifth Website",
      description: "This is a 5th description",
      link: "5"
    },
    {
      image: "https://mohitvaswani.netlify.app/images/1.png",
      title: "Sixth Website",
      description: "This is a 6th description",
      link: "6"
    },
    {
      image: "https://mohitvaswani.netlify.app/images/text.png",
      title: "Seventh Website",
      description: "This is a 7th description",
      link: "7"
    }
  ];

  return (
    <div className="slider">
      <h1>Here are some amazing projects that I have made.</h1>
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default App;
