import { Card, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./Gallery.css";

function GalleryList({
  gallery,
  setGallery,
  setShowModal,
  setEditData,
}) {

  // Edit Gallery
  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  // Delete Gallery
  const handleDelete = (id) => {
    if (window.confirm("Delete this gallery image?")) {
      setGallery((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <div className="gallery-page">

      {/* Toolbar */}

      <div className="gallery-toolbar">

        <Button
          className="create-btn"
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        >
          <FaPlus className="me-2" />
          Add Gallery Image
        </Button>

      </div>

      {/* Gallery Table */}

      <Card className="gallery-card">

        <Card.Header className="gallery-header">
          Gallery Image List
        </Card.Header>

        <Card.Body>

          <div className="gallery-table">

            <table className="gallery-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Image</th>

                  <th>Title</th>

                  <th>Link</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {gallery.length > 0 ? (

                  gallery.map((item, index) => (

                    <tr key={item.id}>

                      <td>{index + 1}</td>

                      <td>

                        <img
                          src={item.image}
                          alt={item.title}
                          className="table-image"
                        />

                      </td>

                      <td>{item.title}</td>

                      <td className="link-cell">

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.link}
                        </a>

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
                      No Gallery Images Found
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

export default GalleryList;