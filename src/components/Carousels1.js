import Carousel from "react-bootstrap/Carousel";

export default function Carousel1() {
  return (
    <Carousel touch="true" pause="hover" wrap="true" fade interval={3000}>
      <Carousel.Item>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1542841791-1925b02a2bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&h=450&q=60"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1603191659812-ee978eeeef76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&h=450&q=60"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&h=450&q=60"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
