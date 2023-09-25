import { Button } from "react-bootstrap";
export default function EntranceWrap(props) {
  return (
    <div id="entranceWrap">
      <div className="bg"></div>
      <Button
        variant="info"
        onClick={() => {
          props.navi("/main");
        }}
      >
        Enter
      </Button>
    </div>
  );
}
