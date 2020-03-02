// import React, { Component } from "react";
import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import AddTripButton from "./dashboard"

class Index extends React.Component {
  json = {
    title: "Kollaborate Your Event",
    pages: [
      {
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "html",
                name: "income_intro",
                html:
                  "<article class='survey-intro text-center'>    <h1 class='intro__heading intro__heading--income title'>                     Kollab Your Next Event!              </h1>    <div class='intro__body wysiwyg'>       <p>In this section, you will be asked some of the details of your event to put your optimal vendor team together. Let's KOLLAB!</p>  </div> </article>"
              }
            ],
            name: "panel1"
          }
        ],
        name: "page0"
      },
      {
        title: "Set up your account",
        popupdescription:
          "We will not share this information with any third-party organization.",
        questions: [
          {
            type: "text",
            name: "email",
            isRequired: true,
            placeHolder: "something@email.com",
            title: "Email"
          },
          {
            type: "text",
            name: "password",
            inputType: "password",
            placeHolder: "Enter a password for your account",
            isRequired: true,
            title: "Password"
          }
        ]
      },
      {
        title: "What type of event are you planning?",
        popupdescription: "Select event type you plan on having?",
        questions: [
          {
            type: "dropdown",
            name: "category",
            title: "Event",
            hasOther: true,
            isRequired: true,
            popupdescription:
              "Select event type closest to description of desired event",
            choices: [
              "Party (Birthday, Sweet 16, Quinceañera, Bar Mitzvah, etc.)",
              "Wedding",
              "Charity",
              "Corporate",
              "Funeral"
            ]
          }
        ]
      },
      {
        title: "What type of vendor(s) do you need for your event?",
        popupdescription:
          "Select all programming languages you have been using for the last six months.",
        questions: [
          {
            type: "checkbox",
            name: "vendors",
            title: "Please select ALL that apply from the list",
            popupdescription: "Select vendor(s) you will need for the event",
            isRequired: true,
            choices: [
              "Event Planner",
              "Decorator",
              "Caterer",
              "Photographer",
              "DJ",
              "Host"
            ]
          }
        ]
      },
      {
        title: "What locale would you like to have your event?",
        popupdescription:
          "We will not share this information with any third-party organization.",
        questions: [
          {
            type: "dropdown",
            name: "state",
            title: "State you would like to have event",
            popupdescription: "Select state you wish to hold your event",
            isRequired: true,
            choices: [
              "Alabama",
              "Alaska",
              "American Samoa",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "District of Columbia",
              "Federated States of Micronesia",
              "Florida",
              "Georgia",
              "Guam",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Marshall Islands",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Northern Mariana Islands",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Palau",
              "Pennsylvania",
              "Puerto Rico",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virgin Island",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming"
            ]
          },
          {
            type: "text",
            name: "city",
            title: "Name of city you would like to have event",
            placeHolder: "Dallas",
          }
        ]
      },
      {
        title: "What's your price range?",
        popupdescription:
          "We will not share this information with any third-party organization.",
        questions: [
          {
            type: "dropdown",
            name: "priceRange",
            title: "Price Range",
            popupdescription: "Tell us what you charge.",
            isRequired: true,
            choices: [
              "Under $1000",
              "$1000 to $5000",
              "$5000 to $10,000",
              "$10,000 to $25,000",
              "$25,000 to $50,000",
              "$50,000 to $75,000",
              "Over $75000"
            ]
          }
        ]
      }
    ]
  };

  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
  }
  render() {
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        {this.state.isEmptyState && <AddTripButton addTrip={this.triggerAddTripState} />}

        {this.state.isAddTripState && <Survey.Survey model={model} onComplete={this.onComplete} />}
        {/* <Survey.Survey model={model} onComplete={this.onComplete} /> */}
      </div>
    );
  }
}

export default Index;