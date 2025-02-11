import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { TextField, Button } from "@mui/material";

const RegisterForm = forwardRef((props, ref) => {
  const registerSectionRef = useRef();

  // Expose the focus method to the parent
  useImperativeHandle(ref, () => ({
    focusOnRegister() {
      registerSectionRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));


  const [formData, setFormData] = useState({
    name:"",
    email: "",
    phone: "",
    country: "",
    company: "",
    website: "",
    interested: "",
    message: ""

})

const handleFormData = (event) => {
    let { value, id } = event.target
    setFormData({...formData, [id]: value})
}

const postData = async () => {
  try {
     await fetch("http://192.168.166.139:3000/registerFormData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      setFormData({
        name:"",
        email: "",
        phone: "",
        country: "",
        company: "",
        website: "",
        interested: "",
        message: ""

    })
  } catch (error) {
    console.error("Error:", error);
  }
};


  return (
        <div className="p-4 max-w-4xl mx-auto" ref = {registerSectionRef} >
      <form style={{width:"100%", display:"flex", gap: "30px", flexWrap:"wrap" , justifyContent: "center", paddingTop: "38px" }}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          onChange={handleFormData}
        style={{width:"40%"}}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          variant="standard"
        style={{width:"40%"}}
        required
        onChange={handleFormData}
        />

        <TextField
          id="phone"
          label="Phone"
          type="number"
          variant="standard"
        style={{width:"40%"}}
        required
        onChange={handleFormData}
        />

        <TextField
          id="country"
          label="Country"
          variant="standard"
        style={{width:"40%"}}
        onChange={handleFormData}
        />

        <TextField
          id="company"
          label="Company"
          variant="standard"
          style={{width:"40%"}}
          onChange={handleFormData}
        />

        <TextField
          id="website"
          label="Company Website"
          variant="standard"
          style={{width:"40%"}}
          onChange={handleFormData}
        />

        <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems: "center", gap:"30px"}}>
        <TextField
          id="interested"
          label="Interested In"
          variant="standard"
          style={{width:"83%"}}
          onChange={handleFormData}
        />

          <TextField
            id="message"
            label="Your Message"
            variant="standard"
            style={{width:"83%"}}
            onChange={handleFormData}
            multiline
          />

        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-right">
          <Button variant="contained" style={{ background: "linear-gradient(225deg, #A5327E 0%, #6C0D7C 100%)",
            opacity: `${(formData.email && formData.phone) ? "1" : "0.7"}`, color:"white"
           }}
          disabled = {(formData.email === "" && formData.phone === "")}
          onClick={postData}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
});

export default RegisterForm;
