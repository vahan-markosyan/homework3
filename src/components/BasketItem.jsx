export const BasketItem = ({item, onMove, onAdd, onReduce, onRemove}) => {
    return (<tr>

      <td>{item.name}</td>
      <td>{item.price} USD</td>
      <td>{item.count}</td>
      <td>{item.price * item.count} USD</td>
      <td>
        <button onClick={() => onAdd(item.id)} className="btn btn-primary">+</button>
        <button onClick={() => onReduce(item.id)} className="btn btn-primary">-</button>
        <button onClick={() => onRemove(item.id)} className="btn btn-primary">x</button>
      </td>
    </tr>)
}