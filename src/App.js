import React from "react";
import "./App.css";
import { getAllOrder } from "./Services";
import { TableHeaders, TableColumns } from "./Constant";
import { CreateOrderModal, OrderFilter, Table } from "./Components";
import { filterOrderBySize, filterOrderByStatus } from "./Utils";

function App() {
  const [orders, setOrders] = React.useState([]);
  const [error, setError] = React.useState();
  const [filter, setFilter] = React.useState({
    kichCo: "All",
    trangThai: "All",
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const getOrders = async () => {
    try {
      const data = await getAllOrder();
      setOrders(data);
    } catch (error) {
      setError(error);
    }
  };

  const submitHandler = (filter) => {
    setFilter(filter);
  };

  React.useEffect(() => getOrders(), []);
  const filteredOrder = React.useMemo(
    () =>
      filterOrderByStatus(
        filterOrderBySize(orders, filter.kichCo),
        filter.trangThai,
      ),
    [orders, filter],
  );

  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      {isModalOpen ? (
        <CreateOrderModal closeModal={() => setIsModalOpen(false)} />
      ) : (
        <>
          <OrderFilter onSubmit={submitHandler} />
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Create New Order
          </button>
          <Table
            headers={TableHeaders}
            columns={TableColumns}
            data={filteredOrder}
          />
        </>
      )}
    </div>
  );
}

export default App;
