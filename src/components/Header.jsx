export default function Header({ search, setSearch, dark, setDark, markAll }) {
  return (
    <>
      <h2 className="title">TODO LIST</h2>
      <div className="search-row">
        <input
          placeholder="Search note..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" onClick={markAll}>
          ALL
        </button>
        <button className="icon-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </>
  );
}
