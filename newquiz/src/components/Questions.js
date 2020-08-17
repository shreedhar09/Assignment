import React, { Component } from "react";
import { history } from "../History/history";

export class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayToStoredata: 1 //Took arrayToStoredata 1 because Fetched Data "id" starts from 1
    };
  }

  next = () => {
    this.setState({ arrayToStoredata: this.state.arrayToStoredata + 1 });
  };

  submit = () => {
    alert("Thank You");
    history.push("/Survey");
    window.location.reload();
  };

  render() {
    //console.log(this.props)
    if (this.state.arrayToStoredata < 10) {
      return this.props.QuestionData.map(data => {
        if (this.state.arrayToStoredata === data.id) {
          return (
            <React.Fragment key={data.id}>
              <div className="BG">
                <div className="container" style={{ paddingTop: "40px" }}>
                  <h1>
                    {/* {console.log(typeof this.state.arrayToStoredata)} */}
                    {data.title}
                  </h1>
                  <p>
                    {data.description}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.next}
                  >
                    Next Question
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        }
      });
    } else {
      return this.props.QuestionData.map(data => {
        if (this.state.arrayToStoredata === 10 && data.id === 10) {
          return (
            <React.Fragment key={data.id}>
              <div className="BG">
                <div className="container" style={{ paddingTop: "40px" }}>
                  <h1>
                    {/* {console.log(typeof this.state.arrayToStoredata)} */}
                    {data.title}
                  </h1>
                  <p>
                    {data.description}
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={this.submit}
                    style={{ marginTop: "100px", marginLeft: "500px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        }
      });
    }
  }
}

export default Questions;
