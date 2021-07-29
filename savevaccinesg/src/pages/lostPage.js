import React from 'react'
import { Link } from 'react-router-dom'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'

//IMPORT IMAGE
import lost404 from '../images/lost.png'

export default function LostPage() {
    const username = localStorage.getItem("params")
    return (
        <div>
            <div className="lost-body">
                <Link to={"/dashboard/" + username}>
                    <div className="lost-message">
                        <img src={lost404} />
                    </div>
                </Link>
            </div>
            <MainFooter />
        </div>
    )
}
