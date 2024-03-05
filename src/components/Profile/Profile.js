import "./Profile.css";
import SideBar from "../Profile/Profile";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ clothingItems, onCreateModal, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
