import "./widgetLg.css";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Trans Id</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8P6POnmXE2YJlFMqlJ-b2F_t8bdqTq4CAb-mQWDeI813MCCXefNOg9RjN2AQZwPzy3Y&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgId">8f3A5d4f3520942D4fe4D9D42b68E1a39B2592A</td>
          <td className="widgetLgAmount">$142.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw7MINaKUDAkbfwxqeq_HtIr9oSw2DkSbl8Z6FyYphktjktah1mX8moLYa97pfGJy_u4&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Preeti Singh</span>
          </td>
          <td className="widgetLgDate">4 Aug 2022</td>
          <td className="widgetLgId">97DF09185eFA55A3eb91c6679e808d6dAc810876</td>
          <td className="widgetLgAmount">$192.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.fxtamil.com/storage/2021/05/avatar-male.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rishabh Hegde</span>
          </td>
          <td className="widgetLgDate">10 Oct 2022</td>
          <td className="widgetLgId">69304d5181fF061666391Ca08F02658ce5c4bf01</td>
          <td className="widgetLgAmount">$200.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Akshay </span>
          </td>
          <td className="widgetLgDate">21 Oct 2022</td>
          <td className="widgetLgId">8D86d6C22bD424a8a4CF153f8C23Bf85416c2F53</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
