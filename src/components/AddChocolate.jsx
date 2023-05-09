import { Link } from "react-router-dom";

const AddChocolate = () => {
  const handleAddChocolate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const country = form.country.value;

    const newChocolate = { name, category, country };

    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-base-200 p-5">
      <div>
        <Link to="/" className="btn gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          All Chocolate
        </Link>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-3/6">
          <div className="card  w-full shadow-2xl bg-base-100">
            <div className="mx-auto mt-8 text-center space-y-3">
              <h3 className="text-2xl font-semibold">New Chocolates</h3>
              <p>Use the below form to create a new product</p>
            </div>
            <form onSubmit={handleAddChocolate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type="text"
                  placeholder="country"
                  className="input input-bordered"
                  name="country"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="category"
                  className="input input-bordered"
                  name="category"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChocolate;
