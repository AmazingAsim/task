import React from 'react'
import { Link } from 'react-router-dom'
import BuyersTable from '../Components/BuyersTable'
export default function Buyer() {
  return (
    <div className="flexboxmajor">
      <div className="flexitem p-3" id='buyermain'>
        <section>
          <h2>Buyer Meeting List View</h2>
          <nav style={{ '--bs-breadcrumb-divider': `'>>'` }} aria-label="breadcrumb" className="fw-bold">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
        </section>

        <section className="border rounded p-3 bg-light">


          <button type="button" class="btn bgpurplelight text-secondary fw-bold btn-lg">
            All <span class="badge bg-secondary mx-1 bgpurpledark">100</span>
          </button>
          <button type="button" class="btn bgpurplelight text-secondary fw-bold btn-lg">
            Draft <span class="badge  bg-secondary mx-1 bgpurpledark">50</span>
          </button>
          <button type="button" class="btn bgpurplelight text-secondary fw-bold btn-lg">
            Archive <span class="badge  bg-secondary mx-1 bgpurpledark">75</span>
          </button>


        </section>
        <section className="border rounded bg-light">
          <div className="p-3 d-flex gap-2 ">
            <input type="text" className="form-control w-25" placeholder="Search anything here ..." />
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Buyer Name
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Brand
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dept
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Meeting Type
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Partcipants
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Meeting Date
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Status
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
           
          </div>

          <div>
            <BuyersTable />
          </div>  
        </section>
      </div>

    </div>
  )
}
