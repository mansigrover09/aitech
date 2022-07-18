import React from 'react';
import DataTable from 'react-data-table-component';

import moment from 'moment'; // Example for onSort prop

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },

    {
        name: 'Customer',
        selector: row => row.customer,
        sortable: true,
    },
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    },

];

const data = [{id:1,customer:"Anthony Washington",title:"branding",email:"awashington0@cafepress.com",status:"Completed",date:"11/9/2015",price:"$387.15"},
{id:2,customer:"Antonio Wheeler",title:"logo design",email:"awheeler1@ehow.com",status:"Completed",date:"5/21/2015",price:"$278.47"},
{id:3,customer:"Victor Butler",title:"graphic design",email:"vbutler2@edublogs.org",status:"New",date:"10/28/2015",price:"$450.28"},
{id:4,customer:"Anne Cruz",title:"branding",email:"acruz3@yolasite.com",status:"Completed",date:"12/12/2014",price:"$434.28"},
{id:5,customer:"Jane Cook",title:"photoshop",email:"jcook4@examiner.com",status:"New",date:"2/13/2015",price:"$171.54"},
{id:6,customer:"Robert Hicks",title:"SEO and SEM",email:"rhicks5@state.gov",status:"Completed",date:"3/22/2015",price:"$423.79"},
{id:7,customer:"Marilyn Richards",title:"web design",email:"mrichards6@goodreads.com",status:"New",date:"9/14/2015",price:"$191.68"},
{id:8,customer:"Billy Cunningham",title:"php website",email:"bcunningham7@creativecommons.org",status:"New",date:"1/29/2015",price:"$316.71"},
{id:9,customer:"Helen Peterson",title:"logo design",email:"hpeterson8@angelfire.com",status:"Completed",date:"10/20/2015",price:"$107.12"},
{id:10,customer:"Jimmy Washington",title:"ecommerce service",email:"jwashington9@youku.com",status:"New",date:"5/2/2015",price:"$102.67"},
{id:11,customer:"Peter Holmes",title:"wordpress website",email:"pholmesa@t-online.de",status:"New",date:"1/14/2015",price:"$204.43"},
{id:12,customer:"Ann Hawkins",title:"SEO and SEM",email:"ahawkinsb@newyorker.com",status:"New",date:"2/22/2015",price:"$318.12"},
{id:13,customer:"Edward Brooks",title:"programming",email:"ebrooksc@netvibes.com",status:"Completed",date:"1/2/2015",price:"$106.20"},
{id:14,customer:"Kathleen Thompson",title:"branding",email:"kthompsond@123-reg.co.uk",status:"Completed",date:"12/15/2014",price:"$120.99"},
{id:15,customer:"Willie Torres",title:"graphic design",email:"wtorrese@hexun.com",status:"New",date:"1/29/2015",price:"$448.76"},
{id:16,customer:"Nicole Vasquez",title:"web design",email:"nvasquezf@redcross.org",status:"Completed",date:"12/2/2014",price:"$145.33"},
{id:17,customer:"Katherine Peterson",title:"graphic design",email:"kpetersong@t.co",status:"New",date:"9/13/2015",price:"$103.88"},
{id:18,customer:"Roy Porter",title:"photoshop",email:"rporterh@t-online.de",status:"Completed",date:"1/9/2015",price:"$444.87"},
{id:19,customer:"Phyllis Ward",title:"ecommerce service",email:"pwardi@chronoengine.com",status:"Completed",date:"5/18/2015",price:"$171.97"},
{id:20,customer:"Kathryn Watkins",title:"ecommerce service",email:"kwatkinsj@ow.ly",status:"Completed",date:"5/7/2015",price:"$497.40"},

];


const Invoices = () => {

    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">Invoices</h2>
            <div>


                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    pagination
                />

            </div>
        </>
    );
};

export default Invoices;