import { useState } from "react";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";

function Course() {
  const [showModal, setShowModal] = useState(false);

  const [courses, setCourses] = useState([]);

  const [editData, setEditData] = useState(null);

  return (
    <>
      <CourseList
        courses={courses}
        setCourses={setCourses}
        setShowModal={setShowModal}
        setEditData={setEditData}
      />

      <CourseForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditData(null);
        }}
        courses={courses}
        setCourses={setCourses}
        editData={editData}
        setEditData={setEditData}
      />
    </>
  );
}

export default Course;