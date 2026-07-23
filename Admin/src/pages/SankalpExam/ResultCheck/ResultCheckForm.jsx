import { useEffect, useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { BsUpload, BsTrash } from "react-icons/bs";
import {
  createResultCheck,
  updateResultCheck,
} from "../../../Services/resultCheckService";
import "./ResultCheck.css";

function ResultCheckForm({
  show,
  handleClose,
  resultChecks,
  setResultChecks,
  editData,
}) {

  const [formData, setFormData] = useState({
    title: "",
    link: "",
    description: "",
    pdf: null,
  });

  const [pdfName, setPdfName] = useState("");

  useEffect(() => {

    if (editData) {

      setFormData({
        title: editData.title || "",
        link: editData.link || "",
        description: editData.description || "",
        pdf: editData.pdf || null,
      });

      setPdfName(editData.pdfName || "");

    } else {

      resetForm();

    }

  }, [editData]);

  const resetForm = () => {

    setFormData({
      title: "",
      link: "",
      description: "",
      pdf: null,
    });

    setPdfName("");

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handlePdf = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      pdf: file,
    });

    setPdfName(file.name);

  };

  const removePdf = () => {

    setFormData({
      ...formData,
      pdf: null,
    });

    setPdfName("");

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("title", formData.title);
      data.append("link", formData.link);
      data.append("description", formData.description);

      if (formData.pdf) {
        data.append("pdf", formData.pdf);
      }

      if (editData) {

        const response = await updateResultCheck(editData.id, data);

        setResultChecks((prev) =>
          prev.map((item) =>
            item.id === editData.id ? response.data : item
          )
        );

        alert("Result Check Updated Successfully");

      } else {

        const response = await createResultCheck(data);

        setResultChecks((prev) => [...prev, response.data]);

        alert("Result Check Added Successfully");

      }

      resetForm();
      handleClose();

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }

  };

  return (

    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >

      <Modal.Header closeButton>

        <Modal.Title>

          {editData ? "Update Result Check" : "Add Result Check"}

        </Modal.Title>

      </Modal.Header>

      <Form onSubmit={handleSubmit}>

        <Modal.Body>

          <Row>

            <Col md={4}>

              <Form.Group>

                <Form.Label>

                  Upload PDF

                </Form.Label>

                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={handlePdf}
                />

              </Form.Group>

              <div className="pdf-preview mt-3">

                {pdfName ? (

                  <>

                    <div className="pdf-file-name">

                      {pdfName}

                    </div>

                    <Button
                      variant="danger"
                      size="sm"
                      className="mt-3"
                      onClick={removePdf}
                    >

                      <BsTrash className="me-2" />

                      Remove

                    </Button>

                  </>

                ) : (

                  <div className="empty-preview">

                    No PDF Selected

                  </div>

                )}

              </div>

            </Col>

            <Col md={8}>

              <Form.Group className="mb-3">

                <Form.Label>

                  Title

                </Form.Label>

                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>

                  Result Link

                </Form.Label>

                <Form.Control
                  type="url"
                  name="link"
                  placeholder="https://example.com/result"
                  value={formData.link}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

              <Form.Group>

                <Form.Label>

                  Description

                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={6}
                  name="description"
                  placeholder="Enter Description"
                  value={formData.description}
                  onChange={handleChange}
                />

              </Form.Group>

            </Col>

          </Row>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={handleClose}
          >

            Cancel

          </Button>

          <Button
            type="submit"
            className="save-btn"
          >

            <BsUpload className="me-2" />

            {editData
              ? "Update Result Check"
              : "Save Result Check"}

          </Button>

        </Modal.Footer>

      </Form>

    </Modal>

  );

}

export default ResultCheckForm;