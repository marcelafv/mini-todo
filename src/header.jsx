import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";
import NewItem from "./newItem";

function Header({filter, addItem, setFilter}) {
    const [adding, setAdding] = React.useState(false);

    const selectOverdueFilter = () => setFilter({ ...filter, overdueOnly: true });
    const unSelectOverdueFilter = () => setFilter({ ...filter, overdueOnly: false });
    const selectCompleteFilter = () => setFilter({ ...filter, overdueOnly: true });
    const unSelectCompleteFilter = () => setFilter({ ...filter, overdueOnly: false });

    const addNewItem = item => {
        setAdding(false);
        addItem(item);
    };

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand">
                    Minimalist Todo List
                </span>
                <div style={{ flexDirection: "inherit", display: "flex", alignItems: "center" }}>
                    {!adding && (
                        <button type="button" className="btn btn-link" onClick={() => setAdding(true)}>
                            Add item
                        </button>
                    )}
                
                    <Checkbox
                        label="Overdue items only" selected={filter.overdueOnly}
                        select={() => setFilter({...filter, overdueOnly: true})}
                        unSelect={() => setFilter({...filter, overdueOnly: false})}
                    />
                    <Checkbox
                        label="Include complete items" selected={filter.includeComplete}
                        select={() => setFilter({...filter, includeComplete: true})}
                        unSelect={() => setFilter({...filter, includeComplete: false})}
                    />
                </div>
            </nav>
            {adding && <NewItem cancel={() => setAdding(false)} add={addNewItem} />}
        </header>
    );
}

Header.propTypes = {
    addItem: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Header;
