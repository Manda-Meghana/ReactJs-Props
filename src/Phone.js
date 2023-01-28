const Phone = (props) => {
  const { img, Company, Price } = props;

  return (
    <article className="phone">
      <img src={img} alt={Company} />
      <h2>{Company}</h2>

      <h4>{Price} </h4>
    </article>
  );
};

export default Phone;
