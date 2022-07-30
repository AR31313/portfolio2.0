import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./style.css"
function TabsExample() {

    var navStyle = {
        background: "white"
    }

    return (
        <Nav variant="tabs" defaultActiveKey="/home" className='test'>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/about">About</Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Contact</Nav.Link>
            </Nav.Item>

        </Nav>
    );
}

export default TabsExample;