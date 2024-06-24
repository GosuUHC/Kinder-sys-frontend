const ChildData = ({ data }) => {

  console.log("data");
  console.log(data);
  
  return (
    <>
      {data.lastName} {data.firstName} {data.middleName}
    </>
  );
};

export default ChildData;
