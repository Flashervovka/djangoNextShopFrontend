import './styles.css';

export const BasePage = () => {
  return (
    <div className="main_layout">
      <header className="layout_header">
        <span className="h-[10px] text-lg font-medium">text in header</span>
      </header>

      <article className="layout_article">
        <h2 className="mb-4 text-3xl leading-tight font-bold">Article Title Here</h2>
        <p className="text-base leading-relaxed text-gray-300 md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quasi minima accusamus
          magnam assumenda exercitationem nulla harum repellendus sed hic, nihil voluptas ipsa
          praesentium dolores at doloribus fugit obcaecati perferendis porro? Dolore vero ducimus
          esse, eaque culpa inventore doloremque minus deleniti fugit, facere ipsa quam, aut
          quibusdam itaque? Consequatur iste, doloremque ut pariatur incidunt libero quo quia sed,
          cum quae impedit a autem unde dolor alias possimus itaque nulla? Iste necessitatibus
          expedita officia, omnis excepturi ipsum corporis libero eius et corrupti accusamus
          perspiciatis amet exercitationem maiores impedit dolorem, possimus a distinctio? Ex
          adipisci nostrum iste ipsa enim modi in praesentium?
        </p>
      </article>

      <aside className="layout_sidebar">
        <span className="text-xl font-semibold">Bar here</span>
      </aside>

      <footer className="layout_footer">
        <span className="text-xl font-semibold">Footer item here</span>
      </footer>
    </div>
  );
};
