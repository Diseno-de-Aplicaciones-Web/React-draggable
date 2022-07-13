function Card ({element, onDropMethod}) {

    function dragStart (ev) {
        ev.dataTransfer.setData('card_order', element.order);
        console.log("drag", element.order);
    }

    function drop (ev) {
        const foreignCardOrder = parseInt(ev.dataTransfer.getData('card_order'));
        console.log("drop", foreignCardOrder);
        onDropMethod(element.order, foreignCardOrder)
    }

    function dragOver (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        console.log("dragOver", element.order);
    }



    return (
        <li
            draggable
            onDrop={drop}
            onDragOver={dragOver}
            onDragStart={dragStart}
        >
            {element.title}
        </li>
    )
}

export default Card