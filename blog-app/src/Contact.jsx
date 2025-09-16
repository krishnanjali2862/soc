// export default function Contact(){
//     return <h1>Contact Page</h1>;
// }






import { useState } from "react";

function Contact() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    qualification: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Information - SRIT Anantapur</h2>
      <p><strong>Address:</strong> Srinivasa Ramanujan Institute of Technology (SRIT), Anantapur, Andhra Pradesh, India</p>
      <p><strong>Phone:</strong> +91 8554-123456</p>
      <p><strong>Email:</strong> info@srit.ac.in</p>
      <p><strong>Website:</strong> <a href="https://www.srit.ac.in" target="_blank" rel="noreferrer">www.srit.ac.in</a></p>

      <hr style={{ margin: "20px 0" }} />

      <h3>Student Information Form</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name: </label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p>Select Qualification:</p>
            <label>
              <input
                type="radio"
                name="qualification"
                value="B.Tech"
                checked={student.qualification === "B.Tech"}
                onChange={handleChange}
              />
              B.Tech
            </label>
            <label>
              <input
                type="radio"
                name="qualification"
                value="M.Tech"
                checked={student.qualification === "M.Tech"}
                onChange={handleChange}
              />
              M.Tech
            </label>
            <label>
              <input
                type="radio"
                name="qualification"
                value="Ph.D"
                checked={student.qualification === "Ph.D"}
                onChange={handleChange}
              />
              Ph.D
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Details:</h3>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Qualification:</strong> {student.qualification}</p>
        </div>
      )}
    </div>
  );
}
export default Contact;


