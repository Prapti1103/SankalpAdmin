import { Card, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./Service.css";

function ServiceList({
  services,
  setServices,
  setShowModal,
  setEditData,
}) {

  // Edit
  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  // Delete
  const handleDelete = (id) => {

    if (window.confirm("Delete this Service?")) {

      setServices((prev) =>
        prev.filter((item) => item.id !== id)
      );

    }

  };

  return (

    <div className="service-page">

      {/* Toolbar */}

      <div className="service-toolbar">

        <Button
          className="create-btn"
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        >

          <FaPlus className="me-2" />

          Add Service

        </Button>

      </div>

      {/* Table */}

      <Card className="service-card">

        <Card.Header className="service-header">

          Service List

        </Card.Header>

        <Card.Body>

          <div className="service-table">

            <table className="service-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Image</th>

                  <th>Title</th>

                  <th>Description</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {services.length > 0 ? (

                  services.map((item, index) => (

                    <tr key={item.id}>

                      <td>{index + 1}</td>

                      <td>

                        {item.image ? (

                          <img
                            src={item.image}
                            alt={item.title}
                            className="service-image"
                          />

                        ) : (

                          "No Image"

                        )}

                      </td>

                      <td>{item.title}</td>

                      <td className="description-cell">

                        {item.description}

                      </td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(item)}
                        >

                          <FaEdit />

                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(item.id)}
                        >

                          <FaTrash />

                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="empty-data"
                    >

                      No Service Available

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </Card.Body>

      </Card>

    </div>

  );

}

export default ServiceList;