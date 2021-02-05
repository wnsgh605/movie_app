import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    if (this.props.location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    if (this.props.location.state) {
      const {
        location: {
          state: { year, title, summary, poster, genres },
        },
      } = this.props;
      return (
        <div className="movie-detail">
          <img src={poster} alt={title} title={title} />
          <div className="movie-detail__data">
            <h3 className="movie-detail__title">{title}</h3>
            <h5 className="movie-detail__year">{year}</h5>
            <ul className="movie-detail__genres">
              {genres.map((genre, index) => (
                <li key={index} className="detail__genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <p className="movie-detail__summary">{summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
