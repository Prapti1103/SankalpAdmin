import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";
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
      description: "Manage hero banner",
      icon: <BsImage />,
      route: "/website-management/home/hero",
    },
    {
      title: "Services",
      description: "Manage website services",
      icon: <BsGrid />,
      route: "/website-management/home/services",
    },
    {
      title: "Sankalp Features",
      description: "Manage Sankalp Features section",
      icon: <BsBook />,
      route: "/website-management/home/guide",
    },
    {
      title: "About",
      description: "Manage about content",
      icon: <BsInfoCircle />,
      route: "/website-management/home/about",
    },
    {
      title: "Features",
      description: "Manage features & contact",
      icon: <BsTelephone />,
      route: "/website-management/home/features-contact",
    },
    {
      title: "Footer",
      description: "Manage footer section",
      icon: <BsLayoutTextWindow />,
      route: "/website-management/home/footer",
    },
  ];

  return (
    <Container fluid="xxl" className="home-container">

      {/* Page Heading */}
      <div className="page-heading">
        <h2>Home Management</h2>
        <p>Select a section to manage your website.</p>
      </div>

      {/* Cards */}
      <Row className="g-4">
        {sections.map((section, index) => (
          <Col key={index} xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
            <Card
              className="home-card"
              onClick={() => navigate(section.route)}
            >
              <Card.Body className="text-center">
                <div className="card-icon">{section.icon}</div>
                <h4>{section.title}</h4>
                <p>{section.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Selected Section Render Here */}
      {/* <div className="mt-5">
        <Outlet />
      </div> */}

    </Container>
  );
}

export default Home;