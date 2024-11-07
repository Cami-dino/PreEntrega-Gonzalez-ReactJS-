
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className="cart-widget position-relative">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3 {/* Número hardcodeado */}
            </span>
        </div>
    );
};

export default CartWidget;
