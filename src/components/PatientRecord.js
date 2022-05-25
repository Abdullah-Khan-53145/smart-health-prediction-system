import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./patientComponents/Header";
import SideMenu from "./patientComponents/SideMenu";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./PatientRecord.css";
function PatientRecord(props) {
  const { user } = props;
  const [record, setRecord] = useState([]);
  useEffect(() => {
    getDocs(collection(db, "pateintRecord")).then((querySnapshot) => {
      let recordArr = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().data.email === user.email) {
          recordArr.push(doc.data());
          console.log(doc.data());
        }
      });
      setRecord(recordArr);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header user={user} />
      <SideMenu user={user} />
      <div className="patient__record">
        <h1 className="test_patient_record_section">This is Patient Record</h1>

        <table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Patient Name</th>
              <th>Disease</th>
              <th>Symthoms</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {record.length !== 0 ? (
              record.map((element, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{element.data.patientName}</td>
                  <td>{element.data.disease}</td>
                  <td>{element.data.syms}</td>
                  <td>{element.data.dateTime.split(",")[0]}</td>
                  <td>{element.data.dateTime.split(",")[1]}</td>
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
