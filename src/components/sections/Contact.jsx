import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  ArrowOutward,
  EmailOutlined,
  LocationOnOutlined,
  SendRounded,
} from "@mui/icons-material";
import { Bio } from "../../data";
import Section from "../common/SectionLayout";
import Reveal from "../common/Reveal";
import { surface } from "../common/CardStyles";
import { SocialLinks } from "../layout/Footer";

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 20px;
  align-items: stretch;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  ${surface}
  height: 100%;
  padding: 28px;

  @media (max-width: 520px) {
    padding: 22px 18px;
  }
`;

const InfoPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: linear-gradient(
      160deg,
      ${({ theme }) => theme.primarySoft},
      transparent 55%
    ),
    ${({ theme }) => theme.surface};
`;

const InfoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const InfoText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.textMuted};
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14.5px;
  color: ${({ theme }) => theme.textMuted};
  min-width: 0;

  > svg {
    flex-shrink: 0;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  a:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Spacer = styled.div`
  margin-top: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.textDim};

  input,
  textarea {
    width: 100%;
    padding: 12px 14px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 15px;
    color: ${({ theme }) => theme.text};
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.radius.md};
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  textarea {
    resize: vertical;
    min-height: 130px;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.textDim};
  }

  input:focus,
  textarea:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primarySoft};
  }
`;

const Submit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 22px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme }) => theme.onPrimary};
  background: ${({ theme }) => theme.gradient};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  svg {
    font-size: 18px;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 14px 32px -12px ${({ theme }) => theme.primaryGlow};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Status = styled.p`
  font-size: 14px;
  color: ${({ theme, $error }) => ($error ? theme.danger : theme.primary)};
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
    <Section
      id="Contact"
      index="06"
      title="Contact"
      description="Feel free to reach out to me for any questions or opportunities!"
    >
      <Grid>
        <Reveal>
          <InfoPanel>
            <InfoTitle>Let's talk</InfoTitle>
            <InfoText>{Bio.availability}.</InfoText>
            <InfoList>
              <InfoItem>
                <EmailOutlined />
                <a href={`mailto:${Bio.email}`}>{Bio.email}</a>
              </InfoItem>
              <InfoItem>
                <LocationOnOutlined />
                {Bio.location}
              </InfoItem>
            </InfoList>
            <Spacer>
              <SocialLinks />
            </Spacer>
          </InfoPanel>
        </Reveal>

        <Reveal delay={0.08}>
          <Panel>
            <Form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Field>
                  Your name
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field>
                  Your email
                  <input
                    type="email"
                    name="from_email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                  />
                </Field>
              </Row>
              <Field>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </Field>
              <Field>
                Message
                <textarea
                  name="message"
                  placeholder="Tell me a bit about the role or project..."
                  rows={5}
                  required
                />
              </Field>
              <Submit type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send message"}
                {isSending ? <SendRounded /> : <ArrowOutward />}
              </Submit>
              {status && (
                <Status role="status" $error={status.error}>
                  {status.text}
                </Status>
              )}
            </Form>
          </Panel>
        </Reveal>
      </Grid>
    </Section>
  );
};

export default Contact;
