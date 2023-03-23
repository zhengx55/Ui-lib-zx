import Button, { ButtonSize, ButtonType } from "./components/Button";
import Menu from "./components/Menu";
import Item from "./components/Menu/Item";

function App() {
  return (
    <div className="App">
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
      <Menu defaultIndex={0} mode="vertical">
        <Item>cool link</Item>
        <Item>cool link2</Item>
        <Item>cool link3</Item>
      </Menu>
    </div>
  );
}

export default App;
