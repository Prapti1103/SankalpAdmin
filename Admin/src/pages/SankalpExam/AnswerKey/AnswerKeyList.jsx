import { Card, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash, FaFilePdf } from "react-icons/fa";
import "./AnswerKey.css";

function AnswerKeyList({
  answerKeys,
  setAnswerKeys,
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

    if (window.confirm("Delete this Answer Key?")) {

      setAnswerKeys((prev) =>
        prev.filter((item) => item.id !== id)
      );

    }

  };

  return (

    <div className="answerkey-page">

      {/* Toolbar */}

      <div className="answerkey-toolbar">

        

      </div>

      {/* Table */}

      <Card className="answerkey-card">

        <Card.Header className="answerkey-header">

         <Button
          className="create-btn"
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        >
          <FaPlus className="me-2" />
          Add Answer Key
        </Button>

        </Card.Header>

        <Card.Body>

          <div className="answerkey-table">

            <table className="answerkey-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Title</th>

                  <th>Link</th>

                  <th>PDF</th>

                  <th>Description</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {answerKeys.length > 0 ? (

                  answerKeys.map((item, index) => (

                    <tr key={item.id}>

                      <td>{index + 1}</td>

                      <td>{item.title}</td>

                      <td>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open Link
                        </a>

                      </td>

                      <td>

                        {item.pdf ? (

                          <a
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFilePdf
                              color="red"
                              size={22}
                            />
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
                      No Answer Key Available
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

export default AnswerKeyList;