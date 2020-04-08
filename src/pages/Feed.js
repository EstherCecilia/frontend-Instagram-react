import React, { Component } from "react";
import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import {post} from "./Post.js"

class Feed extends Component {
  render() {
    return (
      post().map(post =>
      <section id="post-list">
        <article>
          <header>
            <div
              className="user-info"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>{post.nome}</span>
              <span className="place">{post.cidade}</span>
            </div>

            <img src={more} />
          </header>

          <img src={post.foto} />
          <footer>
            <div className="actions">
              <img onClick={()=>console.log("UAU")}src={like} />
              <img src={comment} />
              <img src={send} />
            </div>
            <strong>{post.curtidas}</strong>
            <p>{post.texto}<span>#react</span>
              <span>#cat</span>
            </p>
          </footer>
        </article>
      </section>)
    );
  }
}

export default Feed;
