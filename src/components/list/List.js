import React from "react";
import "./list.css";

const List = props => {
  const { listItems, deleteMarker, clearMarkers } = props;

  return (
    <aside className="aside">
      <h3>Markers list</h3>
      <hr />

      <ul className="markers-list">
        {listItems.map((listItem, index) => {
          return (
            <li className="markers-list__item" key={index}>
              Marker: {`${listItem.longitude.toFixed(6)} / ${listItem.latitude.toFixed(6)}`}
              <button onClick={() => deleteMarker(index)} className="button button--delete">Delete marker</button>
            </li>
          );
        })}

        {listItems.length ? (
          <button onClick={clearMarkers} className="button u-full-width">Clear markers</button>
        ) : null}
      </ul>

    </aside>
  );
};

export default List;
