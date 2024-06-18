import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/1.1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Аполлон Майков</h3>
        <p>Люблю я горные вершины.
        Среди небесной пустоты горят их странные руины, как недоконченны мечты и думы Зодчего природы.</p>
         
          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь 
          </Button>
          </Link>



      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/1.2.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/1.3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider