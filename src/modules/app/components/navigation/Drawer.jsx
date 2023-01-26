import { useMemo } from "react";
import { useSelector } from "react-redux";
import NavigationList from "./List";

export default function NavigationDrawer() {
  const drawer = useSelector((state) => state.drawer.opened);
  const calculateWidth = useMemo(() => {
    return drawer ? "w-[240px]" : "w-0";
  }, [drawer]);
  const contentVisible = useMemo(() => {
    return drawer ? "" : "-translate-x-[20rem]";
  }, [drawer]);
  return (
    <aside className={`${calculateWidth}  shadow-2xl  pt-3`}>
      <div className={`${contentVisible}`}>
        <h1 className="font-black text-2xl  whitespace-nowrap text-center pb-4">
          app test react
        </h1>
        <hr  className="bg-slate-500 pt-3"/>
        <h3 className="font-semibold text-xl p-4 text-center">menu item</h3>
        <NavigationList />
      </div>
    </aside>
  );
}
