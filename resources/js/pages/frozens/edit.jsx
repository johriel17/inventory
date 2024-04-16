import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const edit = () => {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        amount: "",
        error: {}
      });
    
    // const { name, description, amount, error } = formData;
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const navigate = useNavigate()
    const successNotify = (msg) => toast.success(msg);
    const errorNotify = (msg) => toast.error(msg);
    const {id} = useParams()

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');

    // Update handleChange function to handle changes in the select inputs
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        if (name === 'category') {
            setSelectedCategory(value);
        } else if (name === 'brand') {
            setSelectedBrand(value);
        }
    };

    useEffect(() => {

        const fetchFrozen = async() => {

            try{
                const response = await axios.get(`/api/frozens/${id}`);
                console.log(response)
                setFormData({
                    ...formData,
                    name: response.data.name,
                    description : response.data.description,
                    amount : response.data.amount
                })
                setSelectedCategory(response.data.category_id)
                setSelectedBrand(response.data.brand_id)

            }catch(error){
                console.log(error)
            }

        }

        const selectCategories = async() => {
            try{
                const response = await axios.get(`/api/select?type=${'all-categories'}`);
                setCategories(response.data)
            }catch(error){
                console.log(error)
            }
        }
        const selectBrands = async() => {
            try{
                const response = await axios.get(`/api/select?type=${'all-brands'}`);
                setBrands(response.data)
            }catch(error){
                console.log(error)
            }
        }

        selectCategories();
        selectBrands();
        fetchFrozen();

    },[])

    const handleEditFrozen = async(e) => {

        e.preventDefault()

        try{
            const response = await axios.put(`/api/frozens/${id}`, {...formData, category_id : selectedCategory, brand_id : selectedBrand});
            successNotify(response.data.success)
            navigate('/frozens')
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
                            <h1>Edit Frozens</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-primary">
                        <form onSubmit={handleEditFrozen}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 form-group">
                                    <label htmlFor="name">Name</label>
                                    <input id='name' name='name' value={formData.name} onChange={handleChange} type="text" className="form-control" autoComplete='off' />
                                    </div>
                                    <div className="col-6 form-group">
                                    <label htmlFor="description">Description</label>
                                    <input id='description' name='description' value={formData.description} onChange={handleChange} type="text" className="form-control" autoComplete='off' />
                                    </div>
                                    <div className="col-6 form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input id='amount' name='amount' value={formData.amount} onChange={handleChange} type="text" className="form-control" autoComplete='off' />
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select name='category' value={selectedCategory} onChange={handleSelectChange} className="form-control">
                                            <option value="">Select Category</option>
                                            {categories && categories.map((category) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Brand</label>
                                            <select name='brand' value={selectedBrand} onChange={handleSelectChange} className="form-control">
                                            <option value="">Select Brand</option>
                                            {brands && brands.map((brand) => (
                                                <option key={brand.id} value={brand.id}>{brand.name}</option>
                                            ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-right">
                            <button type="submit" className="btn btn-primary">Update</button>
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