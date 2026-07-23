import { useState } from "react";
import "./SankalpExam.css";

import Syllabus from "./Syllabus/Syllabus";
import AnswerKey from "./AnswerKey/AnswerKey";
import ResultCheck from "./ResultCheck/ResultCheck";
import ResultPDF from "./ResultPDF/ResultPDF";

function SankalpExam() {

  const [activeTab, setActiveTab] = useState("");

  const renderContent = () => {

    switch (activeTab) {

      case "syllabus":
        return <Syllabus />;

      case "answerKey":
        return <AnswerKey />;

      case "resultCheck":
        return <ResultCheck />;

      case "resultPdf":
        return <ResultPDF />;

      default:
        return (
          <div className="exam-home">

            <h1>SANKALP EXAM</h1>

            <p>
              Please select any option from the top menu.
            </p>

          </div>
        );

    }

  };

  return (

    <div className="sankalp-exam">

      {/* Top Navbar */}

      <div className="exam-navbar">

        <button
          className={activeTab === "syllabus" ? "active-tab" : ""}
          onClick={() => setActiveTab("syllabus")}
        >
          Syllabus
        </button>

        <button
          className={activeTab === "answerKey" ? "active-tab" : ""}
          onClick={() => setActiveTab("answerKey")}
        >
          Answer Key
        </button>

        <button
          className={activeTab === "resultCheck" ? "active-tab" : ""}
          onClick={() => setActiveTab("resultCheck")}
        >
          Result Check
        </button>

        <button
          className={activeTab === "resultPdf" ? "active-tab" : ""}
          onClick={() => setActiveTab("resultPdf")}
        >
          Result PDF
        </button>

      </div>

      {/* Dynamic Content */}

      <div className="exam-content">

        {renderContent()}

      </div>

    </div>

  );

}

export default SankalpExam;