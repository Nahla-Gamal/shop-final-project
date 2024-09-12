import "./SellingPoints.css";
import QualityIcon from "../../assets/images/Vector-1.png";
import ProtectionIcon from "../../assets/images/Vector-2.png";
import ShippingIcon from "../../assets/images/Vector-3.png";
import SupportIcon from "../../assets/images/Vector-4.png";

function SellingPoints() {
  const arrayOfObject = [
    {
      IconPic: QualityIcon,
      firstDetail: "High Quality",
      secondDetail: "crafted from top materials",
      uniqueID: 1,
    },
    {
      IconPic: ProtectionIcon,
      firstDetail: "Warranty Protection",
      secondDetail: "Over 2 years",
      uniqueID: 2,
    },
    {
      IconPic: ShippingIcon,
      firstDetail: "Free Shipping",
      secondDetail: "Order over 150 $",
      uniqueID: 3,
    },
    {
      IconPic: SupportIcon,
      firstDetail: "24 / 7 Support",
      secondDetail: "Dedicated support",
      uniqueID: 4,
    },
  ];
  return (
    <div className="sellingPoint-background">
      <div className="sellingPoint-wrapper section">
        {arrayOfObject.map((sellingpointElement) => {
          return (
            <div key={sellingpointElement.uniqueID} className="selling-point">
              <img
                className="sellingPoint-img"
                src={sellingpointElement.IconPic}
              />
              <div className="sellingPoint-details">
                <label className="details-1">
                  {sellingpointElement.firstDetail}
                </label>
                <label className="details-2">
                  {sellingpointElement.secondDetail}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SellingPoints;
