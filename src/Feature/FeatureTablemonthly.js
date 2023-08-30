import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function FeaturTable() {
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
                                <td className='top-padding'>Unlimited</td>
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
                            <tr>
                                <th colSpan={4}>Branch </th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Announcements </th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Manage Branches</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Branch Documents</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Checklist</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Day End Reports</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Municipality</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Training</th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Training Module </th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td className='top-padding'>Up to  40</td>
                                <td className='top-padding'>Unlimited</td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Module Quiz</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>All Training</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Accounts</th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Payroll</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Commissions</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Loans</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Overtime</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Tips</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Permissions</th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>User Permissions</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Permissions Roles</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>Support</th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Ticketing</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>24/7 Support Phone</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>EMPLOYEES LOGIN</th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Announcements</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Leave Balance</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Profile</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Trainings</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Calendar</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Your Voice </th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Quick Question</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Meeting Request </th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Leave Request</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th colSpan={4}>BRANCH</th>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Dashboard</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Branches </th>
                                <td className='top-padding'>Up to  2</td>
                                <td className='top-padding'>Up to  5</td>
                                <td className='top-padding'>Unlimited</td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Cash Banking</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Invoice Log</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Complaint </th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Expense</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Petty cash</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Municipality Inspection</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Announcements</th>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Requests</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Documents Managements</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Checklist</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Reports ( pdf, excel)</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <th className='Table-heading'>Reviews ( Google, Facebook)</th>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className="fa fa-times cross-icon" aria-hidden="true"></i></td>
                                <td><i className='fa fa-check check-icon' aria-hidden="true"></i></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </section>
        </>
    )
}
export default FeaturTable;