import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import HandbleEvent from './HanbleEvent/HandbleEvent';
import DataBidingClassComponent from './DataBinding/DataBidingClassComponent';
import DemoState from './DemoState/DemoState';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout />
      <DataBinding />
      <DataBidingClassComponent/>
      <HandbleEvent /> */}
      <DemoState />
    </div>
  );
}

export default App;
