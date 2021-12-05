import { Chat, QuestionAnswer } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="bottom">
                    Hope you enjoyed shopping with us,feel free to contact us in case of any discrepancies! We are here to help you in any matter. Happy Shopping and a good day to you:)
                </div>
                <div className="mt-3">
                    <span className="mr-2 footer-icons"><i className="fa fa-facebook" /></span> 
                    <span className="mr-2 footer-icons"><i className="fa fa-youtube" /></span>
                    <span className="mr-2 footer-icons"><i className="fa fa-twitter" /></span> 
                    <span className="mr-2 footer-icons"><i className="fa fa-instagram" /></span> 
                    <span className="mr-2 footer-icons"><i className="fa fa-envelope" /></span> 
                </div>
                <div className="footer-text mt-3">
                    <p className="mt-0 mb-0">Terms of Use • Privacy Policy</p>
                    <p className="mt-0 copyright text-muted">© Local Stocks</p>
                </div>
                <div className="chat">
                    <Link to="/faq"><QuestionAnswer /></Link>
                </div>
            </div>
        )
    }
}
