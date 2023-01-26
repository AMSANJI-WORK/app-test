import NavigationItem from "./Item";
import { AppMenuItems } from "../../constants/menu";
function NavigationItemGroup({ item }) {
  return (
    <>
      <NavigationItem target={item.route} title={item.title} icon={item.icon} />
      {item.children.map((child) => (
        <NavigationItem
          key={child.title}
          target={child.route}
          title={child.title}
          icon={child.icon}
          isnested={true}
        />
      ))}
    </>
  );
}
export default function NavigationList() {
  return AppMenuItems.map((item) =>
    !item.children ? (
      <NavigationItem
        key={item.title}
        target={item.route}
        title={item.title}
        icon={item.icon}
      />
    ) : (
      <NavigationItemGroup key={item.title} item={item} />
    )
  );
}
