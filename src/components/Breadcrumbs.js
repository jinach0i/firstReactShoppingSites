import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Breadcrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/main">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/collections">Collections</Breadcrumb.Item>
    </Breadcrumb>
  );
}
