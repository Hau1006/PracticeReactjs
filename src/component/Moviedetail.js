import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = ({ url, showDelay }) => {
  const [state, setState] = useState({ loaded: false, detail: null });
  const API_URL = showDelay ? `${url}?mocky-delay=3s` : url;

  useEffect(() => {
    /**
     * Khởi tạo CancelToken
     */
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    /**
     * Khởi tạo AbortController
     */
    const controller = new AbortController();
    setState({ loaded: false, detail: null });
    /**
     * Thêm option `cancelToken` vào axios request để có thể huỷ request này sau đó.
     */
    axios
      .get(API_URL, { signal: controller.signal })
      .then((result) => {
        setState({ loaded: true, detail: result.data });
      })
      .catch((error) => {
        // if (axios.isCancel(error)) {
        if (controller.signal.aborted) {
          console.log("request cancelled!");
        } else {
          throw error;
        }
      });

    /**
     * Hàm trả về (cleanup) trong useEffect sẽ được gọi khi component rerender.
     * Tương ứng với lifecycle componentWillUnmount trong Class Components.
     */
    return function cleanup() {
      console.log("1");
      //   source.cancel();
      controller.abort();
    };
  }, [url]);

  return (
    <div>
      {state.loaded ? (
        <p>{state.detail.description}</p>
      ) : (
        <p>Loading description...</p>
      )}
    </div>
  );
};
export default MovieDetail;
