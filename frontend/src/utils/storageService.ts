
type Product = {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  _id: string;
  qty: number; 
};

const key = 'products';

export const storageService = {

  setItem: (product: Product) => {

    const store = localStorage.getItem(key);
    const parsedStore: Product[] = store ? JSON.parse(store) : [];

    const findIndex = parsedStore.findIndex(
      (addedProd) => addedProd._id === product._id
    );

    if (findIndex !== -1) {
      parsedStore[findIndex].qty += 1;
    } else {
      parsedStore.push({ ...product, qty: 1 });
    }

    localStorage.setItem(key, JSON.stringify(parsedStore));
  },

  getItem: (): Product[] => {
    const product = localStorage.getItem(key);
    return product ? JSON.parse(product) : [];
  },

  removeItem: (_id: string) => {
    const store = localStorage.getItem(key);
    if (!store) return;

    const parsedStore: Product[] = JSON.parse(store).filter(
      (prod: Product) => prod._id !== _id
    );

    localStorage.setItem(key, JSON.stringify(parsedStore));
  },

  clear: () => {
    localStorage.removeItem(key);
  },
};
