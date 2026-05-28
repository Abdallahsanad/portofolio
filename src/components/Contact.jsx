export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-box reveal">
        <h2>Let's <span>Work Together</span></h2>
        <form action="https://formspree.io/f/mvzywgqv" method="POST">
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Tell me about your project" rows="5" required></textarea>
            <button type="submit" className="send-btn">Send Message <i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </section>
  );
}
