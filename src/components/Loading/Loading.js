import React, { useState, useEffect } from "react";
import './Loading.css';
const magPicture = require('../../images/not-found_v1.png');
export default function Loading() {
    const [loading, setLoading] = useState(true);

    const result = false;

    useEffect(() => {
        setLoading(true);
    }, []);
    return (
        <div className="loading">
            {result == true ? (
                <>

                    <img className="loading__image" src={magPicture} alt="not found" />
                    <h4 className="loading__title">Nothing found</h4>
                    <span className="loading__text">Sorry, but nothing matched
                        your search terms.</span>

                </>
            ) : (
                <>
                    <div className='loading__spinner'></div>
                    <span className="loading__text">Searching for news...</span>
                </>
            )}
        </div>
    )
}
