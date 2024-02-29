import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar";

const Profile = ({ onSelectCard, handleCreateModal, clothingItems }) => {
    return (
        <div className="profile">
            <SideBar />
            <ClothesSection
                clothingItems={clothingItems}
                onSelectCard={onSelectCard}
                handleCreateModal={handleCreateModal}
            />
        </div>
    );
};

export default Profile;
