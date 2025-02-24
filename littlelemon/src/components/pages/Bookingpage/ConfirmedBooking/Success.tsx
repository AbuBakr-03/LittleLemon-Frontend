import Header from "../../../HeaderAndNavbar/Header";
const Success: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div className="grid justify-items-center">
          <div className="my-12 grid h-48 w-1/2 place-items-center rounded-lg border-2 border-slate-300 px-6 py-4 shadow lg:h-72">
            <h1 className="text-center font-markazi text-4xl">
              Thank you for booking!
            </h1>
            <p className="text-center">
              You will recieve a confirmation email with booking details!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Success;
