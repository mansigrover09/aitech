import React from 'react';
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },

    {
        name: 'Tag',
        selector: row => row.tag,
        sortable: true,
    },
    {
        name: 'Slug',
        selector: row => row.slug,
        sortable: true,
    },
   
    
    {
        name: 'Description',
        selector: row => row.description,
        sortable: true,
    },

];

const data = [
    { id: 1, tag: "Helen Banks", slug: "Brainlounge", description: "lorem lorem lorem"},
    { id: 2, tag: "Russell Wright", slug: "Trilith", description: "lorem lorem"},
    { id: 3, tag: "Phillip Franklin", slug: "Babbleopia", description: "lorem lorem" },
   
];
const Tags = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2 uppercase">Tags</h2>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-5">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

                    <div>
                        <form className="flex flex-col gap-4">
                            <div class="form-control w-full max-w-lg">
                                <label class="label">
                                    <span class="label-text">Tag</span>

                                </label>
                                <input type="text" class="input input-bordered w-full max-w-lg rounded-none shadow" />

                            </div>
                            <div class="form-control w-full max-w-lg">
                                <label class="label">
                                    <span class="label-text">Slug</span>

                                </label>
                                <input type="text" class="input input-bordered w-full max-w-lg rounded-none shadow" />

                            </div>



                            <div class="form-control w-full max-w-lg">
                                <label class="label">
                                    <span class="label-text">Description</span>

                                </label>
                                <textarea class="textarea textarea-bordered w-full max-w-lg rounded-none shadow"></textarea>

                            </div>



                            <button className="btn btn-primary max-w-lg rounded-none text-white">Save</button>
                        </form>
                    </div>
                    <div className="col-span-2 md:p-5">

                        <DataTable
                            columns={columns}
                            data={data}
                            selectableRows
                            pagination
                        />


                    </div>
                </div>

            </div>
        </>
    );
};

export default Tags;