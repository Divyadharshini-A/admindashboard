import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Complaints</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqGtkxBz0BzoLOlqhTQfd1cZubEp9QpGn-w&usqp=CAU" alt="" className="productInfoImg" />
                  <span className="productName">Total Medicine Available</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Category</span>
                      <span className="productInfoValue">10+ lakh</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Sales:</span>
                      <span className="productInfoValue">200+ lakh</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Availability of Storage </span>
                      <span className="productInfoValue">Yes</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="COVID SHIELD" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh35mUzn8j4Ut0VJV92b4L2CfAzDnWLLAxjA&usqp=CAU" alt="" className="productUploadImg" />
                      <label for="file">
                          <PublishIcon/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}