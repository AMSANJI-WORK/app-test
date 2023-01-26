import IconHome from "../components/icons/Home";

export const AppMenuItems = Object.freeze([
  {
    route: "/home",
    title: "home",
    icon: <IconHome />,
  },
  {
    route: "/",
    title: "dashboard",
    icon: <IconHome />,
    children: [{ route: "/", title: "nested", icon: <IconHome /> }],
  },
]);
