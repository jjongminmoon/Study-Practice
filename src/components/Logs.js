const Logs = (props) => {
  return (
    <>
      <h2>기록</h2>
      <ol className="record">
        {props.logs.map((log, index) => (
          <li key={`${log}_${index}`}>{log}</li>
        ))}
      </ol>
    </>
  );
};

export default Logs;
