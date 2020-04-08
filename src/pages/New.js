import React, { Component } from "react";
import "./New.css";

class New extends Component {
  handleChange = (e) => {
      alert("Dados inseridos com sucesso!")
  };

  render() {
    return (
      <form id="new-post">
        <input type="file" />

        <input type="text" name="author" placeholder="Autor do post" />

        <input type="text" name="place" placeholder="local do post" />

        <input type="text" name="description" placeholder="Descrição do post" />

        <input type="text" name="hashtags" placeholder="Hashtags do post" />

        <button type="submit" onClick={this.handleChange}>
          Enviar
        </button>
      </form>
    );
  }
}

export default New;
