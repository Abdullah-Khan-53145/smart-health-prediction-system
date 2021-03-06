import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./patientComponents/Header";
import SideMenu from "./patientComponents/SideMenu";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./PatientRecord.css";
function PatientRecord(props) {
  const { role } = props;
  const { user } = props;
  const [record, setRecord] = useState([]);
  useEffect(() => {
    if (role === "patient") {
      getDocs(collection(db, "pateintRecord")).then((querySnapshot) => {
        let recordArr = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().email === user.email) {
            recordArr.push(doc.data());
          }
        });
        setRecord(recordArr);
      });
    } else {
      getDocs(collection(db, "pateintRecord")).then((querySnapshot) => {
        let recordArr = [];
        querySnapshot.forEach((doc) => {
          recordArr.push(doc.data());
          console.log(doc.data());
        });
        setRecord(recordArr);
        console.log(recordArr);
      });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {role === "patient" && (
        <>
          <Header user={user} />
          <SideMenu user={user} />
        </>
      )}
      <div className="patient__record">
        <h1 className="test_patient_record_section">This is {role} Record</h1>

        <table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Patient Name</th>
              <th>Disease</th>
              <th>Symthoms</th>
              {role === "patient" ? (
                <>
                  <th>Date</th>
                  <th>Time</th>
                </>
              ) : (
                <>
                  <th>Date, Time</th>
                  <th>Status</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {record.length !== 0 ? (
              record.map((element, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.patientName}</td>
                  <td>{element.disease}</td>
                  <td>{element.syms}</td>
                  {role === "patient" ? (
                    <>
                      <td>{element.dateTime.split(",")[0]}</td>
                      <td>{element.dateTime.split(",")[1]}</td>
                    </>
                  ) : (
                    <>
                      <td>{element.dateTime}</td>
                      <td>{index === 2 ? "Wrong" : "Approved"}</td>
                    </>
                  )}
                  {/*  */}
                </tr>
              ))
            ) : (
              <tr>
                <td>NIL</td>
                <td>NIL</td>
                <td>NIL</td>
                <td>NIL</td>
                <td>NIL</td>
                <td>NIL</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(PatientRecord);
