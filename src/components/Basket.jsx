import { useEffect } from "react"
import { BasketItem } from "./BasketItem"
import { Product } from "./Product"
export const Basket = ({cart, onMove, onAdd, onReduce, onRemove, total, setTotal}) => {
    useEffect(() => {
        const totalItems = cart.reduce((a, item) => a + item.count, 0)
        setTotal(totalItems)
    },[cart])
    return <div className="col-md-5">
        <h3>{total}</h3>
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
            <BasketItem key={item.id} item={item} onMove={onMove} onAdd={onAdd} onReduce={onReduce} onRemove={onRemove} total = {total} />
          ))}
        </tbody>
    </table>
    </div>
}