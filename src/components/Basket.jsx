import { BasketItem } from "./BasketItem"
export const Basket = ({cart,onMove, onAdd, onReduce, onRemove}) => {
    return <div className="col-md-5">
        <h3>{cart.length}</h3>
    <table className="table table-dark table-bordered">
        <thead>
            <tr>
                <th>product</th>
                <th>price</th>
                <th>count</th>
                <th>subtotal</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
        {cart.map(item => (
            <BasketItem key={item.id} item={item} onMove={onMove} onAdd={onAdd} onReduce={onReduce} onRemove={onRemove} />
          ))}
        </tbody>
    </table>
    </div>
}