import Getfreedemo from '../Freeforsignup'
function AboutBannerButton() {
    return (
        <div className='d-lg-flex d-md-block pt-lg-3 pt-md-3  justify-content-center'>
            <div className='d-flex justify-content-center'>
            <img className="dividerline" src={require('../image/divider.png')} alt='divider-line' />
            <p className='border-left white text'>Eazio is currently free for all users!<br />
            Let's empower HR together today.</p></div>
            <div>
            <Getfreedemo /></div>
        </div>
    )
}
export default AboutBannerButton;