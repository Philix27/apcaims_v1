import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
// import states from "../../constants/states";

export default function StatesComp() {
  const states = [
    { name: "Abia" },
    { name: "Akwa Ibom" },
    { name: "Anambra" },
    { name: "Bauchi" },
    { name: "Bayelsa" },
    { name: "Benue" },
    { name: "Borno" },
    { name: "Cross River" },
    { name: "Delta" },
    { name: "Ebonyi" },
    { name: "Edo" },
    { name: "Ekiti" },
    { name: "Enugu" },
    { name: "Gombe" },
    { name: "Imo" },
    { name: "Jigawa" },
    { name: "Kaduna" },
    { name: "Kano" },
    { name: "Katsina" },
    { name: "Kebbi" },
    { name: "Kogi" },
    { name: "Kwara" },
    { name: "Lagos" },
    { name: "Nasarawa" },
    { name: "Niger" },
    { name: "Ogun" },
    { name: "Ondo" },
    { name: "Osun" },
    { name: "Oyo" },
    { name: "Plateau" },
    { name: "Rivers" },
    { name: "Sokoto" },
    { name: "Taraba" },
    { name: "Yobe" },
    { name: "Zamfara" },
    { name: "Federal Capital Territory" },
  ];

  const [statesToDisplay, setStatesToDisplay] = useState(states);
  const [deleted, setDeleted] = useState(false);
  const router = useRouter();

  //   print(states);
  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = states.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setStatesToDisplay(tempList);
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
    <div className="section">
      <div className="tableSection">
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
            <th>View LGA</th>
          </tr>
          {states.map((state, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{state.name}</td>

              <td>
                <AiFillDelete onClick={(event) => deleteProduct(product)} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
