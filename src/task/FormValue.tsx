import React, { Component, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  date: string;
  time: string;
  session: string;
  submittedDate: string | null;
}

class FormValue extends Component<{}, FormData> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      session: "AM",
      submittedDate: null,
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTimeChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    this.setState({ time: value });
  }

  handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    this.setState({ date: value });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      submittedDate: this.state.date,
    });
  }

  render() {
    const { name, date, submittedDate, time, session } = this.state;

    // const formatDate = (dateString: string) => {
    //   if (!dateString) return "";
    //   const [year, month, date] = dateString.split("-");
    //   return `${date}/${month}/${year}/(${date})`;
    // };
    // const Day = (dateString: string) => {
    //   if (!dateString) return "";
    //   const [year, month, date] = dateString.split("-");
    //   return `${month}/${date}/${year}/(${month})`;
    // };

    // const Year = (dateString: string) => {
    //   if (!dateString) return "";
    //   const [year] = dateString.split("-");
    //   return `${year}`;
    // };

    const formatDate = (dateString: string) => {
      if (!dateString) return "";
      const [year, month, day] = dateString.split("-");
      const dateObj = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      );
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayOfWeek = days[dateObj.getDay()];
      return `${dayOfWeek}, ${day}/${month}/${year} (${day})`;
    };

    const Day = (dateString: string) => {
      if (!dateString) return "";
      const [year, month, day] = dateString.split("-");
      const dateObj = new Date(dateString);
      const monthday = dateObj.toLocaleString("default", { month: "long" });

      return `${month}/${day}/${year}(${month}) (${monthday})`;
    };

    const Year = (dateString: string) => {
      if (!dateString) return "";
      const [year] = dateString.split("-");
      const parsedYear = parseInt(year);
      if (
        (parsedYear % 4 === 0 && parsedYear % 100 !== 0) ||
        parsedYear % 400 === 0
      ) {
        return `${year} (Leap Year)`;
      } else {
        return `${year} (Not a Leap Year)`;
      }
    };
    const formattedTime = time ? `${time} ${session} ` : "";

    return (
      <div className="container mt-5">
        <div className="fields card">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="date">
                Date:
              </label>
              <input
                type="date"
                className="form-control "
                id="date"
                value={date}
                onChange={this.handleDateChange}
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Time:
              </label>
              <input
                type="time"
                className="form-control "
                id="time"
                value={time}
                onChange={this.handleTimeChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="container">
          {submittedDate && (
            <table className="mt-3 table table-striped table-bordered table-responsive">
              <thead>
                <tr>
                  <th>Name:</th>
                  <th>Date:</th>
                  <th>Month:</th>
                  <th>Year:</th>
                  <th>Time:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>{formatDate(date)}</td>
                  <td>{Day(date)}</td>
                  <td>{Year(date)}</td>
                  <td>{formattedTime}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default FormValue;

interface Data {
  Name_should: string;
  Number_should: number;
}

class Class_Data implements Data {
  Name_should: string;
  Number_should: number;
  constructor(Name_should: string, Number_should: number) {
    this.Name_should = Name_should;
    this.Number_should = Number_should;
  }
}
var k = new Class_Data("Bavya", 1);
console.log(k);
