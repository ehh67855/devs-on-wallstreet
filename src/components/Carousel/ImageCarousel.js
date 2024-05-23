import { Carousel } from "react-bootstrap";

  

export default function ImageCarousel({IMAGES_INFO}) {
    return (
      <div>
        <br></br>
        <Carousel>
          {IMAGES_INFO.map((image, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={image.imageUrl}
                  alt={`Slide ${i}`}
                />
                <Carousel.Caption>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <br></br>
      </div>

    );
}