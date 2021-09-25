
const BUTTONS = {
    HEADER_SHOP: ('[data-testid=home_header_shop_link]'),
    MATTRESS: ('[data-testid=home_header_shop_mattress_link_menu]'),
    ADD_TO_CART: ('[data-testid=addtocart_btn]'),
    CON_TO_BILL: ('#checkout_shipping_continue_btn'),
    CON_TO_REV: ('#checkout_payment_continue_btn')
};
const SHIP = {
    EMAIL: ('#email'),
    FULL_NAME: ('#shippingAddress_fullName'),
    ADDRESS: ('#shippingAddress_line1'),
    CITY: ('#shippingAddress_city'),
    STATE: ('#shippingAddress_state'),
    ZIP: ('#shippingAddress_zip'),
    NUMBER: ('#shippingAddress_phone')
};

module.exports = {
    BUTTONS,
    SHIP
}