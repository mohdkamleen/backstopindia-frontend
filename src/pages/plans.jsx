import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Terms = () => {
  const navigate = useNavigate()
  const plans = useSelector(state => state.plans)
  return (
    <>
      <Navbar />
      <div className='px-5 plans-section'>
        <h4 className='text-light'> Plans for android users <Button size="sm" >Apply</Button></h4>


        <div className='d-flex flex-wrap gap-5'>
          <div>
            <h5 className={plans.os === "Android" && plans.range === "20k" ? "text-danger" : ""}>Phone range upto ₹ 19,999/-</h5>
            <Table style={{ maxWidth: "400px" }} className={plans.os === "Android" && plans.range === "20k" ? "active-table text-center" : "text-center"} responsive bordered size="sm" variant='dark'>
              <thead>
                <tr>
                  <th>Plans</th>
                  <th>Duration</th>
                  <th>Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>₹ 99</td>
                  <td>1 month</td>
                  <td>28 days</td> 
                </tr>
                <tr>
                  <td>₹ 189</td>
                  <td>2 month</td>
                  <td>56 days</td> 
                </tr>
                <tr>
                  <td>₹ 279</td>
                  <td>3 month</td>
                  <td>84 days</td> 
                </tr>
                <tr>
                  <td>₹ 469</td>
                  <td>4 month</td>
                  <td>112 days</td> 
                </tr>
                <tr>
                  <td>₹ 549</td>
                  <td>6 month</td>
                  <td>168 days</td> 
                </tr>
              </tbody>
            </Table>
          </div>

          <div>
            <h5 className={plans.os === "Android" && plans.range === "20kto40k" ? "text-danger" : ""}>Phone range ₹ 20,000 to 39,999/-</h5>
            <Table style={{ maxWidth: "400px" }} className={plans.os === "Android" && plans.range === "20kto40k" ? "active-table text-center" : "text-center"} responsive bordered size="sm" variant='dark'>
              <thead>
                <tr>
                  <th>Plans</th>
                  <th>Duration</th>
                  <th>Days</th> 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>₹ 299</td>
                  <td>1 month</td>
                  <td>28 days</td> 
                </tr>
                <tr>
                  <td>₹ 544</td>
                  <td>2 month</td>
                  <td>56 days</td> 
                </tr>
                <tr>
                  <td>₹ 899</td>
                  <td>3 month</td>
                  <td>84 days</td> 
                </tr>
                <tr>
                  <td>₹ 1111</td>
                  <td>4 month</td>
                  <td>112 days</td> 
                </tr>
                <tr>
                  <td>₹ 1599</td>
                  <td>6 month</td>
                  <td>168 days</td> 
                </tr>
              </tbody>
            </Table>
          </div>
          

          </div>
          <br />


          <h4 className='text-light'> Plans for iPhone users </h4>

          <div className='d-flex flex-wrap gap-5'>
            <div>
              <h5 className={plans.os === "iPhone" && plans.range === "50kto100k" ? "text-danger" : ""}>Phone range ₹ 50,000 to 1,00,000/-</h5>
              <Table style={{ maxWidth: "400px" }} className={plans.os === "iPhone" && plans.range === "50kto100k" ? "active-table text-center" : "text-center"} responsive bordered size="sm" variant='dark'>
                <thead>
                  <tr>
                    <th>Plans</th>
                    <th>Duration</th>
                    <th>Days</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>₹ 1999</td>
                    <td>2 month</td>
                    <td>56 days</td>
                  </tr>
                  <tr>
                    <td>₹ 3789</td>
                    <td>4 month</td>
                    <td>112 days</td>
                  </tr>
                  <tr>
                    <td>₹ 5599</td>
                    <td>6 month</td>
                    <td>168 days</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div>
              <h5 className={plans.os === "iPhone" && plans.range === "100k" ? "text-danger" : ""}>Phone range above ₹ 1,00,000/-</h5>
              <Table style={{ maxWidth: "400px" }} className={plans.os === "iPhone" && plans.range === "100k" ? 'text-center active-table' : "text-center"} responsive bordered size="sm" variant='dark'>
                <thead>
                  <tr>
                    <th>Plans</th>
                    <th>Duration</th>
                    <th>Days</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>₹ 2999</td>
                    <td>2 month</td>
                    <td>56 days</td>
                  </tr>
                  <tr>
                    <td>₹ 5699</td>
                    <td>4 month</td>
                    <td>112 days</td>
                  </tr>
                  <tr>
                    <td>₹ 8499</td>
                    <td>6 month</td>
                    <td>168 days</td>
                  </tr>
                </tbody>
              </Table>
            </div>

          </div>

        </div>
        <Footer />
      </>
      )
}

      export default Terms