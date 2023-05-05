import classNames from "classnames";
import { MenuContext } from ".";
import {
  Children,
  FC,
  FunctionComponentElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import React from "react";
import { MenuItemProps } from "./Item";
import Icon from "../Icon/Icon";

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  children?: ReactNode;
}

const SubMenu: FC<SubMenuProps> = ({ index, title, className, children }) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defualtOpenSubMenus as Array<string>;
  const [isOpen, setIsOpen] = useState(
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false
  );
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": isOpen,
    "is-vertical": context.mode === "vertical",
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  let timer: any;
  const handleMouseOver = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setIsOpen(toggle);
    }, 300);
  };

  const clickEvent =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};

  const hoverEvent =
    context.mode === "horizontal"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouseOver(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouseOver(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    const subMenuClasses = classNames("zx-submenu", {
      "menu-opened": isOpen,
    });
    const childrenComponent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index} -${i}`,
        });
      } else {
        console.error("unknown child type");
      }
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
