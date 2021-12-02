import React, { Fragment } from "react";

export function ContentHome(){
    
    return (
        <Fragment>
            <div className="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">

            <table className="table table-dark table-borderless">
                <thead>
                    <tr className="bg-danger.bg-gradient">
                       <td colSpan="4" className="bg-warning h1 text-center text-black"> Partidos en Vivo</td>
                    </tr>
                    <tr className="bg-black">
                        <th className="bg-black" scope="col">#</th>
                        <th className="bg-black" scope="col">Local</th>
                        <th className="bg-black" scope="col">Visitante</th>
                        <th className="bg-black" scope="col">Marcador</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Real Madrid FC</td>
                        <td>Barcelona FC</td>
                        <td>0 - 0</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Manchester United</td>
                        <td>Manchester City</td>
                        <td>2 - 1</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Bayern Munchen</td>
                        <td>Schalke 04</td>
                        <td>3 - 3</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Atletico Nacional</td>
                        <td>Atletico Junior</td>
                        <td>1 - 2</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>AS Mónaco</td>
                        <td>Paris Saint Germain</td>
                        <td>1 - 0</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Flamenco</td>
                        <td>Palmeiras</td>
                        <td>1 - 1</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Boca Juniors</td>
                        <td>River Plate</td>
                        <td>0 - 0</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Chelsea</td>
                        <td>Juventus</td>
                        <td>4 - 0</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Rayo Vallecano</td>
                        <td>Valencia</td>
                        <td>2 - 0</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Inter de Milán</td>
                        <td>AC Milán</td>
                        <td>1 - 2</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Millonarios</td>
                        <td>Santa fé</td>
                        <td>1 - 0</td>
                    </tr>
                </tbody>
            </table>
            </div>
           
        </Fragment>
    )
}