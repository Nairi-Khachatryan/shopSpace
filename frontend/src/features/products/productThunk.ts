type ReqBody = {
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
};


type UpdateProductResponse = {
  success: boolean;
  message: string;
  data: {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
  };
};

export const createProduct = async (reqBody: ReqBody) => {
  const bodyToSend = { ...reqBody, price: +reqBody.price };

  const res = await fetch('http://localhost:5050/products/admin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyToSend),
  });

  if (!res.ok) {
    throw new Error('Product Creation failed');
  }

  return (await res.json()) as {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
  };
};

export const getAllProducts = async () => {
  const res = await fetch('http://localhost:5050/products', {
    method: 'GET',
  });

  if (!res.ok) {
    return { success: false, message: 'Error Fetching' };
  }

  const json = await res.json();
  return json.data;
};

export const deleteProduct = async (id: string) => {
  const res = fetch(`http://localhost:5050/products/${id}`, {
    method: 'DELETE',
  });

  return res;
};

export const updateProduct = async (
  id: string,
  reqBody: ReqBody
): Promise<UpdateProductResponse> => {
  const res = await fetch(`http://localhost:5050/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reqBody),
  });

  return await res.json();
};
