import './Banner.css';

import {BsCheckCircleFill} from 'react-icons/bs'

const Footer = () => {
  return (
    
    <section id="banner">

      <div className='bannerConainer'>
        <div className="titleFooter">
          <h1><strong>Para quem é o Curso?</strong></h1>
        </div>
        <div className="contentFooter">
          <div>
            <i className="fas fa-check-circle" style={{color: '#eca008'}}></i>
            <p>Para quem já trabalha na área e quer se atualizar</p>
          </div>
          <div>
            <i className="fas fa-check-circle" style={{color: '#eca008'}}></i>
            <p>Para quem está começando do zero nunca teve contato com o mundo de entregas</p>
          </div>
          <div>
            <i className="fas fa-check-circle" style={{color: '#eca008'}}></i>
            <p>Para quem deseja mais tempo nos seus dias</p>
          </div>
          <div>
            <i className="fas fa-check-circle" style={{color: '#eca008'}}></i>
            <p>Para quem quer fazer parte dessa área que só cresce no mercado</p>
          </div>
        </div>
      </div>

    </section>
    
  )
}

export default Footer