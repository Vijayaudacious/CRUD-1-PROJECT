import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./addupdate.css";
import firebaseDB from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";


const initialState = {
  name: '',
  email: '',
  contact: '',
  fees: '900',
  status: '',
};

const AddUpdate = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState(initialState);

  const navigate = useNavigate();
  const { id } = useParams(); //use coron

  const { name, email, contact, fees, status } = state;

  // useEffect(() => {
  //   firebaseDB.child("students").on("value", (snapshop) => {
  //     if (snapshop.val() != null) {
  //       setData({ ...snapshop.val() });
  //     } else {
  //       setData({});
  //     }
  //   });
  //   return () => {
  //     setData({});
  //   };
  // }, []);

  const db = getDatabase();
  // console.log("dataaaa", data);

  useEffect(() => {
    const starCountRef = ref(db, "student/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData({ ...data, data });
    });
  }, []);

    useEffect(() => {
      if(id){
        setState({ ...data[id] });
      } else{
        setState({ ...initialState });
      }
    },[id, data]);

  const hendelInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      if (!name || !email || !contact || !fees || !status) {
        toast.error("All Fileds are required");
      } else {
        firebaseDB.child("student").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success(" Student Added Successfully");
          }
        });
      }
    } else {
      firebaseDB.child(`student/${id}`).set(state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Student record Updated successfully ");
        }
      });
    }

    setTimeout(() => navigate("/"), 500);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form
        style={{
          margin: "auto",
          padding: "1rem",
          maxWidth: "450px",
          alignContant: "center",
        }}
        onSubmit={hendleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="name....."
          id="name"
          value={name || ""}
          name="name"
          onChange={hendelInputChange}
        />

        <label htmlFor="name">Email</label>
        <input
          type="email"
          placeholder="email....."
          id="email"
          value={email || ""}
          name="email"
          onChange={hendelInputChange}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="Number"
          placeholder="contact....."
          id="contact"
          value={contact || ""}
          name="contact"
          onChange={hendelInputChange}
        />

        <label htmlFor="fees">Fees</label>
        <input
          type="text"
          placeholder="fees....."
          id="fees"
          value={fees || ""}
          name="fees"
          onChange={hendelInputChange}
        />

        <label htmlFor="status">Status</label>
        <input
          type="text"
          placeholder="status....."
          id="status"
          value={status || ""}
          name="status"
          onChange={hendelInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
    </div>
  );
};

export default AddUpdate;
