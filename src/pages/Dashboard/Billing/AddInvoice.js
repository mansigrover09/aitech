
import React from 'react';

const AddInvoice = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">Add new Invoice</h2>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2">

                <form className="flex flex-col gap-4">
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Invoice Number</span>

                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Date of Creation</span>

                        </label>
                        <input type="date" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Date Sent</span>

                        </label>
                        <input type="date" placeholder="dd/mm/yyyy" class="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Date Due</span>

                        </label>
                        <input type="date" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Category</span>

                        </label>
                        <select class="select select-bordered max-w-md rounded-none">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                      

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Status</span>

                        </label>
                        <select class="select select-bordered max-w-md rounded-none">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>New</option>
                         
                        </select>
                      

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Customer</span>

                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />
                      

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Product</span>

                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Price</span>

                        </label>
                        <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />
                      

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Tax</span>

                        </label>
                        <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />
                      

                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Discount</span>

                        </label>
                        <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-md rounded-none" />
                      

                    </div>
                    
                    <button className="btn btn-primary max-w-md text-white">Save</button>
                </form>


            </div>
        </>
    );
};

export default AddInvoice;