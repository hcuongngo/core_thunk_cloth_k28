import fakeApi from "../../api";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fakeApi().get("")
      console.log("response", response);

      // dispatch
    } catch (error) {
      console.log("error", error);
    }
  }
}

export const fetchProduct = (productId) => {

  return async (dispatch) => {
    try {
      const response = await fakeApi().get(`/${productId}`)
      console.log("response product detail", response)

      //dispatch
    } catch (error) {
      console.log("error", error);
    }
  }
}

