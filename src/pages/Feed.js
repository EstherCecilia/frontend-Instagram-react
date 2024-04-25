import React, { Component } from "react";
import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import {post} from "./Post.js"
import {addRecordingTag} from "../utils/mouseflow"

class Feed extends Component {
  render() {

    const addTagPost = (tag) => {
      console.log("UAU");
      addRecordingTag(tag);
    }

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

            <img src={more} alt="Descrição de imagem" />
          </header>

          <img src={post.foto} alt="Descrição de imagem" />
          <footer>
            <div className="actions">
              <img onClick={() => addTagPost(`cat-${Math.random() * 10}`)} src={like} alt="Descrição de imagem" />
              <img src={comment} alt="Descrição de imagem" />
              <img src={send} alt="Descrição de imagem" />
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
