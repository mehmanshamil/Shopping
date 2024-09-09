import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/features/product/ProductSlice";
import { SlBasket } from "react-icons/sl";

const FourSec = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const { data, loading } = useSelector((state) => state.product);

  return (
    <section>
      <div className="container bg-purple-700 p-5">
        <div className="head text-center">
          <p className="text-3xl text-white">Yeni məhsullar</p>
        </div>
        <div className="products flex flex-wrap gap-2 mx-auto w-11/12">
          {loading ? (
            <p>Loading...</p>
          ) : data && data.products ? (
            data.products.map((item) => (
              <div key={item.id} className="box w-80 h-[450px] bg- text-center ">
                <div className="image ">
                  <img
                    className="w-full h-72 object-cover"
                  src={item.images}
                    // src="data:image/jpeg;base64,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"
                    alt="product"
                  />
                </div>
                <div className="detail flex flex-col  justify-between h-36 items-center bg-white p-2 text-black ">
                  <h6 className="cursor-pointer m-2">
                    {item.title}
                  </h6>
                  <p>{item.price}</p>
                  <button className="flex items-center justify-center text-xl gap-3 rounded-2xl px-7 py-3 text-white bg-indigo-950 hover:bg:">
                    Səbətə at
                    <SlBasket />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Data tapilmadi</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FourSec;
