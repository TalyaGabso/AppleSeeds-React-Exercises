import React from 'react';
import './style.css'

class Box extends React.Component {
  constructor(props) {
    super(props)

    this.state = { changedClassName: '' }
  }
  componentDidMount() {
    this.setState({ changedClassName: "slide-in" })
    setTimeout(() => {
      this.setState({ changedClassName: "slide-out" })
    }, 4000)
  }

  render() {
    console.log("rendered")
    return (
      <div className={this.state.changedClassName}
        style={{
          width: this.props.widthSize,
          height: this.props.heightSize,
        }}>
      </div>
    )
  }
}
export default Box;
