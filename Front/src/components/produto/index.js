
export default function Produto(props) {
    
    return(
        <span>
            <ul>
            
                    <li>nome: {props.dados.nome_produto}</li>
                    <li>valor: R$ {props.dados.preco_produto}</li>
                
            </ul>
        </span>
    )
}