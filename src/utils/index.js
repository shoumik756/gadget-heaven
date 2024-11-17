import toast from "react-hot-toast";

const addToCart = (gadget) => {
    const cart = getAllCart();
    cart.push(gadget);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success(`${gadget.product_title} Successfully Added In Cart`);
};

const getAllCart = () => {
    const all = localStorage.getItem('cart');
    return all ? JSON.parse(all) : [];
};

const removeFromCart = (gadget) => {
    let cart = getAllCart();
    cart = cart.filter(item => item.product_id != gadget.product_id);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success("Item removed from cart");
};

const addWishList = (gadget) => {
    const wishList = getWishList();
    const isExist = wishList.find(item => item.product_id == gadget.product_id);

    if (isExist) {
        toast.error(`${gadget.product_title} Already Added In Wishlist`);
        return;
    }

    wishList.push(gadget);
    localStorage.setItem('WishList', JSON.stringify(wishList));
    toast.success(`${gadget.product_title} Successfully Added in Wishlist`);
};

const getWishList = () => {
    const all = localStorage.getItem('WishList');
    return all ? JSON.parse(all) : [];
};



export { addToCart, getAllCart, removeFromCart, addWishList, getWishList };
