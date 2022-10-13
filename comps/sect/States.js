import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import states from "../../constants/states";

export default function StatesComp({ products }) {
  const [productsToDisplay, setProductsToDisplay] = useState(products);
  const [deleted, setDeleted] = useState(false);
  const router = useRouter();

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsToDisplay(tempList);
  };

  const deleteProduct = (prod) => {
    console.log("Deleted Clicked");
    console.log(prod);
    Axios.delete(
      process.env.NEXT_PUBLIC_API_PRODUCTS,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: { id: prod._id },
      },
      prod
    ).then((res) => {
      setDeleted(true);

      console.log(
        "Successfully Deleted to: " + process.env.NEXT_PUBLIC_API_PRODUCTS
      );
      router.reload(window.location.pathname);
      setTimeout(() => {
        setDeleted(false);
      }, 5000);
    });
  };
  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="Search for a drug..."
          onChange={onSearch}
        />
      </div>
      {deleted && (
        <div className="deleted">
          <p>Deleted Successfully</p>
        </div>
      )}
      <table>
        <tr>
          <th>No</th>
          <th>Name</th>
        </tr>
        {states.map((state, index) => (
          <tr>
            <td>{index + 1}.</td>
            <td>{state.name}</td>

            <td>
              <AiFillDelete onClick={(event) => deleteProduct(product)} />
            </td>
            <td>
              <TiEdit />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
