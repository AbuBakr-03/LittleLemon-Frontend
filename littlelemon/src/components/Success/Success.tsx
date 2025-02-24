const Success: React.FC = () => {
  return (
    <div className="grid justify-items-center">
      <div className="my-12 w-1/2 gap-4 rounded-lg border-2 border-slate-300 px-6 py-4 shadow">
        <h1 className="text-center font-markazi text-4xl">
          Thank you for booking!
        </h1>
        <p className="text-center">
          You will recieve a confirmation email with booking details!
        </p>
      </div>
    </div>
  );
};
export default Success;
