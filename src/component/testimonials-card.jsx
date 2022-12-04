 
function TestimonialsCard(props) {
  return (
    <div className='testimonial-card' >  
        <img src={props.image} alt="error" className="testimonial-card-image" /> 
        <div>
        <h5>{props.name}</h5>
        <font size="4"> {props.message} </font>
        </div>
    </div>
  );
}

export default TestimonialsCard;