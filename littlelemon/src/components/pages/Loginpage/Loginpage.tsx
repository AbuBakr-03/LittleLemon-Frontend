import Header from "../../HeaderAndNavbar/Header";

const Loginpage: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main className={`grid justify-items-center`}>
        <form
          className={`my-12 grid w-1/3 gap-2 rounded-xl border-2 border-slate-300 px-6 py-4 font-markazi text-xl`}
          action=""
        >
          <h1 className={`font-markazi text-3xl`}>Login</h1>
          <label htmlFor="name">Name:</label>
          <input
            className={`rounded border-2 border-slate-300 py-1 pl-2`}
            type="text"
            name="name"
          />
          <label htmlFor="email">Email:</label>
          <input
            className={`rounded border-2 border-slate-300 py-1 pl-2`}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className={`rounded border-2 border-slate-300 py-1 pl-2`}
            type="password"
            name="password"
            id="password"
          />
          <button
            className={`my-2 justify-self-center rounded-lg border-2 border-black bg-black px-6 py-1 text-white`}
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};
export default Loginpage;
