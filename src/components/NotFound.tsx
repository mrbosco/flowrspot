import { useEffect, useRef } from 'react';
import toast, { Toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const toastShown = useRef(false);

  useEffect(() => {
    if (!toastShown.current) {
      toast.error('This route is currently unavailable', {
        duration: 2000,
      } as Partial<Toast>);
      toastShown.current = true;
    }
    navigate('/');
  }, [navigate]);

  return null;
};

export default NotFound;
