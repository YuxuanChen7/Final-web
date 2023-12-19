import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatFact = () => {
    const [catImages, setCatImages] = useState([]);
    const apiKey = 'live_8ZTQjwe6JW4GoxtGmO4qfhwQGZOVuv6MJiwz9hmoiBb2C1J7hnsu2DvQBa4Qdg3m';

    useEffect(() => {
        const fetchCatImages = async () => {
            try {
                const endpoint = 'https://api.thecatapi.com/v1/images/search';
                const response = await axios.get(endpoint, { 
                    headers: { 'x-api-key': apiKey },
                    params: { limit: 10 }
                });
                setCatImages(response.data);
            } catch (error) {
                console.error(`Error: ${error.response ? error.response.status : error.message}`);
            }
        };

        fetchCatImages();
    }, []);

    return (
        <div>
            <h1>Cat Images</h1>
            <div>
                {catImages.map((image, index) => (
                    <div key={index}>
                        <img src={image.url} alt="Cat" style={{ width: '100px', height: '100px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatFact;
