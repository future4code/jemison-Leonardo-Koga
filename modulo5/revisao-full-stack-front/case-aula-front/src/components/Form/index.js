import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useRequestData } from '../../hooks/useRequestData';
import { MyOrderForm } from './style'

export default function Form() {
    const [visibleButtonClient, setVisibleButtonClient] = useState(true)
    //Dados do For
    const [form, onChange, restForm] = useForm({ client: "", product: "", qty: 1, deliveryDate: "" })
    //Dados clientes
    const [dataClient, isLoadingClient, errorClient, upClient, setUpClient] = useRequestData('http://localhost:3003/clients');
    //Dados produtos
    const [dataProduct, isLoadingProduct, errorProduct] = useRequestData('http://localhost:3003/products');
    //Cliente selicionado
    const selectClient = !isLoadingClient && dataClient && dataClient.find((dClient) => {
        return dClient.name === form.client;
    })

    //Adicionar cliente
    const addClient = () => {
        const body =
        {
            "name": form.client
        }
        axios.post('http://localhost:3003/client', body, {})
            .then((response) => {
                setUpClient(!upClient)
                console.log(response)
            }

            ).catch((error) => {
                console.log(error.message);
            })
    }

    //Selecionar cliente
    const selectCient = () => {
        setVisibleButtonClient(!visibleButtonClient)
    }


    return (
        <MyOrderForm>
            <div>
                {selectClient && !visibleButtonClient && <h1>Client:{selectClient.name}</h1>}
            </div>
            {/* client */}
            <div id='selec-client'>

                <label htmlFor='client'>Nome do Cliente</label>
                <input id='client' list='dataClient' name='client' onChange={onChange} value={form.client}></input>
                <datalist id='dataClient'>
                    {/* <option> Leo </option>
                    <option> Ju </option>
                    <option> Cris </option>
                    <option> Ha </option> */}
                    {isLoadingClient && !dataClient && <option>Carregando...</option>}
                    {!isLoadingClient && dataClient && dataClient.map((client) => {
                        return <option key={client.id}>
                            {client.name}
                        </option>
                    })}
                </datalist>
                {!selectClient && (form.client.length > 2) &&
                    <button type='button' onClick={() => { addClient() }}>Cadastrar Cliente</button>}

                {selectClient && visibleButtonClient &&
                    <button type='button' onClick={() => { selectCient() }}>Confirmar</button>}

            </div>
            {/* product */}
            <div id='select-product'>
                <label htmlFor='product'>Produto</label>
                <input id='product' list='dataProduct'></input>
                <datalist id='dataProduct'>
                    {/* <option> Banana </option>
                    <option> Mamão </option>
                    <option> Maçã </option>
                    <option> Goiaba </option> */}
                    {isLoadingProduct && dataProduct && <option>Carregando...</option>}
                    {!isLoadingProduct && dataProduct && dataProduct.map((product) => {
                        return <option key={product.id}>
                            {product.name}
                        </option>
                    })}
                </datalist>
                <label>Quantidade</label>
                <input id='qty' type={"number"}></input>
                <p>R$: 1000</p>
                <button>Ok</button>
            </div>
            {/* order */}
            <div id='order'>
                <label htmlFor='deliveryDate'>Data de entrega (DD/MM/AAAA)</label>
                <input id='deliveryDate'></input>
                <button>Confirmar</button>
            </div>
        </MyOrderForm>
    );
}