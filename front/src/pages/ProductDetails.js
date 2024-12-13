import { useLocation, useNavigate, useParams } from "react-router"
import FormDialog from "../components/FormDialog";
import Grid2 from "@mui/material/Unstable_Grid2";
import ComponentHeader from "../components/ComponentHeader"
import Icones from "../components/Icones"



export default function ProductDetails() {

    let { state } = useLocation();
    // console.log(useLocation());
    let { id } = useParams();

    // Explicado no componente Home
    const navigate = useNavigate();

    return (
        <div className="detailed-content">
            <header>
               <ComponentHeader />
               <Icones />
            </header>

            <div>
    
                <button className="back" onClick={() => navigate('/products')}>Voltar</button>
                
                <div>
                    <img className="detailed-image" src={state.p.image} alt="product" />
                </div>
                
                <div>
                    <h2>{state.p.title} - {id}</h2>
                    <p>{state.p.description}</p>

                    <Grid2
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                       
                       <FormDialog />

                    </Grid2> 

                </div>
            </div>
        </div>
    )
}