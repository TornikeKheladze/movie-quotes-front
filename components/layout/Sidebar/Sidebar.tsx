import { Modal, ProfileInfo } from "components";
import { useSidebar } from "./useSidebar";

const Sidebar = () => {
  const { back, query } = useSidebar();
  return (
    <div>
      <div className="xl:hidden block">
        {query.sidebar && (
          <Modal closeModal={back}>
            <ProfileInfo />
          </Modal>
        )}
      </div>
      <div className="hidden 2xl:block fixed left-0 top-20">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Sidebar;
