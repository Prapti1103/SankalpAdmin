import { useEffect, useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { BsUpload, BsXCircle } from "react-icons/bs";
import axios from "axios";

function StudentForm({ student, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    studentName: "",
    mobile: "",
    gender: "",
    className: "",
    medium: "",
    schoolName: "",
    schoolAddress: "",
    state: "",
    stateId: "",
    district: "",
    districtId: "",
    taluka: "",
    village: "",
    examCenter: "",
    coordinator: "",
  });

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);

  /* Edit Mode - jab existing student data aata hai */
  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  /* Load States on mount */
  useEffect(() => {
    loadStates();
  }, []);

  const loadStates = async () => {
    try {
      // Correct endpoint: /api/locations/states (not /api/states)
      const res = await axios.get("https://www.india-location-hub.in/api/locations/states");
      // Response nested hai: { success, data: { states: [...] } }
      setStates(res.data?.data?.states || []);
    } catch (err) {
      console.log("Error loading states:", err);
    }
  };

  /* Load Districts - depends on selected state's ID */
  useEffect(() => {
    if (formData.stateId) {
      loadDistricts(formData.stateId);
    } else {
      setDistricts([]);
      setTalukas([]);
    }
  }, [formData.stateId]);

  const loadDistricts = async (stateId) => {
    try {
      // Correct: query param state_id, not path param with state name
      const res = await axios.get(`https://www.india-location-hub.in/api/locations/districts?state_id=${stateId}`);
      setDistricts(res.data?.data?.districts || []);
    } catch (err) {
      console.log("Error loading districts:", err);
    }
  };

  /* Load Talukas - depends on selected district's ID */
  useEffect(() => {
    if (formData.districtId) {
      loadTalukas(formData.districtId);
    } else {
      setTalukas([]);
    }
  }, [formData.districtId]);

  const loadTalukas = async (districtId) => {
    try {
      // Correct: query param district_id, not path param with district name
      const res = await axios.get(`https://www.india-location-hub.in/api/locations/talukas?district_id=${districtId}`);
      setTalukas(res.data?.data?.talukas || []);
    } catch (err) {
      console.log("Error loading talukas:", err);
    }
  };

  /* Handle normal input change */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* Special handler for State dropdown - stores both name and id */
  const handleStateChange = (e) => {
    const selectedId = e.target.value;
    const selected = states.find((s) => String(s.id) === String(selectedId));
    setFormData({ ...formData, state: selected ? selected.name : "", stateId: selectedId, district: "", districtId: "", taluka: "" });
  };

  /* Special handler for District dropdown - stores both name and id */
  const handleDistrictChange = (e) => {
    const selectedId = e.target.value;
    const selected = districts.find((d) => String(d.id) === String(selectedId));
    setFormData({ ...formData, district: selected ? selected.name : "", districtId: selectedId, taluka: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Card className="student-card shadow">
      <Card.Header className="student-header">{student ? "Edit Student" : "Add New Student"}</Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Student Name */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" name="studentName" placeholder="Enter Student Name" value={formData.studentName} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* Mobile */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" name="mobile" placeholder="Enter Mobile Number" value={formData.mobile} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* Gender */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Class */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Class</Form.Label>
                <Form.Select name="className" value={formData.className} onChange={handleChange}>
                  <option value="">Select Class</option>
                  <option>5th</option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                  <option>11th</option>
                  <option>12th</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Medium */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Medium</Form.Label>
                <Form.Select name="medium" value={formData.medium} onChange={handleChange}>
                  <option value="">Select Medium</option>
                  <option>English</option>
                  <option>Marathi</option>
                  <option>Semi English</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* School Name */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>School Name</Form.Label>
                <Form.Control type="text" name="schoolName" placeholder="School Name" value={formData.schoolName} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* School Address */}
            <Col md={12} className="mb-3">
              <Form.Group>
                <Form.Label>School Address</Form.Label>
                <Form.Control as="textarea" rows={3} name="schoolAddress" placeholder="School Address" value={formData.schoolAddress} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* Village */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Village</Form.Label>
                <Form.Control type="text" name="village" placeholder="Village" value={formData.village} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* State */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Select name="stateId" value={formData.stateId} onChange={handleStateChange}>
                  <option value="">Select State</option>
                  {states.map((state) => (<option key={state.id} value={state.id}>{state.name}</option>))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* District */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>District</Form.Label>
                <Form.Select name="districtId" value={formData.districtId} onChange={handleDistrictChange} disabled={!formData.stateId}>
                  <option value="">Select District</option>
                  {districts.map((district) => (<option key={district.id} value={district.id}>{district.name}</option>))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Taluka */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Taluka</Form.Label>
                <Form.Select name="taluka" value={formData.taluka} onChange={handleChange} disabled={!formData.districtId}>
                  <option value="">Select Taluka</option>
                  {talukas.map((taluka) => (<option key={taluka.id} value={taluka.name}>{taluka.name}</option>))}
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Exam Center */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Exam Center</Form.Label>
                <Form.Control type="text" name="examCenter" placeholder="Exam Center" value={formData.examCenter} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* Coordinator */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Coordinator</Form.Label>
                <Form.Control type="text" name="coordinator" placeholder="Coordinator" value={formData.coordinator} onChange={handleChange} />
              </Form.Group>
            </Col>

            {/* Buttons */}
            <Col md={12}>
              <div className="d-flex gap-2 mt-3">
                <Button type="submit" className="save-btn"><BsUpload className="me-2" />{student ? "Update Student" : "Save Student"}</Button>
                <Button variant="secondary" onClick={onCancel}><BsXCircle className="me-2" />Cancel</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default StudentForm;
