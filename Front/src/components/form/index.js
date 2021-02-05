import {useState} from 'react'

export default function CadGame() {
    const [dados, setDados] = useState({
        nome_produto : "",
        preco_produto : ""
    })

    function handleChange({target}) {
        const {id, value} = target
        setDados({...dados, [id] : value})
        console.log(dados)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:4000/cad', {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(dados)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome_produto" id="nome_produto" onChange={handleChange} placeholder="Insira o nome do produto" />
            <input type="number" name="preco_produto" id="preco_produto" onChange={handleChange} placeholder="Insira o preco do produto" />
            <input type="submit" value="cadastrar" />
            
        </form>
    )
}