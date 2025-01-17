import Card from "./Card";

export default function ListCards({lista}){ 
    return (
        lista.map( produto => 
            <Card key={produto.id} titulo={produto.nome}>
                <h3>{produto.preco}</h3>
            </Card>
        )
    )
}