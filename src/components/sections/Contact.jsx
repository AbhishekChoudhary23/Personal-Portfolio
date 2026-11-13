import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Bio } from "../../data";
import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SectionDesc,
} from "../common/SectionLayout";

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + "50"};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  resize: vertical;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + "50"};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: rgb(1, 124, 22);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const Status = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme, $error }) => ($error ? "#ff6b6b" : theme.primary)};
`;

const EMAILJS = {
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
};
const isEmailJsConfigured = Object.values(EMAILJS).every(Boolean);

/** Fallback when EmailJS is not configured: open the visitor's mail client. */
const openMailClient = (formElement) => {
  const data = new FormData(formElement);
  const subject = encodeURIComponent(
    data.get("subject") || "Portfolio Inquiry"
  );
  const body = encodeURIComponent(
    `From: ${data.get("from_name")} (${data.get("from_email")})\n\n${data.get(
      "message"
    )}`
  );
  window.location.href = `mailto:${Bio.email}?subject=${subject}&body=${body}`;
};

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // { error: boolean, text: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!isEmailJsConfigured) {
      openMailClient(form.current);
      setStatus({ error: false, text: "Opening your email app..." });
      return;
    }

    try {
      setIsSending(true);
      setStatus(null);
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        form.current,
        { publicKey: EMAILJS.publicKey }
      );
      form.current.reset();
      setStatus({ error: false, text: "Message sent. Thank you!" });
    } catch (error) {
      setStatus({
        error: true,
        text: `Failed to send message: ${
          error?.text || error?.message || "Please try again later."
        }`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SectionContainer id="Contact" $marginTop="0px">
      <SectionWrapper>
        <SectionTitle>Contact</SectionTitle>
        <SectionDesc $marginBottom="0px">
          Feel free to reach out to me for any questions or opportunities!
        </SectionDesc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
            autoComplete="email"
            name="from_email"
            required
          />
          <ContactInput
            type="text"
            placeholder="Your Name"
            aria-label="Your Name"
            autoComplete="name"
            name="from_name"
            required
          />
          <ContactInput
            type="text"
            placeholder="Subject"
            aria-label="Subject"
            name="subject"
            required
          />
          <ContactInputMessage
            placeholder="Message"
            aria-label="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </ContactButton>
          {status && (
            <Status role="status" $error={status.error}>
              {status.text}
            </Status>
          )}
        </ContactForm>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Contact;
