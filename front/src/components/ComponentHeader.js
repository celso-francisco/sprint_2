import banner3 from '../assets/banner3.png'


function ComponentHeader(){

    return(
        <div> 

                <div className="user">
                     <span>Usuário</span>
                </div>

                <div className="banner3">
                    {/* <spa>Banner3</spa>*/}
                    <img src={banner3} alt="Banner"/>
                </div>

        </div>

    )


}

export default ComponentHeader