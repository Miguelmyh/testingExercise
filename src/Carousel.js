import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  //Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx === total - 2) {
      // setCurrCardIdx(0);
      setCurrCardIdx(currCardIdx + 1);
      setRight("hidden");
    } else {
      setCurrCardIdx(currCardIdx + 1);
      setLeft("");
    }
  }

  function goBack() {
    if (currCardIdx > 1) {
      setCurrCardIdx(currCardIdx - 1);
      setRight("");
    } else {
      setCurrCardIdx(currCardIdx - 1);
      setLeft("hidden");
      // setCurrCardIdx(total - 1);
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i className={`bi bi-arrow-left-circle ${left}`} onClick={goBack} />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${right}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
