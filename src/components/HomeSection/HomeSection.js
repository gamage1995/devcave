import React, { Component } from "react";
import "./HomeSection.css";
import NavBar from "../NavBar/NavBar";
import TextLoop from "react-text-loop";

export default class HomeSection extends Component {
  render() {
    return (
      <div className="HScover">
        <NavBar />
        <div className="HStextCover">
          <TextLoop interval={5000}>
            <div>
              <p className="HStop">SIMPLIFIED</p>
              <p className="HSbottom">
                solutions<span className="HSbottomDot">.</span>
              </p>
            </div>
            <div>
              <p className="HStop">CUTTING EDGE</p>
              <p className="HSbottom">
                technologies<span className="HSbottomDot">.</span>
              </p>
            </div>
            <div>
              <p className="HStop">FUTURISTIC</p>
              <p className="HSbottom">
                products<span className="HSbottomDot">.</span>
              </p>
            </div>
          </TextLoop>
        </div>
      </div>
    );
  }
}
