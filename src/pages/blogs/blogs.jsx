import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAppUrl } from '../../utils';
import { routesPath, blogsApiUrl } from '../../constants';

const Blogs = () => {
  const { id } = useParams();
  const [url, setUrl] = useState('')

  const navigate = useNavigate();

  let navigated = false;
  useEffect(() => {
    function handleMessage(event) {
      if (event.data?.type === "ROUTE_CHANGE" && event?.data?.blogId && !navigated) {
        navigate(`${routesPath.blogs}/${event?.data?.blogId}`);
        navigated = true;
      }
    }

    window.addEventListener("message", handleMessage);
    const url = id ? `${blogsApiUrl}/${id}` : blogsApiUrl;
    setUrl(url);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return url ? (
    <div className='w-100' style={{ height: '160vh' }}>
      <iframe src={`${url}?externalUrl=${getAppUrl()}${routesPath.blogs}`} className='w-100 h-100' title="blogs" allow="clipboard-write" allowFullScreen />
    </div>
  ) : null;
}

export default Blogs;
