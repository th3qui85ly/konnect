import React from 'react';
import './App.css';
import JoinForm from './Components/JoinForm';
import Conference from './Components/Conference';
import Footer from './Components/Footer';
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions(); 
  React.useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);
  return (
    <div className="App">
      {isConnected ? (
         <>
         <Conference />
         <Footer />
       </>
      ) : (
        <JoinForm />
      )}
    </div>
  );
}

export default App;
