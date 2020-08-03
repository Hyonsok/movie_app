import React from "react";


class Detail extends React.Component {
    componentDidMount() { // componentDidMount second
        const { location, history } = this.props;
        if((location.state) === undefined) {
            history.push("/"); //go back to Home 
        }
    }
    render() { //render first
        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}
  
export default Detail;
