import Tabs from "./components/Tabs";
const App = () => {
  return (
    <div className="min-h-screen flex items-start justify-between bg-gray-100">
      <div></div>
      <div className="bg-[#363C43] rounded-[19px] p-6 shadow-lg w-[720px] md:w-[770px] relative top-24 right-4 ">
        <Tabs />
      </div>
    </div>
  );
};

export default App;
