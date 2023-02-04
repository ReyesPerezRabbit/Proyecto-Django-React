import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>Biblioteca Admision</Navbar.Brand>
            </Container>
        </Navbar>
    )
}