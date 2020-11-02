import React, { ChangeEvent, useState, FormEvent } from 'react';
//import api from '../../services/api';
import api from '../../services/api';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

const CreatePoint = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault(); 

        const {name, email, whatsapp} = formData;

        const data = {
            name,
            email,
            whatsapp  
        };

        console.log(data)
        await api.post('points', data);
        alert("Ponto de coleta cadastrado");
    }

    return (

        <form onSubmit={handleSubmit}>
        <fieldset>
        <div>
            <label>Nome</label>
            <input
                type= "text"
                name= "name"
                id= "name"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Email</label>
            <input
                type= "text"
                name= "email"
                id= "email"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Whatsapp</label>
            <input
                type= "text"
                name= "whatsapp"
                id= "whatsapp"
                onChange={handleInputChange}
            />
        </div>
        </fieldset>

        <button type="submit" >
            Cadastrar
        </button>
        
        </form>
    );
}
export default CreatePoint;