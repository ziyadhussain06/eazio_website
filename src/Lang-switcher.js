import Navbar from 'react-bootstrap/Navbar';
import Getdemo from './Get-demo-btn';

function Lanswitcher(){
    return(
        <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text>
                <p className='login-text'>
                {/* <Link className='navlink nav-link' to="./login">Login</Link> */}
                <a className='navlink nav-link' href='https://eazio.com/auth/login'>Login</a>
                </p>

            </Navbar.Text>
            <Getdemo/>
        </Navbar.Collapse>
    )
}
export default Lanswitcher;