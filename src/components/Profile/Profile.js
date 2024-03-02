import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../Profile/Profile";

const Profile = ({ onCreateModal, cards, onSelectCard, onAddItem }) => {
    return (
      <div className="profile__content">
        <SideBar />
        <div className="profile__items">
          <h3 className="profile__items-your">Your Items</h3>
          <button
            className="profile_profile__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add New
          </button>
        </div>
        <ClothesSection items={cards} onSelectCard={onSelectCard} />
      </div>
    );
  };

export default Profile;
