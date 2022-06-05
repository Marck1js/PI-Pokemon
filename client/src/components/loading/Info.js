import React from "react";
import Loading from "./Loading";
import Estilos from './Info.module.css'
export default function Show () {


    return (
        <div className={Estilos.cont}>
            <Loading/>
        </div>
    )
}