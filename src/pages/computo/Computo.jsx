import Communication from "../../components/dashboard/comunication/Communication";
import Contentdash from "../../components/dashboard/content/Contentdash";
import Userheader from "../../components/dashboard/header/userHeader";
import Mini from "../../components/dashboard/minis/Mini";
import "./computo.css";
const Computo = () => {
  return (
    <div className="container_computo">
      <Userheader />
      <div className="container_computo_minis">
        <Mini />
        <Mini
          title="Conocidos"
          text="10"
          icon={<ion-icon name="people-outline"></ion-icon>}
        />
        <Mini
          title="Ultima reunion"
          text="Ayer"
          icon={<ion-icon name="newspaper-outline"></ion-icon>}
        />
        <Mini />
      </div>
      <div className="container_computo_dash">
        <Contentdash />
        <Communication />
      </div>
    </div>
  );
};

export default Computo;
