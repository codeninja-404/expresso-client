import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirm");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card items-center card-side shadow-xl border">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
      </div>
      <div className="card-actions justify-end">
        <div className="btn-group btn-group-vertical pr-4">
          <button className="btn bg-gray-700 text-white ">view</button>
          <Link
            to={`updateCoffee/${_id}`}
            className="btn bg-gray-700 text-white"
          >
            edit
          </Link>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn bg-red-500 text-white"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
