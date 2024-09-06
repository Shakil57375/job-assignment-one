import Gallery from "./Components/Gallery";
import Tabs from "./Components/Tabs"
const App = () => {
  return (
    <div className="flex  justify-between ">
      <div></div>
      <div className="relative top-6 right-4 flex flex-col gap-6 ">
        <div className="bg-[#363C43] rounded-[19px] p-6 shadow-lg w-[720px] md:w-[770px] ">
          <Tabs />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default App;
