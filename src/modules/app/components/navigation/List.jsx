import { useMemo } from "react";
import { useSelector } from "react-redux";
import NavigationItem from "./Item";

export default function Navigation() {
  const drawer = useSelector((state) => state.drawer.opened);
  const calculateWidth = useMemo(() => {
    return drawer ? "w-[240px]" : "w-0";
  }, [drawer]);
  const contentVisible = useMemo(() => {
    return drawer ? "" : "-translate-x-[20rem]";
  }, [drawer]);
  return (
    <aside className={`${calculateWidth}  shadow-2xl  p-3`}>
      <div className={`${contentVisible}`}>
        <h1 className="font-black text-2xl whitespace-nowrap text-center">
          app test react
        </h1>
        <NavigationItem />
      </div>
    </aside>
  );
}
