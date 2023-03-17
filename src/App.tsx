import Button, { ButtonSize, ButtonType } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Small
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
        href="https://www.baidu.com"
      >
        Link
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>
        Disabled
      </Button>
    </div>
  );
}

export default App;
