import CardPostagem from "../CardPostagem";

function ListaPostagens() {
  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div
            className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-4"
          >
            <CardPostagem />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPostagens;
