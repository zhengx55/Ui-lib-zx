import { library } from "@fortawesome/fontawesome-svg-core";
import Button, { ButtonSize, ButtonType } from "./components/Button";
import Menu from "./components/Menu";
import Item from "./components/Menu/Item";
import SubMenu from "./components/Menu/subMenu";
import { faCoffee, fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon/Icon";
library.add(fas);

function App() {
  return (
    <div className="App">
      <Icon theme="primary" icon={faCoffee} size="lg" />
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
      <Menu defaultIndex={"0"}>
        <Item>cool link</Item>
        <SubMenu title="dropdown">
          <Item>cool link1-1</Item>
          <Item>cool link1-2</Item>
        </SubMenu>
        <Item>cool link2</Item>
        <Item>cool link3</Item>
      </Menu>
      <Menu defaultIndex={"1"} mode="vertical" defualtOpenSubMenus={["2"]}>
        <Item>cool link</Item>
        <Item>cool link2</Item>
        <SubMenu title="dropdown">
          <Item>cool link1-1</Item>
          <Item>cool link1-2</Item>
        </SubMenu>
        <Item>cool link3</Item>
      </Menu>
    </div>
  );
}

export default App;
