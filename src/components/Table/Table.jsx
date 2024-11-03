import React from "react";
import { removeProject } from "../../redux/Project/project-action";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./table.css";
import axiosInstance from "../../util/axiosInstance";
import Spinner from "../Spinner/Spinner";

const Table = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.spinner.isFetching);
  const items = useSelector((state) => state.project.allProjects);

  const handleDelete = async (projectID, category) => {
    dispatch(removeProject(category, projectID));
    try {
      const response = await axiosInstance.post(`/admin/delete/${projectID}`, {
        title: category,
      });
    } catch (error) {
      console.log("an error occured while deleting", error);
    }
  };

  return (
    <>
      {isFetching ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="table-container">
            {Object.keys(items).map((category) => (
              <div key={category}>
                <h2 className="table-header">{category.toUpperCase()}</h2>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project Title</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items[category].map((item, index) => (
                      <tr key={item.detail}>
                        <td>{index + 1}</td>
                        <td>{item.details}</td>
                        <td>
                          <img
                            className="table-image"
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td>
                          <Link to={`/admin/edit/${item.id}`} state={{ item }}>
                            <button className="button-edit">Edit</button>
                          </Link>
                          <button
                            className="button-delete"
                            onClick={() => handleDelete(item.id, category)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Table;
