import { Card, CardGroup, Media } from "react-bootstrap";
import "../styles/Cards.css";
function Cards() {
  const variant = "Dark";
  const arr = [1, 2, 3, 4];
  return (
    <>
      <CardGroup>
        <Card className="card" text="white" style={{ margin: "0.3rem" }}>
          <Card.Body className="about_card">
            <div className="mr-3 card_image card_image-keep" />

            <span className="about_text">
              Keep track of every film you’ve ever watched (or just start from
              the day you join)
            </span>
          </Card.Body>
        </Card>

        <Card className="card" text="white" style={{ margin: "0.3rem" }}>
          <Card.Body className="about_card">
            <div className="mr-3 card_image card_image-show" />

            <span className="about_text">
              Show some love for your favorite films, lists and reviews with a
              “like”
            </span>
          </Card.Body>
        </Card>

        <Card className="card" text="white" style={{ margin: "0.3rem" }}>
          <Card.Body className="about_card">
            <div className="mr-3 card_image card_image-write" />

            <span className="about_text">
              Write and share reviews, and follow friends and other members to
              read theirs
            </span>
          </Card.Body>
        </Card>
        {/* </CardGroup> */}

        {/* <CardGroup> */}
        <Card className="card" text="white" style={{ margin: "0.3rem" }}>
          <Card.Body className="about_card">
            <div className="mr-3 card_image card_image-rate" />

            <span className="about_text">
              Rate each film on a five-star scale (with halves) to record and
              share your reaction
            </span>
          </Card.Body>
        </Card>

        <Card className="card" text="white" style={{ margin: "0.3rem" }}>
          <Card.Body className="about_card">
            <div className="mr-3 card_image card_image-diary" />

            <span className="about_text">
              Keep a diary of your film watching (and upgrade to{" "}
              <strong>Pro</strong> for comprehensive stats)
            </span>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Cards;
