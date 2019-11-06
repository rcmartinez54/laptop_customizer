import React from 'react';
import CartOption from './CartOption';
import CartTotal from './CartTotal';

class Cart extends React.Component {
    render() {
        const contents = Object.keys(this.props.selected).map(key => (
            <CartOption 
                key={key}
                label={key}
                name={this.props.selected[key].name}
                cost={this.props.selected[key].cost}
            />
        ));

        return (
            <section className="cart">
                <h3>Your Computer</h3>
                {contents}
                <CartTotal selected={this.props.selected} />
            </section>
        )
    }
}

export default Cart;