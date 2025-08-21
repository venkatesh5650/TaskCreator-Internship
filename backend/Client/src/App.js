import React from 'react';


React.useEffect(() => { load(); }, [load]);


const onFiltersChange = (f) => {
setFilters(f);
setUseSearch(true);
};


const clearFilters = () => {
setFilters({ title: '', cuisine: '', rating: '', total_time: '', calories: '' });
setUseSearch(false);
};


return (
<div className="container">
<header>
<h1>Recipes</h1>
<div className="controls">
<button onClick={clearFilters}>Clear Filters</button>
<label>
Results per page
<select value={limit} onChange={(e) => setLimit(Number(e.target.value))} style={{marginLeft:8}}>
{[15, 20, 25, 30, 40, 50].map(n => <option key={n} value={n}>{n}</option>)}
</select>
</label>
</div>
</header>


<RecipesTable rows={rows} onRowClick={(r) => { setSelected(r); setDrawerOpen(true); }}
filters={filters} onFiltersChange={onFiltersChange}
/>


<div className="pagination">
{!useSearch && (
<>
<span>Page {page} of {Math.max(1, Math.ceil(total / limit))}</span>
<button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
<button onClick={() => setPage((p) => p + 1)} disabled={page >= Math.ceil(total / limit)}>Next</button>
</>
)}
{useSearch && <span className="badge">Search mode ({rows.length} results)</span>}
</div>


<Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} recipe={selected} />
</div>
);
}