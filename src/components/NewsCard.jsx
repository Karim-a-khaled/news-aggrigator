import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import News from '../data';
import '../styles/news-card.css'
// import { Link } from "react-router-dom";


function NewsCard() {
//function to iterate through the json data and grab each data and render it on screen
function displayCards(){
const cards = News.map((card)=>{
return(
<>
  <Col>
  <a className='news-card-a' href="">
    <Card style={{ width: '18rem', height:'250px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>
    </Card>
    </a>
  </Col>
</>
)
})
return cards
}

// the component
return (
<Container>
  <Row>
    
      {displayCards()}

  </Row>
</Container>
  )
}

export default NewsCard
