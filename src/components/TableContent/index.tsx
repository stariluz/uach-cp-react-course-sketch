function TableContent() {
  const getContent = async () => {
    const res = await fetch('https://api.datos.gob.mx/v1/api-catalog',);
    const data = await res.json();
    console.log(data);
  }
  getContent();
  return (
    <div>
      <p>Table Content</p>
    </div>
  );
};

export default TableContent;