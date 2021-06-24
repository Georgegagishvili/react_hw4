import propTypes from "prop-types";

import styles from "./resource.module.css";

function TD({ background, children }) {
  return (
    <td style={{ backgroundColor: `${background}`, color: "white" }}>
      {children}
    </td>
  );
}
function ResourceTable({ resources }) {
  return (
    <div>
      <table className={styles.table}>
        <thead className="">
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">year</th>
            <th scope="col">color</th>
            <th scope="col">Pantone Value</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource.id}>
              <th scope="row">{resource.id}</th>
              <td>{resource.name}</td>
              <td>{resource.year}</td>
              <TD background={resource.color}>{resource.color}</TD>
              <td>{resource.pantone_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ResourceTable.propTypes = {
  resource: propTypes.object,
};

export default ResourceTable;
