import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const view = () => {
    const {id} = useParams()
    const [brand, setBrand] = useState({})

    useEffect(() => {

        const fetchBrand = async() => {

            try{
                const response = await axios.get(`/api/brands/${id}`)
                setBrand(response.data)
            }catch(error){
                console.log(error)
            }

        }

        fetchBrand()

    }, [])
    
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>View Brand</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card p-2">
                                <div className="row ml-2">
                                    <div className="col-2">
                                        <p className="text-lg text-uppercase">Name :</p>
                                    </div>
                                    <div className="col-10">
                                        <p className="text-lg text-uppercase">{brand.name}</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default view;
