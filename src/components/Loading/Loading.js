import React, { useState, useEffect } from "react";
import './Loading.css';

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, []);
    return (
        <div className="loading">
            <div className='loading__spinner'></div>
            <span className="loading__text">Searching for news...</span>
        </div>
    )
}
