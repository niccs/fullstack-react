import React, { useState, useContext } from "react";
import "./PlaceItem.css";
import Card from "../../common/components/uiElements/Card";
import Button from "../../common/components/formelements/Button";
import Modal from "./../../common/components/uiElements/Modal";
import Map from "./../../common/components/uiElements/Map";
import { AuthContext } from "../../common/context/auth-context";

const PlaceItem = ({ place }) => {
  const authContext = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);

  const [confirmDeletion, setConfirmDeletion] = useState(false);

  const closeMap = () => {
    setShowMap(false);
  };

  const openMap = () => {
    setShowMap(true);
  };

  const showDeletionHandler = () => {
    setConfirmDeletion(true);
  };
  const confirmDeletionHandler = () => {
    console.log("more action to be performed");
    setConfirmDeletion(false);
  };

  const cancelDeletionHandler = () => {
    setConfirmDeletion(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={place.address}
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMap}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map zoom={16} center={place.location} />
        </div>
      </Modal>

      <Modal
        show={confirmDeletion}
        onCancel={cancelDeletionHandler}
        header="Are you sure you want to delete"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button danger onClick={confirmDeletionHandler}>
              OK
            </Button>
            <Button onClick={cancelDeletionHandler}>CANCEL</Button>
          </React.Fragment>
        }
      >
        <p>You are going to delete the place</p>
      </Modal>

      <li className="place-item">
        <Card>
          <div className="place-item__image">
            <img src={place.imageURL} alt={place.placeName} />
          </div>
          <div className="place-item__info">
            <h2 className="place-item__name">{place.placeName}</h2>
            <h3>{place.address}</h3>
            <p>{place.placeDesc}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMap}>
              {console.log("nixxx", authContext)} VIEW ON MAP
            </Button>

            {authContext.isLoggedIn && (
              <React.Fragment>
                <Button to={`/places/${place.placeId}`}>EDIT</Button>
                <Button danger onClick={showDeletionHandler}>
                  DELETE
                </Button>
              </React.Fragment>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
