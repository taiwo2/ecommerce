import { useAdminAuth } from "../customHooks";

const WithAdmin = props => useAdminAuth(props) && props.children;

export default WithAdmin