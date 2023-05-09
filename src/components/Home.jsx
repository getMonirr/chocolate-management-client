import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedChocolates = useLoaderData();

  const [chocolates, setChocolates] = useState(loadedChocolates);

  const handleDeleteChoc = (id) => {
    fetch(`http://localhost:5000/chocolates/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const rest = chocolates.filter((choc) => choc._id !== id);
          setChocolates(rest);
        }
      });
  };

  return (
    <div className="mx-auto w-5/6 flex justify-center items-center">
      <tbody className="mx-auto">
        <tr
          className="rounded-md p-3"
          style={{
            background:
              "radial-gradient(173.43% 182.1% at 50% 49.99%, rgba(220, 141, 72, 0.3) 0%, rgba(211, 135, 69, 0.3) 4.19%, rgba(145, 87, 43, 0.3) 36.95%, rgba(94, 49, 22, 0.3) 66.01%, rgba(63, 26, 10, 0.3) 87.87%, rgba(51, 17, 5, 0.3) 100%)",
          }}
        >
          <th className="p-3">Image</th>
          <th>Name</th>
          <th>Country/Factory</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        {chocolates.map((choc) => (
          <tr className="divide-y" key={choc._id}>
            <td>
              <img className="h-24" src={choc.image} alt="img" />
            </td>
            <td>{choc.name}</td>
            <td>{choc.country}</td>
            <td>{choc.category}</td>
            <td className="space-x-3">
              <button
                onClick={() => handleDeleteChoc(choc._id)}
                className="btn bg-red-500 border-red-700 text-black hover:text-white"
              >
                Delete
              </button>
              <Link to={`/edit-chocolates/${choc._id}`} className="btn">
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Home;
