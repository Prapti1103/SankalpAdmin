import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BsImage,
  BsGrid,
  BsBook,
  BsInfoCircle,
  BsTelephone,
  BsLayoutTextWindow,
} from "react-icons/bs";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  const sections = [
    {
      title: "Hero Section",
      description: "Manage hero banner, heading and button.",
      icon: <BsImage />,
      route: "/website-management/home/hero",
    },
    {
      title: "Services Section",
      description: "Manage website services section.",
      icon: <BsGrid />,
      route: "/website-management/home/services",
    },
    {
      title: "Guide Section",
      description: "Manage guide information section.",
      icon: <BsBook />,
      route: "/website-management/home/guide",
    },
    {
      title: "About Section",
      description: "Manage about section content.",
      icon: <BsInfoCircle />,
      route: "/website-management/home/about",
    },
    {
      title: "Features & Contact",
      description: "Manage features and contact details.",
      icon: <BsTelephone />,
      route: "/website-management/home/features-contact",
    },
    {
      title: "Footer Section",
      description: "Manage footer links and copyright.",
      icon: <BsLayoutTextWindow />,
      route: "/website-management/home/footer",
    },
  ];

  return (

    <Container fluid className="home-container">

      <div className="page-heading">

        <h2>Home Management</h2>

        <p>Select the section you want to update.</p>

      </div>

      <Row className="g-3">

        {sections.map((section, index) => (

          <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} key={index}>

            <Card className="home-card h-100" onClick={() => navigate(section.route)}>

              <Card.Body className="text-center">

                <div className="card-icon">

                  {section.icon}

                </div>

                <h4>

                  {section.title}

                </h4>

                <p>

                  {section.description}

                </p>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

    </Container>

  );

}

export default Home;