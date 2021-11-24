import React from 'react'
import { Link } from 'react-router-dom'
import { OS_Header } from '../../Shared/OS_Header/OS_Header'

export const NotAdmin = () => {
    return (
        <div className="">
            <OS_Header/>
            <h1 className="text-center mt-5 text-danger">Opps !!!! You are not admin.</h1>
            <p className="text-center mt-2 text-succes+s">
                <Link style={{textDecoration: "none" }} to="/">Go back to home</Link>
            </p>
        </div>
    )
}
