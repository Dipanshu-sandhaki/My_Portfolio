import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (/[^a-zA-Z\s]/.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    emailjs
      .send(
        "service_7uo6p7k",
        "template_qrilg5g",
        {
          title: "Contact Form Submission",
          name: formData.name,
          message: formData.message,
          email: formData.email,
        },
        "xcsnu2vqC6a-j6whD"
      )

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I will get back to you soon.",
          confirmButtonText: "OK",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        Swal.fire({
          icon: "error",
          title: "Failed to send message",
          text: "Please try again.",
          confirmButtonText: "Okay",
        });
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-[#0a1636] to-[#14061f] text-cyan-400"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm text-left">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm text-left">{errors.email}</p>
            )}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm text-left">{errors.message}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-white rounded-lg mt-4 hover:bg-cyan-400 shadow-md transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
