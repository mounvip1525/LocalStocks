import React from 'react'

export default function Title(props) {
    return (
        <div className="row">
            <div className="col-6 mx-auto my-1 text-center">
                <h1 className=" heading text-capitalize font-weight-bold">
                    {props.name} {props.title}
                </h1>
            </div>   
        </div>
    )
}
