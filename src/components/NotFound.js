import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7 mx-auto text-center text-title text-uppercase pt-4 pb-4 notfound">
                        <h1 className="display-3">Error: 404 </h1>
                        <h3 className="divider-notfound">page not found</h3>
                        <p>the requested path{" "}"<span style={{color:"#d6bcb6"}}>{this.props.location.pathname}</span>"{" "}was not found</p>
                    </div>
                </div>
            </div>
        )
    }
}
