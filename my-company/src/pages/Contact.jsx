import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <label>
          <strong>Name:</strong>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            style={{
              display: 'block',
              width: '100%',
              padding: '8px',
              margin: '10px 0'
            }}
            required
          />
        </label>

        <label>
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            style={{
              display: 'block',
              width: '100%',
              padding: '8px',
              margin: '10px 0'
            }}
            required
          />
        </label>

        <label>
          <strong>Message:</strong>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            style={{
              display: 'block',
              width: '100%',
              height: '100px',
              padding: '8px',
              margin: '10px 0'
            }}
            required
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
