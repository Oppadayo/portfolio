import './styles.css'

export function Contact(){
  return (
    <section className="contact section" id='contact'>
      <div className="container">
        <div className="contact-info">
          <h3 className="sub-heading">Contato</h3>
          <h1 className="heading">Como entrar em contato.</h1>
          <p className="text">Se interessou? Me manda uma mensagem!</p>

          <div className="contact-link">
            <a href="mailto:paula.correapcs@gmail.com" className="link">paula.correapcs@gmail.com</a>
            <i className="uil uil-arrow-right"></i>        
          </div>

          <div className="contact-link">
            <a href="https://wa.me/61999321368" className="link">WhatsApp</a>
            <i className="uil uil-arrow-right"></i>       
          </div>          
        </div>

        <form action="index.html" className="contact-form">
          <h3>Me mande uma mensagem</h3>
          <input type='text' className='form-input' placeholder='Seu nome' required />
          <input type='email' className='form-input' placeholder='Seu e-mail' required />
          <textarea placeholder='Sua mensagem'  className="form-input" required></textarea>
          <input type="submit" value='Enviar' className="btn" />
        </form>
      </div>

     
    </section>
  )
}