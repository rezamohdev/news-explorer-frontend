import React, { useState, useEffect } from "react";
import './Loading.css';
import Nothingfound from "../Nothingfound/Nothingfound";
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
                    <div className='loading__spinner'></div>
                    <span className="loading__text">Searching for news...</span>
                </>
            ) : (
                <Nothingfound />
            )}
        </div>
    )
}
