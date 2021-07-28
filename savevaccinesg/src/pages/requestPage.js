import React from 'react'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

export default function RequestPage() {
    return (
        <div>
            <div className="dashboard-body">
                <MainNavbar />
            </div>
            <MainFooter />
        </div>
    )
}
