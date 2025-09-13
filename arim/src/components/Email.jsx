// src/components/ContactForm.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/PageStyle.css';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('메시지가 성공적으로 전송되었습니다!');
        },
        (error) => {
          console.log(error.text);
          alert('메시지 전송에 실패했습니다. 다시 시도해 주세요.');
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>이메일 문의</label>
        <label>Name</label>
        <input type="text" name="from_name" required />

        <label>Email</label>
        <input
          type="email"
          name="from_email"
          placeholder="답장받을 이메일을 입력해주세요."
          required
        />

        <label>Message</label>
        <textarea name="message" required />

        <input type="submit" value="Send" className="submit-btn" />
      </form>
    </div>
  );
};

export default Email;
