import productsReducer, {
    loadProduct
} from "./../products"
import axios from 'axios';

const response = {
    "item": {
        "id": "MLA680573238",
        "title": "Zapato Vulcano",
        "price": {
            "currency": "ARS",
            "amount": 2374
        },
        "picture": "http://http2.mlstatic.com/D_645465-MLA31037702912_062019-I.jpg",
        "condition": "new",
        "free_shipping": false,
        "sold_quantity": 3126,
        "description": "ESTAMOS ENVIANDO CON NORMALIDAD!!!!!!!\n\n\nArt. 900 en color TOSTADO, NEGRO, AZUL \nNos dedicamos a la elaboración de zapatos masculinos, modelos clásicos, con el fin de brindar elegancia y comodidad.\nTambién vendemos por MAYOR\n\nMERCADOLIDER PLATINUM\n\n• PREGUNTAS FRECUENTES \n\n- STOCK\nEstán disponibles todos los talles exhibidos. En caso de que no encuentres el talle buscado, pregúntanos por disponibilidad \n\n- PAGOS\nPodrás abonar tus compras a través de Mercado Pago con tarjeta de crédito, debito, transferencia bancaria o efectivo en RapiPago y PagoFácil.\n\n- ENVÍO\n* Costo y Tiempo de Entrega: Podés consultarlos en la parte superior a la publicación, a la derecha de la foto, una vez que tengas ingresado el código postal.\n\n-RETIRO EN PICK UP VULCANO\nEn el método de envío seleccioná la opción: \"Retiro en el domicilio del vendedor\". Una vez realizada la compra, coordinamos para que retires el producto en nuestro PICK UP.",
        "attributes": [
            {
                "id": "BRAND",
                "name": "Marca",
                "value_id": "5627653",
                "value_name": "Vulcano BA",
                "value_struct": null,
                "values": [
                    {
                        "id": "5627653",
                        "name": "Vulcano BA",
                        "struct": null
                    }
                ],
                "attribute_group_id": "OTHERS",
                "attribute_group_name": "Otros"
            }
        ]
    }
}

jest.mock('axios', () => {
    return {
        get: jest.fn().mockReturnValue(response)
    }
});

const data_item = {
    data: {
        "products": [
            {
                "id": 8005666078999,
                "title": "dawn snow",
                "body_html": null,
                "vendor": "test-options-javi",
                "product_type": "",
                "created_at": "2022-11-15T18:09:00-05:00",
                "handle": "dawn-snow",
                "updated_at": "2022-11-16T06:15:27-05:00",
                "published_at": null,
                "template_suffix": null,
                "status": "active",
                "published_scope": "web",
                "tags": "",
                "admin_graphql_api_id": "gid://shopify/Product/8005666078999",
                "variants": [
                    {
                        "id": 44054249144599,
                        "product_id": 8005666078999,
                        "title": "Default Title",
                        "price": "9.41",
                        "sku": "",
                        "position": 1,
                        "inventory_policy": "deny",
                        "compare_at_price": null,
                        "fulfillment_service": "manual",
                        "inventory_management": null,
                        "option1": "Default Title",
                        "option2": null,
                        "option3": null,
                        "created_at": "2022-11-15T18:09:01-05:00",
                        "updated_at": "2022-11-15T18:09:01-05:00",
                        "taxable": true,
                        "barcode": null,
                        "grams": 0,
                        "image_id": null,
                        "weight": 0.0,
                        "weight_unit": "kg",
                        "inventory_item_id": 46102296396055,
                        "inventory_quantity": 0,
                        "old_inventory_quantity": 0,
                        "requires_shipping": true,
                        "admin_graphql_api_id": "gid://shopify/ProductVariant/44054249144599"
                    }
                ],
                "options": [
                    {
                        "id": 10172558803223,
                        "product_id": 8005666078999,
                        "name": "Title",
                        "position": 1,
                        "values": [
                            "Default Title"
                        ]
                    }
                ],
                "images": [
                    {
                        "id": 39860528251159,
                        "product_id": 8005666078999,
                        "position": 1,
                        "created_at": "2022-11-16T06:15:26-05:00",
                        "updated_at": "2022-11-16T06:15:26-05:00",
                        "alt": null,
                        "width": 2400,
                        "height": 1350,
                        "src": "https://cdn.shopify.com/s/files/1/0678/1684/9687/products/helados.jpg?v=1668597326",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/39860528251159"
                    }
                ],
                "image": {
                    "id": 39860528251159,
                    "product_id": 8005666078999,
                    "position": 1,
                    "created_at": "2022-11-16T06:15:26-05:00",
                    "updated_at": "2022-11-16T06:15:26-05:00",
                    "alt": null,
                    "width": 2400,
                    "height": 1350,
                    "src": "https://cdn.shopify.com/s/files/1/0678/1684/9687/products/helados.jpg?v=1668597326",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/39860528251159"
                }
            }
        ]
    }
}

describe('products reducer', () => {
    const initialState = {
        data: {
            productList: [],
            isFetchingProductList: false,
            selectedProduct: false,
            product: [],
            isFetchingProduct: false
        }
    };

    it('should handle initial state', () => {
        // console.log('test javi', productsReducer(undefined, { type: 'unknown' }))
        expect(productsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    describe('reducers loadProduct', () => {

        it('sets fetching true when loadProduct is pending', () => {
            const action = { type: loadProduct.pending.type };
            const state = productsReducer(initialState, action);
            expect(state.data.isFetchingProduct).toEqual(true);
            expect(state.data.selectedProduct).toEqual(true);
        });

        it('sets the words when loadProduct is fulfilled', async() => {
            const action = { type: loadProduct.fulfilled.type, payload: data_item };
            const state = productsReducer(initialState, action);
            expect(state.data.product).toEqual(data_item.data.products);
            expect(state.data.isFetchingProductList).toEqual(false);
            expect(state.data.isFetchingProduct).toEqual(false);
        });

        it('sets fetching false when loadProduct is rejected', () => {
            const action = { type: loadProduct.rejected.type, error: { message: 'error' } };
            const state = productsReducer(initialState, action);
            expect(state.data.isFetchingProduct).toEqual(false);
            expect(state.data.selectedProduct).toEqual(false);
        });

        it('Should receive the product detail from loadProduct', async () => {
            const dispatch = jest.fn();
            const result = await loadProduct()(dispatch);
            expect(result.type).toBe('loadProduct/fulfilled');
        });

    });

});
