import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggledDrawer } from "../store/drawer";
export default function Navbar() {
  const dispatch = useDispatch();
  const drawer = useSelector((state) => state.drawer.opened);
  const navbarWidth = useMemo(() => {
    return drawer ? "w-[calc(100%_-_240px)]" : "w-screen";
  }, [drawer]);
  return (
    <header
      className={`absolute flex flex-nowrap ${navbarWidth}  shadow-xl right-0 p-4`}
    >
      <button
        className="bg-indigo-500 transition-shadow  hover:shadow-lg text-white py-2 px-3 shadow-indigo-500/50 rounded-lg font-bold"
        onClick={() => dispatch(toggledDrawer(1))}
      >
        toggle
      </button>
    </header>
  );
}
