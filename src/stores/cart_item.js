import { observable, action } from "mobx";

export class CartItemStore {

    @observable cartItemsRegistry = observable([]);

    clear() {
        this.cartItemsRegistry.clear();
    }

    get(id) {
        return this.cartItemsRegistry.get(id);
    }

    @action loadAll() {
        if(window.localStorage.getItem('cartItems') === null)
            window.localStorage.setItem('cartItems',JSON.stringify([]))
        this.cartItemsRegistry = JSON.parse(window.localStorage.getItem('cartItems'))
    }

    @action create(shopItem) {
        if(this.cartItemsRegistry.toJS().findIndex((item)=>item.id === shopItem.id) !== -1)
            return false;
        this.cartItemsRegistry.push(shopItem);
        window.localStorage.setItem('cartItems',JSON.stringify(this.cartItemsRegistry.toJS()))
    }

    @action delete(id) {
        
    }
}

export default new CartItemStore();