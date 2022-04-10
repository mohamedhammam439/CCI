import { useState } from "react";

const Sidebar = () => {
  const [sidebar, setsidebar] = useState(false);
  const showsidebar = () => setsidebar(!sidebar);

  return (
    <div >
     
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <h3>الارشادات</h3>
        <div className="side-btn" onClick={showsidebar}>
        +</div>
      </div>
    </div>
  );
};

export default Sidebar;
