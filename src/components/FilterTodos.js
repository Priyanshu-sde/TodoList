import React from "react";

function FilterTodos({ filter, setFilter }) {
    return (
        <div>
            <button onClick={() => setFilter("all")} disabled={filter === "all"}>
                All
            </button>
            <button
                onClick={() => setFilter("completed")}
                disabled={filter === "completed"}
            >
                Completed
            </button>
            <button
                onClick={() => setFilter("incomplete")}
                disabled={filter === "incomplete"}
            >
                Incomplete
            </button>
        </div>
    );
}

export default FilterTodos;