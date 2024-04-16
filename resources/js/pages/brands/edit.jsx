import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const edit = () => {

    const [name, setName] = useState('')
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const successNotify = (msg) => toast.success(msg);
    const errorNotify = (msg) => toast.error(msg);
    const {id} = useParams()

    useEffect(() => {

        const fetchBrand = async() => {

            try{
                const response = await axios.get(`/api/brands/${id}`)
                setName(response.data.name)
            }catch(error){
                console.log(error)
            }

        }
        fetchBrand()

    }, [])

    const handleEditBrand = async(e) => {

        e.preventDefault()

        try{
            const response = await axios.put(`/api/brands/${id}`, {name});
            successNotify(response.data.success)
            console.log(response)
            navigate('/brands')
        }catch(error){
            console.log(error)
            errorNotify('warning! there is an error')
        }

    }
  return (
    <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Edit Brands</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-primary">
                        <form onSubmit={handleEditBrand}>
                            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="name" autoComplete='off' />
                            </div>
                            </div>
                            <div className="card-footer text-right">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </div>
  )
}

export default edit