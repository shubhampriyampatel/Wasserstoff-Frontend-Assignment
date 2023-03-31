import Map from "../components/MapBar";
import LeftPanel from "../components/LeftPanel";
import Overlay from '../components/Overlay'
import Bottompart from '../components/BottomPart';

export const Overview = () => {
  return (
    <LeftPanel>
      <Map/>
      <Overlay />
      <Bottompart/>
    </LeftPanel>
  );
};
