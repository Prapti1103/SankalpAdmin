import { Card, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { deleteCTA } from "../../../../Services/ctaService";
import "./CTA.css";

function CTAList({
  ctas,
  setCtas,
  setShowModal,
  setEditData,
}) {

  // Edit CTA
  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  // Delete CTA
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this CTA?"
    );

    if (!confirmDelete) return;

    try {

      await deleteCTA(id);

      setCtas((prev) =>
        prev.filter((item) => item.id !== id)
      );

      alert("CTA Deleted Successfully");

    } catch (error) {

      console.error(error);
      alert("Failed to delete CTA.");

    }
  };

  return (
    <div className="cta-page">

      {/* Toolbar */}
      <div className="cta-toolbar">

        <Button
          className="create-btn"
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        >
          <FaPlus className="me-2" />
          Add CTA
        </Button>

      </div>

      {/* Table */}
      <Card className="cta-card">

        <Card.Header className="cta-header">
          CTA List
        </Card.Header>

        <Card.Body>

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Title</th>

                  <th>Description</th>

                  <th>Link</th>

                  <th>Registration Fee</th>

                  <th>Start Date</th>

                  <th>End Date</th>

                  <th>Eligible Classes</th>

                  <th>Exam Pattern</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {ctas.length > 0 ? (

                  ctas.map((item, index) => (

                    <tr key={item.id}>

                      <td>{index + 1}</td>

                      <td>{item.title}</td>

                      <td>{item.description}</td>

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
                          "-"
                        )}
                      </td>

                      <td>{item.registrationFee}</td>

                      <td>{item.startDate}</td>

                      <td>{item.endDate}</td>

                      <td>{item.eligibleClasses}</td>

                      <td>{item.examPattern}</td>

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
                      colSpan="10"
                      className="text-center"
                    >
                      No CTA Available
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

export default CTAList;