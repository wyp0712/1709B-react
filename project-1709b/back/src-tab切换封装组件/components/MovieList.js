import React from 'react';

class movieList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.movieData.map((item, ind) => {
            if (item.flag && this.props.tabIndex === 0) {
              return <li key={ind}>
                        <img className={ item.state ? 'img-border': ''} onClick={this.bindImgEvent.bind(this, ind)} src={item.img} alt=''/>
                        {item.name}
                      <hr></hr>
                    </li>
            } else if (!item.flag && this.props.tabIndex === 1) {
              return <li key={ind}>
                        <img className={ item.state ? 'img-border': ''} onClick={this.bindImgEvent.bind(this, ind)} src={item.img} alt=''/>
                        {item.name}
                      <hr></hr>
                    </li>
            } else {
              return null;
            }
          })
        }
      </ul>
    )
  }

  bindImgEvent(index) {
    const { imgEvent } = this.props;
    imgEvent(index)
  }
}

export default movieList;