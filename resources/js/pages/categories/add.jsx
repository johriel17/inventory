import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const add = () => {

    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const successNotify = (msg) => toast.success(msg);
    const errorNotify = (msg) => toast.error(msg);

    const handleAddCategory = async(e) => {

        e.preventDefault()

        try{
            setErrors({})
            const response = await axios.post('/api/categories', {name});
            successNotify(response.data.success)
            navigate('/categories')
        }catch(error){
            const errorMsg = error.response.data
            setErrors(errorMsg.errors)
            errorNotify(`warning! ${errorMsg.message}`)
        }

    }
  return (
    <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Add Categories</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-primary">
                        <form onSubmit={handleAddCategory}>
                            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className={`form-control ${errors.name && 'error-input'}`} value={name} onChange={(e) => setName(e.target.value)} id="name" autoComplete='off' />
                                {errors.name && errors.name.map((msg, index) => (
                                    <span key={index} className='error-msg'>{msg}</span>
                                ))}
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

export default add