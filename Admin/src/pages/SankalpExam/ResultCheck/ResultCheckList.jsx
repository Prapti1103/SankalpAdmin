import { Card, Button } from "react-bootstrap";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaFilePdf,
} from "react-icons/fa";
import "./ResultCheck.css";

function ResultCheckList({
  resultChecks,
  setResultChecks,
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

    if (window.confirm("Delete this Result Check?")) {

      setResultChecks((prev) =>
        prev.filter((item) => item.id !== id)
      );

    }

  };

  return (

    <div className="resultcheck-page">

      {/* Toolbar */}

      <div className="resultcheck-toolbar">

       

      </div>

      {/* Table */}

      <Card className="resultcheck-card">

        <Card.Header className="resultcheck-header">

           <Button
          className="create-btn"
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        >
          <FaPlus className="me-2" />
          Add Result Check
        </Button>

        </Card.Header>

        <Card.Body>

          <div className="resultcheck-table">

            <table className="resultcheck-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Title</th>

                  <th>Link</th>

                  <th>PDF</th>

                  <th>Description</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {resultChecks.length > 0 ? (

                  resultChecks.map((item, index) => (

                    <tr key={item.id}>

                      <td>{index + 1}</td>

                      <td>{item.title}</td>

                      <td>

                        {item.link ? (

                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open Link
                          </a>

                        ) : (

                          "No Link"

                        )}

                      </td>

                      <td>

                        {item.pdf ? (

                          <a
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFilePdf className="pdf-icon" />
                          </a>

                        ) : (

                          "No PDF"

                        )}

                      </td>

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
                      colSpan="6"
                      className="empty-data"
                    >
                      No Result Check Available
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

export default ResultCheckList;