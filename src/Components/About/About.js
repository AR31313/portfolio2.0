import Card from 'react-bootstrap/Card';

function BodyShorthandExample() {

    var aboutStyle = {
        background: "black",
        width: "1200px"
    }
    return <Card body>
        <div style={aboutStyle}>
            <h2 >Avi Rana</h2>

            Front-end Web Developer with background in Business Management, Environmental Science with extensive GIS Experience. Earned Certificate in Full Stack Web Development, GIS and Bachelor of Science Degree from University of Washington. Skills in HTML, CSS & JavaScript; proficient with Microsoft Office, Esri & ArcGIS programs as well as Quickbooks.
            Known as a highly motivated problem solver with a strong commitment to continually learning new things and developing myself professionally.
        </div>
    </Card >;
}

export default BodyShorthandExample;