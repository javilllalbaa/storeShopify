import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const loadProduct = createAsyncThunk('loadProduct', async (id, thunkAPI) => {
  let response = await Axios.get(`${apiConfig.baseUrl}/api/items`)
  return response;
})

export const loadProductSearch = createAsyncThunk('loadProductSearch', async (product, thunkAPI) => {
  return product;
})

let productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: {
      productList: [],
      isFetchingProductList: false,
      selectedProduct: false,
      product: [],
      isFetchingProduct: false
    }
  },
  extraReducers: {
    [loadProduct.pending]: (state, action) => {
      state.data = {
        isFetchingProduct: true,
        selectedProduct: true
      }
    },
    [loadProduct.fulfilled]: (state, action) => {
      state.data = {
        isFetchingProductList: false,
        selectedProduct: true,
        product: action.payload.data.products,
        isFetchingProduct: false
      }
    },
    [loadProduct.rejected]: (state, action) => {
      state.data = {
        isFetchingProduct: false,
        selectedProduct: false,
        product: {}
      }
    },
    [loadProductSearch.pending]: (state, action) => {
      state.data = {
        isFetchingProduct: true,
        selectedProduct: true
      }
    },
    [loadProductSearch.fulfilled]: (state, action) => {
      state.data = {
        isFetchingProductList: false,
        selectedProduct: true,
        product: action.payload,
        isFetchingProduct: false
      }
    },
    [loadProductSearch.rejected]: (state, action) => {
      state.data = {
        isFetchingProduct: false,
        selectedProduct: false,
        product: {}
      }
    }
  }
});

export const selectData = (state) => state.products.data;

export default productsSlice.reducer;