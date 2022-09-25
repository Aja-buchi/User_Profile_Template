import axios from "./axios";

export default axios.create({
  baseURL: "https://cashout-pay.herokuapp.com/",
});

