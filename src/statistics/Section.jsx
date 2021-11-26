function Section({ title, children }) {
  return (
    <section className="test2 statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
