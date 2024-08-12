import "./App.css";
import FormWithReactHook from "./components/FormWithReactHooks";
import ReactHookFormWithZod from "./components/ReactHookWithZod";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>ß
      <SimpleForm />
      <FormWithReactHook />
      <ReactHookFormWithZod />
    </div>
  );
}

export default App;
