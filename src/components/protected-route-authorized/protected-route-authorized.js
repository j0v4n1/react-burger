import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const ProtectedRouteAuthorized = ({element}) => {

  const accessToken = useSelector(store => store.profile.accessToken);
  const navigate = useNavigate();

  const init = () => {
    if (accessToken) {
      navigate('/');
    }
  };

  useEffect(() => {
    init();
  }, [accessToken]);

  return element

}

export default ProtectedRouteAuthorized;
