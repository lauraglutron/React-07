import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm";
import QuoteCard from "./components/QuoteCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuote: "",
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          newQuote: data[0],
        });
        console.log(this.state.newQuote);
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteForm />
        <QuoteList />
        <QuoteCard
          key={this.state.newQuote.quote}
          quote={this.state.newQuote.quote}
          image={this.state.newQuote.image}
          character={this.state.newQuote.character}
        />
        <button type="button" onClick={this.getQuote}>
          Get quote
        </button>
      </div>
    );
  }
}

export default App;
