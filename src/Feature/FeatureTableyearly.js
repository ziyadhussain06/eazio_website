import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function FeaturTableyearly() {
    return (
        <>
            <section className='margin-top'>
                <Row className='px-lg-5 px-md-5'>
                    <Table className='feature-table'>
                        <tbody>
                            <tr>
                                <th className='Table-heading'><h2 className='feature-text-para'>Features</h2> </th>
                                <td>
                                    <div>
                                        <h2 className='basic-pack'>Basic</h2>

                                    </div>
                                </td>
                                <td>
                                    <div >
                                        <h2 className='basic-pack'>Business</h2>
                                    </div>
                                </td>
                                <td>
                                    <div >
                                        <h2 className='basic-pack'>Premuim</h2>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Dashboard </th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Employee Records </th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Employees   </th>
                                <td className='top-padding'>Up to  70</td>
                                <td className='top-padding'>Up to  120</td>
                                <td className='top-padding'> Unlimited</td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Question Requests </th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Meeting Requests</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Document Requests</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Employees Voice</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Time off </th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Time off Requests </th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Calendar </th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Attendance </th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Shift Schedules </th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Attendance</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </section>
        </>
    )
}
export default FeaturTableyearly;