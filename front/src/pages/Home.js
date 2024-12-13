// https://reactrouter.com/en/main/hooks/use-navigate
import { useNavigate } from 'react-router'
import banner from '../assets/banner2.jpg'

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="content-product">
      <section className="banner">
        <img src={banner} alt="Banner2"/>
        <div className="text-intro">
            <p> ENTRE E CONFIRA NOSSAS PROMOÇÕES!! </p>
            <button className="more-info" onClick={ () => navigate('/products') } >CLIQUE AQUI</button>
        </div>
      </section>

    </div>
  )
}
