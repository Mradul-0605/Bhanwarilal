import { useEffect, useState } from "react";

function Dashboard() {

    useEffect(() => {

        const token =
        localStorage.getItem(
          "token"
        );

        if (!token) {

          window.location.href =
            "/owner-login";

        }

      }, []);

  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [newDescription, setNewDescription] = useState("");

  const [section, setSection] =useState("sweets");

  const fetchSweets = () => {
    fetch(`http://localhost:5000/${section}`)
      .then((res) => res.json())
      .then((data) => setSweets(data));
  };

  useEffect(() => {
    fetchSweets();
  }, [section]);

  const addSweet = async () => {

    if (
      !newName ||
      !newPrice ||
      !imageFile
    ) return;

    const formData =
      new FormData();

    formData.append(
      "file",
      imageFile
    );

    formData.append(
      "upload_preset",
      "Bhanwarilal"
    );

    const cloudinaryRes =
      await fetch(
        "https://api.cloudinary.com/v1_1/drbg3rivw/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

    const cloudinaryData =
      await cloudinaryRes.json();

    await fetch(
      `http://localhost:5000/${section}`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name: newName,
          price: Number(newPrice),
          image: cloudinaryData.secure_url,
          description: newDescription,
        }),
      }
    );

    setNewName("");
    setNewPrice("");
    setNewDescription("");
    setImageFile(null);

    fetchSweets();

  };

  return (
  <div className="min-h-screen bg-slate-100 p-6">

    {/* HEADER */}

    <div className="flex flex-col md:flex-row justify-between items-center mb-8">

      <div>

        <h1 className="text-4xl font-bold text-slate-800">
          Bhanwarilal Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Manage Products, Prices & Images
        </p>

      </div>

      <button
        onClick={() => {

          localStorage.removeItem(
            "token"
          );

          window.location.href =
            "/owner-login";

        }}
        className="
        mt-4 md:mt-0
        bg-red-500
        hover:bg-red-600
        text-white
        px-5
        py-3
        rounded-xl
        shadow
        "
      >
        Logout
      </button>

    </div>

    {/* SECTION BUTTONS */}

    <div className="flex gap-3 mb-8 flex-wrap">

      <button
        onClick={() =>
          setSection("sweets")
        }
        className={`
        px-5 py-3 rounded-xl font-semibold transition

        ${
          section === "sweets"
          ? "bg-yellow-500 text-white shadow-lg"
          : "bg-white border"
        }
        `}
      >
        🍬 Sweets
      </button>

      <button
        onClick={() =>
          setSection("namkeen")
        }
        className={`
        px-5 py-3 rounded-xl font-semibold transition

        ${
          section === "namkeen"
          ? "bg-yellow-500 text-white shadow-lg"
          : "bg-white border"
        }
        `}
      >
        🥨 Namkeen
      </button>

      <button
        onClick={() =>
          setSection("giftboxes")
        }
        className={`
        px-5 py-3 rounded-xl font-semibold transition

        ${
          section === "giftboxes"
          ? "bg-yellow-500 text-white shadow-lg"
          : "bg-white border"
        }
        `}
      >
        🎁 Gift Boxes
      </button>

    </div>

    {/* ADD PRODUCT */}

    <div className="
    bg-white
    rounded-2xl
    shadow-md
    p-6
    mb-8
    ">

      <h2 className="text-2xl font-bold mb-5">

        Add New Product

      </h2>

      <div className="
      flex
      flex-wrap
      gap-3
      items-center
      ">

        <input
          type="text"
          placeholder="Product Name"
          value={newName}
          onChange={(e) =>
            setNewName(e.target.value)
          }
          className="
          border
          rounded-xl
          px-4
          py-3
          flex-1
          "
        />

        <input
          type="number"
          placeholder="Price"
          value={newPrice}
          onChange={(e) =>
            setNewPrice(e.target.value)
          }
          className="
          border
          rounded-xl
          px-4
          py-3
          w-40
          "
        />

        <input
          type="text"
          placeholder="Description (Optional)"
          value={newDescription}
          onChange={(e) =>
            setNewDescription(e.target.value)
          }
          className="
          border
          rounded-xl
          px-4
          py-3
          flex-1
          "
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImageFile(
              e.target.files[0]
            )
          }
          className="
          border
          rounded-xl
          px-3
          py-3
          "
        />

        <button
          onClick={addSweet}
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          Add Product
        </button>

      </div>

    </div>

    {/* SEARCH */}

    <div className="relative mb-8">

      <span
        className="
        absolute
        left-4
        top-3.5
        text-gray-500
        "
      >
        🔍
      </span>

      <input
        type="text"
        placeholder={`Search ${section}...`}
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
        w-full
        bg-white
        rounded-xl
        border
        px-12
        py-3
        shadow-sm
        "
      />

    </div>

    {/* TABLE HEADER */}

    <div className="
    hidden
    md:grid
    grid-cols-6
    bg-slate-800
    text-white
    p-4
    rounded-xl
    mb-3
    font-semibold
    ">

      <div>Image</div>
      <div>Name</div>
      <div>Price</div>
      <div>Mode</div>
      <div>Description</div>
      <div>Update Image</div>

    </div>

    {/* PRODUCTS */}

    {sweets
      .filter((sweet) =>
        sweet.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      )
      .map((sweet) => (

        <SweetCard
          key={sweet.id}
          sweet={sweet}
          refresh={fetchSweets}
          section={section}
        />

      ))}

  </div>
);
}

