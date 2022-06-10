import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetails.css'
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { name, img2, img3, client, server, live, description, feature, img, _id } = product;

    useEffect(() => {
        const url = `https://boiling-springs-72713.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])


    return (
        <div className='d px-3'>
            <h1 className='pro'> {name}</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 ">
                <div class="col">
                    <div class="card">
                        <img src={img} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..." />

                    </div>
                </div>

            </div>

            <div className='des'>
                <h5> <span className=' text-primary fs-2'> Feature:</span> {feature}</h5>
                <h5><span className=' text-primary fs-2'>Technology Use:</span> {description}</h5>
            </div>
            <div className='link'>
                <div>
                    <button><a className='text-white ' href={client} target="_blank" rel='noreferrer'>Client site</a></button>
                </div>

                <div>
                    <button className='mx-3'><a className='text-white ' href={server} target="_blank" rel='noreferrer'>Server site</a></button>
                </div>

                <div>
                    <button><a className='text-white ' href={live} target="_blank" rel='noreferrer'>live site</a></button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;