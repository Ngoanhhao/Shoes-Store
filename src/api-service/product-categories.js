import * as request from '../ultis/httpRequest';

const ProductList = async (index = 1) => {
    const data = await request.get(`categories/${index}`);
    return data;
};

export default ProductList;
