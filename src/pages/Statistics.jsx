
import Bottompart from '../components/BottomPart';
import CommentBox  from "../components/CommentBox";

import Map from "../components/MapBar";
import LeftPanel from "../components/LeftPanel";


const Statistics = () => {
  return (
    <LeftPanel>
        <CommentBox />
        <Map/>
        <Bottompart/>
    </LeftPanel>
  );
};

export default Statistics