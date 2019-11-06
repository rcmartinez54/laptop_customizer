import React, { Component } from 'react';

class CartTotal extends Component {
    render() {
        const total = Object.keys(this.props.selected)
            .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);

        return(
            <div className="cart__total">
                <div className="cart__total__label">
                    Your Price:
                </div>
                <div className="cart__total__value">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}
                </div>
            </div>
        )
    }
}

export default CartTotal;