import {React, Fragment} from "react";

export function FormSaldo(){
    return(
    <Fragment>
        <div className="modal modal-signin position-static d-block bg-secondary py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Saldo</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit="" action="#">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="txtmonto" value="$200000" readOnly />
                            <label htmlFor="txtmonto">Saldo Actual</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="txtsaldo"  />
                            <label htmlFor="txtmonto">Saldo Agregar</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                        
                        </div>  
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Agregar Saldo</button>
                        
                        </form>
                        <br />
                        
                    </div>
                    </div>
                </div>
                </div>
</Fragment>
    )}