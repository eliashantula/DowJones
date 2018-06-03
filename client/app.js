import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

//import any other components here
import HelloWorld from "../src/helloworld";
import Article from "../src/article";

//import CSS here, so webpack knows to include in bundle
import style from "../client/style/main.css";

//this is the component that generates the body of the page
class App extends Component {
  constructor(props) {
    super(props);

    //default state
    //this keeps track of "live" data on the browser
    this.state = {
      articles: null,
      error: null,
      loaded: false,
      showSummaries: false
    };
    this.deleteArticle = this.deleteArticle.bind(this);
    this.addNotes = this.addNotes.bind(this);
  }

  componentDidMount() {
    //fetching data clientside
    fetch("/api/articles")
      .then(data => {
        return data.json();
      })
      .then(data => {
        //send data to our state
        //which will trigger render()
        this.setState({
          articles: data.items,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          error: error,
          loaded: true
        });
      });
  }

  //click handler for button
  deleteArticle(e) {
    e.preventDefault();
    console.log(e.target.value);
    let altered = [...this.state.articles];
    altered.splice(e.target.value, 1);
    this.setState({
      articles: altered
    });
  }

  addNotes(e) {
    e.preventDefault();
    let today = new Date().toISOString().slice(0, 10);
    let articlesupdated = [...this.state.articles];

    if (articlesupdated[e.target.textarea.id].notes == undefined) {
      articlesupdated[e.target.textarea.id].notes = [
        e.target.textarea.value + " "
      ];
    } else {
      articlesupdated[e.target.textarea.id].notes.push(
        e.target.textarea.value + " "
      );
    }
    this.setState({
      articles: articlesupdated
    });
  }

  render() {
    const { loaded, error, articles, showSummaries } = this.state;

    //  code above is equal to this:
    //  const loaded = this.state.loaded;
    //  const error = this.state.error;
    //  const articles = this.state.articles;

    if (error) {
      //render this when there's error getting data
      return <div>Sorry! Something went wrong</div>;
    } else if (!loaded) {
      //render while content is loading
      return <div>Loading...</div>;
    } else {
      //render articles

      // code above is equal to this:
      // for (let i = 0; i < articles.length; i++) {
      //   articleJSX.push(
      //     <Article key={i} headline={articles[i].headline}></Article>
      //   );
      // }

      return (
        <div style={{ backgroundColor: "black" }}>
          <div style={{ paddingBottom: "25px" }}>
            <HelloWorld />
          </div>
          <div style={{ paddingTop: "10%" }}>
            <Container style={{ padding: "5px" }}>
              <Row>
                {articles.map((article, idx) => {
                  return (
                    <Article
                      key={idx}
                      index={idx}
                      headline={article.headline}
                      summary={article.summary}
                      image={article.image}
                      fullArticle={article.share_link}
                      showSummary={showSummaries}
                      onClick={this.deleteArticle}
                      onSubmit={this.addNotes}
                      notes={article.notes}
                    />
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
      );
    }
  }
}

export default App;
