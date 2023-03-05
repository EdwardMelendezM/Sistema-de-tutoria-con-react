import Sidebar from "../dashboard/Sidebar";
import Panel from "../panel/Panel";
export default function LayoutComputo({ children }) {
  return (
    <div className="containerSystem">
      <Sidebar />
      <Panel children={children} />
    </div>
  );
}
