const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-[#EADDCA] container my-10 rounded-2xl mx-auto p-5">
      <h2 className="text-center text-4xl font-bold uppercase ">
        Add a coffee
      </h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row 1 */}
        <div className="md:flex  gap-4 p-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold uppercase">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold uppercase">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        {/* form suppler and taste row 2 */}
        <div className="md:flex  gap-4 p-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold uppercase">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold uppercase">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Coffee Taste"
              className="input input-bordered"
            />
          </div>
        </div>
        {/* form catagory and details row 3*/}
        <div className="md:flex  gap-4 p-2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold uppercase">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold uppercase">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Coffee Details"
              className="input input-bordered"
            />
          </div>
        </div>
        {/* form Photo url  row 4*/}
        <div className=" p-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold uppercase">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="p-2">
          <input
            className="btn btn-sm btn-block hover:border-green-500 border-[#722F37] border-2 text-[#722F37]  bg-[#D2B48C] normal-case font-extrabold"
            type="submit"
            value="Add Coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
