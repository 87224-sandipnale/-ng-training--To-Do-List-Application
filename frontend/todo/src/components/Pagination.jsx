export default function Pagination({ page, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        className="px-3 py-1 bg-gray-300 rounded"
        disabled={page === 0}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`px-3 py-1 rounded ${
            num === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onPageChange(num)}
        >
          {num + 1}
        </button>
      ))}

      <button
        className="px-3 py-1 bg-gray-300 rounded"
        disabled={page >= totalPages - 1}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
