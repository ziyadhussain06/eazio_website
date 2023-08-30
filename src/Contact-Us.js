import ContactBanner from "./Contact/ContactBanner";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container } from "react-bootstrap";
import Contactfrom from "./Contact/ContactForm";

function GetConnect(){
    return (
        <>
        <section>
            <Container fluid>
                <ContactBanner />
            </Container>
        </section>
        <section>
            <Container fluid>
                <Contactfrom/>
            </Container>
        </section>
        </>

    );
}
export default GetConnect;