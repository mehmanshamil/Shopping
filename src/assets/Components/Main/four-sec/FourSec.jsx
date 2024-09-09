import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/features/product/ProductSlice";

const FourSec = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const { data, loading } = useSelector((state) => state.product);

  return (
    <section>
      <button className="btn bg-red-600 text-white">Dataları çek</button>
      {loading ? (
        <p>Loading...</p>
      ) : data && data.products ? (
        data.products.map((item) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>Data tapilmadi</p>
      )}
    </section>
  );
};

export default FourSec;
