import React, { Component } from "react";
import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import cat from "../assets/cat.jpg";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div
              className="user-info"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>Esther Cecília</span>
              <span className="place">Belo Horizonte</span>
            </div>

            <img src={more} />
          </header>

          <img src={cat} />
          <footer>
            <div className="actions">
              <img src={like} />
              <img src={comment} />
              <img src={send} />
            </div>
            <strong>900 curtidas</strong>
            <p>
              Um post muito massa de um gatinho!<span>#react</span>
              <span>#cat</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="user-info"
            >
              <span>Esther Cecília</span>
              <span className="place">Belo Horizonte</span>
            </div>

            <img src={more} />
          </header>

          <img src={cat} />
          <footer>
            <div className="actions">
              <img src={like} />
              <img src={comment} />
              <img src={send} />
            </div>
            <strong>900 curtidas</strong>
            <p>
              Um post muito massa de um gatinho!<span>#react</span>
              <span>#cat</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
