import { useEffect, useState } from 'react';
import axios from 'axios';

const useRequest = ({
  service,
  serviceArg,
  initialData,
  dependencies = [],
}) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCanceled = false;
    service(serviceArg)
    .then(
      (result) => {
        console.log(123)
        if (!isCanceled) {
          setData(result.data);
        }
      },
      (err) => {
          console.log(456)
          if (!isCanceled) {
            setError('something went wrong')
          }
        },
      )
      .finally(
        () =>
          !isCanceled &&
          setTimeout(() => {
            setIsLoading(false);
          }, 1000),
      );

    return () => {
      isCanceled = true;
    };
  }, dependencies);

  return [data, isLoading, error];
};

export default useRequest;
