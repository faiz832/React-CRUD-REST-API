import { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // data per halaman

  // Fetch data API
  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadPost();
  }, []);

  // Filtering
  const filteredPosts = posts.filter((post) => {
    if (filter === "all") return true;
    return filter === "even" ? post.id % 2 === 0 : post.id % 2 !== 0;
  });

  // Searching
  const searchedPosts = filteredPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

  // Sorting
  const sortedPosts = [...searchedPosts].sort((a, b) => {
    if (sort === "asc") return a.title.localeCompare(b.title);
    return b.title.localeCompare(a.title);
  });

  // Pagination
  const startIndex = (page - 1) * limit;
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(sortedPosts.length / limit);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {/* Search */}
      <input type="text" placeholder="Search by title..." value={search} onChange={(e) => setSearch(e.target.value)} className="border px-2 py-1 mb-3 w-full" />

      {/* Filter */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border px-2 py-1 mr-2">
        <option value="all">All</option>
        <option value="even">Even ID</option>
        <option value="odd">Odd ID</option>
      </select>

      {/* Sorting */}
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="border px-2 py-1">
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>

      {/* List */}
      <ul className="mt-4 space-y-2">
        {paginatedPosts.map((post) => (
          <li key={post.id} className="border p-3 rounded">
            <strong>{post.id}. </strong>
            {post.title}
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="px-3 py-1 border rounded disabled:opacity-50">
          Prev
        </button>
        <span className="px-3 py-1">
          Page {page} of {totalPages}
        </span>
        <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)} className="px-3 py-1 border rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
}
