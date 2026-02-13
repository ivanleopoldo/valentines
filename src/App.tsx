import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 items-center h-full justify-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold cherry-bomb">
          happy valentine's my love!
        </h1>
        <h3>click the flowers!!</h3>
      </div>
      <button onClick={() => navigate("/question")} className="md:w-1/3 w-1/2">
        <img
          src={"/flowers.png"}
          alt="Flowers"
          className="motion-rotate-loop-2"
        />
      </button>
      <h1 className="text-4xl">flowers for u {">/<"}</h1>
    </div>
  );
}

export default App;
