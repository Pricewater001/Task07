import Card from 'react-bootstrap/Card';

function CardItem({text,id}) {
  return <Card body
  style={{
    // margin : "5rem"
  }}
  >{`${id}  : ${text} `}</Card>;
}

export default CardItem;