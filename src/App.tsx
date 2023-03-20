import Button, { ButtonSize, ButtonType } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
        href="https://www.baidu.com"
      >
        Link
      </Button>
      <Button href="https://www.baidu.com" btnType={ButtonType.Link} disabled>
        Disabled Link
      </Button>
    </div>
  );
}

export default App;
