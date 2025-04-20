import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, "...", totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages;
    };

    const handlePageClick = (page) => {
        if (page === "...") return;
        onPageChange(page);
    };

    return (
        <div style={{ display: "flex", gap: "8px", alignItems: "center", margin: "40px 0", justifyContent: "center" }}>
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                style={{
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    backgroundColor: currentPage === 1 ? "#f1f1f1" : "white",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer"
                }}
            >
                &lt;
            </button>

            {generatePageNumbers()?.map((page, idx) => (
                <button
                    key={idx}
                    onClick={() => handlePageClick(page)}
                    style={{
                        padding: "6px 12px",
                        backgroundColor: page === currentPage ? "#e0edff" : "white",
                        border: page === currentPage ? "2px solid #007bff" : "1px solid #ccc",
                        color: page === currentPage ? "#007bff" : "#333",
                        borderRadius: "6px",
                        cursor: page === "..." ? "default" : "pointer"
                    }}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                style={{
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    backgroundColor: currentPage === totalPages ? "#f1f1f1" : "white",
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer"
                }}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