function SweetCard({ sweet, refresh, section }) {

  const [price, setPrice] = useState(
    sweet.current_price
  );

  const [mode, setMode] = useState(
    sweet.mode
  );

  const [newImage, setNewImage] = useState(null);

  const [description, setDescription] =
  useState(
    sweet.description || ""
  );

  const save = async () => {

    let imageUrl = sweet.image;

    if (newImage) {

      const formData =
        new FormData();

      formData.append(
        "file",
        newImage
      );

      formData.append(
        "upload_preset",
        "Bhanwarilal"
      );

      const cloudinaryRes =
        await fetch(
          "https://api.cloudinary.com/v1_1/drbg3rivw/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

      const cloudinaryData =
        await cloudinaryRes.json();

      imageUrl =
        cloudinaryData.secure_url;
    }

    await fetch(
      `http://localhost:5000/${section}/${sweet.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          current_price: Number(price),
          mode,
          image: imageUrl,
          description,
        }),
      }
    );

    refresh();
  };

  const deleteSweet = async () => {

    const confirmDelete = window.confirm(
      `Delete ${sweet.name}?`
    );

    if (!confirmDelete) return;

    await fetch(
      `http://localhost:5000/${section}/${sweet.id}`,
      {
        method: "DELETE",
      }
    );

    refresh();
  };

  return (
  <div
    className="
    bg-white
    rounded-xl
    shadow-sm
    border
    p-4
    mb-3
    hover:shadow-md
    transition
    "
  >

    <div className="
    grid
    grid-cols-1
    md:grid-cols-6
    gap-4
    items-center
    ">

      {/* IMAGE */}

      <div>

        <img
          loading="lazy"
          src={sweet.image}
          alt={sweet.name}
          className="
          w-16
          h-16
          object-cover
          rounded-xl
          border
          "
        />

      </div>

      {/* NAME */}

      <div>

        <h2 className="font-bold text-lg">
          {sweet.name}
        </h2>

        <p className="text-sm text-gray-500">
          Original ₹{sweet.original_price}
        </p>

      </div>

      {/* PRICE */}

      <div>

        <input
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="
          border
          rounded-lg
          px-3
          py-2
          w-full
          "
        />

      </div>

      {/* MODE */}

      <div>

        <select
          value={mode}
          onChange={(e) =>
            setMode(e.target.value)
          }
          className="
          border
          rounded-lg
          px-3
          py-2
          w-full
          "
        >
          <option value="price">
            Price Change
          </option>

          <option value="discount">
            Discount
          </option>
        </select>

      </div>

      <div>

  <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        className="
        border
        rounded-lg
        px-3
        py-2
        w-full
        "
      />

    </div>

      {/* IMAGE CHANGE */}

      <div>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setNewImage(
              e.target.files[0]
            )
          }
          className="
          border
          rounded-lg
          p-2
          w-full
          "
        />

      </div>

      {/* ACTIONS */}

      <div
        className="
        flex
        gap-2
        flex-wrap
        "
      >

        <button
          onClick={save}
          className="
          bg-green-600
          hover:bg-green-700
          text-white
          px-4
          py-2
          rounded-lg
          "
        >
          Save
        </button>

        <button
          onClick={deleteSweet}
          className="
          bg-red-600
          hover:bg-red-700
          text-white
          px-4
          py-2
          rounded-lg
          "
        >
          Delete
        </button>

      </div>

    </div>

  </div>
);
}

export default Dashboard;