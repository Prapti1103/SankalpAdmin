import { Card, Table, Button } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function TestimonialList({
  testimonials,
  onEdit,
  onDelete,
}) {
  return (
    <Card className="testimonial-table-card shadow-sm">
      <Card.Body className="p-0">
        <Table responsive hover className="align-middle mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Exam</th>
              <th>rank</th>
              <th>Image</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {testimonials.length > 0 ? (
              testimonials.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>

                  <td>{item.name}</td>

                  <td>{item.exam}</td>

                  <td>{item.rank}</td>

                  <td>
                    {item.image ? (
                      <img
                        src={
                          typeof item.image === "string"
                            ? item.image
                            : URL.createObjectURL(item.image)
                        }
                        alt={item.name}
                        className="testimonial-table-image"
                      />
                    ) : (
                      <span className="text-muted">
                        No Image
                      </span>
                    )}
                  </td>

                  <td
                    style={{
                      maxWidth: "280px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.description}
                  </td>

                  <td>
                    <Button
                      variant="link"
                      className="text-primary me-2"
                      onClick={() => onEdit(item)}
                    >
                      <BsPencilSquare size={18} />
                    </Button>

                    <Button
                      variant="link"
                      className="text-danger"
                      onClick={() => onDelete(item.id)}
                    >
                      <BsTrash size={18} />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-4 text-muted"
                >
                  No Testimonials Available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default TestimonialList;