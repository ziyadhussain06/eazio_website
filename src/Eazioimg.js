import { Link } from 'react-router-dom';
import Image from './image/icon.svg';
function Eazio(){
    return(
        // eslint-disable-next-line jsx-a11y/alt-text
        <Link className='navlink'  to="./"><img className='App-logo' src={Image} alt='eazio-logo'/></Link>
    );
}
export default Eazio;