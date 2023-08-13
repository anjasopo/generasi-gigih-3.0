const Product = () => {
  return (
    <>
      <div className="mx-auto overflow-hidden duration-300 transform bg-white rounded-lg shadow-md mt-11 w-80 dark:bg-slate-800 hover:scale-105 hover:shadow-lg">
        <img
          className="object-cover object-center w-full h-48"
          src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Thumbnail Product Image"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Product Name
          </h2>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
            Product description goes here.
          </p>
          <div className="items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              $20.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
