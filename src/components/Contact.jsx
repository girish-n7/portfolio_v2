import api from "../data/contactAPI.json";

export default function Contact() {
  return (
    // basic inputs and form with POST method calling the personal contactAPI

    <form action={`${api[0].url}`} id="contact--form" method="POST">
      <div className="contact--container">
        <p className="contact--head">Contact me</p>
        <input
          type="text"
          className="contact--input"
          name="contactName"
          placeholder="Name"
          required
          autoComplete="false"
        ></input>
        <input
          type="email"
          className="contact--input"
          name="contactMail"
          placeholder="e-mail"
          required
          autoComplete="false"
          autoCapitalize="false"
        ></input>
        <input
          type="text"
          className="contact--input"
          name="contactSubject"
          placeholder="Subject"
          required
          autoComplete="false"
        ></input>
        <textarea
          rows={5}
          type="text"
          className="contact--input"
          name="contactMessage"
          placeholder="Type your message here"
          required
          autoComplete="false"
        ></textarea>
        <button type="submit" className="contact--send">
          Send
        </button>
      </div>
    </form>
  );
}
