import faker from 'faker';
import ShopItemModel from 'models/ShopItem';

const sleep = ms => new Promise((resolve)=>setTimeout(resolve, ms));
const SLEEP_TIME = 1000;


const ShopItem = {
    all: async () => {
        await sleep(SLEEP_TIME);
        let result = [];
        for (let i = 0; i < faker.random.number({min: 10, max: 20}); i++) {
            let shopItem = ShopItemModel.random();
            shopItem.id = i;   
            result.push(shopItem);
        }            
        return result;
    },
    get: async id => {
        await sleep(SLEEP_TIME);  
        let shopItem = ShopItemModel.random();
        shopItem.id = id;          
        return shopItem;
    },
    del: async id => {
        await sleep(SLEEP_TIME * faker.random.number({min: 1, max: 3}));
        if (faker.random.number({min: 1, max: 5}) === 1) {
            throw new Error('Something terrible happened');
        } else {
            return true;
        }
    },
    update: async shopItem => {
        await sleep(SLEEP_TIME * faker.random.number({min: 1, max: 3}));
        if (faker.random.number({min: 1, max: 5}) === 1) {
            throw new Error({title: 'There‘s something wrong'});
        } else {
            return shopItem;
        }
    },
    create: async shopItem => {
        await sleep(SLEEP_TIME * faker.random.number({min: 1, max: 3}));
        if (faker.random.number({min: 1, max: 5}) === 1) {
            throw new Error({title: 'There‘s something wrong'});
        } else {
            shopItem.id = faker.random.number();
            return shopItem;
        }
    }
};

export default {
    ShopItem
};