import { Card, Button } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./Course.css";

function CourseList({
  courses,
  setCourses,
  setShowModal,
  setEditData,
}) {

  // Edit Course
  const handleEdit = (course) => {
    setEditData(course);
    setShowModal(true);
  };

  // Delete Course
  const handleDelete = (id) => {
    if (window.confirm("Delete this course?")) {
      setCourses((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <div className="course-page">

      {/* Toolbar */}

      <div className="course-toolbar">

        <Button
          className="create-btn"
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
        >
          <FaPlus className="me-2" />
          Add Course
        </Button>

      </div>

      {/* Table */}

      <Card className="course-card">

        <Card.Header className="course-header">
          Course List
        </Card.Header>

        <Card.Body>

          <div className="course-table">

            <table className="course-table-ui">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Image</th>

                  <th>Course Name</th>

                  <th>Description</th>

                  <th>Duration</th>

                  <th>Price</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {courses.length > 0 ? (

                  courses.map((course, index) => (

                    <tr key={course.id}>

                      <td>{index + 1}</td>

                      <td>

                        <img
                          src={course.image}
                          alt={course.courseName}
                          className="table-image"
                        />

                      </td>

                      <td>{course.courseName}</td>

                      <td className="description-cell">
                        {course.description}
                      </td>

                      <td>{course.duration}</td>

                      <td>{course.price}</td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(course)}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(course.id)}
                        >
                          <FaTrash />
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="7"
                      className="empty-data"
                    >
                      No Course Found
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

export default CourseList;