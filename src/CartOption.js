import React from 'react';

class CartOption extends React.Component {
    render() {
        return (
            <div className="cart__option">
                <div className="cart__option__label">
                    {this.props.label}
                </div>
                <div className="cart__option__value">
                    {this.props.name}
                </div>
                <div className="cart__option__cost">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.cost)}
                </div>
            </div>
        )
    }
}

export default CartOption;