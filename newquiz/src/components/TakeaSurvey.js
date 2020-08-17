import React, { Component } from "react";
import { history } from "../History/history";

export class TakeaSurvey extends Component {
  routeToQuestion = () => {
    history.push("/Question");
    window.location.reload();
  };
  render() {
    //console.log(this.props)

    return (
      <React.Fragment>
        <div className="img">
          <div className="container">
            <div className="btnarea">
              <button
                type="button"
                className="btn btn-dark btn-lg"
                onClick={this.routeToQuestion}
              >
                Start the survey
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TakeaSurvey;
