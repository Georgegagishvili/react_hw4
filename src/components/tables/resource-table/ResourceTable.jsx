function ResourceTable({ resources }) {
  return (
    <div>
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
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
              <td>{resource.color}</td>
              <td>{resource.pantone_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResourceTable;
