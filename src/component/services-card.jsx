import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ServicesCard(props) {
  return (
    <Card className='text-center services-card' > 
      <Card.Body>
        <img src={props.icon} alt="error" className="services-card-icon" />
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary">Show More</Button>
      </Card.Body> 
    </Card>
  );
}

export default ServicesCard;